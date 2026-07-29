<?php

declare(strict_types=1);

// JSON応答にPHPの警告文が混ざらないよう、画面出力を抑えてログへ送ります。
ini_set('display_errors', '0');
ini_set('log_errors', '1');
error_reporting(E_ALL);
date_default_timezone_set('Asia/Tokyo');

if (session_status() !== PHP_SESSION_ACTIVE) {
    @session_start();
}

$configPath = __DIR__ . '/mail-config.php';
if (!is_file($configPath)) {
    respondError('メール設定ファイルが見つかりません。', 500);
}

/** @var array<string, string> $config */
$config = require $configPath;

$requiredConfigKeys = ['site_name', 'recipient_name', 'recipient_email', 'from_name', 'from_email'];
foreach ($requiredConfigKeys as $key) {
    if (empty($config[$key]) || !is_string($config[$key])) {
        respondError('メール設定が不足しています。', 500);
    }
}

if (
    $config['recipient_email'] === 'YOUR_EMAIL@example.com' ||
    !filter_var($config['recipient_email'], FILTER_VALIDATE_EMAIL) ||
    !filter_var($config['from_email'], FILTER_VALIDATE_EMAIL)
) {
    respondError('mail-config.php のメールアドレス設定を確認してください。', 500);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respondError('不正なリクエストです。', 405);
}

// 簡易レート制限：同一セッションから10秒以内の連続送信を拒否
$now = time();
$lastSentAt = isset($_SESSION['helmio_form_last_sent_at'])
    ? (int) $_SESSION['helmio_form_last_sent_at']
    : 0;

if ($lastSentAt > 0 && ($now - $lastSentAt) < 10) {
    respondError('連続送信を検知しました。少し時間を置いてからお試しください。', 429);
}

// ボット対策用ハニーポット。通常利用者には非表示。
if (trim((string) ($_POST['website'] ?? '')) !== '') {
    respondSuccess('送信しました。');
}

$formType = trim((string) ($_POST['form_type'] ?? ''));
if (!in_array($formType, ['contact', 'pr_diagnosis'], true)) {
    respondError('フォームの種類を確認できませんでした。', 400);
}

$company = cleanText($_POST['company'] ?? '', 150);
$name    = cleanText($_POST['name'] ?? '', 100);
$email   = cleanEmail($_POST['email'] ?? '');

$errors = [];
if ($company === '') {
    $errors[] = '会社名を入力してください。';
}
if ($name === '') {
    $errors[] = 'お名前を入力してください。';
}
if ($email === '') {
    $errors[] = '正しいメールアドレスを入力してください。';
}

$adminSubject = '';
$adminBody = '';
$userSubject = '';
$userBody = '';

if ($formType === 'contact') {
    $phone    = cleanText($_POST['phone'] ?? '', 50);
    $category = cleanText($_POST['category'] ?? '', 50);
    $message  = cleanMultiline($_POST['message'] ?? '', 5000);
    $privacy  = isset($_POST['privacy']);

    $categoryLabels = [
        'communication' => '企業コミュニケーション支援',
        'casting'       => 'キャスティング',
        'speech'        => 'スピーチ・プレゼンテーション',
        'event'         => '展示会・イベント',
        'pr'            => 'PR支援',
        'video'         => '映像制作',
        'other'         => 'その他',
    ];

    if (!isset($categoryLabels[$category])) {
        $errors[] = 'ご相談内容を選択してください。';
    }
    if ($message === '') {
        $errors[] = 'お問い合わせ内容を入力してください。';
    }
    if (!$privacy) {
        $errors[] = '個人情報の取り扱いへの同意が必要です。';
    }

    $categoryLabel = $categoryLabels[$category] ?? '未選択';
    $adminSubject = '【法人お問い合わせ】' . $company . '／' . $name . '様';
    $adminBody = buildAdminHeader($formType) . "\n"
        . "会社名・団体名：{$company}\n"
        . "お名前：{$name}\n"
        . "メールアドレス：{$email}\n"
        . "電話番号：" . ($phone !== '' ? $phone : '未入力') . "\n"
        . "ご相談内容：{$categoryLabel}\n\n"
        . "お問い合わせ内容\n"
        . "------------------------------\n"
        . $message . "\n";

    $userSubject = '【HÉLMIO】お問い合わせを受け付けました';
    $userBody = "{$name} 様\n\n"
        . "HÉLMIOへお問い合わせいただき、ありがとうございます。\n"
        . "以下の内容で受け付けました。内容を確認後、担当者よりご連絡いたします。\n\n"
        . "会社名・団体名：{$company}\n"
        . "ご相談内容：{$categoryLabel}\n\n"
        . "お問い合わせ内容\n"
        . "------------------------------\n"
        . $message . "\n\n"
        . "※このメールは自動送信です。\n";
} else {
    $issue      = cleanText($_POST['management_issue'] ?? '', 80);
    $otherIssue = cleanMultiline($_POST['other_issue'] ?? '', 1500);

    $issueLabels = [
        'sales'       => '売上・問い合わせを増やしたい',
        'launch'      => '新商品・新規事業の認知を広げたい',
        'authority'   => '業界内での信頼・第一想起を高めたい',
        'recruit'     => '採用応募・人材定着につなげたい',
        'event'       => '展示会・イベントの成果を高めたい',
        'media'       => 'メディア掲載・取材機会を増やしたい',
        'spokesperson'=> '代表者・専門家の発信力を高めたい',
        'message'     => '会社の強み・発信テーマを整理したい',
        'reputation'  => '企業・ブランドの評判リスクに備えたい',
        'other'       => 'その他',
    ];

    if (!isset($issueLabels[$issue])) {
        $errors[] = '経営課題を選択してください。';
    }
    if ($issue === 'other' && $otherIssue === '') {
        $errors[] = 'その他の経営課題を入力してください。';
    }

    $issueLabel = $issueLabels[$issue] ?? '未選択';
    $adminSubject = '【無料PR診断】' . $company . '／' . $name . '様';
    $adminBody = buildAdminHeader($formType) . "\n"
        . "会社名：{$company}\n"
        . "お名前：{$name}\n"
        . "メールアドレス：{$email}\n"
        . "経営課題：{$issueLabel}\n"
        . "その他：" . ($otherIssue !== '' ? "\n{$otherIssue}" : '未入力') . "\n";

    $userSubject = '【HÉLMIO】無料PR診断のお申し込みを受け付けました';
    $userBody = "{$name} 様\n\n"
        . "HÉLMIOの無料PR診断にお申し込みいただき、ありがとうございます。\n"
        . "以下の内容で受け付けました。内容を確認後、担当者よりご連絡いたします。\n\n"
        . "会社名：{$company}\n"
        . "経営課題：{$issueLabel}\n"
        . ($otherIssue !== '' ? "その他：{$otherIssue}\n" : '')
        . "\n※このメールは自動送信です。\n";
}

if ($errors !== []) {
    respondError(implode("\n", $errors), 422);
}

$adminHeaders = buildHeaders(
    $config['from_name'],
    $config['from_email'],
    $email,
    $name
);

$userHeaders = buildHeaders(
    $config['from_name'],
    $config['from_email'],
    $config['recipient_email'],
    $config['recipient_name']
);

$adminSent = sendJapaneseMail(
    $config['recipient_email'],
    $adminSubject,
    $adminBody,
    $adminHeaders,
    $config['from_email']
);

if (!$adminSent) {
    error_log('HÉLMIO form mail failed: admin notification');
    respondError('送信に失敗しました。時間を置いて再度お試しください。', 500);
}

// 自動返信が失敗しても、管理者通知が届いていれば申込自体は成功扱いにする。
$userSent = sendJapaneseMail(
    $email,
    $userSubject,
    $userBody,
    $userHeaders,
    $config['from_email']
);

if (!$userSent) {
    error_log('HÉLMIO form mail failed: auto reply to ' . $email);
}

$_SESSION['helmio_form_last_sent_at'] = $now;
respondSuccess(
    $formType === 'contact'
        ? 'お問い合わせを送信しました。'
        : '無料PR診断のお申し込みを受け付けました。'
);

function cleanText($value, int $maxLength): string
{
    $text = trim((string) $value);
    $text = str_replace(["\r", "\n", "\0"], ' ', $text);
    $text = preg_replace('/\s+/u', ' ', $text) ?? '';
    return cutText($text, $maxLength);
}

function cleanMultiline($value, int $maxLength): string
{
    $text = trim((string) $value);
    $text = str_replace("\0", '', $text);
    $text = preg_replace("/\r\n?|\n/u", "\n", $text) ?? '';
    return cutText($text, $maxLength);
}

function cutText(string $text, int $maxLength): string
{
    if (function_exists('mb_substr')) {
        return mb_substr($text, 0, $maxLength, 'UTF-8');
    }

    return substr($text, 0, $maxLength);
}

function cleanEmail($value): string
{
    $email = trim((string) $value);
    if (preg_match('/[\r\n]/', $email)) {
        return '';
    }
    return filter_var($email, FILTER_VALIDATE_EMAIL) ? $email : '';
}

function buildAdminHeader(string $formType): string
{
    $label = $formType === 'contact' ? '法人お問い合わせ' : '無料PR診断';
    return "HÉLMIO公式サイトから{$label}が届きました。\n"
        . "送信日時：" . date('Y-m-d H:i:s') . "\n"
        . "------------------------------";
}

function encodeHeaderName(string $name): string
{
    if (function_exists('mb_encode_mimeheader')) {
        return mb_encode_mimeheader($name, 'UTF-8', 'B', "\r\n");
    }
    return $name;
}

function buildHeaders(
    string $fromName,
    string $fromEmail,
    string $replyToEmail,
    string $replyToName
): string {
    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        'From: ' . encodeHeaderName($fromName) . " <{$fromEmail}>",
        'Reply-To: ' . encodeHeaderName($replyToName) . " <{$replyToEmail}>",
        'X-Mailer: PHP/' . PHP_VERSION,
    ];

    return implode("\r\n", $headers);
}

function sendJapaneseMail(
    string $to,
    string $subject,
    string $body,
    string $headers,
    string $envelopeFrom
): bool {
    if (function_exists('mb_language')) {
        mb_language('Japanese');
    }
    if (function_exists('mb_internal_encoding')) {
        mb_internal_encoding('UTF-8');
    }

    $additionalParameters = '-f' . $envelopeFrom;

    if (function_exists('mb_send_mail')) {
        // 一部サーバーでは第5引数（-f）が拒否されるため、失敗時は引数なしで再試行します。
        $sent = @mb_send_mail($to, $subject, $body, $headers, $additionalParameters);
        if ($sent) {
            return true;
        }

        return @mb_send_mail($to, $subject, $body, $headers);
    }

    $encodedSubject = function_exists('mb_encode_mimeheader')
        ? mb_encode_mimeheader($subject, 'UTF-8', 'B', "\r\n")
        : $subject;

    $sent = @mail($to, $encodedSubject, $body, $headers, $additionalParameters);
    if ($sent) {
        return true;
    }

    return @mail($to, $encodedSubject, $body, $headers);
}

function wantsJson(): bool
{
    $responseType = (string) ($_POST['response_type'] ?? '');
    $accept = (string) ($_SERVER['HTTP_ACCEPT'] ?? '');
    return $responseType === 'json' || strpos($accept, 'application/json') !== false;
}

function respondSuccess(string $message): void
{
    if (wantsJson()) {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode([
            'ok' => true,
            'message' => $message,
        ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        exit;
    }

    $formType = (string) ($_POST['form_type'] ?? 'contact');
    $location = $formType === 'pr_diagnosis'
        ? 'index.html?diagnosis=sent#pr-diagnosis'
        : 'contact.html?sent=1#contact-form';

    header('Location: ' . $location, true, 303);
    exit;
}

function respondError(string $message, int $statusCode): void
{
    http_response_code($statusCode);

    if (wantsJson()) {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode([
            'ok' => false,
            'message' => $message,
        ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        exit;
    }

    $formType = (string) ($_POST['form_type'] ?? 'contact');
    $encoded = rawurlencode($message);
    $location = $formType === 'pr_diagnosis'
        ? "index.html?diagnosis=error&message={$encoded}#pr-diagnosis"
        : "contact.html?sent=0&message={$encoded}#contact-form";

    header('Location: ' . $location, true, 303);
    exit;
