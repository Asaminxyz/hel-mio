(() => {
  'use strict';

  const customTalents = [
    {
      id: 'asuka-nakashima',
      name: '中島 あすか',
      kana: 'なかしま あすか',
      englishName: 'ASUKA NAKASHIMA',
      pdf: 'asuka-nakashima-profile.pdf',
      cardImage: 'asuka-nakashima.jpg',
      photos: ['asuka-nakashima.jpg', 'asuka-nakashima-2.jpg', 'asuka-nakashima-3.jpg'],
      summary: '青山学院大学法学部卒業後、2019年にテレビ岩手へアナウンサーとして入社。情報番組のMC、ニュース、天気・中継・取材リポート、スポーツ中継、ナレーションなど幅広く経験。2025年に退社後は愛知県を拠点に、会社員とアナウンサーの両立で活動している。',
      profile: {
        height: '',
        birthplace: '兵庫県姫路市',
        bloodType: '',
        education: '青山学院大学 法学部',
        hobbies: 'サッカー観戦、旅行、御朱印巡り、香り、読書、ドライブ、音楽・映画鑑賞',
        skills: '',
        qualifications: '世界遺産検定2級、アロマテラピー検定1級'
      },
      tags: ['テレビ', '情報番組MC', 'ニュース', 'リポーター', 'スポーツ', 'ナレーション', 'CM'],
      careers: [
        { category: 'テレビ岩手', text: '「5きげんテレビ」木曜MC／天気・中継・取材リポーター／番組内キャラクター「とんジロー」声' },
        { category: 'テレビ岩手', text: '「5きげんどようび」MC（5年間）' },
        { category: 'テレビ岩手', text: '「ニュースプラス1いわて」企画立案・放送／ストレイトニュース／「ねだらX」ナビゲーター' },
        { category: 'スポーツ', text: '全国高校サッカー選手権岩手県大会決勝 応援席リポーター／いわて盛岡シティマラソン 給水所リポーター／花巻イーハトーブレディース駅伝 ゴール実況' },
        { category: '現在出演', text: '中京テレビ「PUSH！」リポーター／テレビ岩手「レゴランドジャパン」リポーター（不定期）' },
        { category: 'CM', text: '株式会社ベアレン醸造所／株式会社プロワーカー' }
      ],
      youtube: []
    },
    {
      id: 'airi-yamakita',
      name: '山北 愛琳',
      kana: 'やまきた あいり',
      englishName: 'AIRI YAMAKITA',
      pdf: 'airi-yamakita-profile.pdf',
      cardImage: 'airi-yamakita.jpg',
      photos: ['airi-yamakita.jpg', 'airi-yamakita-2.jpg', 'airi-yamakita-3.jpg'],
      summary: '京都女子大学卒業後、証券会社で個人・法人の資産運用に携わり、ファイナンシャルプランナー資格を取得。その後アナウンサーへ転身し、NHK高知放送局・奈良放送局で約10年間、夕方情報番組のキャスターを担当。スタジオMCに加え、自ら取材した内容を生中継やロケリポートで伝えてきた。現在はテレビ出演のほか、式典やステージイベントの司会として活動している。',
      profile: {
        height: '',
        birthplace: '奈良県橿原市',
        bloodType: '',
        education: '京都女子大学',
        hobbies: 'ゴルフ（ベストスコア94）、かき氷、奈良案内',
        skills: '',
        qualifications: 'ファイナンシャルプランナー'
      },
      tags: ['NHK', 'キャスター', 'リポーター', '生中継', '取材', '司会', '式典', '金融'],
      careers: [
        { category: 'NHK', text: '高知放送局・奈良放送局で約10年間、夕方情報番組のキャスター' },
        { category: 'NHK', text: 'スタジオMCのほか、自ら取材した内容を生中継・ロケリポートで発信' },
        { category: '金融', text: '証券会社で個人・法人の資産運用に従事' },
        { category: '現在', text: 'テレビ出演／式典・ステージイベントなどの司会' }
      ],
      youtube: []
    },
    {
      id: 'haruka-touma',
      name: '當麻 陽香',
      kana: 'とうま はるか',
      englishName: 'HARUKA TOUMA',
      pdf: 'haruka-touma-profile.pdf',
      cardImage: 'haruka-touma.jpg',
      photos: ['haruka-touma.jpg', 'haruka-touma-2.jpg', 'haruka-touma-3.jpg', 'haruka-touma-4.jpg'],
      summary: '大阪・鹿児島・栃木で9年間テレビ局に勤務。報道記者・アナウンサーとして、取材、撮影、編集、アナウンスまで一貫して経験してきた。制作意図や現場全体の流れを理解した進行と、状況に応じた臨機応変な対応を強みとする。2026年4月からフリーアナウンサーとして活動。',
      profile: {
        height: '158cm',
        birthplace: '大阪生まれ・奈良育ち',
        bloodType: '',
        education: '',
        hobbies: '',
        skills: '取材・生中継・インタビュー',
        qualifications: '防災士、普通自動車運転免許'
      },
      tags: ['NHK', '報道記者', 'キャスター', 'リポーター', '生中継', 'インタビュー', '式典司会', 'ナレーション'],
      careers: [
        { category: 'NHK大阪', text: 'NHK大阪拠点放送局 5年（2021年4月〜2026年3月）／全国放送のリポーターをレギュラーで3年担当' },
        { category: 'NHK大阪', text: '関西エリア放送「ほっと関西」ニュース・街ぶら・グルメコーナーなど' },
        { category: 'NHK鹿児島', text: '情報番組でメインキャスター' },
        { category: 'とちぎテレビ', text: '株式会社とちぎテレビ 報道記者' },
        { category: '取材・中継', text: '大阪72市区町村を巡る取材・ロケ／セレモニー・気象・祭り・文化・企業紹介などの生中継' },
        { category: 'インタビュー', text: '著名人・専門家・一般の方まで5000人以上' },
        { category: '司会', text: '大阪市青少年指導員連絡協議会50周年記念式典など' }
      ],
      youtube: []
    },
    {
      id: 'chizuru-hayakawa',
      name: '早川 千鶴',
      kana: 'はやかわ ちづる',
      englishName: 'CHIZURU HAYAKAWA',
      pdf: 'chizuru-hayakawa-profile.pdf',
      cardImage: 'chizuru-hayakawa.jpg',
      photos: ['chizuru-hayakawa.jpg', 'chizuru-hayakawa-2.jpg'],
      summary: '早稲田大学創造理工学部に在学しながら、アナウンサー・モデルとして活動。小学館「NEWSポストセブン」ではレギュラーキャスターとして出演し、リポーターやナレーション、イベントMC、ラジオにも活動の幅を広げている。防災士資格を持ち、環境問題を学ぶ理系学生としての視点も強み。',
      profile: {
        height: '',
        birthplace: '埼玉県川越市',
        bloodType: '',
        education: '早稲田大学 創造理工学部 環境資源工学科 在学',
        hobbies: '',
        skills: 'リポート、インタビュー',
        qualifications: '防災士'
      },
      tags: ['キャスター', 'リポーター', 'ラジオ', 'イベントMC', 'モデル', '学生', '防災'],
      careers: [
        { category: 'キャスター', text: '小学館「NEWSポストセブン」レギュラーキャスター' },
        { category: 'リポーター', text: 'キャリゾータイムズ リポーター／TOKYO MX「クラウドダンディ」学生リポーター' },
        { category: 'ラジオ', text: 'interfm「CLUB CEO」出演／渋谷クロスFM「おーたPの部屋」出演／インターネットラジオ「地域色彩」MC' },
        { category: 'MC', text: 'ベストオブミス埼玉大会／神奈川県警察主催 サギ撲滅キャンペーン／3rd Lab. Future Conference ほか' },
        { category: 'モデル・受賞', text: 'Miss University 埼玉 2024 グランプリ／「理系ナビ」2025秋号 表紙モデル／FINEBOYS掲載' }
      ],
      youtube: [{ title: '出演動画を見る', url: 'https://youtu.be/XMecVOYFcWk' }]
    },
    {
      id: 'miku-nakajima',
      name: '中嶋 未来',
      kana: 'なかじま みく',
      englishName: 'MIKU NAKAJIMA',
      pdf: 'miku-nakajima-profile.pdf',
      cardImage: 'miku-nakajima.jpg',
      photos: ['miku-nakajima.jpg'],
      summary: '上智大学外国語学部英語学科在学。テレビ・ラジオ・イベントでリポーター、MC、キャスターとして活動し、自然体で話せる空気づくりと、相手の思いや魅力を引き出すコミュニケーションを大切にしている。企業取材では学生の目線も生かし、働く人の思いや仕事の魅力を分かりやすく伝える。',
      profile: {
        height: '',
        birthplace: '三重県',
        bloodType: '',
        education: '上智大学 外国語学部 英語学科',
        hobbies: '舞踊（フラメンコ、バレエ、フラダンスなど）',
        skills: '糸東流空手 初段（黒帯）',
        qualifications: '実用英語技能検定 準1級'
      },
      tags: ['テレビ', 'リポーター', 'キャスター', 'ラジオ', 'イベントMC', '英語', 'インタビュー'],
      careers: [
        { category: 'テレビ', text: '関西テレビ「和牛のギュウギュウ学園」レギュラー／tvk「weather report」メインキャスター' },
        { category: 'テレビ', text: 'RSK山陽放送「全力school応援団」リポーター／QAB琉球朝日放送 特番MC／TSSテレビ新広島 特番スペシャルリポーター' },
        { category: 'テレビ', text: 'SBC信越放送「キャンたび」レギュラー／メ〜テレ「秋山歌謡祭2024」アフタートークゲスト' },
        { category: 'ラジオ', text: 'TOKYO FM「夢叶えるサウナ」／MBSラジオ／FM愛知 アシスタントMC／全国ラジオ番組「愛の和を広げよう」パーソナリティ' },
        { category: 'イベントMC', text: 'K-PRO牧場フェス2023／khb東日本放送 開局48周年記念イベント／全日本総合空手道選手権大会／上智大学「海洋資源イベント2024」' },
        { category: '受賞', text: '2026東海テレビアナウンスコンテスト準グランプリ／Sophian’s contest 2024 グランプリ' }
      ],
      youtube: []
    },
    {
      id: 'mitsuki-yamano',
      name: '山野 光希',
      kana: 'やまの みつき',
      englishName: 'MITSUKI YAMANO',
      pdf: 'mitsuki-yamano-profile.pdf',
      cardImage: 'mitsuki-yamano.jpg',
      photos: ['mitsuki-yamano.jpg', 'mitsuki-yamano-2.jpg', 'mitsuki-yamano-3.jpg'],
      summary: 'ラジオ、テレビ、WEB広告、モデル、演技など幅広いメディアで活動。MBSラジオの番組出演やラジオパーソナリティの経験を持ち、明るく親しみやすいキャラクターを活かして、トークからモデル・映像出演まで柔軟に対応する。',
      profile: {
        height: '161cm',
        birthplace: '東京都',
        bloodType: '',
        education: '',
        hobbies: '旅行、動画編集、デジカメ、飲食店・カフェ巡り、サスペンスドラマ鑑賞',
        skills: 'ソフトテニス、フラフープ、チアダンス',
        qualifications: 'TOEIC 720点、普通自動車運転免許'
      },
      tags: ['ラジオ', 'テレビ', 'パーソナリティ', 'モデル', 'WEB広告', '演技', 'イベント'],
      careers: [
        { category: 'ラジオ', text: 'MBSラジオ「オレたちゴチャ・まぜっ！〜集まれヤンヤン〜立志篇」レギュラー出演' },
        { category: 'ラジオ', text: 'MBSラジオ「イマドキッ キャンパスナイト supported by dazzlin」／「アッパレやってまーす！〜土曜日です〜 加藤面接」出演' },
        { category: 'ラジオ', text: 'ふくろうFM ラジオパーソナリティ（2025年9月〜）' },
        { category: 'テレビ', text: 'MBS毎日放送「アプデしてる？」出演／新潟ラジオ・テレビ出演' },
        { category: 'WEB広告・モデル', text: 'ジョブメドレー／アイドルbyやまと／ノエビア／マトメージュ／帝京大学 ほか' },
        { category: '演技', text: '映画・テレビドラマ・WEB動画など出演' },
        { category: 'その他', text: 'ミスサークルコンテスト2024審査員特別賞／第11代有田みかん大使／超十代ULTRA TEENS FES 2025ランウェイ' }
      ],
      youtube: []
    },
    {
      id: 'rika-hayakawa',
      name: '早川 里香',
      kana: 'はやかわ りか',
      englishName: 'RIKA HAYAKAWA',
      pdf: 'rika-hayakawa-profile.pdf',
      cardImage: 'rika-hayakawa-3.jpg',
      photos: ['rika-hayakawa-3.jpg', 'rika-hayakawa.jpg', 'rika-hayakawa-2.jpg'],
      summary: '理系メーカーでの開発職を経てMCへ転身。展示会・企業イベント・式典・スポーツイベントなど幅広い現場で司会を担当。技術系・BtoBイベントを得意とし、落ち着いた進行と臨機応変な対応力を強みとする。展示会プレゼンテーション、セミナー、記者発表会、インタビュー、リポート、ライブ配信、ナレーションまで幅広く対応。',
      profile: {
        height: '160cm',
        birthplace: '鹿児島県',
        bloodType: '',
        education: '',
        hobbies: '',
        skills: '',
        qualifications: '英検準2級、漢検準2級、数検2級'
      },
      tags: [
        '企業イベント',
        '展示会',
        '式典',
        'セミナー',
        '記者発表会',
        'トークショー',
        'インタビュー',
        'リポーター',
        'ライブ配信',
        'ナレーション',
        'BtoB'
      ],
      careers: [
        { category: '式典・表彰式', text: 'EBARA WAVE アリーナおおた 新名称記念式典' },
        { category: '式典・表彰式', text: '港区スポーツ推進委員60周年記念事業' },
        { category: '式典・表彰式', text: 'ナミテクノロジージャパン 設立1周年・新製品発表会' },
        { category: '式典・表彰式', text: '自衛隊セレモニー 司会進行・インタビュー' },
        { category: '式典・表彰式', text: '取手競輪FⅠ・伊東温泉競輪FⅠ 表彰式' },
        { category: 'セミナー', text: 'Care Show Japan／越境セミナー／IT企業セミナー／イーコマースフェア東京／大塚商会セミナー' },
        { category: 'イベント', text: 'フジタ技術フェア／埼玉モビリティフェア／My Yamaha motorcycle エキシビジョン' },
        { category: 'イベント', text: 'Bayfm サマーキャンペーン／サイクルアートフェスティバル／INFLUENCER’S EXPO リポーター・司会' },
        { category: '展示会・ナレーター', text: 'CEATEC デルタ電子／Inter BEE NEC／リテールテック NEC／ENEX IHI' },
        { category: '展示会・ナレーター', text: 'モビリティショー パナソニック／東京おもちゃショー タカラトミー／内視鏡学会 富士フイルムメディカル' },
        { category: '展示会・ナレーター', text: 'SEMICON 日本精工／下水道展 パルテム技術協会／人とクルマのテクノロジー展 ヌヴォトンテクノロジージャパン' },
        { category: '展示会・ナレーター', text: 'テクノフロンティア・国際物流展 シナノケンシ／TOKYO PACK レンゴー ほか' },
        { category: 'トークショー', text: 'サイクルアートフェスティバル／自衛官合同企業説明会／映画「レンタル家族」舞台挨拶' },
        { category: 'テレビ・配信', text: '松阪・富山ミッドナイト競輪 CS中継司会／競輪グランプリ・立川競輪などCS中継アシスタント・リポーター' },
        { category: 'テレビ・配信', text: 'ABEMA 競輪・オートレース／伊勢崎オートレース公式／松山競輪 ほか' },
        { category: 'MA・ナレーション', text: 'タカラトミーアーツ／横浜市観光局／パーフェクトワン ほか' },
        { category: 'MA・ナレーション', text: 'ヌヴォトンテクノロジージャパン 会社紹介PV' }
      ],
      youtube: []
    }
  ];

  const updateHero = () => {
    const title = document.getElementById('professionals-title');
    if (title) {
      title.innerHTML =
        '<span><em class="hero-highlight">NHK・民放出身、</em></span><span>元局アナウンサー専門事務所</span>';
    }

    const lead = document.querySelector('.pro-hero__lead');
    if (lead) {
      lead.textContent =
        '地上波や国を挙げた大型イベントで確かな実績を積んだ、経験豊富なプロフェッショナルが皆様のご要望に柔軟にお応えします。';
    }
  };

  const removeIntro = () => {
    const intro = document.querySelector('#professionals .talent-intro');
    if (intro) intro.remove();
  };

  const mutateTalentData = () => {
    if (!Array.isArray(window.HELMIO_TALENTS)) return;

    const ids = new Set(customTalents.map(t => t.id));
    const base = window.HELMIO_TALENTS.filter(t => t && t.id !== 'coming-soon' && !ids.has(t.id));

    window.HELMIO_TALENTS.splice(
      0,
      window.HELMIO_TALENTS.length,
      ...base,
      ...customTalents
    );
  };

  const buildCard = (id, name, englishName, image) => `
    <button aria-haspopup="dialog" class="talent-card" data-talent-id="${id}" type="button">
      <div class="talent-card__media">
        <span class="talent-card__fallback">${englishName}</span>
        <img alt="${name}" loading="lazy" src="${image}">
      </div>
      <div class="talent-card-body">
        <p class="talent-name">${name}</p>
      </div>
    </button>
  `;

  const rebuildCards = () => {
    const container = document.getElementById('talentCards');
    if (!container) return;

    container.classList.add('talent-groups');
    container.innerHTML = `
      <section class="talent-group" aria-labelledby="broadcast-professionals-title">
        <p class="talent-group__eyebrow">BROADCAST PROFESSIONALS</p>
        <h3 class="talent-group__title" id="broadcast-professionals-title">元局アナウンサー・放送経験豊富なプロフェッショナル</h3>
        <p class="talent-group__lead">ニュース・情報番組・リポート・大型イベント・式典など、放送と現場の両方で経験を積んだプロフェッショナルです。</p>
        <div class="talent-cards talent-cards--group">
          ${buildCard('asami-niijima', '新島 麻生', 'ASAMI NIIJIMA', 'S__27566083.jpg')}
          ${buildCard('fumi-murakami', '村上 史', 'FUMI MURAKAMI', 'S__27557921.jpg')}
          ${buildCard('asuka-nakashima', '中島 あすか', 'ASUKA NAKASHIMA', 'asuka-nakashima.jpg')}
          ${buildCard('airi-yamakita', '山北 愛琳', 'AIRI YAMAKITA', 'airi-yamakita.jpg')}
          ${buildCard('haruka-touma', '當麻 陽香', 'HARUKA TOUMA', 'haruka-touma.jpg')}
        </div>
      </section>

      <section class="talent-group" aria-labelledby="pro-mc-title">
        <p class="talent-group__eyebrow">PROFESSIONAL MC / NARRATOR</p>
        <h3 class="talent-group__title" id="pro-mc-title">実績と対応力をもとに選定した、プロMC・ナレーター</h3>
        <p class="talent-group__lead">企業イベント・展示会・式典・セミナーなど、幅広い現場経験を持つプロフェッショナルを厳選。進行力、表現力、現場対応力を備えた人材をご提案します。</p>
        <div class="talent-cards talent-cards--group">
          ${buildCard('seira-minami', '南 青良', 'SEIRA MINAMI', 'seira-new.jpeg')}
          ${buildCard('rika-hayakawa', '早川 里香', 'RIKA HAYAKAWA', 'rika-hayakawa-3.jpg')}
        </div>
      </section>

      <section class="talent-group talent-group--young" aria-labelledby="young-media-title">
        <p class="talent-group__eyebrow">NEXT GENERATION</p>
        <h3 class="talent-group__title" id="young-media-title">ラジオ・キャスターなど、メディア経験豊富な若手人材</h3>
        <p class="talent-group__lead">テレビ・ラジオ・リポート・イベントMCなどの経験を持つ、次世代のメディア人材です。</p>
        <div class="talent-cards talent-cards--group">
          ${buildCard('chizuru-hayakawa', '早川 千鶴', 'CHIZURU HAYAKAWA', 'chizuru-hayakawa.jpg')}
          ${buildCard('miku-nakajima', '中嶋 未来', 'MIKU NAKAJIMA', 'miku-nakajima.jpg')}
          ${buildCard('mitsuki-yamano', '山野 光希', 'MITSUKI YAMANO', 'mitsuki-yamano.jpg')}
        </div>
      </section>
    `;

    container.querySelectorAll('.talent-card__media img').forEach(img => {
      img.addEventListener('error', () => {
        img.closest('.talent-card__media')?.classList.add('is-missing');
      });
    });
  };

  const injectStyles = () => {
    if (document.getElementById('helmio-professionals-update-styles')) return;

    const style = document.createElement('style');
    style.id = 'helmio-professionals-update-styles';
    style.textContent = `
      #talentCards.talent-groups{display:block}
      .talent-group{margin-top:52px}
      .talent-group:first-child{margin-top:0}
      .talent-group+.talent-group{margin-top:76px;padding-top:58px;border-top:1px solid var(--line)}
      .talent-group__eyebrow{
        margin-bottom:10px;
        color:var(--gold);
        font-family:"Cormorant Garamond",serif;
        font-size:13px;
        font-weight:600;
        letter-spacing:.18em;
        text-transform:uppercase
      }
      .talent-group__title{
        color:var(--ink);
        font-family:"Noto Serif JP",serif;
        font-size:clamp(24px,2.5vw,34px);
        font-weight:600;
        line-height:1.55
      }
      .talent-group__lead{
        max-width:820px;
        margin:12px 0 28px;
        color:var(--muted);
        font-size:14px;
        line-height:1.9
      }
      .talent-cards--group{margin-top:0}
      @media (max-width:600px){
        .talent-group{margin-top:42px}
        .talent-group+.talent-group{margin-top:54px;padding-top:42px}
        .talent-group__title{font-size:22px}
        .talent-group__lead{font-size:13px;margin-bottom:22px}
      }
    `;
    document.head.appendChild(style);
  };

  const init = () => {
    injectStyles();
    mutateTalentData();
    updateHero();
    removeIntro();
    rebuildCards();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
