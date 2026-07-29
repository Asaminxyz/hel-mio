<?php

declare(strict_types=1);

ini_set('display_errors', '0');
ini_set('log_errors', '1');
error_reporting(E_ALL);
header('Content-Type: application/json; charset=UTF-8');

$configPath = __DIR__ . '/mail-config.php';
$configOk = false;
$recipientOk = false;
$fromOk = false;

if (is_file($configPath)) {
    $config = require $configPath;
    $configOk = is_array($config);
    if ($configOk) {
        $recipientOk = isset($config['recipient_email'])
            && filter_var($config['recipient_email'], FILTER_VALIDATE_EMAIL) !== false;
        $fromOk = isset($config['from_email'])
            && filter_var($config['from_email'], FILTER_VALIDATE_EMAIL) !== false;
    }
}

echo json_encode([
    'ok' => true,
    'php_version' => PHP_VERSION,
    'mail_config_exists' => is_file($configPath),
    'mail_config_valid' => $configOk,
    'recipient_email_valid' => $recipientOk,
    'from_email_valid' => $fromOk,
    'mail_available' => function_exists('mail'),
    'mb_send_mail_available' => function_exists('mb_send_mail'),
    'session_available' => function_exists('session_start'),
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
