(() => {
  'use strict';

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


  const simplifyHeader = () => {
    const nav = document.getElementById('siteNav');

    if (!nav) return;

    nav.innerHTML = `
      <a href="#service">サービス</a>
      <a href="#professionals" aria-current="page">候補者を見る</a>
      <a class="nav-contact" href="#casting-form">ご相談</a>
    `;

    const menuButton =
      document.querySelector('.menu-button');

    nav.querySelectorAll('a').forEach(link => {

      link.addEventListener('click', () => {

        nav.classList.remove('open');

        if (menuButton) {
          menuButton.setAttribute(
            'aria-expanded',
            'false'
          );
        }

        document.body.classList.remove(
          'is-menu-open'
        );
      });

    });
  };


  const updateHeroCta = () => {
    const primary =
      document.querySelector(
        '.pro-hero .button--primary'
      );

    if (primary) {

      primary.textContent =
        '候補者・料金目安を相談する';

      primary.setAttribute(
        'href',
        '#casting-form'
      );
    }
  };


  const updateServiceCopy = () => {
    const firstServiceCard =
      document.querySelector(
        '#service .service-card'
      );

    const text =
      firstServiceCard?.querySelector(
        '.service-card__body > p'
      );

    if (text) {

      text.innerHTML =
        '元局アナウンサーを中心に、企業イベント・展示会・式典などで経験を積んだMC・ナレーターをご提案。案件の目的や会場、求める雰囲気に合わせて選定します。<strong class="service-highlight">出演者のみのご依頼も可能です。</strong>';

    }
  };


  const insertCastingSupport = () => {

    if (
      document.getElementById(
        'casting-support'
      )
    ) {
      return;
    }

    const service =
      document.getElementById('service');

    if (!service) return;


    const section =
      document.createElement('section');

    section.className =
      'casting-support-section';

    section.id =
      'casting-support';

    section.setAttribute(
      'aria-labelledby',
      'casting-support-title'
    );


    section.innerHTML = `
      <div class="container casting-support-grid">

        <div class="casting-support-heading">

          <p class="section-label">
            CASTING SUPPORT
          </p>

          <h2 id="casting-support-title">
            出演者のみのご依頼から、<br>
            準備を含めたご相談まで。
          </h2>

        </div>


        <div class="casting-support-body">

          <p>
            司会・MC・ナレーターの出演のみでも
            ご依頼いただけます。
            案件に応じて、既存の制作体制はそのままに、
            必要な範囲だけお任せください。
          </p>


          <p class="casting-support-key">
            MCを手配するだけでなく、<br>
            「本番に立てる状態」まで整えてお渡しします。
          </p>


          <p class="casting-support-note">
            若手MCの起用に元局アナウンサーによる
            台本・表現監修を組み合わせるなど、
            ご予算と求める品質に応じた
            体制設計も可能です。
          </p>


          <div class="casting-support-actions">

            <a
              class="button button--primary"
              href="#casting-form"
            >
              候補者・料金目安を相談する
            </a>

          </div>

        </div>

      </div>
    `;


    service.insertAdjacentElement(
      'afterend',
      section
    );
  };


  const updateFaq = () => {

    const faqList =
      document.querySelector(
        '#faq .faq-list'
      );


    if (
      !faqList ||
      document.getElementById(
        'faq-casting-only'
      )
    ) {
      return;
    }


    const item =
      document.createElement('details');

    item.className =
      'faq-item';

    item.id =
      'faq-casting-only';


    item.innerHTML = `
      <summary>
        出演者のみの依頼も可能ですか？
      </summary>

      <div class="faq-answer">
        可能です。
        司会・MC・ナレーターの出演のみでも
        ご依頼いただけます。
        台本の確認や事前準備などは、
        案件に応じて必要な場合のみ
        ご提案します。
      </div>
    `;


    faqList.prepend(item);
  };


  const updateFinalCta = () => {

    const title =
      document.getElementById(
        'contact-title'
      );


    if (title) {

      title.textContent =
        '候補者プロフィール・料金目安のご相談';

    }


    const section =
      title?.closest(
        '.final-cta'
      );


    const text =
      section?.querySelector(
        '.final-cta__inner > div > p:last-child'
      );


    if (text) {

      text.textContent =
        '司会・出演のみのご依頼から、準備を含めたご相談まで。案件内容やご予算を伺い、条件に合う候補者と対応範囲をご提案します。';

    }


    const button =
      section?.querySelector(
        '.button'
      );


    if (button) {

      button.innerHTML =
        '候補者・料金目安を相談する <span aria-hidden="true">→</span>';

      button.setAttribute(
        'href',
        '#casting-form'
      );

    }
  };


  const newTalents = [

    {
      id: 'asuka-nakashima',

      name: '中島 あすか',

      kana: 'なかしま あすか',

      englishName:
        'ASUKA NAKASHIMA',

      pdf:
        'asuka-nakashima-profile.pdf',

      cardImage:
        'asuka-nakashima.jpg',

      photos: [
        'asuka-nakashima.jpg',
        'asuka-nakashima-2.jpg',
        'asuka-nakashima-3.jpg'
      ],

      summary:
        '青山学院大学法学部卒業後、2019年にテレビ岩手へアナウンサーとして入社。情報番組のMC、ニュース、天気・中継・取材リポート、スポーツ中継、ナレーションなど幅広く経験。2025年に退社後は愛知県を拠点に、会社員とアナウンサーの両立で活動している。',

      profile: {

        height: '',

        birthplace:
          '兵庫県姫路市',

        bloodType: '',

        education:
          '青山学院大学 法学部',

        hobbies:
          'サッカー観戦、旅行、御朱印巡り、香り、読書、ドライブ、音楽・映画鑑賞',

        skills: '',

        qualifications:
          '世界遺産検定2級、アロマテラピー検定1級'
      },

      tags: [
        'テレビ',
        '情報番組MC',
        'ニュース',
        'リポーター',
        'スポーツ',
        'ナレーション',
        'CM'
      ],

      careers: [

        {
          category:
            'テレビ岩手',

          text:
            '「5きげんテレビ」木曜MC／天気・中継・取材リポーター／番組内キャラクター「とんジロー」声'
        },

        {
          category:
            'テレビ岩手',

          text:
            '「5きげんどようび」MC（5年間）'
        },

        {
          category:
            'テレビ岩手',

          text:
            '「ニュースプラス1いわて」企画立案・放送／ストレイトニュース／「ねだらX」ナビゲーター'
        },

        {
          category:
            'スポーツ',

          text:
            '全国高校サッカー選手権岩手県大会決勝 応援席リポーター／いわて盛岡シティマラソン 給水所リポーター／花巻イーハトーブレディース駅伝 ゴール実況'
        },

        {
          category:
            '現在出演',

          text:
            '中京テレビ「PUSH！」リポーター／テレビ岩手「レゴランドジャパン」リポーター（不定期）'
        },

        {
          category:
            'CM',

          text:
            '株式会社ベアレン醸造所／株式会社プロワーカー'
        }

      ],

      youtube: []

    },


    {
      id:
        'airi-yamakita',

      name:
        '山北 愛琳',

      kana:
        'やまきた あいり',

      englishName:
        'AIRI YAMAKITA',

      pdf:
        'airi-yamakita-profile.pdf',

      cardImage:
        'airi-yamakita.jpg',

      photos: [
        'airi-yamakita.jpg',
        'airi-yamakita-2.jpg',
        'airi-yamakita-3.jpg'
      ],

      summary:
        '京都女子大学卒業後、証券会社で個人・法人の資産運用に携わり、ファイナンシャルプランナー資格を取得。その後アナウンサーへ転身し、NHK高知放送局・奈良放送局で約10年間、夕方情報番組のキャスターを担当。スタジオMCに加え、自ら取材した内容を生中継やロケリポートで伝えてきた。現在はテレビ出演のほか、式典やステージイベントの司会として活動している。',

      profile: {

        height: '',

        birthplace:
          '奈良県橿原市',

        bloodType: '',

        education:
          '京都女子大学',

        hobbies:
          'ゴルフ（ベストスコア94）、かき氷、奈良案内',

        skills: '',

        qualifications:
          'ファイナンシャルプランナー'

      },

      tags: [
        'NHK',
        'キャスター',
        'リポーター',
        '生中継',
        '取材',
        '司会',
        '式典',
        '金融'
      ],

      careers: [

        {
          category:
            'NHK',

          text:
            '高知放送局・奈良放送局で約10年間、夕方情報番組のキャスター'
        },

        {
          category:
            'NHK',

          text:
            'スタジオMCのほか、自ら取材した内容を生中継・ロケリポートで発信'
        },

        {
          category:
            '金融',

          text:
            '証券会社で個人・法人の資産運用に従事'
        },

        {
          category:
            '現在',

          text:
            'テレビ出演／式典・ステージイベントなどの司会'
        }

      ],

      youtube: []

    },


    {
      id:
        'haruka-touma',

      name:
        '當麻 陽香',

      kana:
        'とうま はるか',

      englishName:
        'HARUKA TOUMA',

      pdf:
        'haruka-touma-profile.pdf',

      cardImage:
        'haruka-touma.jpg',

      photos: [
        'haruka-touma.jpg',
        'haruka-touma-2.jpg',
        'haruka-touma-3.jpg',
        'haruka-touma-4.jpg'
      ],

      summary:
        '大阪・鹿児島・栃木で9年間テレビ局に勤務。報道記者・アナウンサーとして、取材、撮影、編集、アナウンスまで一貫して経験してきた。制作意図や現場全体の流れを理解した進行と、状況に応じた臨機応変な対応を強みとする。2026年4月からフリーアナウンサーとして活動。',

      profile: {

        height:
          '158cm',

        birthplace:
          '大阪生まれ・奈良育ち',

        bloodType: '',

        education: '',

        hobbies: '',

        skills:
          '取材・生中継・インタビュー',

        qualifications:
          '防災士、普通自動車運転免許'

      },

      tags: [
        'NHK',
        '報道記者',
        'キャスター',
        'リポーター',
        '生中継',
        'インタビュー',
        '式典司会',
        'ナレーション'
      ],

      careers: [

        {
          category:
            'NHK大阪',

          text:
            'NHK大阪拠点放送局 5年（2021年4月〜2026年3月）／全国放送のリポーターをレギュラーで3年担当'
        },

        {
          category:
            'NHK大阪',

          text:
            '関西エリア放送「ほっと関西」ニュース・街ぶら・グルメコーナーなど'
        },

        {
          category:
            'NHK鹿児島',

          text:
            '情報番組でメインキャスター'
        },

        {
          category:
            'とちぎテレビ',

          text:
            '株式会社とちぎテレビ 報道記者'
        },

        {
          category:
            '取材・中継',

          text:
            '大阪72市区町村を巡る取材・ロケ／セレモニー・気象・祭り・文化・企業紹介などの生中継'
        },

        {
          category:
            'インタビュー',

          text:
            '著名人・専門家・一般の方まで5000人以上'
        },

        {
          category:
            '司会',

          text:
            '大阪市青少年指導員連絡協議会50周年記念式典など'
        }

      ],

      youtube: []

    },


    {
      id:
        'chizuru-hayakawa',

      name:
        '早川 千鶴',

      kana:
        'はやかわ ちづる',

      englishName:
        'CHIZURU HAYAKAWA',

      pdf:
        'chizuru-hayakawa-profile.pdf',

      cardImage:
        'chizuru-hayakawa-main.jpg',

      photos: [
        'chizuru-hayakawa-main.jpg',
        'chizuru-hayakawa-sub.jpg'
      ],

      summary:
        '早稲田大学創造理工学部に在学しながら、アナウンサー・モデルとして活動。小学館「NEWSポストセブン」ではレギュラーキャスターとして出演し、リポーターやナレーション、イベントMC、ラジオにも活動の幅を広げている。防災士資格を持ち、環境問題を学ぶ理系学生としての視点も強み。',

      profile: {

        height: '',

        birthplace:
          '埼玉県川越市',

        bloodType: '',

        education:
          '早稲田大学 創造理工学部 環境資源工学科 在学',

        hobbies: '',

        skills:
          'リポート、インタビュー',

        qualifications:
          '防災士'

      },

      tags: [
        'キャスター',
        'リポーター',
        'ラジオ',
        'イベントMC',
        'モデル',
        '学生',
        '防災'
      ],

      careers: [

        {
          category:
            'キャスター',

          text:
            '小学館「NEWSポストセブン」レギュラーキャスター'
        },

        {
          category:
            'リポーター',

          text:
            'キャリゾータイムズ リポーター／TOKYO MX「クラウドダンディ」学生リポーター'
        },

        {
          category:
            'ラジオ',

          text:
            'interfm「CLUB CEO」出演／渋谷クロスFM「おーたPの部屋」出演／インターネットラジオ「地域色彩」MC'
        },

        {
          category:
            'MC',

          text:
            'ベストオブミス埼玉大会／神奈川県警察主催 サギ撲滅キャンペーン／3rd Lab. Future Conference ほか'
        },

        {
          category:
            'モデル・受賞',

          text:
            'Miss University 埼玉 2024 グランプリ／「理系ナビ」2025秋号 表紙モデル／FINEBOYS掲載'
        }

      ],

      youtube: [

        {
          title:
            '出演動画を見る',

          url:
            'https://youtu.be/XMecVOYFcWk'
        }

      ]

    },


    {
      id:
        'miku-nakajima',

      name:
        '中嶋 未来',

      kana:
        'なかじま みく',

      englishName:
        'MIKU NAKAJIMA',

      pdf:
        'miku-nakajima-profile.pdf',

      cardImage:
        'miku-nakajima.jpg',

      photos: [
        'miku-nakajima.jpg'
      ],

      summary:
        '上智大学外国語学部英語学科在学。テレビ・ラジオ・イベントでリポーター、MC、キャスターとして活動し、自然体で話せる空気づくりと、相手の思いや魅力を引き出すコミュニケーションを大切にしている。企業取材では学生の目線も生かし、働く人の思いや仕事の魅力を分かりやすく伝える。',

      profile: {

        height: '',

        birthplace:
          '三重県',

        bloodType: '',

        education:
          '上智大学 外国語学部 英語学科',

        hobbies:
          '舞踊（フラメンコ、バレエ、フラダンスなど）',

        skills:
          '糸東流空手 初段（黒帯）',

        qualifications:
          '実用英語技能検定 準1級'

      },

      tags: [
        'テレビ',
        'リポーター',
        'キャスター',
        'ラジオ',
        'イベントMC',
        '英語',
        'インタビュー'
      ],

      careers: [

        {
          category:
            'テレビ',

          text:
            '関西テレビ「和牛のギュウギュウ学園」レギュラー／tvk「weather report」メインキャスター'
        },

        {
          category:
            'テレビ',

          text:
            'RSK山陽放送「全力school応援団」リポーター／QAB琉球朝日放送 特番MC／TSSテレビ新広島 特番スペシャルリポーター'
        },

        {
          category:
            'テレビ',

          text:
            'SBC信越放送「キャンたび」レギュラー／メ〜テレ「秋山歌謡祭2024」アフタートークゲスト'
        },

        {
          category:
            'ラジオ',

          text:
            'TOKYO FM「夢叶えるサウナ」／MBSラジオ／FM愛知 アシスタントMC／全国ラジオ番組「愛の和を広げよう」パーソナリティ'
        },

        {
          category:
            'イベントMC',

          text:
            'K-PRO牧場フェス2023／khb東日本放送 開局48周年記念イベント／全日本総合空手道選手権大会／上智大学「海洋資源イベント2024」'
        },

        {
          category:
            '受賞',

          text:
            '2026東海テレビアナウンスコンテスト準グランプリ／Sophian’s contest 2024 グランプリ'
        }

      ],

      youtube: []

    },


    {
      id:
        'mitsuki-yamano',

      name:
        '山野 光希',

      kana:
        'やまの みつき',

      englishName:
        'MITSUKI YAMANO',

      pdf:
        'mitsuki-yamano-profile.pdf',

      cardImage:
        'mitsuki-yamano-main.jpg',

      photos: [
        'mitsuki-yamano-main.jpg',
        'mitsuki-yamano-sub1.jpg',
        'mitsuki-yamano-sub2.jpg'
      ],

      summary:
        'ラジオ、テレビ、WEB広告、モデル、演技など幅広いメディアで活動。MBSラジオの番組出演やラジオパーソナリティの経験を持ち、明るく親しみやすいキャラクターを活かして、トークからモデル・映像出演まで柔軟に対応する。',

      profile: {

        height:
          '161cm',

        birthplace:
          '東京都',

        bloodType: '',

        education: '',

        hobbies:
          '旅行、動画編集、デジカメ、飲食店・カフェ巡り、サスペンスドラマ鑑賞',

        skills:
          'ソフトテニス、フラフープ、チアダンス',

        qualifications:
          'TOEIC 720点、普通自動車運転免許'

      },

      tags: [
        'ラジオ',
        'テレビ',
        'パーソナリティ',
        'モデル',
        'WEB広告',
        '演技',
        'イベント'
      ],

      careers: [

        {
          category:
            'ラジオ',

          text:
            'MBSラジオ「オレたちゴチャ・まぜっ！〜集まれヤンヤン〜立志篇」レギュラー出演'
        },

        {
          category:
            'ラジオ',

          text:
            'MBSラジオ「イマドキッ キャンパスナイト supported by dazzlin」／「アッパレやってまーす！〜土曜日です〜 加藤面接」出演'
        },

        {
          category:
            'ラジオ',

          text:
            'ふくろうFM ラジオパーソナリティ（2025年9月〜）'
        },

        {
          category:
            'テレビ',

          text:
            'MBS毎日放送「アプデしてる？」出演／新潟ラジオ・テレビ出演'
        },

        {
          category:
            'WEB広告・モデル',

          text:
            'ジョブメドレー／アイドルbyやまと／ノエビア／マトメージュ／帝京大学 ほか'
        },

        {
          category:
            '演技',

          text:
            '映画・テレビドラマ・WEB動画など出演'
        },

        {
          category:
            'その他',

          text:
            'ミスサークルコンテスト2024審査員特別賞／第11代有田みかん大使／超十代ULTRA TEENS FES 2025ランウェイ'
        }

      ],

      youtube: []

    },


    {
      id:
        'rika-hayakawa',

      name:
        '早川 里香',

      kana:
        'はやかわ りか',

      englishName:
        'RIKA HAYAKAWA',

      pdf:
        'rika-hayakawa-profile.pdf',

      cardImage:
        'rika-hayakawa-main.jpg',

      photos: [
        'rika-hayakawa-main.jpg',
        'rika-hayakawa-work1.jpg',
        'rika-hayakawa-work2.jpg'
      ],

      summary:
        '理系メーカーでの開発職を経てMCへ転身。展示会・企業イベント・式典・スポーツイベントなど幅広い現場で司会を担当。技術系・BtoBイベントを得意とし、落ち着いた進行と臨機応変な対応力を強みとする。展示会プレゼンテーション、セミナー、記者発表会、インタビュー、リポート、ライブ配信、ナレーションまで幅広く対応。',

      profile: {

        height:
          '160cm',

        birthplace:
          '鹿児島県',

        bloodType: '',

        education: '',

        hobbies: '',

        skills: '',

        qualifications:
          '英検準2級、漢検準2級、数検2級'

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

        {
          category:
            '式典・表彰式',

          text:
            'EBARA WAVE アリーナおおた 新名称記念式典'
        },

        {
          category:
            '式典・表彰式',

          text:
            '港区スポーツ推進委員60周年記念事業'
        },

        {
          category:
            '式典・表彰式',

          text:
            'ナミテクノロジージャパン 設立1周年・新製品発表会'
        },

        {
          category:
            '式典・表彰式',

          text:
            '自衛隊セレモニー 司会進行・インタビュー'
        },

        {
          category:
            '式典・表彰式',

          text:
            '取手競輪FⅠ・伊東温泉競輪FⅠ 表彰式'
        },

        {
          category:
            'セミナー',

          text:
            'Care Show Japan／越境セミナー／IT企業セミナー／イーコマースフェア東京／大塚商会セミナー'
        },

        {
          category:
            'イベント',

          text:
            'フジタ技術フェア／埼玉モビリティフェア／My Yamaha motorcycle エキシビジョン'
        },

        {
          category:
            'イベント',

          text:
            'Bayfm サマーキャンペーン／サイクルアートフェスティバル／INFLUENCER’S EXPO リポーター・司会'
        },

        {
          category:
            '展示会・ナレーター',

          text:
            'CEATEC デルタ電子／Inter BEE NEC／リテールテック NEC／ENEX IHI'
        },

        {
          category:
            '展示会・ナレーター',

          text:
            'モビリティショー パナソニック／東京おもちゃショー タカラトミー／内視鏡学会 富士フイルムメディカル'
        },

        {
          category:
            '展示会・ナレーター',

          text:
            'SEMICON 日本精工／下水道展 パルテム技術協会／人とクルマのテクノロジー展 ヌヴォトンテクノロジージャパン'
        },

        {
          category:
            '展示会・ナレーター',

          text:
            'テクノフロンティア・国際物流展 シナノケンシ／TOKYO PACK レンゴー ほか'
        },

        {
          category:
            'トークショー',

          text:
            'サイクルアートフェスティバル／自衛官合同企業説明会／映画「レンタル家族」舞台挨拶'
        },

        {
          category:
            'テレビ・配信',

          text:
            '松阪・富山ミッドナイト競輪 CS中継司会／競輪グランプリ・立川競輪などCS中継アシスタント・リポーター'
        },

        {
          category:
            'テレビ・配信',

          text:
            'ABEMA 競輪・オートレース／伊勢崎オートレース公式／松山競輪 ほか'
        },

        {
          category:
            'MA・ナレーション',

          text:
            'タカラトミーアーツ／横浜市観光局／パーフェクトワン ほか'
        },

        {
          category:
            'MA・ナレーション',

          text:
            'ヌヴォトンテクノロジージャパン 会社紹介PV'
        }

      ],

      youtube: []

    }

  ];


  const mutateTalentData = () => {

    if (
      !Array.isArray(
        window.HELMIO_TALENTS
      )
    ) {
      return;
    }


    const ids =
      new Set(
        newTalents.map(
          talent => talent.id
        )
      );


    const base =
      window.HELMIO_TALENTS.filter(
        talent =>
          talent &&
          talent.id !== 'coming-soon' &&
          !ids.has(talent.id)
      );


    window.HELMIO_TALENTS.splice(
      0,
      window.HELMIO_TALENTS.length,
      ...base,
      ...newTalents
    );

  };


  const buildCard = (
    id,
    name,
    englishName,
    image,
    catchphrase
  ) => `

    <button
      aria-haspopup="dialog"
      class="talent-card"
      data-talent-id="${id}"
      type="button"
    >

      <div class="talent-card__media">

        <span class="talent-card__fallback">
          ${englishName}
        </span>

        <img
          alt="${name}"
          loading="lazy"
          src="${image}"
        >

      </div>


      <div class="talent-card-body">

        <p class="talent-name">
          ${name}
        </p>

        <p class="talent-catchphrase">
          ${catchphrase}
        </p>

      </div>

    </button>

  `;


  const rebuildCards = () => {

    const container =
      document.getElementById(
        'talentCards'
      );


    if (!container) {
      return;
    }


    container.classList.add(
      'talent-groups'
    );


    container.innerHTML = `

      <section
        class="talent-group"
        aria-labelledby="broadcast-professionals-title"
      >

        <p class="talent-group__eyebrow">
          BROADCAST PROFESSIONALS
        </p>

        <h3
          class="talent-group__title"
          id="broadcast-professionals-title"
        >
          元局アナウンサー・放送経験豊富なプロフェッショナル
        </h3>

        <p class="talent-group__lead">
          ニュース・情報番組・リポート・大型イベント・式典など、
          放送と現場の両方で経験を積んだ
          プロフェッショナルです。
        </p>


        <div
          class="talent-cards
          talent-cards--group"
        >

          ${buildCard(
            'asami-niijima',
            '新島 麻生',
            'ASAMI NIIJIMA',
            'S__27566083.jpg',
            'スポーツとビジネスに強いアナウンサー'
          )}


          ${buildCard(
            'fumi-murakami',
            '村上 史',
            'FUMI MURAKAMI',
            'S__27557921.jpg',
            'ラジオアナ→NHK。実力と親しみやすさ'
          )}


          ${buildCard(
            'asuka-nakashima',
            '中島 あすか',
            'ASUKA NAKASHIMA',
            'asuka-nakashima.jpg',
            '情報番組MC5年、民放仕込みのライブ感'
          )}


          ${buildCard(
            'airi-yamakita',
            '山北 愛琳',
            'AIRI YAMAKITA',
            'airi-yamakita.jpg',
            'NHK約10年。金融に強いキャスター'
          )}


          ${buildCard(
            'haruka-touma',
            '當麻 陽香',
            'HARUKA TOUMA',
            'haruka-touma.jpg',
            'ダジャレで人気の愛されNHKキャスター'
          )}

        </div>

      </section>



      <section
        class="talent-group"
        aria-labelledby="pro-mc-title"
      >

        <p class="talent-group__eyebrow">
          PROFESSIONAL MC / NARRATOR
        </p>


        <h3
          class="talent-group__title"
          id="pro-mc-title"
        >
          実績と対応力をもとに選定した、
          プロMC・ナレーター
        </h3>


        <p class="talent-group__lead">
          企業イベント・展示会・式典・セミナーなど、
          幅広い現場経験を持つ
          プロフェッショナルを厳選。
          進行力、表現力、現場対応力を備えた
          人材をご提案します。
        </p>


        <div
          class="talent-cards
          talent-cards--group"
        >

          ${buildCard(
            'seira-minami',
            '南 青良',
            'SEIRA MINAMI',
            'seira-new.jpeg',
            '女優出身。信頼感、清潔感のある端正な進行'
          )}


          ${buildCard(
            'rika-hayakawa',
            '早川 里香',
            'RIKA HAYAKAWA',
            'rika-hayakawa-main.jpg',
            '安定感でリピートされるBtoBイベントMC'
          )}

        </div>

      </section>



      <section
        class="talent-group
        talent-group--young"
        aria-labelledby="young-media-title"
      >

        <p class="talent-group__eyebrow">
          NEXT GENERATION
        </p>


        <h3
          class="talent-group__title"
          id="young-media-title"
        >
          ラジオ・キャスターなど、
          メディア経験豊富な若手人材
        </h3>


        <p class="talent-group__lead">
          テレビ・ラジオ・リポート・イベントMCなどの
          経験を持つ、
          次世代のメディア人材です。
        </p>


        <div
          class="talent-cards
          talent-cards--group"
        >

          ${buildCard(
            'chizuru-hayakawa',
            '早川 千鶴',
            'CHIZURU HAYAKAWA',
            'chizuru-hayakawa-main.jpg',
            '現役早稲田リケジョ×防災士キャスター'
          )}


          ${buildCard(
            'miku-nakajima',
            '中嶋 未来',
            'MIKU NAKAJIMA',
            'miku-nakajima.jpg',
            '漫才準V×アナウンス準グランプリ'
          )}


          ${buildCard(
            'mitsuki-yamano',
            '山野 光希',
            'MITSUKI YAMANO',
            'mitsuki-yamano-main.jpg',
            'MBSラジオ×モデル、華のあるマルチ人材'
          )}

        </div>

      </section>

    `;


    container
      .querySelectorAll(
        '.talent-card__media img'
      )
      .forEach(img => {

        img.addEventListener(
          'error',
          () => {

            img
              .closest(
                '.talent-card__media'
              )
              ?.classList.add(
                'is-missing'
              );

          }
        );

      });

  };


  const removeIntro = () => {

    const intro =
      document.querySelector(
        '#professionals .talent-intro'
      );

    if (intro) {
      intro.remove();
    }

  };


  const injectStyles = () => {

    if (
      document.getElementById(
        'helmio-professionals-update-styles'
      )
    ) {
      return;
    }


    const style =
      document.createElement(
        'style'
      );


    style.id =
      'helmio-professionals-update-styles';


    style.textContent = `

      #talentCards.talent-groups {
        display: block;
      }


      .talent-group {
        margin-top: 52px;
      }


      .talent-group:first-child {
        margin-top: 0;
      }


      .talent-group + .talent-group {
        margin-top: 76px;
        padding-top: 58px;
        border-top:
          1px solid var(--line);
      }


      .talent-group__eyebrow {
        margin-bottom: 10px;
        color: var(--gold);
        font-family:
          "Cormorant Garamond",
          serif;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: .18em;
        text-transform: uppercase;
      }


      .talent-group__title {
        color: var(--ink);
        font-family:
          "Noto Serif JP",
          serif;
        font-size:
          clamp(
            24px,
            2.5vw,
            34px
          );
        font-weight: 600;
        line-height: 1.55;
      }


      .talent-group__lead {
        max-width: 820px;
        margin:
          12px 0 28px;
        color: var(--muted);
        font-size: 14px;
        line-height: 1.9;
      }


      .talent-cards--group {
        margin-top: 0;
      }


      .talent-card-body {
        padding-bottom: 22px;
      }


      .talent-catchphrase {
        margin:
          7px 0 0;
        color: var(--muted);
        font-family:
          "Noto Serif JP",
          serif;
        font-size: 12.5px;
        font-weight: 400;
        line-height: 1.65;
        letter-spacing: .025em;
        min-height: 3.3em;
      }



      .casting-support-section {
        padding: 92px 0;
        background: #fff;
        border-bottom:
          1px solid var(--line);
      }


      .casting-support-grid {
        display: grid;

        grid-template-columns:
          minmax(0, .75fr)
          minmax(360px, 1.25fr);

        gap: 70px;

        align-items: start;
      }


      .casting-support-heading h2 {
        color: var(--ink);

        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          clamp(
            32px,
            3.6vw,
            46px
          );

        font-weight: 500;

        line-height: 1.55;
      }


      .casting-support-body {
        color: var(--text);

        font-size: 15px;

        line-height: 2;
      }


      .casting-support-key {
        margin-top: 24px;

        padding:
          22px 24px;

        color: var(--ink);

        background:
          var(--cream);

        border-left:
          2px solid var(--gold);

        font-family:
          "Noto Serif JP",
          serif;

        font-size: 20px;

        font-weight: 600;

        line-height: 1.85;
      }


      .casting-support-note {
        margin-top: 22px;

        color: var(--muted);

        font-size: 13.5px;

        line-height: 1.95;
      }


      .casting-support-actions {
        display: flex;

        flex-wrap: wrap;

        gap: 12px;

        margin-top: 26px;
      }



      @media (
        max-width: 820px
      ) {

        .casting-support-section {
          padding: 68px 0;
        }


        .casting-support-grid {
          grid-template-columns:
            1fr;

          gap: 30px;
        }


        .casting-support-heading h2 {
          font-size: 30px;
        }

      }



      @media (
        max-width: 600px
      ) {

        .talent-group {
          margin-top: 42px;
        }


        .talent-group + .talent-group {
          margin-top: 54px;
          padding-top: 42px;
        }


        .talent-group__title {
          font-size: 22px;
        }


        .talent-group__lead {
          font-size: 13px;

          margin-bottom:
            22px;
        }


        .talent-catchphrase {
          font-size: 12px;

          line-height: 1.6;
        }


        .casting-support-section {
          padding: 56px 0;
        }


        .casting-support-heading h2 {
          font-size: 26px;
        }


        .casting-support-key {
          padding:
            18px 19px;

          font-size: 17px;
        }


        .casting-support-body {
          font-size: 14px;
        }

      }

    `;


    document.head.appendChild(
      style
    );

  };


  const init = () => {

    mutateTalentData();

    injectStyles();

    simplifyHeader();

    updateHero();

    updateHeroCta();

    updateServiceCopy();

    removeIntro();

    rebuildCards();

    insertCastingSupport();

    updateFaq();

    updateFinalCta();

  };


  if (
    document.readyState ===
    'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      init,
      {
        once: true
      }
    );

  } else {

    init();

  }

})();
/* =========================================================
   HÉLMIO PROFESSIONALS
   FINAL CONTENT / ORDER UPDATE
   ========================================================= */

(() => {
  'use strict';


  /* =========================================================
     HERO
     ========================================================= */

  const updateHero = () => {

    const title =
      document.getElementById('professionals-title');

    if (title) {
      title.innerHTML = `
        <span>
          <em class="hero-highlight">
            局アナのキャスティングから、
          </em>
        </span>
        <span>
          準備を含めたご相談まで。
        </span>
      `;
    }


    const lead =
      document.querySelector('.pro-hero__lead');

    if (lead) {
      lead.textContent =
        'HELMIOは、元放送局アナウンサーとマーケティングチームにより、展示会の商談につながるコミュニケーションを設計する会社です。';
    }


    const primary =
      document.querySelector(
        '.pro-hero .button--primary'
      );

    if (primary) {
      primary.textContent =
        '候補者・料金目安を相談する';

      primary.setAttribute(
        'href',
        '#casting-form'
      );
    }


    const secondary =
      document.querySelector(
        '.pro-hero .button--secondary'
      );

    if (secondary) {
      secondary.textContent =
        'アナウンサーを見る';

      secondary.setAttribute(
        'href',
        '#professionals'
      );
    }

  };


  /* =========================================================
     HEADER
     ========================================================= */

  const updateHeader = () => {

    const nav =
      document.getElementById('siteNav');

    if (!nav) return;


    nav.innerHTML = `
      <a href="#professionals">
        候補者を見る
      </a>

      <a href="#service">
        サービス
      </a>

      <a
        class="nav-contact"
        href="#casting-form"
      >
        ご相談
      </a>
    `;


    const menuButton =
      document.querySelector('.menu-button');


    nav.querySelectorAll('a').forEach(link => {

      link.addEventListener('click', () => {

        nav.classList.remove('open');

        if (menuButton) {
          menuButton.setAttribute(
            'aria-expanded',
            'false'
          );
        }

        document.body.classList.remove(
          'is-menu-open'
        );

      });

    });

  };


  /* =========================================================
     OLD CASTING SUPPORT REMOVE
     ========================================================= */

  const removeCastingSupport = () => {

    const section =
      document.getElementById(
        'casting-support'
      );

    if (section) {
      section.remove();
    }

  };


  /* =========================================================
     HELMIO FEATURES
     ========================================================= */

  const updateFeatures = () => {

    const section =
      document.getElementById('features');

    if (!section) return;


    const lead =
      section.querySelector(
        '.section-head > p'
      );

    if (lead) {
      lead.textContent =
        'キャスティングだけでなく、展示会の目的から逆算した「伝え方」まで。必要な領域を一つの窓口で支援します。';
    }


    const list =
      section.querySelector(
        '.feature-list'
      );

    if (!list) return;


    list.innerHTML = `

      <!-- =========================
           01
           ========================= -->

      <article class="feature-item">

        <span class="feature-item__number">
          01
        </span>


        <div
          class="feature-item__icon"
          aria-hidden="true"
        >

          <svg viewBox="0 0 64 64">

            <circle
              cx="24"
              cy="31"
              r="14"
            />

            <path
              d="
                M10 31h28
                M24 17c5 5 7 10 7 14s-2 9-7 14
                M24 17c-5 5-7 10-7 14s2 9 7 14
              "
            />

            <path
              class="accent"
              d="
                M39 18l6-5 3 5 7-2-2 7
                5 4-6 3 1 7-7-2-4 6-4-6
              "
            />

          </svg>

        </div>


        <div class="feature-item__content">

          <h3>
            全国のネットワークから、
            案件に合うプロフェッショナルを提案
          </h3>

          <p>
            元アナウンサーの代表が築いてきた、
            全国のアナウンサーのネットワークから、
            商材や展示会の目的に合う人材をご提案します。
            <br><br>
            大切な展示会だからこそ、
            出演者選びを一か八かにしない。
            ただきれいに読むだけではなく、
            目の前の来場者の足を止め、
            商品の魅力を伝えることが必要です。
            内容やコアメッセージを分かりやすく、
            人の心を動かせる
            「伝えるプロ」のみを選定します。
          </p>

        </div>

      </article>



      <!-- =========================
           02
           ========================= -->

      <article class="feature-item">

        <span class="feature-item__number">
          02
        </span>


        <div
          class="feature-item__icon"
          aria-hidden="true"
        >

          <svg viewBox="0 0 64 64">

            <circle
              cx="32"
              cy="21"
              r="9"
            />

            <path
              d="
                M16 52c1-11 7-17 16-17s15 6 16 17
              "
            />

            <path
              d="
                M22 15c2-6 17-8 20 2
                M24 38l8 8 8-8
              "
            />

            <path
              class="accent"
              d="M29 46l3 5 3-5"
            />

          </svg>

        </div>


        <div class="feature-item__content">

          <h3>
            「伝える」プロが、
            メッセージ設計からプレゼン準備まで
          </h3>

          <p>
            出演者の手配だけでなく、
            必要に応じてメッセージ設計、
            プレゼン構成、台本、スライド、
            読み合わせ、リハーサル、
            リスト獲得につなげる動線設計まで
            対応します。
            <br><br>
            すべてをお任せいただく必要はありません。
            キャスティングのみ、
            台本制作のみなど、
            案件に必要な部分だけ
            ご依頼いただけます。
          </p>

        </div>

      </article>



      <!-- =========================
           03
           ========================= -->

      <article class="feature-item">

        <span class="feature-item__number">
          03
        </span>


        <div
          class="feature-item__icon"
          aria-hidden="true"
        >

          <svg viewBox="0 0 64 64">

            <path
              d="
                M16 9h26l8 8v38H16z
              "
            />

            <path
              d="
                M42 9v10h8
                M23 28h19
                M23 35h13
              "
            />

            <path
              class="accent"
              d="
                M35 47l14-14 5 5-14 14-7 2z
              "
            />

          </svg>

        </div>


        <div class="feature-item__content">

          <h3>
            アナウンサー × マーケティングの視点で
            「伝え方」を設計
          </h3>

          <p>
            代表は放送局アナウンサー、
            展示会ナレーターとして
            「伝える側」を経験する一方、
            スタートアップでは
            マーケティング責任者として、
            出展する側からも
            数々の展示会に携わってきました。
            <br><br>
            展示会は、
            説明すること自体が目的ではありません。
            <strong>
              商品やサービスを理解してもらい、
              記憶に残し、
              その先の商談や認知につなげること。
            </strong>
            <br><br>
            必要に応じて、
            アナウンサーの派遣に加え、
            その目的から逆算して、
            誰が、何を、どの順番で、
            どう伝えるかを設計します。
          </p>

        </div>

      </article>



      <!-- =========================
           04
           ========================= -->

      <article class="feature-item">

        <span class="feature-item__number">
          04
        </span>


        <div
          class="feature-item__icon"
          aria-hidden="true"
        >

          <svg viewBox="0 0 64 64">

            <circle
              cx="20"
              cy="22"
              r="7"
            />

            <circle
              cx="44"
              cy="22"
              r="7"
            />

            <path
              d="
                M10 51c1-9 5-14 10-14s9 5 10 14
                M34 51c1-9 5-14 10-14s9 5 10 14
              "
            />

            <path
              class="accent"
              d="
                M27 31l5 5 5-5
              "
            />

          </svg>

        </div>


        <div class="feature-item__content">

          <h3>
            既存の制作体制を変えず、
            必要な領域だけ
          </h3>

          <p>
            制作会社・広告代理店の
            既存の制作体制を変えることなく、
            キャスティングのみ、
            台本制作のみ、
            プレゼン準備のみなど、
            案件に必要な領域だけ
            お任せいただけます。
            <br><br>
            若手MCの起用に、
            元局アナウンサーによる
            台本・表現監修を組み合わせるなど、
            ご予算と求める品質に応じた
            体制設計も可能です。
          </p>

        </div>

      </article>

    `;

  };


  /* =========================================================
     SERVICE
     写真・画像部分は一切変更しない
     ========================================================= */

  const updateServices = () => {

    const service =
      document.getElementById('service');

    if (!service) return;


    const intro =
      service.querySelector(
        '.section-head > p'
      );

    if (intro) {
      intro.textContent =
        'キャスティングから、メッセージ・プレゼンテーション制作、展示会コミュニケーション設計まで。案件に必要な領域だけご依頼いただけます。';
    }


    const cards =
      service.querySelectorAll(
        '.service-card'
      );


    /* -------------------------
       01 キャスティング
       ------------------------- */

    if (cards[0]) {

      const body =
        cards[0].querySelector(
          '.service-card__body'
        );

      if (body) {

        body.innerHTML = `

          <span class="service-card__number">
            01
          </span>

          <h3>
            キャスティング
          </h3>

          <p class="service-card__catch">
            案件に合う、伝えるプロをご提案
          </p>

          <p>
            元放送局アナウンサーを中心に、
            案件の内容や商材、会場、
            求める雰囲気に合わせて
            人材をご提案します。
            <br><br>
            ナレーター・MCは、
            HELMIOの基準をクリアした
            プロフェッショナルのみを選定。
            出演者のみのご依頼も可能です。
          </p>

          <a
            class="service-card__link"
            href="#professionals"
          >
            候補者を見る
          </a>

        `;

      }

    }


    /* -------------------------
       02
       メッセージ・
       プレゼンテーション制作
       ------------------------- */

    if (cards[1]) {

      const body =
        cards[1].querySelector(
          '.service-card__body'
        );

      if (body) {

        body.innerHTML = `

          <span class="service-card__number">
            02
          </span>

          <h3>
            メッセージ・<br>
            プレゼンテーション制作
          </h3>

          <p class="service-card__catch">
            伝わる内容と、伝わる見せ方をつくる
          </p>

          <p>
            メッセージ設計、
            プレゼン構成、台本、
            スライドを制作。
            <br><br>
            出演者との読み合わせや
            リハーサル、
            表現の調整まで対応します。
          </p>

          <a
            class="service-card__link"
            href="#casting-form"
          >
            制作について相談する
          </a>

        `;

      }

    }


    /* -------------------------
       03
       展示会コミュニケーション設計
       ------------------------- */

    if (cards[2]) {

      const body =
        cards[2].querySelector(
          '.service-card__body'
        );

      if (body) {

        body.innerHTML = `

          <span class="service-card__number">
            03
          </span>

          <h3>
            展示会<br>
            コミュニケーション設計
          </h3>

          <p class="service-card__catch">
            「伝える」から、その先の商談までを設計
          </p>

          <p>
            来場者の足を止め、
            商品やサービスを理解してもらい、
            リード獲得や営業担当との会話に
            つなげるまでの
            コミュニケーションを設計します。
            <br><br>
            アナウンサーとしての
            「伝える」知見と、
            マーケティングの視点を掛け合わせ、
            <strong class="service-highlight">
              展示会の目的から逆算して設計します。
            </strong>
          </p>

          <a
            class="service-card__link"
            href="#casting-form"
          >
            展示会について相談する
          </a>

        `;

      }

    }

  };


  /* =========================================================
     SECTION ORDER

     HERO
       ↓
     FEATURES
       ↓
     PROFESSIONALS
       ↓
     SERVICE
       ↓
     SELECTED WORKS
       ↓
     FLOW
       ↓
     FAQ / CONTACT
     ========================================================= */

  const reorderSections = () => {

    const hero =
      document.querySelector('.pro-hero');

    const features =
      document.getElementById('features');

    const professionals =
      document.getElementById(
        'professionals'
      );

    const service =
      document.getElementById('service');


    if (
      hero &&
      features
    ) {

      hero.insertAdjacentElement(
        'afterend',
        features
      );

    }


    if (
      features &&
      professionals
    ) {

      features.insertAdjacentElement(
        'afterend',
        professionals
      );

    }


    if (
      professionals &&
      service
    ) {

      professionals.insertAdjacentElement(
        'afterend',
        service
      );

    }

  };


  /* =========================================================
     STYLE
     既存トンマナ・写真は変更しない
     ========================================================= */

  const injectStyles = () => {

    if (
      document.getElementById(
        'helmio-final-content-styles'
      )
    ) {
      return;
    }


    const style =
      document.createElement('style');


    style.id =
      'helmio-final-content-styles';


    style.textContent = `

      #features
      .feature-item__content
      p {
        line-height: 2;
      }


      #features
      .feature-item__content
      strong {
        color: var(--ink);
        font-weight: 700;
      }


      #service
      .service-card__catch {
        margin:
          12px 0 14px;

        color:
          var(--ink);

        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          17px;

        font-weight:
          600;

        line-height:
          1.7;
      }


      #service
      .service-card__body
      > p:not(.service-card__catch) {
        line-height: 1.9;
      }


      @media (
        max-width: 600px
      ) {

        #features
        .feature-item__content
        p {
          line-height: 1.9;
        }


        #service
        .service-card__catch {
          font-size: 16px;
        }

      }

    `;


    document.head.appendChild(style);

  };


  /* =========================================================
     APPLY
     ========================================================= */

  const applyFinalUpdate = () => {

    removeCastingSupport();

    injectStyles();

    updateHeader();

    updateHero();

    updateFeatures();

    updateServices();

    reorderSections();

  };


  if (
    document.readyState === 'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      applyFinalUpdate,
      {
        once: true
      }
    );

  } else {

    applyFinalUpdate();

  }

})();
/* =========================================================
   HÉLMIO COMPANY SECTION
   MESSAGE / COMPANY PROFILE / ACHIEVEMENTS
   ========================================================= */

(() => {
  'use strict';


  const escapeHtml = value =>
    String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');


  const buildCompanySection = () => {

    if (
      document.getElementById(
        'company-overview'
      )
    ) {
      return;
    }


    const finalCta =
      document.querySelector(
        '.final-cta'
      );

    if (!finalCta) return;


    const section =
      document.createElement(
        'section'
      );


    section.id =
      'company-overview';

    section.className =
      'helmio-company-section';


    section.innerHTML = `

      <div class="container">


        <!-- =========================
             MESSAGE
             ========================= -->

        <div class="helmio-company-message">

          <p class="section-label">
            MESSAGE
          </p>


          <div class="helmio-company-message__grid">

            <div>

              <h2>
                伝えることを、<br>
                商談の入口に。
              </h2>

              <p class="helmio-company-signature">
                株式会社HELMIO 代表<br>
                <strong>新島 麻生</strong>
              </p>

            </div>


            <div class="helmio-company-message__body">

              <p>
                放送局で「伝える」仕事をしてきました。
              </p>

              <p>
                その後、スタートアップの
                マーケティング責任者として、
                展示会を成果につなげる側も経験しました。
              </p>

              <p>
                展示会では、
                誰が、何を、どの順番で伝えるかで、
                その先の会話が変わります。
              </p>

              <p>
                HELMIOは、
                人材とメッセージを分けず、
                必要な領域まで一緒に設計します。
              </p>

              <p>
                商品の魅力が伝わり、
                その先の商談につながる場をつくります。
              </p>

            </div>

          </div>

        </div>



        <!-- =========================
             COMPANY PROFILE
             ========================= -->

        <div class="helmio-company-profile">

          <div class="helmio-company-heading">

            <div>

              <p class="section-label">
                COMPANY
              </p>

              <h2>
                会社情報
              </h2>

            </div>

          </div>


          <dl class="helmio-company-table">

            <div>
              <dt>会社名</dt>
              <dd>株式会社HELMIO</dd>
            </div>

            <div>
              <dt>代表</dt>
              <dd>新島 麻生</dd>
            </div>

            <div>
              <dt>所在地</dt>
              <dd>
                〒107-0062<br>
                東京都港区南青山3丁目1番36号
                青山丸竹ビル6F
              </dd>
            </div>

            <div>
              <dt>設立</dt>
              <dd>2026年7月</dd>
            </div>

            <div>

              <dt>
                事業内容
              </dt>

              <dd>

                <ul>

                  <li>
                    BtoB企業向け広報・PR支援
                  </li>

                  <li>
                    ニュースポジション設計、
                    広報戦略、
                    メディアリレーション
                  </li>

                  <li>
                    コンテンツ・
                    メッセージ設計
                  </li>

                  <li>
                    展示会・発表会の
                    コミュニケーション設計
                  </li>

                  <li>
                    司会・アナウンサー・
                    ナレーターのキャスティング
                  </li>

                </ul>

              </dd>

            </div>

          </dl>

        </div>



        <!-- =========================
             ACHIEVEMENTS
             ========================= -->

        <div
          class="helmio-company-achievements"
          id="helmio-company-achievements"
        >

          <header
            class="helmio-company-achievements__header"
          >

            <div>

              <p class="section-label">
                ACHIEVEMENTS
              </p>

              <h2>
                代表・参画メンバーの<br>
                経歴・実績
              </h2>

            </div>


            <div>

              <p>
                報道、企業イベント、
                展示会、映像、広告出演など、
                代表者および参画プロフェッショナルが
                これまでに担当した経歴・実績を
                分野別に掲載しています。
              </p>

              <p class="helmio-company-achievements__note">
                ※株式会社HELMIOの支援実績ではなく、
                設立以前を含む代表者および
                参画プロフェッショナル個人の
                担当実績を含みます。
              </p>

            </div>

          </header>


          <div
            class="helmio-achievement-accordion"
            id="helmioAchievementAccordion"
          >

            <p class="helmio-achievement-loading">
              実績を読み込んでいます。
            </p>

          </div>

        </div>


      </div>

    `;


    finalCta.insertAdjacentElement(
      'beforebegin',
      section
    );

  };


  const loadAchievements = async () => {

    const container =
      document.getElementById(
        'helmioAchievementAccordion'
      );

    if (!container) return;


    try {

      const response =
        await fetch(
          'company.html',
          {
            cache: 'no-store'
          }
        );


      if (!response.ok) {
        throw new Error(
          'company.html could not be loaded'
        );
      }


      const html =
        await response.text();


      const doc =
        new DOMParser()
          .parseFromString(
            html,
            'text/html'
          );


      const details =
        Array.from(
          doc.querySelectorAll(
            '.achievement-detail'
          )
        );


      if (!details.length) {
        throw new Error(
          'No achievements found'
        );
      }


      container.innerHTML =
        details.map(
          (item, index) => {

            const number =
              String(index + 1)
                .padStart(
                  2,
                  '0'
                );


            const title =
              item
                .querySelector('h3')
                ?.textContent
                ?.trim() || '実績';


            const rows =
              Array.from(
                item.querySelectorAll(
                  '.achievement-detail__list li'
                )
              );


            const listHtml =
              rows.map(row => `
                <li>
                  ${escapeHtml(
                    row.textContent.trim()
                  )}
                </li>
              `).join('');


            return `

              <details
                class="helmio-achievement-item"
              >

                <summary>

                  <span
                    class="helmio-achievement-number"
                  >
                    ${number}
                  </span>


                  <span
                    class="helmio-achievement-title"
                  >
                    ${escapeHtml(title)}
                  </span>


                  <span
                    class="helmio-achievement-arrow"
                    aria-hidden="true"
                  >
                    ↓
                  </span>

                </summary>


                <div
                  class="helmio-achievement-content"
                >

                  <ul>
                    ${listHtml}
                  </ul>

                </div>

              </details>

            `;

          }
        ).join('');


    } catch (error) {

      container.innerHTML = `

        <div class="helmio-achievement-error">

          <p>
            実績一覧は会社概要ページでも
            ご覧いただけます。
          </p>

          <a
            href="company.html#achievement-index"
          >
            実績を見る →
          </a>

        </div>

      `;

    }

  };


  const injectCompanyStyles = () => {

    if (
      document.getElementById(
        'helmio-company-section-styles'
      )
    ) {
      return;
    }


    const style =
      document.createElement(
        'style'
      );


    style.id =
      'helmio-company-section-styles';


    style.textContent = `

      .helmio-company-section {
        padding:
          110px 0 80px;

        background:
          #faf8f3;

        border-top:
          1px solid var(--line);
      }


      /* MESSAGE */

      .helmio-company-message {
        padding-bottom:
          100px;
      }


      .helmio-company-message__grid {
        display:
          grid;

        grid-template-columns:
          minmax(280px, .8fr)
          minmax(0, 1.2fr);

        gap:
          90px;

        margin-top:
          34px;
      }


      .helmio-company-message h2 {
        color:
          var(--ink);

        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          clamp(
            31px,
            3.5vw,
            48px
          );

        font-weight:
          500;

        line-height:
          1.65;
      }


      .helmio-company-message__body {
        color:
          var(--text);

        font-size:
          15px;

        line-height:
          2;
      }


      .helmio-company-message__body p + p {
        margin-top:
          8px;
      }


      .helmio-company-signature {
        margin-top:
          30px;

        color:
          var(--muted);

        font-size:
          12px;

        line-height:
          1.8;
      }


      .helmio-company-signature strong {
        color:
          var(--ink);

        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          18px;

        font-weight:
          500;
      }



      /* COMPANY */

      .helmio-company-profile {
        padding:
          90px 0;

        border-top:
          1px solid var(--line);
      }


      .helmio-company-heading h2,
      .helmio-company-achievements h2 {
        margin-top:
          10px;

        color:
          var(--ink);

        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          clamp(
            32px,
            4vw,
            48px
          );

        font-weight:
          500;

        line-height:
          1.45;
      }


      .helmio-company-table {
        margin-top:
          46px;

        border-top:
          1px solid var(--line);
      }


      .helmio-company-table > div {
        display:
          grid;

        grid-template-columns:
          180px minmax(0, 1fr);

        padding:
          22px 0;

        border-bottom:
          1px solid var(--line);
      }


      .helmio-company-table dt {
        color:
          var(--muted);

        font-size:
          13px;

        font-weight:
          700;
      }


      .helmio-company-table dd {
        margin:
          0;

        color:
          var(--ink);

        font-size:
          14px;

        line-height:
          1.9;
      }


      .helmio-company-table ul {
        margin:
          0;

        padding-left:
          1.2em;
      }



      /* ACHIEVEMENTS */

      .helmio-company-achievements {
        padding-top:
          90px;

        border-top:
          1px solid var(--line);
      }


      .helmio-company-achievements__header {
        display:
          grid;

        grid-template-columns:
          minmax(280px, .8fr)
          minmax(0, 1.2fr);

        gap:
          90px;
      }


      .helmio-company-achievements__header
      > div:last-child {
        color:
          var(--text);

        font-size:
          14px;

        line-height:
          1.9;
      }


      .helmio-company-achievements__note {
        margin-top:
          14px;

        color:
          var(--muted);

        font-size:
          11px;
      }


      .helmio-achievement-accordion {
        display:
          grid;

        grid-template-columns:
          repeat(
            2,
            minmax(0, 1fr)
          );

        margin-top:
          48px;

        border-top:
          1px solid var(--line);

        border-left:
          1px solid var(--line);
      }


      .helmio-achievement-item {
        border-right:
          1px solid var(--line);

        border-bottom:
          1px solid var(--line);

        background:
          rgba(
            255,
            255,
            255,
            .55
          );
      }


      .helmio-achievement-item summary {
        display:
          grid;

        grid-template-columns:
          48px minmax(0, 1fr) 32px;

        gap:
          18px;

        align-items:
          center;

        min-height:
          76px;

        padding:
          18px;

        cursor:
          pointer;

        list-style:
          none;
      }


      .helmio-achievement-item
      summary::-webkit-details-marker {
        display:
          none;
      }


      .helmio-achievement-number {
        color:
          var(--gold);

        font-family:
          "Cormorant Garamond",
          serif;

        font-size:
          17px;
      }


      .helmio-achievement-title {
        color:
          var(--ink);

        font-size:
          13px;

        font-weight:
          700;

        line-height:
          1.6;
      }


      .helmio-achievement-arrow {
        color:
          var(--navy);

        font-size:
          17px;

        text-align:
          center;

        transition:
          transform .2s ease;
      }


      .helmio-achievement-item[open]
      .helmio-achievement-arrow {
        transform:
          rotate(180deg);
      }


      .helmio-achievement-content {
        padding:
          0 28px 28px 66px;
      }


      .helmio-achievement-content ul {
        margin:
          0;

        padding-left:
          1.1em;
      }


      .helmio-achievement-content li {
        color:
          var(--text);

        font-size:
          12.5px;

        line-height:
          1.85;
      }


      .helmio-achievement-content
      li + li {
        margin-top:
          7px;
      }


      .helmio-achievement-loading,
      .helmio-achievement-error {
        grid-column:
          1 / -1;

        padding:
          28px;

        color:
          var(--muted);
      }


      .helmio-achievement-error a {
        display:
          inline-block;

        margin-top:
          12px;

        color:
          var(--navy);

        font-weight:
          700;
      }



      @media (
        max-width: 820px
      ) {

        .helmio-company-section {
          padding:
            80px 0 60px;
        }


        .helmio-company-message__grid,
        .helmio-company-achievements__header {
          grid-template-columns:
            1fr;

          gap:
            34px;
        }


        .helmio-company-table
        > div {
          grid-template-columns:
            120px minmax(0, 1fr);
        }


        .helmio-achievement-accordion {
          grid-template-columns:
            1fr;
        }

      }


      @media (
        max-width: 600px
      ) {

        .helmio-company-message {
          padding-bottom:
            70px;
        }


        .helmio-company-profile {
          padding:
            70px 0;
        }


        .helmio-company-achievements {
          padding-top:
            70px;
        }


        .helmio-company-message h2 {
          font-size:
            28px;
        }


        .helmio-company-table
        > div {
          grid-template-columns:
            1fr;

          gap:
            8px;
        }


        .helmio-achievement-item summary {
          grid-template-columns:
            38px
            minmax(0, 1fr)
            26px;

          gap:
            10px;

          padding:
            16px 12px;
        }


        .helmio-achievement-content {
          padding:
            0 18px 22px 50px;
        }

      }

    `;


    document.head.appendChild(
      style
    );

  };


  const initCompanySection =
    async () => {

      injectCompanyStyles();

      buildCompanySection();

      await loadAchievements();

    };


  if (
    document.readyState ===
    'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      initCompanySection,
      {
        once: true
      }
    );

  } else {

    initCompanySection();

  }

})();
/* =========================================================
   HÉLMIO PROFESSIONALS
   FINAL MASTER LAYOUT
   ========================================================= */

(() => {
  'use strict';


  /* =========================================================
     HELPERS
     ========================================================= */

  const escapeHtml = value =>
    String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');


  /* =========================================================
     HEADER
     ========================================================= */

  const updateHeader = () => {

    const nav =
      document.getElementById('siteNav');

    if (!nav) return;


    nav.innerHTML = `
      <a href="#service">
        サービス
      </a>

      <a href="#professionals">
        候補者を見る
      </a>

      <a
        class="nav-contact"
        href="#casting-form"
      >
        ご相談
      </a>
    `;


    const menuButton =
      document.querySelector('.menu-button');


    nav.querySelectorAll('a')
      .forEach(link => {

        link.addEventListener(
          'click',
          () => {

            nav.classList.remove('open');

            if (menuButton) {
              menuButton.setAttribute(
                'aria-expanded',
                'false'
              );
            }

            document.body.classList.remove(
              'is-menu-open'
            );

          }
        );

      });

  };


  /* =========================================================
     HERO
     ========================================================= */

  const updateHero = () => {

    const title =
      document.getElementById(
        'professionals-title'
      );


    if (title) {

      title.innerHTML = `
        <span>
          <em class="hero-highlight">
            局アナのキャスティングから、
          </em>
        </span>

        <span>
          準備を含めたご相談まで。
        </span>
      `;

    }


    const lead =
      document.querySelector(
        '.pro-hero__lead'
      );


    if (lead) {

      lead.textContent =
        'HELMIOは、元放送局アナウンサーとマーケティングチームにより、展示会の商談につながるコミュニケーションを設計する会社です。';

    }


    const primary =
      document.querySelector(
        '.pro-hero .button--primary'
      );


    if (primary) {

      primary.textContent =
        '候補者・料金目安を相談する';

      primary.setAttribute(
        'href',
        '#casting-form'
      );

    }


    const secondary =
      document.querySelector(
        '.pro-hero .button--secondary'
      );


    if (secondary) {

      secondary.textContent =
        'アナウンサーを見る';

      secondary.setAttribute(
        'href',
        '#professionals'
      );

    }

  };


  /* =========================================================
     REMOVE OLD / DUPLICATED SECTIONS
     ========================================================= */

  const removeOldSections = () => {

    document
      .getElementById('casting-support')
      ?.remove();


    document
      .getElementById('selected-works')
      ?.remove();

  };


  /* =========================================================
     FEATURES
     ========================================================= */

  const updateFeatures = () => {

    const section =
      document.getElementById('features');

    if (!section) return;


    const lead =
      section.querySelector(
        '.section-head > p'
      );


    if (lead) {

      lead.textContent =
        'キャスティングだけでなく、展示会の目的から逆算した「伝え方」まで。必要な領域を一つの窓口で支援します。';

    }


    const list =
      section.querySelector(
        '.feature-list'
      );

    if (!list) return;


    list.innerHTML = `

      <article class="feature-item">

        <span class="feature-item__number">
          01
        </span>


        <div
          class="feature-item__icon"
          aria-hidden="true"
        >

          <svg viewBox="0 0 64 64">

            <circle
              cx="24"
              cy="31"
              r="14"
            />

            <path
              d="
                M10 31h28
                M24 17c5 5 7 10 7 14s-2 9-7 14
                M24 17c-5 5-7 10-7 14s2 9 7 14
              "
            />

            <path
              class="accent"
              d="
                M39 18l6-5 3 5 7-2-2 7
                5 4-6 3 1 7-7-2-4 6-4-6
              "
            />

          </svg>

        </div>


        <div class="feature-item__content">

          <h3>
            全国ネットワークから、
            案件に合うプロを
          </h3>

          <p>
            元アナウンサーの代表が築いた
            全国のネットワークから、
            商材・目的・現場に合う人材を選定。
            <br>
            読みの上手さだけでなく、
            来場者の足を止め、
            理解につなげる力まで見極めます。
          </p>

        </div>

      </article>



      <article class="feature-item">

        <span class="feature-item__number">
          02
        </span>


        <div
          class="feature-item__icon"
          aria-hidden="true"
        >

          <svg viewBox="0 0 64 64">

            <circle
              cx="32"
              cy="21"
              r="9"
            />

            <path
              d="
                M16 52c1-11 7-17 16-17s15 6 16 17
              "
            />

            <path
              d="
                M22 15c2-6 17-8 20 2
                M24 38l8 8 8-8
              "
            />

            <path
              class="accent"
              d="
                M29 46l3 5 3-5
              "
            />

          </svg>

        </div>


        <div class="feature-item__content">

          <h3>
            メッセージ設計から、
            プレゼン準備まで
          </h3>

          <p>
            キャスティングに加え、
            メッセージ設計、台本、スライド、
            読み合わせ、リハーサルまで
            必要な範囲を支援。
            <br>
            部分的なご依頼にも対応します。
          </p>

        </div>

      </article>



      <article class="feature-item">

        <span class="feature-item__number">
          03
        </span>


        <div
          class="feature-item__icon"
          aria-hidden="true"
        >

          <svg viewBox="0 0 64 64">

            <path
              d="
                M16 9h26l8 8v38H16z
              "
            />

            <path
              d="
                M42 9v10h8
                M23 28h19
                M23 35h13
              "
            />

            <path
              class="accent"
              d="
                M35 47l14-14 5 5-14 14-7 2z
              "
            />

          </svg>

        </div>


        <div class="feature-item__content">

          <h3>
            アナウンサー × マーケティングで
            「伝え方」を設計
          </h3>

          <p>
            「伝える側」と「出展する側」、
            両方の経験をもとに、
            展示会の目的から逆算。
            <br>
            誰が、何を、どう伝えるかを設計します。
          </p>

        </div>

      </article>



      <article class="feature-item">

        <span class="feature-item__number">
          04
        </span>


        <div
          class="feature-item__icon"
          aria-hidden="true"
        >

          <svg viewBox="0 0 64 64">

            <circle
              cx="20"
              cy="22"
              r="7"
            />

            <circle
              cx="44"
              cy="22"
              r="7"
            />

            <path
              d="
                M10 51c1-9 5-14 10-14s9 5 10 14
                M34 51c1-9 5-14 10-14s9 5 10 14
              "
            />

            <path
              class="accent"
              d="
                M27 31l5 5 5-5
              "
            />

          </svg>

        </div>


        <div class="feature-item__content">

          <h3>
            既存体制を変えず、
            必要な領域だけ
          </h3>

          <p>
            制作会社・広告代理店の体制に合わせ、
            キャスティング、台本、
            プレゼン準備など
            必要な部分だけを補完。
            <br>
            若手MC＋元局アナ監修など、
            予算と品質に応じた
            体制設計も可能です。
          </p>

        </div>

      </article>

    `;

  };


  /* =========================================================
     SERVICES
     ========================================================= */

  const updateServices = () => {

    const section =
      document.getElementById('service');

    if (!section) return;


    const intro =
      section.querySelector(
        '.section-head > p'
      );


    if (intro) {

      intro.textContent =
        'キャスティングから、メッセージ・プレゼン制作、展示会コミュニケーション設計まで。必要な領域だけご依頼いただけます。';

    }


    const cards =
      section.querySelectorAll(
        '.service-card'
      );


    /* 01 */

    if (cards[0]) {

      const body =
        cards[0].querySelector(
          '.service-card__body'
        );


      if (body) {

        body.innerHTML = `

          <span class="service-card__number">
            01
          </span>

          <h3>
            キャスティング
          </h3>

          <p class="service-card__catch">
            案件に合う、
            伝えるプロをご提案
          </p>

          <p>
            元放送局アナウンサーを中心に、
            商材・目的・現場に合う人材を選定。
            出演者のみのご依頼も可能です。
          </p>

          <a
            class="service-card__link"
            href="#professionals"
          >
            候補者を見る
          </a>

        `;

      }

    }


    /* 02 */

    if (cards[1]) {

      const media =
        cards[1].querySelector(
          '.service-card__media'
        );


      const image =
        media?.querySelector('img');


      const fallback =
        media?.querySelector(
          '.service-card__fallback'
        );


      if (image) {

        image.src =
          'service-presentation.png';

        image.alt =
          'メッセージ・プレゼンテーション制作の打ち合わせ';

      }


      if (fallback) {

        fallback.textContent =
          'MESSAGE / PRESENTATION';

      }


      const body =
        cards[1].querySelector(
          '.service-card__body'
        );


      if (body) {

        body.innerHTML = `

          <span class="service-card__number">
            02
          </span>

          <h3>
            メッセージ・<br>
            プレゼン制作
          </h3>

          <p class="service-card__catch">
            伝わる内容と、
            伝わる見せ方をつくる
          </p>

          <p>
            メッセージ設計、構成、
            台本、スライドから、
            読み合わせ・リハーサルまで
            必要な範囲を支援します。
          </p>

          <a
            class="service-card__link"
            href="#casting-form"
          >
            制作について相談する
          </a>

        `;

      }

    }


    /* 03 */

    if (cards[2]) {

      const body =
        cards[2].querySelector(
          '.service-card__body'
        );


      if (body) {

        body.innerHTML = `

          <span class="service-card__number">
            03
          </span>

          <h3>
            展示会<br>
            コミュニケーション設計
          </h3>

          <p class="service-card__catch">
            「伝える」から、
            その先の商談まで
          </p>

          <p>
            来場者の足を止め、
            理解・リード獲得・
            営業との会話につなげるまでを、
            展示会の目的から逆算して設計します。
          </p>

          <a
            class="service-card__link"
            href="#casting-form"
          >
            展示会について相談する
          </a>

        `;

      }

    }

  };


  /* =========================================================
     FLOW
     ========================================================= */

  const updateFlow = () => {

    const section =
      document.getElementById('flow');

    if (!section) return;


    const intro =
      section.querySelector(
        '.section-head > p'
      );


    if (intro) {

      intro.textContent =
        '出演者のみのご依頼から、メッセージ設計・プレゼン制作を含むご相談まで。案件に必要な範囲に合わせて進行します。';

    }


    const grid =
      section.querySelector(
        '.flow-grid'
      );

    if (!grid) return;


    grid.innerHTML = `

      <article class="flow-step">

        <span>01</span>

        <h3>
          お問い合わせ
        </h3>

        <p>
          開催日・会場・案件内容など、
          現時点で分かる範囲を
          お知らせください。
        </p>

      </article>


      <article class="flow-step">

        <span>02</span>

        <h3>
          ご要望の確認・ご提案
        </h3>

        <p>
          展示会の目的や商材、
          必要な支援範囲を確認し、
          出演者や制作内容をご提案します。
        </p>

      </article>


      <article class="flow-step">

        <span>03</span>

        <h3>
          キャスティング・制作準備
        </h3>

        <p>
          出演者の決定、
          台本・スライド制作、
          読み合わせ、リハーサルなど、
          必要な準備を進めます。
        </p>

      </article>


      <article class="flow-step">

        <span>04</span>

        <h3>
          本番
        </h3>

        <p>
          出演者を現場へ送り出し、
          本番までHELMIOがサポートします。
        </p>

      </article>

    `;

  };


  /* =========================================================
     COMPANY / MESSAGE
     ========================================================= */

  const buildCompanySection = () => {

    document
      .getElementById('company-overview')
      ?.remove();


    const faq =
      document.getElementById('faq');


    if (!faq) return;


    const section =
      document.createElement('section');


    section.id =
      'company-overview';


    section.className =
      'helmio-company-section';


    section.innerHTML = `

      <div class="container">


        <!-- MESSAGE -->

        <div class="helmio-message">

          <p class="section-label">
            MESSAGE
          </p>


          <div class="helmio-message__grid">


            <figure class="helmio-message__photo">

              <img
                src="syacho.jpg"
                alt="株式会社HELMIO 代表 新島麻生"
                loading="lazy"
              >

            </figure>


            <div class="helmio-message__copy">

              <h2>
                伝えることを、<br>
                商談の入口に。
              </h2>


              <p>
                放送局アナウンサーとして
                キャスターを経験したのち、
                スタートアップでは
                マーケティング責任者として、
                出展する側からも
                展示会に携わってきました。
                フリーアナウンサーとして
                展示会ナレーターの現場にも
                立っています。
              </p>


              <p>
                展示会は、
                目の前の来場者の関心を瞬時に捉え、
                足を止めてもらい、
                商品の魅力を伝える仕事。
              </p>


              <p class="helmio-message__key">
                HELMIOは、
                その先の商談につながる
                「伝え方」をつくります。
              </p>


              <p class="helmio-message__signature">
                株式会社HELMIO 代表
                <strong>新島 麻生</strong>
              </p>

            </div>

          </div>

        </div>



        <!-- COMPANY -->

        <div class="helmio-company-profile">

          <p class="section-label">
            COMPANY
          </p>

          <h2>
            会社情報
          </h2>


          <dl class="helmio-company-table">

            <div>
              <dt>会社名</dt>
              <dd>株式会社HELMIO</dd>
            </div>

            <div>
              <dt>代表</dt>
              <dd>新島 麻生</dd>
            </div>

            <div>
              <dt>所在地</dt>

              <dd>
                〒107-0062
                東京都港区南青山3丁目1番36号
                青山丸竹ビル6F
              </dd>
            </div>

            <div>
              <dt>設立</dt>
              <dd>2026年7月</dd>
            </div>

            <div>

              <dt>
                事業内容
              </dt>

              <dd>

                <ul>

                  <li>
                    展示会・イベントの
                    コミュニケーション設計
                  </li>

                  <li>
                    メッセージ・
                    プレゼンテーション制作
                  </li>

                  <li>
                    司会・アナウンサー・
                    ナレーターのキャスティング
                  </li>

                  <li>
                    BtoB企業向け広報・PR支援
                  </li>

                  <li>
                    コンテンツ・
                    メッセージ設計
                  </li>

                </ul>

              </dd>

            </div>

          </dl>

        </div>



        <!-- ACHIEVEMENTS -->

        <div
          class="helmio-achievements"
          id="helmio-company-achievements"
        >

          <header class="helmio-achievements__header">

            <div>

              <p class="section-label">
                ACHIEVEMENTS
              </p>

              <h2>
                代表・参画メンバーの<br>
                経歴・実績
              </h2>

            </div>


            <div>

              <p>
                報道、企業イベント、展示会、
                映像、広告出演など、
                代表者および参画プロフェッショナルの
                経歴・実績を分野別に掲載しています。
              </p>

              <p class="helmio-achievements__note">
                ※設立以前を含む、
                代表者および参画プロフェッショナル
                個人の担当実績を含みます。
              </p>

            </div>

          </header>


          <div
            class="helmio-achievement-list"
            id="helmioAchievementAccordion"
          >

            <p class="helmio-achievement-loading">
              実績を読み込んでいます。
            </p>

          </div>

        </div>


      </div>

    `;


    faq.insertAdjacentElement(
      'beforebegin',
      section
    );

  };


  /* =========================================================
     ACHIEVEMENTS
     ========================================================= */

  const loadAchievements = async () => {

    const container =
      document.getElementById(
        'helmioAchievementAccordion'
      );


    if (!container) return;


    try {

      const response =
        await fetch(
          'company.html',
          {
            cache: 'no-store'
          }
        );


      if (!response.ok) {
        throw new Error();
      }


      const html =
        await response.text();


      const doc =
        new DOMParser()
          .parseFromString(
            html,
            'text/html'
          );


      const items =
        Array.from(
          doc.querySelectorAll(
            '.achievement-detail'
          )
        );


      if (!items.length) {
        throw new Error();
      }


      container.innerHTML =
        items.map(
          (item, index) => {

            const number =
              String(index + 1)
                .padStart(2, '0');


            const title =
              item.querySelector('h3')
                ?.textContent
                ?.trim() || '実績';


            const rows =
              Array.from(
                item.querySelectorAll(
                  '.achievement-detail__list li'
                )
              );


            const list =
              rows.map(row => `
                <li>
                  ${escapeHtml(
                    row.textContent.trim()
                  )}
                </li>
              `).join('');


            return `

              <details class="helmio-achievement-item">

                <summary>

                  <span class="helmio-achievement-number">
                    ${number}
                  </span>

                  <span class="helmio-achievement-title">
                    ${escapeHtml(title)}
                  </span>

                  <span
                    class="helmio-achievement-arrow"
                    aria-hidden="true"
                  >
                    ↓
                  </span>

                </summary>


                <div class="helmio-achievement-content">

                  <ul>
                    ${list}
                  </ul>

                </div>

              </details>

            `;

          }
        ).join('');


    } catch (error) {

      container.innerHTML = `

        <div class="helmio-achievement-error">

          <p>
            実績一覧は会社概要ページでも
            ご覧いただけます。
          </p>

          <a href="company.html#achievement-index">
            実績を見る →
          </a>

        </div>

      `;

    }

  };


  /* =========================================================
     FAQ
     ========================================================= */

  const updateFaq = () => {

    const list =
      document.querySelector(
        '#faq .faq-list'
      );


    if (!list) return;


    if (
      !document.getElementById(
        'faq-casting-only'
      )
    ) {

      const item =
        document.createElement('details');


      item.className =
        'faq-item';


      item.id =
        'faq-casting-only';


      item.innerHTML = `

        <summary>
          出演者のみの依頼も可能ですか？
        </summary>

        <div class="faq-answer">
          可能です。
          キャスティングのみ、
          台本制作のみ、
          プレゼン準備のみなど、
          必要な部分だけご依頼いただけます。
        </div>

      `;


      list.prepend(item);

    }

  };


  /* =========================================================
     FINAL CTA
     ========================================================= */

  const updateFinalCta = () => {

    const title =
      document.getElementById(
        'contact-title'
      );


    if (title) {

      title.textContent =
        '候補者プロフィール・料金目安のご相談';

    }


    const section =
      title?.closest('.final-cta');


    const text =
      section?.querySelector(
        '.final-cta__inner > div > p:last-child'
      );


    if (text) {

      text.textContent =
        '出演者のみのご依頼から、メッセージ設計・プレゼン制作まで。案件に必要な範囲をご相談ください。';

    }


    const button =
      section?.querySelector('.button');


    if (button) {

      button.innerHTML =
        '相談する <span aria-hidden="true">→</span>';


      button.setAttribute(
        'href',
        '#casting-form'
      );

    }

  };


  /* =========================================================
     ORDER
     ========================================================= */

  const reorderSections = () => {

    const hero =
      document.querySelector('.pro-hero');

    const features =
      document.getElementById('features');

    const service =
      document.getElementById('service');

    const professionals =
      document.getElementById(
        'professionals'
      );

    const flow =
      document.getElementById('flow');

    const company =
      document.getElementById(
        'company-overview'
      );

    const faq =
      document.getElementById('faq');

    const form =
      document.getElementById(
        'casting-form'
      );

    const finalCta =
      document.querySelector('.final-cta');


    if (hero && features) {

      hero.insertAdjacentElement(
        'afterend',
        features
      );

    }


    if (features && service) {

      features.insertAdjacentElement(
        'afterend',
        service
      );

    }


    if (service && professionals) {

      service.insertAdjacentElement(
        'afterend',
        professionals
      );

    }


    if (professionals && flow) {

      professionals.insertAdjacentElement(
        'afterend',
        flow
      );

    }


    if (flow && company) {

      flow.insertAdjacentElement(
        'afterend',
        company
      );

    }


    if (company && faq) {

      company.insertAdjacentElement(
        'afterend',
        faq
      );

    }


    /*
      FAQ
      ↓
      CTA
      ↓
      お問い合わせフォーム
    */

    if (faq && finalCta) {

      faq.insertAdjacentElement(
        'afterend',
        finalCta
      );

    }


    if (finalCta && form) {

      finalCta.insertAdjacentElement(
        'afterend',
        form
      );

    }

  };


  /* =========================================================
     STYLES
     ========================================================= */

  const injectStyles = () => {

    document
      .getElementById(
        'helmio-final-master-styles'
      )
      ?.remove();


    const style =
      document.createElement('style');


    style.id =
      'helmio-final-master-styles';


    style.textContent = `

      /* ======================
         FEATURES
         ====================== */

      #features
      .feature-item__content
      p {
        line-height: 1.85;
      }


      /* ======================
         SERVICE COMPACT
         ====================== */

      #service .service-card {
        min-height: 0 !important;
      }


      #service .service-card__media {
        aspect-ratio: 1.75 / 1;
      }


      #service
      .service-card:nth-child(2)
      .service-card__media img {
        object-fit: cover;
        object-position: center top;
      }


      #service .service-card__body {
        padding:
          40px 23px 20px;
      }


      #service .service-card h3 {
        font-size: 21px;
        line-height: 1.45;
      }


      #service .service-card__catch {
        margin:
          9px 0 7px;

        color:
          var(--ink);

        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          14px;

        font-weight:
          600;

        line-height:
          1.65;

        text-align:
          center;
      }


      #service
      .service-card__body
      > p:not(
        .service-card__catch
      ) {
        margin-top: 8px;
        font-size: 13px;
        line-height: 1.8;
      }


      #service .service-card__link {
        margin-top: 16px;
        padding-top: 14px;
        font-size: 13px;
      }


      /* ======================
         COMPANY AREA
         ====================== */

      .helmio-company-section {
        padding:
          92px 0;

        background:
          #faf8f3;

        border-top:
          1px solid var(--line);
      }


      /* MESSAGE */

      .helmio-message {
        padding-bottom:
          78px;
      }


      .helmio-message__grid {
        display:
          grid;

        grid-template-columns:
          230px
          minmax(0, 1fr);

        gap:
          54px;

        align-items:
          start;

        max-width:
          900px;

        margin:
          30px auto 0;
      }


      .helmio-message__photo {
        margin: 0;
      }


      .helmio-message__photo img {
        display:
          block;

        width:
          100%;

        aspect-ratio:
          4 / 5;

        object-fit:
          cover;

        object-position:
          center top;

        border-radius:
          10px;

        box-shadow:
          0 15px 34px
          rgba(16,47,82,.08);
      }


      .helmio-message__copy h2 {
        color:
          var(--ink);

        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          clamp(
            28px,
            3vw,
            40px
          );

        font-weight:
          500;

        line-height:
          1.6;
      }


      .helmio-message__copy p {
        margin-top:
          12px;

        color:
          var(--text);

        font-size:
          14px;

        line-height:
          1.9;
      }


      .helmio-message__key {
        color:
          var(--ink) !important;

        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          16px !important;

        font-weight:
          600;
      }


      .helmio-message__signature {
        margin-top:
          20px !important;

        color:
          var(--muted) !important;

        font-size:
          11px !important;
      }


      .helmio-message__signature strong {
        margin-left:
          8px;

        color:
          var(--ink);

        font-size:
          15px;
      }


      /* COMPANY */

      .helmio-company-profile {
        padding:
          76px 0;

        border-top:
          1px solid var(--line);
      }


      .helmio-company-profile h2,
      .helmio-achievements h2 {
        margin-top:
          8px;

        color:
          var(--ink);

        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          clamp(
            30px,
            3.6vw,
            44px
          );

        font-weight:
          500;

        line-height:
          1.5;
      }


      .helmio-company-table {
        max-width:
          900px;

        margin:
          38px auto 0;

        border-top:
          1px solid var(--line);
      }


      .helmio-company-table > div {
        display:
          grid;

        grid-template-columns:
          150px
          minmax(0,1fr);

        padding:
          18px 0;

        border-bottom:
          1px solid var(--line);
      }


      .helmio-company-table dt {
        color:
          var(--muted);

        font-size:
          12px;

        font-weight:
          700;
      }


      .helmio-company-table dd {
        margin: 0;

        color:
          var(--ink);

        font-size:
          13.5px;

        line-height:
          1.85;
      }


      .helmio-company-table ul {
        margin: 0;

        padding-left:
          1.15em;
      }


      /* ACHIEVEMENTS */

      .helmio-achievements {
        padding-top:
          76px;

        border-top:
          1px solid var(--line);
      }


      .helmio-achievements__header {
        display:
          grid;

        grid-template-columns:
          minmax(260px,.8fr)
          minmax(0,1.2fr);

        gap:
          60px;
      }


      .helmio-achievements__header
      > div:last-child {
        color:
          var(--text);

        font-size:
          13px;

        line-height:
          1.85;
      }


      .helmio-achievements__note {
        margin-top:
          10px;

        color:
          var(--muted);

        font-size:
          10.5px;
      }


      .helmio-achievement-list {
        display:
          grid;

        grid-template-columns:
          repeat(
            2,
            minmax(0,1fr)
          );

        margin-top:
          40px;

        border-top:
          1px solid var(--line);

        border-left:
          1px solid var(--line);
      }


      .helmio-achievement-item {
        background:
          rgba(255,255,255,.5);

        border-right:
          1px solid var(--line);

        border-bottom:
          1px solid var(--line);
      }


      .helmio-achievement-item summary {
        display:
          grid;

        grid-template-columns:
          44px
          minmax(0,1fr)
          26px;

        gap:
          14px;

        align-items:
          center;

        min-height:
          68px;

        padding:
          15px;

        cursor:
          pointer;

        list-style:
          none;
      }


      .helmio-achievement-item
      summary::-webkit-details-marker {
        display:
          none;
      }


      .helmio-achievement-number {
        color:
          var(--gold);

        font-family:
          "Cormorant Garamond",
          serif;

        font-size:
          16px;
      }


      .helmio-achievement-title {
        color:
          var(--ink);

        font-size:
          12.5px;

        font-weight:
          700;

        line-height:
          1.55;
      }


      .helmio-achievement-arrow {
        color:
          var(--navy);

        text-align:
          center;

        transition:
          transform .2s ease;
      }


      .helmio-achievement-item[open]
      .helmio-achievement-arrow {
        transform:
          rotate(180deg);
      }


      .helmio-achievement-content {
        padding:
          0 22px 22px 58px;
      }


      .helmio-achievement-content ul {
        margin: 0;

        padding-left:
          1em;
      }


      .helmio-achievement-content li {
        color:
          var(--text);

        font-size:
          12px;

        line-height:
          1.8;
      }


      .helmio-achievement-content
      li + li {
        margin-top:
          6px;
      }


      .helmio-achievement-loading,
      .helmio-achievement-error {
        grid-column:
          1 / -1;

        padding:
          24px;

        color:
          var(--muted);
      }


      /* ======================
         MOBILE
         ====================== */

      @media (
        max-width: 820px
      ) {

        .helmio-message__grid {
          grid-template-columns:
            180px
            minmax(0,1fr);

          gap:
            34px;
        }


        .helmio-achievements__header {
          grid-template-columns:
            1fr;

          gap:
            26px;
        }


        .helmio-achievement-list {
          grid-template-columns:
            1fr;
        }

      }


      @media (
        max-width: 600px
      ) {

        .helmio-company-section {
          padding:
            64px 0;
        }


        .helmio-message {
          padding-bottom:
            58px;
        }


        .helmio-message__grid {
          grid-template-columns:
            1fr;

          gap:
            24px;

          margin-top:
            24px;
        }


        .helmio-message__photo {
          max-width:
            180px;
        }


        .helmio-message__copy h2 {
          font-size:
            27px;
        }


        .helmio-company-profile {
          padding:
            58px 0;
        }


        .helmio-company-table
        > div {
          grid-template-columns:
            1fr;

          gap:
            6px;
        }


        .helmio-achievements {
          padding-top:
            58px;
        }


        .helmio-achievement-item summary {
          grid-template-columns:
            36px
            minmax(0,1fr)
            24px;

          gap:
            8px;

          padding:
            14px 10px;
        }


        .helmio-achievement-content {
          padding:
            0 16px 20px 46px;
        }


        #service
        .service-card__body {
          padding:
            38px 19px 18px;
        }


        #service
        .service-card h3 {
          font-size:
            20px;
        }

      }

    `;


    document.head.appendChild(
      style
    );

  };


  /* =========================================================
     FINAL APPLY
     ========================================================= */

  const apply = async () => {

    removeOldSections();

    injectStyles();

    updateHeader();

    updateHero();

    updateFeatures();

    updateServices();

    updateFlow();

    buildCompanySection();

    updateFaq();

    updateFinalCta();

    reorderSections();

    await loadAchievements();

  };


  if (
    document.readyState ===
    'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      apply,
      {
        once: true
      }
    );

  } else {

    apply();

  }

})();
/* =========================================================
   PRICE / BUSINESS FINAL FIX
   ========================================================= */

(() => {
  'use strict';


  const updatePrices = () => {

    const cards =
      document.querySelectorAll(
        '#service .service-card'
      );


    const prices = [
      {
        label: '参考価格',
        price: '90,000円〜',
        note: '1日'
      },
      {
        label: '参考価格',
        price: '200,000円〜',
        note: ''
      },
      {
        label: '参考価格',
        price: '200,000円〜',
        note: ''
      }
    ];


    cards.forEach((card, index) => {

      if (!prices[index]) return;


      let price =
        card.querySelector(
          '.service-card__price'
        );


      if (!price) {

        price =
          document.createElement('p');

        price.className =
          'service-card__price';


        const link =
          card.querySelector(
            '.service-card__link'
          );


        if (link) {

          link.insertAdjacentElement(
            'beforebegin',
            price
          );

        }

      }


      const data =
        prices[index];


      price.innerHTML = `

        <span>
          ${data.label}
        </span>

        <strong>
          ${data.price}
        </strong>

        ${
          data.note
            ? `<small>${data.note}</small>`
            : ''
        }

      `;

    });

  };


  const updateBusinessList = () => {

    const rows =
      document.querySelectorAll(
        '#company-overview .helmio-company-table > div'
      );


    rows.forEach(row => {

      const title =
        row.querySelector('dt');


      if (
        !title ||
        title.textContent.trim() !==
        '事業内容'
      ) {
        return;
      }


      const content =
        row.querySelector('dd');


      if (!content) return;


      content.innerHTML = `

        <ul class="helmio-business-list">

          <li>
            展示会マーケティング事業
          </li>

          <li>
            キャスティング事業
          </li>

          <li>
            広報・PR事業
          </li>

        </ul>

      `;

    });

  };


  const addStyles = () => {

    const style =
      document.createElement('style');


    style.textContent = `

      #service
      .service-card__price {
        display:
          flex;

        align-items:
          baseline;

        justify-content:
          center;

        gap:
          8px;

        margin:
          14px 0 0 !important;

        padding-top:
          12px;

        border-top:
          1px solid
          rgba(16,47,82,.10);
      }


      #service
      .service-card__price span {
        color:
          var(--muted);

        font-size:
          10px;

        letter-spacing:
          .08em;
      }


      #service
      .service-card__price strong {
        color:
          var(--navy);

        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          20px;

        font-weight:
          600;
      }


      #service
      .service-card__price small {
        color:
          var(--muted);

        font-size:
          11px;
      }


      .helmio-business-list {
        margin: 0;
        padding: 0 !important;
        list-style: none;
      }


      .helmio-business-list li {
        position: relative;
        padding-left: 14px;
      }


      .helmio-business-list li::before {
        content: "";

        position: absolute;

        top: .75em;
        left: 0;

        width: 4px;
        height: 4px;

        border-radius: 50%;

        background:
          var(--gold);
      }


      .helmio-business-list
      li + li {
        margin-top: 6px;
      }

    `;


    document.head.appendChild(
      style
    );

  };


  const apply = () => {

    updatePrices();

    updateBusinessList();

    addStyles();

  };


  if (
    document.readyState === 'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      apply,
      {
        once: true
      }
    );

  } else {

    apply();

  }

})();
/* =========================================================
   HELMIO FEATURES
   FINAL SIMPLE VERSION
   ========================================================= */

(() => {
  'use strict';


  const updateFeaturesFinal = () => {

    const section =
      document.getElementById('features');

    if (!section) return;


    /* 上の説明文も短く */
    const lead =
      section.querySelector(
        '.section-head > p'
      );

    if (lead) {
      lead.textContent =
        'キャスティングから、展示会の「伝え方」の設計まで。';
    }


    const list =
      section.querySelector(
        '.feature-list'
      );

    if (!list) return;


    list.innerHTML = `

      <!-- =========================
           01
           ========================= -->

      <article class="feature-item feature-item--simple">

        <span class="feature-item__number">
          01
        </span>


        <div
          class="feature-item__icon"
          aria-hidden="true"
        >

          <svg viewBox="0 0 64 64">

            <circle
              cx="24"
              cy="31"
              r="14"
            />

            <path
              d="
                M10 31h28
                M24 17c5 5 7 10 7 14s-2 9-7 14
                M24 17c-5 5-7 10-7 14s2 9 7 14
              "
            />

            <path
              class="accent"
              d="
                M39 18l6-5 3 5 7-2-2 7
                5 4-6 3 1 7-7-2-4 6-4-6
              "
            />

          </svg>

        </div>


        <div class="feature-item__content">

          <h3>
            全国ネットワークから、<br>
            案件に合うプロを
          </h3>

        </div>

      </article>



      <!-- =========================
           02
           ========================= -->

      <article class="feature-item feature-item--simple">

        <span class="feature-item__number">
          02
        </span>


        <div
          class="feature-item__icon"
          aria-hidden="true"
        >

          <svg viewBox="0 0 64 64">

            <circle
              cx="32"
              cy="21"
              r="9"
            />

            <path
              d="
                M16 52c1-11 7-17 16-17s15 6 16 17
              "
            />

            <path
              d="
                M22 15c2-6 17-8 20 2
                M24 38l8 8 8-8
              "
            />

            <path
              class="accent"
              d="
                M29 46l3 5 3-5
              "
            />

          </svg>

        </div>


        <div class="feature-item__content">

          <h3>
            メッセージ設計から、<br>
            プレゼン準備まで
          </h3>

        </div>

      </article>



      <!-- =========================
           03
           ========================= -->

      <article class="feature-item feature-item--simple">

        <span class="feature-item__number">
          03
        </span>


        <div
          class="feature-item__icon"
          aria-hidden="true"
        >

          <svg viewBox="0 0 64 64">

            <path
              d="
                M16 9h26l8 8v38H16z
              "
            />

            <path
              d="
                M42 9v10h8
                M23 28h19
                M23 35h13
              "
            />

            <path
              class="accent"
              d="
                M35 47l14-14 5 5-14 14-7 2z
              "
            />

          </svg>

        </div>


        <div class="feature-item__content">

          <h3>
            展示会の目的から、<br>
            「伝え方」を設計
          </h3>

          <p class="feature-item__short-copy">
            目的から逆算し、
            話す内容と見せ方を設計します。
          </p>

        </div>

      </article>

    `;

  };


  const addFeatureStyles = () => {

    const oldStyle =
      document.getElementById(
        'helmio-feature-final-simple'
      );

    if (oldStyle) {
      oldStyle.remove();
    }


    const style =
      document.createElement('style');


    style.id =
      'helmio-feature-final-simple';


    style.textContent = `

      /* =========================
         FEATURE SIMPLE
         ========================= */

      #features
      .feature-item--simple {
        min-height:
          0;
      }


      #features
      .feature-item--simple
      .feature-item__content {
        display:
          flex;

        flex-direction:
          column;

        justify-content:
          center;
      }


      #features
      .feature-item--simple
      h3 {
        margin:
          0;

        font-size:
          clamp(
            22px,
            2.5vw,
            30px
          );

        line-height:
          1.6;
      }


      #features
      .feature-item__short-copy {
        margin-top:
          12px !important;

        color:
          var(--text);

        font-size:
          14px;

        line-height:
          1.8;
      }


      @media (
        max-width: 600px
      ) {

        #features
        .feature-item--simple
        h3 {
          font-size:
            21px;

          line-height:
            1.55;
        }


        #features
        .feature-item__short-copy {
          margin-top:
            8px !important;

          font-size:
            13px;
        }

      }

    `;


    document.head.appendChild(style);

  };


  const apply = () => {

    updateFeaturesFinal();

    addFeatureStyles();

  };


  if (
    document.readyState === 'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      apply,
      {
        once: true
      }
    );

  } else {

    apply();

  }

})();
/* =========================================================
   HELMIO PROFESSIONALS
   FINAL COMPLETE OVERRIDE
   2026-09-21
   ========================================================= */

(() => {
  'use strict';


  /* =========================================================
     HELPERS
     ========================================================= */

  const escapeHtml = value =>
    String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');


  /* =========================================================
     REMOVE OLD OVERRIDES / DUPLICATES
     ========================================================= */

  const cleanLegacy = () => {

    [
      'helmio-final-content-styles',
      'helmio-company-section-styles',
      'helmio-final-master-styles',
      'helmio-feature-final-simple',
      'helmio-price-styles',
      'helmio-final-complete-styles'
    ].forEach(id => {
      document.getElementById(id)?.remove();
    });


    document
      .getElementById('casting-support')
      ?.remove();


    document
      .getElementById('selected-works')
      ?.remove();


    document
      .getElementById('company-overview')
      ?.remove();

  };


  /* =========================================================
     HEADER
     ========================================================= */

  const updateHeader = () => {

    const nav =
      document.getElementById('siteNav');

    if (!nav) return;


    nav.innerHTML = `

      <a href="#service">
        サービス
      </a>

      <a href="#professionals">
        候補者を見る
      </a>

      <a
        class="nav-contact"
        href="#casting-form"
      >
        ご相談
      </a>

    `;


    const menuButton =
      document.querySelector(
        '.menu-button'
      );


    nav.querySelectorAll('a')
      .forEach(link => {

        link.addEventListener(
          'click',
          () => {

            nav.classList.remove('open');

            document.body.classList.remove(
              'is-menu-open'
            );


            if (menuButton) {

              menuButton.setAttribute(
                'aria-expanded',
                'false'
              );

            }

          }
        );

      });

  };


  /* =========================================================
     HERO
     ========================================================= */

  const updateHero = () => {

    const title =
      document.getElementById(
        'professionals-title'
      );


    if (title) {

      title.innerHTML = `

        <span>
          <em class="hero-highlight">
            局アナのキャスティングから、
          </em>
        </span>

        <span>
          準備を含めたご相談まで。
        </span>

      `;

    }


    const lead =
      document.querySelector(
        '.pro-hero__lead'
      );


    if (lead) {

      lead.textContent =
        'HELMIOは、元放送局アナウンサーとマーケティングチームにより、展示会の商談につながるコミュニケーションを設計する会社です。';

    }


    const primary =
      document.querySelector(
        '.pro-hero .button--primary'
      );


    if (primary) {

      primary.textContent =
        '候補者・料金目安を相談する';

      primary.href =
        '#casting-form';

    }


    const secondary =
      document.querySelector(
        '.pro-hero .button--secondary'
      );


    if (secondary) {

      secondary.textContent =
        'アナウンサーを見る';

      secondary.href =
        '#professionals';

    }

  };


  /* =========================================================
     FEATURES
     ========================================================= */

  const updateFeatures = () => {

    const section =
      document.getElementById(
        'features'
      );

    if (!section) return;


    const lead =
      section.querySelector(
        '.section-head > p'
      );


    if (lead) {

      lead.textContent =
        'キャスティングから、展示会の「伝え方」の設計まで。';

    }


    const list =
      section.querySelector(
        '.feature-list'
      );

    if (!list) return;


    list.innerHTML = `


      <!-- 01 -->

      <article class="feature-item">

        <span class="feature-item__number">
          01
        </span>


        <div
          class="feature-item__icon"
          aria-hidden="true"
        >

          <svg viewBox="0 0 64 64">

            <circle
              cx="24"
              cy="31"
              r="14"
            />

            <path
              d="
                M10 31h28
                M24 17c5 5 7 10 7 14s-2 9-7 14
                M24 17c-5 5-7 10-7 14s2 9 7 14
              "
            />

            <path
              class="accent"
              d="
                M39 18l6-5 3 5 7-2-2 7
                5 4-6 3 1 7-7-2-4 6-4-6
              "
            />

          </svg>

        </div>


        <div class="feature-item__content">

          <h3>
            全国ネットワークから、<br>
            案件に合うプロを
          </h3>

          <p>
            元アナウンサーの代表が築いた
            全国のネットワークから、
            商材・目的・現場に合う人材を選定。
          </p>

        </div>

      </article>



      <!-- 02 -->

      <article class="feature-item">

        <span class="feature-item__number">
          02
        </span>


        <div
          class="feature-item__icon"
          aria-hidden="true"
        >

          <svg viewBox="0 0 64 64">

            <circle
              cx="32"
              cy="21"
              r="9"
            />

            <path
              d="
                M16 52c1-11 7-17 16-17s15 6 16 17
              "
            />

            <path
              d="
                M22 15c2-6 17-8 20 2
                M24 38l8 8 8-8
              "
            />

            <path
              class="accent"
              d="
                M29 46l3 5 3-5
              "
            />

          </svg>

        </div>


        <div class="feature-item__content">

          <h3>
            メッセージ設計から、<br>
            プレゼン準備まで
          </h3>

          <p>
            プレゼンテーションのプロが、
            メッセージ設計、台本、スライド、
            読み合わせ、リハーサルまで
            必要な範囲を支援。
            部分的なご依頼にも対応します。
          </p>

        </div>

      </article>



      <!-- 03 -->

      <article class="feature-item">

        <span class="feature-item__number">
          03
        </span>


        <div
          class="feature-item__icon"
          aria-hidden="true"
        >

          <svg viewBox="0 0 64 64">

            <path
              d="
                M16 9h26l8 8v38H16z
              "
            />

            <path
              d="
                M42 9v10h8
                M23 28h19
                M23 35h13
              "
            />

            <path
              class="accent"
              d="
                M35 47l14-14 5 5-14 14-7 2z
              "
            />

          </svg>

        </div>


        <div class="feature-item__content">

          <h3>
            アナウンサー × マーケティングで<br>
            「伝え方」を設計
          </h3>

          <p>
            展示会経験豊富な「伝えるプロ」と、
            マーケティングの知見を掛け合わせ、
            商談につながる伝え方を設計します。
          </p>

        </div>

      </article>



      <!-- 04 -->

      <article class="feature-item">

        <span class="feature-item__number">
          04
        </span>


        <div
          class="feature-item__icon"
          aria-hidden="true"
        >

          <svg viewBox="0 0 64 64">

            <circle
              cx="20"
              cy="22"
              r="7"
            />

            <circle
              cx="44"
              cy="22"
              r="7"
            />

            <path
              d="
                M10 51c1-9 5-14 10-14s9 5 10 14
                M34 51c1-9 5-14 10-14s9 5 10 14
              "
            />

            <path
              class="accent"
              d="
                M27 31l5 5 5-5
              "
            />

          </svg>

        </div>


        <div class="feature-item__content">

          <h3>
            既存体制を変えず、<br>
            必要な領域だけ
          </h3>

          <p>
            制作会社・広告代理店の体制に合わせ、
            キャスティング、台本、
            プレゼン準備など必要な部分だけを補完。
            若手MC＋元局アナ監修など、
            予算と品質に応じた体制設計も可能です。
          </p>

        </div>

      </article>

    `;

  };


  /* =========================================================
     SERVICE
     ========================================================= */

  const updateServices = () => {

    const section =
      document.getElementById(
        'service'
      );

    if (!section) return;


    const intro =
      section.querySelector(
        '.section-head > p'
      );


    if (intro) {

      intro.textContent =
        'キャスティングから、プレゼン制作、展示会コミュニケーション設計まで。必要な領域だけご依頼いただけます。';

    }


    const cards =
      section.querySelectorAll(
        '.service-card'
      );


    /* 01 CASTING */

    if (cards[0]) {

      const body =
        cards[0].querySelector(
          '.service-card__body'
        );


      if (body) {

        body.innerHTML = `

          <span class="service-card__number">
            01
          </span>

          <h3>
            キャスティング
          </h3>

          <p class="service-card__catch">
            案件に合う、伝えるプロをご提案
          </p>

          <p class="service-card__description">
            元放送局アナウンサーを中心に、
            商材・目的・現場に合う人材を選定。
            出演者のみのご依頼も可能です。
          </p>

          <div class="service-card__price">

            <span>
              参考価格
            </span>

            <strong>
              80,000円〜
            </strong>

            <small>
              ／1日
            </small>

          </div>

          <a
            class="service-card__link"
            href="#professionals"
          >
            候補者を見る
          </a>

        `;

      }

    }


    /* 02 PRESENTATION */

    if (cards[1]) {

      const media =
        cards[1].querySelector(
          '.service-card__media'
        );


      const image =
        media?.querySelector('img');


      const fallback =
        media?.querySelector(
          '.service-card__fallback'
        );


      if (image) {

        image.src =
          'service-presentation.png';

        image.alt =
          'メッセージ・プレゼンテーション制作の打ち合わせ';

      }


      if (fallback) {

        fallback.textContent =
          'MESSAGE / PRESENTATION';

      }


      const body =
        cards[1].querySelector(
          '.service-card__body'
        );


      if (body) {

        body.innerHTML = `

          <span class="service-card__number">
            02
          </span>

          <h3>
            メッセージ・<br>
            プレゼン制作
          </h3>

          <p class="service-card__catch">
            伝わる内容と、
            伝わる見せ方をつくる
          </p>

          <p class="service-card__description">
            メッセージ設計、構成、
            台本、スライドから、
            読み合わせ・リハーサルまで
            必要な範囲を支援します。
          </p>

          <div class="service-card__price">

            <span>
              参考価格
            </span>

            <strong>
              200,000円〜
            </strong>

          </div>

          <a
            class="service-card__link"
            href="#casting-form"
          >
            制作について相談する
          </a>

        `;

      }

    }


    /* 03 EXHIBITION */

    if (cards[2]) {

      const body =
        cards[2].querySelector(
          '.service-card__body'
        );


      if (body) {

        body.innerHTML = `

          <span class="service-card__number">
            03
          </span>

          <h3>
            展示会<br>
            コミュニケーション設計
          </h3>

          <p class="service-card__catch">
            「伝える」から、
            その先の商談まで
          </p>

          <p class="service-card__description">
            来場者の足を止め、
            理解・リード獲得・
            営業との会話につなげるまでを、
            展示会の目的から逆算して設計します。
          </p>

          <div class="service-card__price">

            <span>
              参考価格
            </span>

            <strong>
              200,000円〜
            </strong>

          </div>

          <a
            class="service-card__link"
            href="#casting-form"
          >
            展示会について相談する
          </a>

        `;

      }

    }


    const grid =
      section.querySelector(
        '.service-grid'
      );


    if (
      grid &&
      !section.querySelector(
        '.service-price-note'
      )
    ) {

      const note =
        document.createElement('p');


      note.className =
        'service-price-note';


      note.textContent =
        '※参考価格です。業務内容・拘束時間・会場・制作範囲などにより個別にお見積もりします。';


      grid.insertAdjacentElement(
        'afterend',
        note
      );

    }

  };


  /* =========================================================
     FLOW
     ========================================================= */

  const updateFlow = () => {

    const section =
      document.getElementById(
        'flow'
      );

    if (!section) return;


    const intro =
      section.querySelector(
        '.section-head > p'
      );


    if (intro) {

      intro.textContent =
        '出演者のみのご依頼から、メッセージ設計・プレゼン制作まで。案件に必要な範囲に合わせて進行します。';

    }


    const grid =
      section.querySelector(
        '.flow-grid'
      );

    if (!grid) return;


    grid.innerHTML = `

      <article class="flow-step">

        <span>01</span>

        <h3>
          お問い合わせ
        </h3>

        <p>
          開催日・会場・案件内容など、
          現時点で分かる範囲を
          お知らせください。
        </p>

      </article>


      <article class="flow-step">

        <span>02</span>

        <h3>
          ご要望の確認・ご提案
        </h3>

        <p>
          目的や商材、
          必要な支援範囲を確認し、
          出演者や制作内容をご提案します。
        </p>

      </article>


      <article class="flow-step">

        <span>03</span>

        <h3>
          キャスティング・制作準備
        </h3>

        <p>
          出演者の決定、
          台本・スライド制作、
          読み合わせ、リハーサルなど、
          必要な準備を進めます。
        </p>

      </article>


      <article class="flow-step">

        <span>04</span>

        <h3>
          本番
        </h3>

        <p>
          出演者を現場へ送り出し、
          本番までHELMIOが
          サポートします。
        </p>

      </article>

    `;

  };


  /* =========================================================
     COMPANY / MESSAGE
     ========================================================= */

  const buildCompanySection = () => {

    const faq =
      document.getElementById('faq');

    if (!faq) return;


    document
      .getElementById(
        'company-overview'
      )
      ?.remove();


    const section =
      document.createElement(
        'section'
      );


    section.id =
      'company-overview';


    section.className =
      'helmio-company-section';


    section.innerHTML = `

      <div class="container">


        <!-- =================================
             MESSAGE
             ================================= -->

        <div class="helmio-message">

          <p class="section-label">
            MESSAGE
          </p>


          <div class="helmio-message__grid">


            <figure class="helmio-message__photo">

              <img
                src="syacho.jpg"
                alt="株式会社HELMIO 代表 新島麻生"
                loading="lazy"
              >

            </figure>


            <div class="helmio-message__copy">

              <h2>
                伝えることを、<br>
                商談の入口に。
              </h2>


              <p>
                放送局アナウンサーとして
                キャスターを経験したのち、
                スタートアップでは
                マーケティング責任者として、
                出展する側からも
                展示会に携わってきました。
                フリーアナウンサーとして
                展示会ナレーターの現場にも
                立っています。
              </p>


              <p>
                展示会は、
                目の前の来場者の関心を瞬時に捉え、
                足を止めてもらい、
                商品の魅力を伝える仕事。
              </p>


              <p class="helmio-message__key">
                HELMIOは、その先の商談につながる
                「伝え方」をつくります。
              </p>


              <p class="helmio-message__signature">
                株式会社HELMIO 代表
                <strong>
                  新島 麻生
                </strong>
              </p>

            </div>

          </div>

        </div>



        <!-- =================================
             COMPANY
             ================================= -->

        <div class="helmio-company-profile">

          <p class="section-label">
            COMPANY
          </p>

          <h2>
            会社情報
          </h2>


          <dl class="helmio-company-table">

            <div>

              <dt>
                会社名
              </dt>

              <dd>
                株式会社HELMIO
              </dd>

            </div>


            <div>

              <dt>
                代表
              </dt>

              <dd>
                新島 麻生
              </dd>

            </div>


            <div>

              <dt>
                所在地
              </dt>

              <dd>
                〒107-0062
                東京都港区南青山3丁目1番36号
                青山丸竹ビル6F
              </dd>

            </div>


            <div>

              <dt>
                設立
              </dt>

              <dd>
                2026年7月
              </dd>

            </div>


            <div>

              <dt>
                事業内容
              </dt>

              <dd>

                <ul class="helmio-business-list">

                  <li>
                    展示会マーケティング事業
                  </li>

                  <li>
                    キャスティング事業
                  </li>

                  <li>
                    広報・PR事業
                  </li>

                </ul>

              </dd>

            </div>

          </dl>

        </div>



        <!-- =================================
             ACHIEVEMENTS
             ================================= -->

        <div
          class="helmio-achievements"
          id="helmio-company-achievements"
        >

          <header class="helmio-achievements__header">


            <div>

              <p class="section-label">
                ACHIEVEMENTS
              </p>

              <h2>
                代表・参画メンバーの<br>
                経歴・実績
              </h2>

            </div>


            <div>

              <p>
                報道、企業イベント、展示会、
                映像、広告出演など、
                代表者および参画プロフェッショナルの
                経歴・実績を分野別に掲載しています。
              </p>

              <p class="helmio-achievements__note">
                ※設立以前を含む、
                代表者および参画プロフェッショナル
                個人の担当実績を含みます。
              </p>

            </div>

          </header>


          <div
            class="helmio-achievement-list"
            id="helmioAchievementAccordion"
          >

            <p class="helmio-achievement-loading">
              実績を読み込んでいます。
            </p>

          </div>

        </div>


      </div>

    `;


    faq.insertAdjacentElement(
      'beforebegin',
      section
    );

  };


  /* =========================================================
     ACHIEVEMENTS
     company.html から自動取得
     ========================================================= */

  const loadAchievements = async () => {

    const container =
      document.getElementById(
        'helmioAchievementAccordion'
      );

    if (!container) return;


    try {

      const response =
        await fetch(
          'company.html',
          {
            cache: 'no-store'
          }
        );


      if (!response.ok) {
        throw new Error();
      }


      const html =
        await response.text();


      const doc =
        new DOMParser()
          .parseFromString(
            html,
            'text/html'
          );


      const items =
        Array.from(
          doc.querySelectorAll(
            '.achievement-detail'
          )
        );


      if (!items.length) {
        throw new Error();
      }


      container.innerHTML =
        items.map(
          (item, index) => {

            const number =
              String(index + 1)
                .padStart(
                  2,
                  '0'
                );


            const title =
              item
                .querySelector('h3')
                ?.textContent
                ?.trim() || '実績';


            const rows =
              Array.from(
                item.querySelectorAll(
                  '.achievement-detail__list li'
                )
              );


            const listHtml =
              rows.map(row => `

                <li>
                  ${escapeHtml(
                    row.textContent.trim()
                  )}
                </li>

              `).join('');


            return `

              <details class="helmio-achievement-item">


                <summary>

                  <span class="helmio-achievement-number">
                    ${number}
                  </span>

                  <span class="helmio-achievement-title">
                    ${escapeHtml(title)}
                  </span>

                  <span
                    class="helmio-achievement-arrow"
                    aria-hidden="true"
                  >
                    ↓
                  </span>

                </summary>


                <div class="helmio-achievement-content">

                  <ul>
                    ${listHtml}
                  </ul>

                </div>


              </details>

            `;

          }
        ).join('');


    } catch (error) {

      container.innerHTML = `

        <div class="helmio-achievement-error">

          <p>
            実績一覧は会社概要ページでも
            ご覧いただけます。
          </p>

          <a
            href="company.html#achievement-index"
          >
            実績を見る →
          </a>

        </div>

      `;

    }

  };


  /* =========================================================
     FAQ
     ========================================================= */

  const updateFaq = () => {

    const list =
      document.querySelector(
        '#faq .faq-list'
      );

    if (!list) return;


    document
      .getElementById(
        'faq-casting-only'
      )
      ?.remove();


    const item =
      document.createElement(
        'details'
      );


    item.className =
      'faq-item';


    item.id =
      'faq-casting-only';


    item.innerHTML = `

      <summary>
        出演者のみの依頼も可能ですか？
      </summary>

      <div class="faq-answer">
        可能です。
        キャスティングのみ、
        台本制作のみ、
        プレゼン準備のみなど、
        必要な部分だけご依頼いただけます。
      </div>

    `;


    list.prepend(item);

  };


  /* =========================================================
     FINAL CTA
     ========================================================= */

  const updateFinalCta = () => {

    const title =
      document.getElementById(
        'contact-title'
      );


    if (title) {

      title.textContent =
        '候補者プロフィール・料金目安のご相談';

    }


    const section =
      title?.closest(
        '.final-cta'
      );


    const text =
      section?.querySelector(
        '.final-cta__inner > div > p:last-child'
      );


    if (text) {

      text.textContent =
        '出演者のみのご依頼から、メッセージ設計・プレゼン制作まで。案件に必要な範囲をご相談ください。';

    }


    const button =
      section?.querySelector(
        '.button'
      );


    if (button) {

      button.innerHTML =
        '相談する <span aria-hidden="true">→</span>';

      button.href =
        '#casting-form';

    }

  };


  /* =========================================================
     FOOTER
     リンク一覧を削除
     ========================================================= */

  const simplifyFooter = () => {

    document
      .querySelector(
        '.site-footer .footer-nav'
      )
      ?.remove();

  };


  /* =========================================================
     SECTION ORDER

     HERO
     ↓
     FEATURE
     ↓
     SERVICE
     ↓
     PROFESSIONALS
     ↓
     FLOW
     ↓
     MESSAGE
     ↓
     COMPANY
     ↓
     ACHIEVEMENTS
     ↓
     FAQ
     ↓
     CTA
     ↓
     FORM
     ========================================================= */

  const reorderSections = () => {

    const hero =
      document.querySelector(
        '.pro-hero'
      );

    const features =
      document.getElementById(
        'features'
      );

    const service =
      document.getElementById(
        'service'
      );

    const professionals =
      document.getElementById(
        'professionals'
      );

    const flow =
      document.getElementById(
        'flow'
      );

    const company =
      document.getElementById(
        'company-overview'
      );

    const faq =
      document.getElementById(
        'faq'
      );

    const finalCta =
      document.querySelector(
        '.final-cta'
      );

    const form =
      document.getElementById(
        'casting-form'
      );


    if (
      hero &&
      features
    ) {

      hero.insertAdjacentElement(
        'afterend',
        features
      );

    }


    if (
      features &&
      service
    ) {

      features.insertAdjacentElement(
        'afterend',
        service
      );

    }


    if (
      service &&
      professionals
    ) {

      service.insertAdjacentElement(
        'afterend',
        professionals
      );

    }


    if (
      professionals &&
      flow
    ) {

      professionals.insertAdjacentElement(
        'afterend',
        flow
      );

    }


    if (
      flow &&
      company
    ) {

      flow.insertAdjacentElement(
        'afterend',
        company
      );

    }


    if (
      company &&
      faq
    ) {

      company.insertAdjacentElement(
        'afterend',
        faq
      );

    }


    if (
      faq &&
      finalCta
    ) {

      faq.insertAdjacentElement(
        'afterend',
        finalCta
      );

    }


    if (
      finalCta &&
      form
    ) {

      finalCta.insertAdjacentElement(
        'afterend',
        form
      );

    }

  };


  /* =========================================================
     FINAL CSS
     ========================================================= */

  const injectStyles = () => {

    const style =
      document.createElement(
        'style'
      );


    style.id =
      'helmio-final-complete-styles';


    style.textContent = `


      /* ========================================
         FEATURES
         ======================================== */

      #features
      .feature-item__content p {
        margin-top:
          10px !important;

        font-size:
          14px !important;

        line-height:
          1.8 !important;
      }


      #features
      .feature-item__content h3 {
        line-height:
          1.55;
      }



      /* ========================================
         SERVICE - COMPACT
         ======================================== */

      #service
      .service-card {
        min-height:
          0 !important;
      }


      #service
      .service-card__media {
        aspect-ratio:
          1.75 / 1;
      }


      #service
      .service-card:nth-child(2)
      .service-card__media img {
        object-fit:
          cover !important;

        object-position:
          center top !important;
      }


      #service
      .service-card__body {
        padding:
          38px 22px 18px !important;
      }


      #service
      .service-card h3 {
        font-size:
          21px !important;

        line-height:
          1.45 !important;
      }


      #service
      .service-card__catch {
        margin:
          8px 0 6px !important;

        color:
          var(--ink);

        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          14px !important;

        font-weight:
          600;

        line-height:
          1.6 !important;

        text-align:
          center;
      }


      #service
      .service-card__description {
        margin-top:
          6px !important;

        font-size:
          13px !important;

        line-height:
          1.75 !important;
      }


      #service
      .service-card__price {
        display:
          flex !important;

        align-items:
          baseline;

        justify-content:
          center;

        gap:
          6px;

        margin:
          14px 0 0 !important;

        padding-top:
          12px;

        border-top:
          1px solid
          rgba(16,47,82,.10);

        line-height:
          1.4 !important;
      }


      #service
      .service-card__price span {
        color:
          var(--muted);

        font-size:
          10px;

        letter-spacing:
          .08em;
      }


      #service
      .service-card__price strong {
        color:
          var(--navy);

        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          20px;

        font-weight:
          600;
      }


      #service
      .service-card__price small {
        color:
          var(--muted);

        font-size:
          10px;
      }


      #service
      .service-card__link {
        margin-top:
          14px !important;

        padding-top:
          12px !important;

        font-size:
          12.5px;
      }


      .service-price-note {
        margin:
          16px 0 0;

        color:
          var(--muted);

        font-size:
          10.5px;

        line-height:
          1.7;

        text-align:
          right;
      }



      /* ========================================
         COMPANY AREA
         ======================================== */

      .helmio-company-section {
        padding:
          88px 0;

        background:
          #faf8f3;

        border-top:
          1px solid var(--line);
      }



      /* MESSAGE */

      .helmio-message {
        padding-bottom:
          70px;
      }


      .helmio-message__grid {
        display:
          grid;

        grid-template-columns:
          210px
          minmax(0, 1fr);

        gap:
          48px;

        align-items:
          start;

        max-width:
          860px;

        margin:
          28px auto 0;
      }


      .helmio-message__photo {
        margin:
          0;
      }


      .helmio-message__photo img {
        display:
          block;

        width:
          100%;

        aspect-ratio:
          4 / 5;

        object-fit:
          cover;

        object-position:
          center top;

        border-radius:
          8px;

        box-shadow:
          0 12px 30px
          rgba(16,47,82,.08);
      }


      .helmio-message__copy h2 {
        color:
          var(--ink);

        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          clamp(
            27px,
            3vw,
            38px
          );

        font-weight:
          500;

        line-height:
          1.55;
      }


      .helmio-message__copy p {
        margin-top:
          12px;

        color:
          var(--text);

        font-size:
          13.5px;

        line-height:
          1.9;
      }


      .helmio-message__key {
        color:
          var(--ink) !important;

        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          15px !important;

        font-weight:
          600;
      }


      .helmio-message__signature {
        margin-top:
          18px !important;

        color:
          var(--muted) !important;

        font-size:
          11px !important;
      }


      .helmio-message__signature strong {
        margin-left:
          8px;

        color:
          var(--ink);

        font-size:
          15px;
      }



      /* COMPANY */

      .helmio-company-profile {
        padding:
          68px 0;

        border-top:
          1px solid var(--line);
      }


      .helmio-company-profile h2,
      .helmio-achievements h2 {
        margin-top:
          8px;

        color:
          var(--ink);

        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          clamp(
            30px,
            3.5vw,
            43px
          );

        font-weight:
          500;

        line-height:
          1.5;
      }


      .helmio-company-table {
        max-width:
          860px;

        margin:
          34px auto 0;

        border-top:
          1px solid var(--line);
      }


      .helmio-company-table > div {
        display:
          grid;

        grid-template-columns:
          140px
          minmax(0, 1fr);

        padding:
          17px 0;

        border-bottom:
          1px solid var(--line);
      }


      .helmio-company-table dt {
        color:
          var(--muted);

        font-size:
          12px;

        font-weight:
          700;
      }


      .helmio-company-table dd {
        margin:
          0;

        color:
          var(--ink);

        font-size:
          13px;

        line-height:
          1.8;
      }


      .helmio-business-list {
        margin:
          0;

        padding:
          0 !important;

        list-style:
          none;
      }


      .helmio-business-list li {
        position:
          relative;

        padding-left:
          14px;
      }


      .helmio-business-list
      li::before {
        content:
          "";

        position:
          absolute;

        top:
          .75em;

        left:
          0;

        width:
          4px;

        height:
          4px;

        border-radius:
          50%;

        background:
          var(--gold);
      }


      .helmio-business-list
      li + li {
        margin-top:
          5px;
      }



      /* ACHIEVEMENTS */

      .helmio-achievements {
        padding-top:
          68px;

        border-top:
          1px solid var(--line);
      }


      .helmio-achievements__header {
        display:
          grid;

        grid-template-columns:
          minmax(260px,.8fr)
          minmax(0,1.2fr);

        gap:
          56px;
      }


      .helmio-achievements__header
      > div:last-child {
        color:
          var(--text);

        font-size:
          13px;

        line-height:
          1.8;
      }


      .helmio-achievements__note {
        margin-top:
          10px;

        color:
          var(--muted);

        font-size:
          10.5px;
      }


      .helmio-achievement-list {
        display:
          grid;

        grid-template-columns:
          repeat(
            2,
            minmax(0,1fr)
          );

        margin-top:
          38px;

        border-top:
          1px solid var(--line);

        border-left:
          1px solid var(--line);
      }


      .helmio-achievement-item {
        background:
          rgba(255,255,255,.5);

        border-right:
          1px solid var(--line);

        border-bottom:
          1px solid var(--line);
      }


      .helmio-achievement-item summary {
        display:
          grid;

        grid-template-columns:
          42px
          minmax(0,1fr)
          26px;

        gap:
          12px;

        align-items:
          center;

        min-height:
          66px;

        padding:
          14px;

        cursor:
          pointer;

        list-style:
          none;
      }


      .helmio-achievement-item
      summary::-webkit-details-marker {
        display:
          none;
      }


      .helmio-achievement-number {
        color:
          var(--gold);

        font-family:
          "Cormorant Garamond",
          serif;

        font-size:
          16px;
      }


      .helmio-achievement-title {
        color:
          var(--ink);

        font-size:
          12.5px;

        font-weight:
          700;

        line-height:
          1.55;
      }


      .helmio-achievement-arrow {
        color:
          var(--navy);

        text-align:
          center;

        transition:
          transform .2s ease;
      }


      .helmio-achievement-item[open]
      .helmio-achievement-arrow {
        transform:
          rotate(180deg);
      }


      .helmio-achievement-content {
        padding:
          0 20px 21px 56px;
      }


      .helmio-achievement-content ul {
        margin:
          0;

        padding-left:
          1em;
      }


      .helmio-achievement-content li {
        color:
          var(--text);

        font-size:
          12px;

        line-height:
          1.8;
      }


      .helmio-achievement-content
      li + li {
        margin-top:
          6px;
      }


      .helmio-achievement-loading,
      .helmio-achievement-error {
        grid-column:
          1 / -1;

        padding:
          24px;

        color:
          var(--muted);
      }



      /* ========================================
         FOOTER
         リンク一覧を消してコンパクトに
         ======================================== */

      .site-footer {
        padding-top:
          34px !important;
      }


      .site-footer
      .footer-nav {
        display:
          none !important;
      }


      .site-footer
      .footer-inner {
        display:
          block !important;

        padding-bottom:
          28px !important;
      }



      /* ========================================
         TABLET
         ======================================== */

      @media (
        max-width: 820px
      ) {

        .helmio-message__grid {
          grid-template-columns:
            170px
            minmax(0,1fr);

          gap:
            30px;
        }


        .helmio-achievements__header {
          grid-template-columns:
            1fr;

          gap:
            24px;
        }


        .helmio-achievement-list {
          grid-template-columns:
            1fr;
        }

      }



      /* ========================================
         MOBILE
         ======================================== */

      @media (
        max-width: 600px
      ) {

        #features
        .feature-item__content p {
          font-size:
            13px !important;
        }


        #service
        .service-card__body {
          padding:
            36px 18px 17px !important;
        }


        #service
        .service-card h3 {
          font-size:
            20px !important;
        }


        .service-price-note {
          text-align:
            left;
        }


        .helmio-company-section {
          padding:
            62px 0;
        }


        .helmio-message {
          padding-bottom:
            54px;
        }


        .helmio-message__grid {
          grid-template-columns:
            1fr;

          gap:
            22px;

          margin-top:
            22px;
        }


        .helmio-message__photo {
          max-width:
            170px;
        }


        .helmio-message__copy h2 {
          font-size:
            26px;
        }


        .helmio-company-profile {
          padding:
            54px 0;
        }


        .helmio-company-table
        > div {
          grid-template-columns:
            1fr;

          gap:
            5px;
        }


        .helmio-achievements {
          padding-top:
            54px;
        }


        .helmio-achievement-item
        summary {
          grid-template-columns:
            35px
            minmax(0,1fr)
            23px;

          gap:
            8px;

          padding:
            13px 10px;
        }


        .helmio-achievement-content {
          padding:
            0 15px 19px 45px;
        }

      }

    `;


    document.head.appendChild(
      style
    );

  };


  /* =========================================================
     APPLY
     ========================================================= */

  const applyFinal = async () => {

    cleanLegacy();

    injectStyles();

    updateHeader();

    updateHero();

    updateFeatures();

    updateServices();

    updateFlow();

    buildCompanySection();

    updateFaq();

    updateFinalCta();

    simplifyFooter();

    reorderSections();

    await loadAchievements();

  };


  if (
    document.readyState ===
    'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      applyFinal,
      {
        once: true
      }
    );

  } else {

    applyFinal();

  }

})();
(() => {
  const brand = document.querySelector('.site-header .brand');

  if (!brand) return;

  brand.removeAttribute('href');
  brand.removeAttribute('aria-label');

  brand.style.cursor = 'default';
  brand.style.pointerEvents = 'none';
})();
(() => {
  const logos = document.querySelectorAll(
    '.site-header .brand, .site-footer .footer-logo'
  );

  logos.forEach(logo => {
    logo.removeAttribute('href');
    logo.removeAttribute('aria-label');

    logo.style.cursor = 'default';
    logo.style.pointerEvents = 'none';
  });
})();
(() => {
  'use strict';

  const updateMessageCopy = () => {

    const message =
      document.querySelector(
        '#company-overview .helmio-message__copy'
      );

    if (!message) return;


    message.innerHTML = `

      <h2>
        伝えることを、<br>
        商談の入口に。
      </h2>


      <p>
        放送局では、リポーターや朝のキャスターとして、
        取材し、情報を整理し、
        自分で原稿をつくり、
        自分の言葉で伝える仕事をしてきました。
      </p>


      <p>
        その後、スタートアップでは
        マーケティング責任者として出展する側を経験し、
        フリーアナウンサーとしても
        数多くの展示会の現場に立ってきました。
      </p>


      <p>
        <strong>
          伝える側と、成果をつくる側。
          その両方を経験するほど、
          展示会の奥深さと面白さに惹かれ、
          私は本当に展示会が好きになりました。
        </strong>
      </p>


      <p>
        数秒で足を止めてもらい、
        言葉ひとつで反応が変わり、
        その先の会話や商談につながっていく。
        <strong>
          その可能性を、もっと大きくしたい。
        </strong>
      </p>


      <p class="helmio-message__key">
        HELMIOは、その瞬間をつくる
        「伝え方」を設計します。
      </p>


      <p class="helmio-message__signature">
        株式会社HELMIO 代表
        <strong>
          新島 麻生
        </strong>
      </p>

    `;

  };


  const addMessageStyles = () => {

    const style =
      document.createElement('style');


    style.textContent = `

      #company-overview
      .helmio-message__copy
      > p > strong {
        color: var(--ink);
        font-weight: 600;
      }


      #company-overview
      .helmio-message__copy p {
        line-height: 1.9;
      }


      #company-overview
      .helmio-message__key {
        margin-top: 16px !important;
      }

    `;


    document.head.appendChild(style);

  };


  const apply = () => {

    updateMessageCopy();

    addMessageStyles();

  };


  if (
    document.readyState === 'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      apply,
      {
        once: true
      }
    );

  } else {

    apply();

  }

})();
(() => {
  'use strict';

  const updateFeatureHeadings = () => {

    const items =
      document.querySelectorAll(
        '#features .feature-item'
      );

    if (!items.length) return;


    const headings = [
      '全国ネットワークから、案件に合うプロを',
      'メッセージ設計から、プレゼン準備まで',
      'アナウンサー × マーケターチームで商談までの導線を設計',
      '既存体制を変えず、必要な領域だけ'
    ];


    items.forEach((item, index) => {

      const heading =
        item.querySelector('h3');

      if (
        heading &&
        headings[index]
      ) {
        heading.textContent =
          headings[index];
      }

    });

  };


  const addFeatureHeadingStyles = () => {

    const style =
      document.createElement('style');


    style.textContent = `

      #features
      .feature-item__content h3 {
        white-space: normal;
        word-break: keep-all;
      }

    `;


    document.head.appendChild(style);

  };


  const apply = () => {

    updateFeatureHeadings();
    addFeatureHeadingStyles();

  };


  if (
    document.readyState === 'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      apply,
      {
        once: true
      }
    );

  } else {

    apply();

  }

})();
/* =========================================================
   HELMIO
   WHO WE SUPPORT / CLIENT PAINS
   ========================================================= */

(() => {
  'use strict';


  const buildClientCases = () => {

    /* 二重生成防止 */
    document
      .getElementById('client-cases')
      ?.remove();


    const hero =
      document.querySelector('.pro-hero');

    const features =
      document.getElementById('features');


    if (!hero) return;


    const section =
      document.createElement('section');


    section.id =
      'client-cases';

    section.className =
      'client-cases-section';


    section.innerHTML = `

      <div class="container">

        <header class="client-cases-heading">

          <div>

            <p class="section-label">
              WHO WE SUPPORT
            </p>

            <h2>
              こんな課題を持つ企業へ
            </h2>

          </div>

        </header>


        <div class="client-cases-grid">


          <!-- =========================
               CASE 01
               ========================= -->

          <article class="client-case">

            <div class="client-case__meta">

              <span class="client-case__number">
                CASE 01
              </span>

              <span class="client-case__target">
                出展企業・マーケティング担当
              </span>

            </div>


            <h3>
              商品の魅力を、商談につながる形で届けたい
            </h3>


            <div class="client-case__body">

              <p>
                社員だけでは難しい呼び込みやプレゼンを、
                展示会を知る「伝えるプロ」に任せたい。
              </p>

              <p>
                プレゼンやメッセージも含めてプロが整え、
                営業担当がその先の会話に集中できる
                展示会にしたい。
              </p>

            </div>

          </article>



          <!-- =========================
               CASE 02
               ========================= -->

          <article class="client-case">

            <div class="client-case__meta">

              <span class="client-case__number">
                CASE 02
              </span>

              <span class="client-case__target">
                広告代理店・イベント制作会社
              </span>

            </div>


            <h3>
              出演・プレゼン領域を、安心して任せたい
            </h3>


            <div class="client-case__body">

              <p>
                案件に合うMC・ナレーターの選定だけでなく、
                台本理解、読み合わせ、リハーサル、
                本番対応まで任せたい。
              </p>

              <p>
                既存の制作体制はそのままに、
                クライアントの前に立つ
                「伝える領域」の品質を任せられる
                パートナーがほしい。
              </p>

            </div>

          </article>


        </div>

      </div>

    `;


    /*
      HERO
      ↓
      CLIENT CASES
      ↓
      FEATURES
    */

    hero.insertAdjacentElement(
      'afterend',
      section
    );


    if (features) {

      section.insertAdjacentElement(
        'afterend',
        features
      );

    }

  };


  /* =========================================================
     STYLE
     ========================================================= */

  const addClientCaseStyles = () => {

    document
      .getElementById(
        'helmio-client-case-styles'
      )
      ?.remove();


    const style =
      document.createElement('style');


    style.id =
      'helmio-client-case-styles';


    style.textContent = `

      /* ========================================
         SECTION
         ======================================== */

      #client-cases {
        padding:
          92px 0 96px;

        background:
          #faf8f3;

        border-bottom:
          1px solid var(--line);
      }


      #client-cases
      .client-cases-heading {
        margin-bottom:
          42px;
      }


      #client-cases
      .client-cases-heading h2 {
        color:
          var(--ink);

        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          clamp(
            32px,
            4vw,
            48px
          );

        font-weight:
          500;

        line-height:
          1.5;
      }



      /* ========================================
         TWO CASES
         ======================================== */

      #client-cases
      .client-cases-grid {
        display:
          grid;

        grid-template-columns:
          repeat(
            2,
            minmax(0, 1fr)
          );

        gap:
          26px;
      }


      #client-cases
      .client-case {
        position:
          relative;

        padding:
          34px 34px 36px;

        background:
          #fff;

        border:
          1px solid
          rgba(16,47,82,.12);

        border-top:
          3px solid
          var(--gold);

        border-radius:
          4px;
      }



      /* ========================================
         META
         ======================================== */

      #client-cases
      .client-case__meta {
        display:
          flex;

        align-items:
          center;

        flex-wrap:
          wrap;

        gap:
          10px 16px;

        margin-bottom:
          22px;
      }


      #client-cases
      .client-case__number {
        color:
          var(--gold);

        font-family:
          "Cormorant Garamond",
          serif;

        font-size:
          14px;

        font-weight:
          600;

        letter-spacing:
          .14em;
      }


      #client-cases
      .client-case__target {
        color:
          var(--muted);

        font-size:
          11px;

        font-weight:
          700;

        letter-spacing:
          .04em;
      }



      /* ========================================
         TITLE
         ======================================== */

      #client-cases
      .client-case h3 {
        color:
          var(--ink);

        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          clamp(
            21px,
            2.1vw,
            27px
          );

        font-weight:
          600;

        line-height:
          1.65;
      }



      /* ========================================
         BODY
         ======================================== */

      #client-cases
      .client-case__body {
        margin-top:
          22px;

        padding-top:
          20px;

        border-top:
          1px solid
          rgba(16,47,82,.10);
      }


      #client-cases
      .client-case__body p {
        color:
          var(--text);

        font-size:
          13.5px;

        line-height:
          1.9;
      }


      #client-cases
      .client-case__body p + p {
        margin-top:
          10px;
      }



      /* ========================================
         TABLET / MOBILE
         ======================================== */

      @media (
        max-width: 760px
      ) {

        #client-cases {
          padding:
            68px 0 72px;
        }


        #client-cases
        .client-cases-grid {
          grid-template-columns:
            1fr;

          gap:
            18px;
        }


        #client-cases
        .client-case {
          padding:
            28px 24px 30px;
        }

      }


      @media (
        max-width: 600px
      ) {

        #client-cases
        .client-cases-heading {
          margin-bottom:
            30px;
        }


        #client-cases
        .client-cases-heading h2 {
          font-size:
            29px;
        }


        #client-cases
        .client-case h3 {
          font-size:
            20px;

          line-height:
            1.6;
        }


        #client-cases
        .client-case__body p {
          font-size:
            13px;
        }

      }

    `;


    document.head.appendChild(
      style
    );

  };


  const applyClientCases = () => {

    addClientCaseStyles();

    buildClientCases();

  };


  if (
    document.readyState === 'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      applyClientCases,
      {
        once: true
      }
    );

  } else {

    applyClientCases();

  }

})();
/* =========================================================
   HELMIO
   FINAL TYPOGRAPHY / FORM / BOTTOM ORDER
   ========================================================= */

(() => {
  'use strict';


  /* =========================================================
     CASE 01 最終文言
     ========================================================= */

  const updateClientCase01 = () => {

    const card =
      document.querySelector(
        '#client-cases .client-case'
      );

    if (!card) return;


    const title =
      card.querySelector('h3');


    if (title) {
      title.textContent =
        '来場者との接点を、商談までつなげきれない';
    }


    const body =
      card.querySelector(
        '.client-case__body'
      );


    if (body) {

      body.innerHTML = `

        <p>
          商品説明はできても、
          来場者の足を止め、
          興味を引き、
          営業担当との会話につなげるところまで
          設計できていない。
        </p>

        <p>
          呼び込みやプレゼンを
          「伝えるプロ」に任せ、
          営業担当はその先の商談に集中したい。
        </p>

      `;

    }

  };


  /* =========================================================
     COMPANYをページ最下部へ
     ========================================================= */

  const moveCompanyToBottom = () => {

    const company =
      document.getElementById(
        'company-overview'
      );

    const form =
      document.getElementById(
        'casting-form'
      );


    if (
      !company ||
      !form
    ) {
      return;
    }


    form.insertAdjacentElement(
      'afterend',
      company
    );

  };


  /* =========================================================
     FINAL CTAもフォーム直前にコンパクト配置
     ========================================================= */

  const moveFinalCta = () => {

    const cta =
      document.querySelector(
        '.final-cta'
      );

    const form =
      document.getElementById(
        'casting-form'
      );


    if (
      !cta ||
      !form
    ) {
      return;
    }


    form.insertAdjacentElement(
      'beforebegin',
      cta
    );

  };


  /* =========================================================
     TYPOGRAPHY
     ========================================================= */

  const addFinalTypography = () => {

    document
      .getElementById(
        'helmio-final-typography'
      )
      ?.remove();


    const style =
      document.createElement(
        'style'
      );


    style.id =
      'helmio-final-typography';


    style.textContent = `


      /* =====================================================
         TYPE SCALE

         HERO     : 最大 42px
         SECTION  : 最大 34px
         CARD     : 18〜22px

         HEROより大きな文字を作らない
         ===================================================== */


      /* -----------------------------
         HERO
         ----------------------------- */

      .pro-hero h1 {
        font-size:
          clamp(
            31px,
            2.7vw,
            42px
          ) !important;

        line-height:
          1.58 !important;
      }



      /* -----------------------------
         MAIN SECTION HEADINGS
         ----------------------------- */

      .section-head h2,

      #client-cases
      .client-cases-heading h2,

      #talent-list-title,

      #flow-title,

      #faq-title,

      #casting-form-title,

      .helmio-company-profile h2,

      .helmio-achievements h2 {

        font-size:
          clamp(
            27px,
            2.8vw,
            34px
          ) !important;

        line-height:
          1.45 !important;

        letter-spacing:
          -.02em;
      }


      /* 「こんな課題はありませんか？」は明朝にしない */

      #client-cases
      .client-cases-heading h2 {

        font-family:
          "Noto Sans JP",
          sans-serif !important;

        font-weight:
          700 !important;

      }



      /* -----------------------------
         MESSAGE
         ----------------------------- */

      .helmio-message__copy h2 {

        font-size:
          clamp(
            26px,
            2.7vw,
            33px
          ) !important;

        line-height:
          1.55 !important;

      }



      /* -----------------------------
         FEATURE
         ----------------------------- */

      #features
      .feature-item h3 {

        font-size:
          clamp(
            19px,
            1.8vw,
            23px
          ) !important;

        line-height:
          1.55 !important;

      }


      #features
      .feature-item p {

        font-size:
          13.5px !important;

        line-height:
          1.8 !important;

      }



      /* -----------------------------
         CLIENT CASE
         ----------------------------- */

      #client-cases
      .client-case__target {

        font-size:
          clamp(
            18px,
            1.8vw,
            21px
          ) !important;

      }


      #client-cases
      .client-case h3 {

        font-size:
          16px !important;

        line-height:
          1.65 !important;

      }


      #client-cases
      .client-case__body p {

        font-size:
          13px !important;

        line-height:
          1.85 !important;

      }



      /* -----------------------------
         SERVICE
         ----------------------------- */

      #service
      .service-card h3 {

        font-size:
          20px !important;

        line-height:
          1.45 !important;

      }


      #service
      .service-card__catch {

        font-size:
          13.5px !important;

      }



      /* -----------------------------
         FLOW
         ----------------------------- */

      #flow
      .flow-step h3 {

        font-size:
          18px !important;

      }


      #flow
      .flow-step p {

        font-size:
          13px !important;

      }



      /* =====================================================
         SECTION SPACING
         ===================================================== */

      .section {

        padding:
          78px 0;

      }


      .section-head {

        margin-bottom:
          38px;

      }


      .section-head > p {

        font-size:
          14px !important;

        line-height:
          1.85 !important;

      }



      /* =====================================================
         CASTING FORM
         今より小さく、品のあるサイズへ
         ===================================================== */

      #casting-form {

        padding:
          68px 0 !important;

      }


      #casting-form
      .container {

        max-width:
          980px;

      }


      #casting-form
      .casting-form-heading {

        display:
          grid;

        grid-template-columns:
          minmax(240px,.75fr)
          minmax(0,1.25fr);

        gap:
          42px;

        margin-bottom:
          28px;

      }


      #casting-form
      .casting-form-heading h2 {

        font-size:
          clamp(
            26px,
            2.6vw,
            32px
          ) !important;

      }


      #casting-form
      .casting-form-heading > p {

        font-size:
          13px !important;

        line-height:
          1.8 !important;

      }


      #casting-form
      .casting-form-shell {

        max-width:
          900px;

        margin:
          0 auto;

        border-radius:
          10px !important;

        box-shadow:
          0 12px 34px
          rgba(16,47,82,.06) !important;

      }


      #casting-form
      .casting-progress__item {

        padding:
          13px 16px !important;

        font-size:
          12px !important;

      }


      #casting-form
      .casting-progress__number {

        width:
          27px !important;

        height:
          27px !important;

        font-size:
          14px !important;

      }


      #casting-form
      .casting-form {

        padding:
          34px 38px 38px !important;

      }


      #casting-form
      .casting-step__title {

        margin-bottom:
          28px !important;

        font-size:
          21px !important;

      }


      #casting-form
      .casting-step__title small {

        font-size:
          13px !important;

      }


      #casting-form
      .casting-grid {

        gap:
          22px 26px !important;

      }


      #casting-form
      .form-label,

      #casting-form
      .form-field legend {

        margin-bottom:
          8px !important;

        font-size:
          13px !important;

      }


      #casting-form
      .choice-card span {

        min-height:
          48px !important;

        padding:
          9px 12px !important;

        font-size:
          12.5px !important;

      }


      #casting-form
      .form-control {

        min-height:
          48px !important;

        padding:
          10px 13px !important;

        font-size:
          13px !important;

      }


      #casting-form
      textarea.form-control {

        min-height:
          115px !important;

      }


      #casting-form
      .simple-check {

        min-height:
          48px !important;

      }


      #casting-form
      .casting-actions {

        margin-top:
          30px !important;

        padding-top:
          20px !important;

      }


      #casting-form
      .casting-actions .button {

        min-width:
          160px !important;

        min-height:
          46px !important;

        padding:
          10px 18px !important;

        font-size:
          13px !important;

      }



      /* =====================================================
         FINAL CTA
         大きい紺帯をコンパクトに
         ===================================================== */

      .final-cta {

        padding:
          42px 0 !important;

      }


      .final-cta__inner {

        gap:
          36px !important;

      }


      .final-cta h2 {

        font-size:
          clamp(
            24px,
            2.4vw,
            31px
          ) !important;

        line-height:
          1.5 !important;

      }


      .final-cta
      p:not(.section-label) {

        max-width:
          650px;

        margin-top:
          9px !important;

        font-size:
          12.5px !important;

        line-height:
          1.75 !important;

      }


      .final-cta
      .button {

        min-height:
          44px !important;

        padding:
          9px 18px !important;

        font-size:
          12.5px !important;

      }



      /* =====================================================
         COMPANY
         一番下なので少し静かな見せ方
         ===================================================== */

      #company-overview {

        padding:
          70px 0 60px !important;

      }


      #company-overview
      .helmio-company-profile {

        padding-top:
          58px !important;

        padding-bottom:
          58px !important;

      }


      #company-overview
      .helmio-achievements {

        padding-top:
          58px !important;

      }



      /* =====================================================
         MOBILE
         ===================================================== */

      @media (
        max-width: 700px
      ) {

        .section {

          padding:
            62px 0;

        }


        .section-head {

          grid-template-columns:
            1fr;

          gap:
            14px;

          margin-bottom:
            30px;

        }


        .section-head h2,

        #client-cases
        .client-cases-heading h2,

        #talent-list-title,

        #flow-title,

        #faq-title,

        .helmio-company-profile h2,

        .helmio-achievements h2 {

          font-size:
            27px !important;

        }


        .pro-hero h1 {

          font-size:
            30px !important;

        }


        #casting-form {

          padding:
            56px 0 !important;

        }


        #casting-form
        .casting-form-heading {

          grid-template-columns:
            1fr;

          gap:
            12px;

        }


        #casting-form
        .casting-form-shell {

          border-radius:
            8px !important;

        }


        #casting-form
        .casting-form {

          padding:
            28px 20px 30px !important;

        }


        #casting-form
        .casting-grid {

          grid-template-columns:
            1fr !important;

          gap:
            20px !important;

        }


        #casting-form
        .casting-actions {

          flex-direction:
            column;

        }


        #casting-form
        .casting-actions .button {

          width:
            100%;

        }


        .final-cta {

          padding:
            36px 0 !important;

        }


        .final-cta__inner {

          grid-template-columns:
            1fr !important;

          gap:
            20px !important;

        }

      }

    `;


    document.head.appendChild(
      style
    );

  };


  /* =========================================================
     APPLY
     ========================================================= */

  const apply = () => {

    updateClientCase01();

    addFinalTypography();

    moveFinalCta();

    moveCompanyToBottom();

  };


  if (
    document.readyState === 'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      apply,
      {
        once: true
      }
    );

  } else {

    apply();

  }

})();
/* =========================================================
   HELMIO
   CASE HEADING / ACHIEVEMENT ORDER FINAL FIX
   ========================================================= */

(() => {
  'use strict';


  /* ========================================
     「こんな課題はありませんか？」に統一
     ======================================== */

  const updateCaseHeading = () => {

    const heading =
      document.querySelector(
        '#client-cases .client-cases-heading h2'
      );

    if (heading) {
      heading.textContent =
        'こんな課題はありませんか？';
    }

  };


  /* ========================================
     実績をプロフェッショナル直後へ
     ======================================== */

  const moveAchievementsUp = () => {

    const professionals =
      document.getElementById(
        'professionals'
      );

    const achievements =
      document.querySelector(
        '.helmio-achievements'
      );

    const flow =
      document.getElementById(
        'flow'
      );


    if (
      professionals &&
      achievements
    ) {

      professionals.insertAdjacentElement(
        'afterend',
        achievements
      );

    }


    /* 実績の次にFLOW */
    if (
      achievements &&
      flow
    ) {

      achievements.insertAdjacentElement(
        'afterend',
        flow
      );

    }

  };


  /* ========================================
     MESSAGE・会社情報は下部のまま
     ======================================== */

  const keepCompanyAtBottom = () => {

    const company =
      document.getElementById(
        'company-overview'
      );

    const form =
      document.getElementById(
        'casting-form'
      );


    if (
      !company ||
      !form
    ) {
      return;
    }


    form.insertAdjacentElement(
      'afterend',
      company
    );

  };


  /* ========================================
     TYPOGRAPHY FIX
     ======================================== */

  const addStyles = () => {

    document
      .getElementById(
        'helmio-case-achievement-final-style'
      )
      ?.remove();


    const style =
      document.createElement('style');


    style.id =
      'helmio-case-achievement-final-style';


    style.textContent = `

      /* -----------------------------
         課題セクション見出し
         ----------------------------- */

      #client-cases
      .client-cases-heading h2 {
        font-family:
          "Noto Sans JP",
          sans-serif !important;

        font-size:
          clamp(
            27px,
            2.8vw,
            34px
          ) !important;

        font-weight:
          700 !important;

        line-height:
          1.45 !important;

        letter-spacing:
          -.02em;
      }


      /* -----------------------------
         CASE対象者
         ----------------------------- */

      #client-cases
      .client-case__target {
        font-family:
          "Noto Sans JP",
          sans-serif !important;

        font-size:
          20px !important;

        font-weight:
          700 !important;

        line-height:
          1.5 !important;

        color:
          var(--navy) !important;
      }


      /* -----------------------------
         課題そのもの
         ここを大きくする
         ----------------------------- */

      #client-cases
      .client-case h3 {
        margin-top:
          4px;

        font-family:
          "Noto Sans JP",
          sans-serif !important;

        font-size:
          clamp(
            19px,
            1.8vw,
            22px
          ) !important;

        font-weight:
          700 !important;

        line-height:
          1.65 !important;

        color:
          var(--ink) !important;

        letter-spacing:
          -.01em;
      }


      #client-cases
      .client-case__body {
        margin-top:
          18px !important;

        padding-top:
          18px !important;
      }


      #client-cases
      .client-case__body p {
        font-size:
          13.5px !important;

        line-height:
          1.85 !important;
      }



      /* -----------------------------
         実績を独立セクションとして
         上に出した時の余白
         ----------------------------- */

      .helmio-achievements {
        padding:
          76px max(
            32px,
            calc(
              (100vw - 1180px) / 2
            )
          ) !important;

        background:
          #fff;

        border-top:
          1px solid var(--line);

        border-bottom:
          1px solid var(--line);
      }


      .helmio-achievements__header,
      .helmio-achievement-list {
        max-width:
          1180px;

        margin-left:
          auto;

        margin-right:
          auto;
      }


      .helmio-achievement-list {
        margin-top:
          36px !important;
      }



      @media (
        max-width: 600px
      ) {

        #client-cases
        .client-case__target {
          font-size:
            18px !important;
        }


        #client-cases
        .client-case h3 {
          font-size:
            19px !important;
        }


        .helmio-achievements {
          padding:
            60px 24px !important;
        }

      }

    `;


    document.head.appendChild(
      style
    );

  };


  const apply = () => {

    updateCaseHeading();

    moveAchievementsUp();

    keepCompanyAtBottom();

    addStyles();

  };


  if (
    document.readyState === 'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      apply,
      {
        once: true
      }
    );

  } else {

    apply();

  }

})();
/* =========================================================
   HELMIO
   BUSINESS / FEATURE 03 / CTA FINAL UPDATE
   ========================================================= */

(() => {
  'use strict';


  /* ========================================
     会社情報：事業内容
     ======================================== */

  const updateBusinessList = () => {

    const list =
      document.querySelector(
        '#company-overview .helmio-business-list'
      );

    if (!list) return;


    list.innerHTML = `

      <li>
        展示会マーケティング事業
      </li>

      <li>
        キャスティング事業
      </li>

      <li>
        採用広報代行・コンテンツ制作
      </li>

      <li>
        子ども向けプレゼンテーション教育事業
        <span class="helmio-business-note">
          （オンラインスクール運営・教育プログラムのライセンス提供）
        </span>
      </li>

    `;

  };


  /* ========================================
     HELMIOの特徴 03
     ======================================== */

  const updateFeature03 = () => {

    const items =
      document.querySelectorAll(
        '#features .feature-item'
      );

    const item =
      items[2];

    if (!item) return;


    const heading =
      item.querySelector('h3');

    const body =
      item.querySelector('p');


    if (heading) {

      heading.textContent =
        'アナウンサー × マーケターチームで、商談までの導線を設計';

    }


    if (body) {

      body.textContent =
        '展示会経験豊富な「伝えるプロ」とマーケターチームが、来場者との接点から営業との会話・商談までを見据えて、伝え方を設計します。';

    }

  };


  /* ========================================
     大きいCTA帯を完全に削除
     ======================================== */

  const removeFinalCta = () => {

    document
      .querySelectorAll(
        '.final-cta'
      )
      .forEach(
        section => section.remove()
      );

  };


  /* ========================================
     COMPANY BUSINESS STYLE
     ======================================== */

  const addStyles = () => {

    document
      .getElementById(
        'helmio-business-final-style'
      )
      ?.remove();


    const style =
      document.createElement('style');


    style.id =
      'helmio-business-final-style';


    style.textContent = `

      #company-overview
      .helmio-business-note {
        display: inline;

        color:
          var(--muted);

        font-size:
          .92em;

        font-weight:
          400;

        line-height:
          1.8;
      }


      #features
      .feature-item:nth-child(3) h3 {
        white-space:
          normal !important;

        word-break:
          normal !important;
      }

    `;


    document.head.appendChild(
      style
    );

  };


  const apply = () => {

    updateBusinessList();

    updateFeature03();

    removeFinalCta();

    addStyles();

  };


  if (
    document.readyState === 'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      apply,
      { once: true }
    );

  } else {

    apply();

  }

})();
/* =========================================================
   HELMIO
   PROFESSIONALS = CASTING ONLY
   FINAL OVERRIDE
   ========================================================= */

(() => {
  'use strict';


  /* =========================================================
     META
     ========================================================= */

  const updateMeta = () => {

    document.title =
      '元放送局アナウンサーのキャスティング｜HELMIO';


    const description =
      document.querySelector(
        'meta[name="description"]'
      );

    if (description) {
      description.setAttribute(
        'content',
        'HELMIOは、元局アナウンサーを中心とした企業イベント専門のキャスティングサービスです。記者発表、式典、カンファレンス、経営者登壇など、進行品質が求められる場を支えます。'
      );
    }


    const ogTitle =
      document.querySelector(
        'meta[property="og:title"]'
      );

    if (ogTitle) {
      ogTitle.setAttribute(
        'content',
        '元放送局アナウンサーのキャスティング｜HELMIO'
      );
    }


    const ogDescription =
      document.querySelector(
        'meta[property="og:description"]'
      );

    if (ogDescription) {
      ogDescription.setAttribute(
        'content',
        '失敗できない企業イベントに、元局アナという選択を。HELMIOは企業イベント専門のキャスティングサービスです。'
      );
    }

  };


  /* =========================================================
     展示会・マーケティング色の強いセクションを削除
     ========================================================= */

  const removeExhibitionContent = () => {

    /* WHO WE SUPPORT */
    document
      .getElementById(
        'client-cases'
      )
      ?.remove();


    /* 古いCASTING SUPPORT */
    document
      .getElementById(
        'casting-support'
      )
      ?.remove();


    /*
      展示会について語っている代表MESSAGEは
      キャスティングページでは削除
    */
    document
      .querySelector(
        '#company-overview .helmio-message'
      )
      ?.remove();


    /* 以前の大きいCTA帯 */
    document
      .querySelectorAll(
        '.final-cta'
      )
      .forEach(
        element => element.remove()
      );

  };


  /* =========================================================
     HERO
     ========================================================= */

  const updateHero = () => {

    const title =
      document.getElementById(
        'professionals-title'
      );


    if (title) {

      title.innerHTML = `

        <span>
          <em class="hero-highlight">
            失敗できない企業イベントに、
          </em>
        </span>

        <span>
          元局アナという選択を。
        </span>

      `;

    }


    const lead =
      document.querySelector(
        '.pro-hero__lead'
      );


    if (lead) {

      lead.innerHTML = `

        HELMIOは、元局アナウンサーを中心とした
        企業イベント専門のキャスティングサービスです。
        <br><br>

        台本を読むだけではなく、
        案件内容を理解し、
        事前確認・読み合わせ・リハーサルを経て本番へ。
        <br><br>

        記者発表、式典、カンファレンス、経営者登壇など、
        進行品質が求められる場を支えます。

      `;

    }


    const primary =
      document.querySelector(
        '.pro-hero .button--primary'
      );


    if (primary) {

      primary.textContent =
        'キャスティングを相談する';

      primary.href =
        '#casting-form';

    }


    const secondary =
      document.querySelector(
        '.pro-hero .button--secondary'
      );


    if (secondary) {

      secondary.textContent =
        'アナウンサーを見る';

      secondary.href =
        '#professionals';

    }

  };


  /* =========================================================
     FEATURES
     ========================================================= */

  const updateFeatures = () => {

    const section =
      document.getElementById(
        'features'
      );

    if (!section) return;


    const lead =
      section.querySelector(
        '.section-head > p'
      );


    if (lead) {

      lead.textContent =
        '企業イベントの本番を任せられる、プロフェッショナルのキャスティング。';

    }


    const items =
      section.querySelectorAll(
        '.feature-item'
      );


    const features = [

      {
        title:
          '元局アナウンサーを中心としたプロフェッショナル',

        body:
          'ニュース、生放送、リポート、大型イベントなど、緊張感のある現場を経験した人材を中心にご提案。'
      },

      {
        title:
          '案件を理解してから、本番に立つ',

        body:
          '企業名や肩書きを読むだけではなく、イベントの目的、製品・サービス、登壇者、進行を事前に確認。'
      },

      {
        title:
          '読み合わせ・リハーサルまで対応',

        body:
          '台本確認、読み合わせ、会場リハーサルなど、必要な準備を本番前に実施。'
      },

      {
        title:
          '制作会社・代理店の体制を変えずに使える',

        body:
          'キャスティングのみ、台本確認込み、リハーサル込みなど、案件に必要な範囲だけ対応。'
      }

    ];


    items.forEach(
      (item, index) => {

        const data =
          features[index];

        if (!data) return;


        const heading =
          item.querySelector('h3');

        const body =
          item.querySelector(
            '.feature-item__content p'
          );


        if (heading) {
          heading.textContent =
            data.title;
        }


        if (body) {
          body.textContent =
            data.body;
        }

      }
    );

  };


  /* =========================================================
     SERVICE
     2サービスだけにする
     ========================================================= */

  const updateServices = () => {

    const section =
      document.getElementById(
        'service'
      );

    if (!section) return;


    const intro =
      section.querySelector(
        '.section-head > p'
      );


    if (intro) {

      intro.textContent =
        '企業イベントの司会・MCを、案件内容と求める進行品質に合わせてご提案します。';

    }


    const cards =
      Array.from(
        section.querySelectorAll(
          '.service-card'
        )
      );


    /* 3枚目以降は削除 */
    cards
      .slice(2)
      .forEach(
        card => card.remove()
      );


    /* =====================================
       01 一日司会
       ===================================== */

    const first =
      cards[0];


    if (first) {

      const media =
        first.querySelector(
          '.service-card__media'
        );


      const image =
        media?.querySelector('img');


      const fallback =
        media?.querySelector(
          '.service-card__fallback'
        );


      if (image) {

        image.src =
          'service-mc.jpg';

        image.alt =
          '企業イベントで司会を務めるアナウンサー';

      }


      if (fallback) {

        fallback.textContent =
          'MC / ANNOUNCER';

      }


      const body =
        first.querySelector(
          '.service-card__body'
        );


      if (body) {

        body.innerHTML = `

          <span class="service-card__number">
            01
          </span>

          <h3>
            一日司会
          </h3>

          <p class="service-card__catch">
            企業イベントを、
            経験あるプロの進行で
          </p>

          <p class="service-card__description">
            記者発表、式典、カンファレンス、
            表彰式、経営者登壇など。
            案件内容を事前に確認し、
            必要に応じて読み合わせ・
            リハーサルまで対応します。
          </p>

          <div class="service-card__price">

            <span>
              参考価格
            </span>

            <strong>
              90,000円〜
            </strong>

            <small>
              ／1日
            </small>

          </div>

          <a
            class="service-card__link"
            href="#professionals"
          >
            候補者を見る
          </a>

        `;

      }

    }


    /* =====================================
       02 外国語対応
       ===================================== */

    const second =
      cards[1];


    if (second) {

      const media =
        second.querySelector(
          '.service-card__media'
        );


      const image =
        media?.querySelector('img');


      const fallback =
        media?.querySelector(
          '.service-card__fallback'
        );


      if (image) {

        image.src =
          'service-bilingual.jpg';

        image.alt =
          '外国語で企業イベントを進行するバイリンガルMC';

      }


      if (fallback) {

        fallback.textContent =
          'BILINGUAL MC';

      }


      const body =
        second.querySelector(
          '.service-card__body'
        );


      if (body) {

        body.innerHTML = `

          <span class="service-card__number">
            02
          </span>

          <h3>
            外国語対応
          </h3>

          <p class="service-card__catch">
            国際イベント・海外ゲストにも対応
          </p>

          <p class="service-card__description">
            英語・中国語などの外国語進行、
            バイリンガルMC、
            海外ゲストを迎えるイベントなど、
            案件に合わせて対応可能な
            プロフェッショナルをご提案します。
          </p>

          <div class="service-card__price">

            <span>
              参考価格
            </span>

            <strong>
              130,000円〜
            </strong>

          </div>

          <a
            class="service-card__link"
            href="#casting-form"
          >
            外国語対応を相談する
          </a>

        `;

      }

    }


    const priceNote =
      section.querySelector(
        '.service-price-note'
      );


    if (priceNote) {

      priceNote.textContent =
        '※参考価格です。案件内容・拘束時間・開催地域・事前準備の有無などにより個別にお見積もりします。';

    }

  };


  /* =========================================================
     PROFESSIONALS INTRO
     ========================================================= */

  const updateProfessionalsIntro = () => {

    const intro =
      document.querySelector(
        '#professionals .talent-intro'
      );


    if (intro) {

      intro.textContent =
        '元放送局アナウンサーを中心に、記者発表、式典、カンファレンス、企業イベントなど、進行品質が求められる場に対応するプロフェッショナルをご紹介します。カードをクリックすると、プロフィールや主な経歴をご覧いただけます。';

    }

  };


  /* =========================================================
     FLOW
     キャスティングだけの流れにする
     ========================================================= */

  const updateFlow = () => {

    const section =
      document.getElementById(
        'flow'
      );

    if (!section) return;


    const intro =
      section.querySelector(
        '.section-head > p'
      );


    if (intro) {

      intro.textContent =
        'お問い合わせから候補者のご提案、事前確認・読み合わせ、本番まで。案件に必要な準備を含めて進行します。';

    }


    const grid =
      section.querySelector(
        '.flow-grid'
      );


    if (!grid) return;


    grid.innerHTML = `

      <article class="flow-step">

        <span>
          01
        </span>

        <h3>
          お問い合わせ
        </h3>

        <p>
          開催日・会場・イベント内容など、
          現時点で分かる範囲を
          お知らせください。
        </p>

      </article>


      <article class="flow-step">

        <span>
          02
        </span>

        <h3>
          候補者のご提案
        </h3>

        <p>
          イベントの目的、
          求める雰囲気や進行内容を確認し、
          条件に合う候補者をご提案します。
        </p>

      </article>


      <article class="flow-step">

        <span>
          03
        </span>

        <h3>
          事前確認・読み合わせ
        </h3>

        <p>
          出演者決定後、
          台本や進行内容を確認。
          必要に応じて読み合わせや
          会場リハーサルを行います。
        </p>

      </article>


      <article class="flow-step">

        <span>
          04
        </span>

        <h3>
          本番
        </h3>

        <p>
          経験あるプロフェッショナルが
          当日の進行を担当します。
        </p>

      </article>

    `;

  };


  /* =========================================================
     FORM
     サービス内容も2択へ
     ========================================================= */

  const updateForm = () => {

    const field =
      document.querySelector(
        '#casting-form [data-required-group="service"]'
      );


    const choices =
      field?.querySelector(
        '.choice-grid'
      );


    if (!choices) return;


    choices.innerHTML = `

      <label class="choice-card">

        <input
          type="checkbox"
          name="service[]"
          value="一日司会"
        >

        <span>
          一日司会
        </span>

      </label>


      <label class="choice-card">

        <input
          type="checkbox"
          name="service[]"
          value="外国語対応"
        >

        <span>
          外国語対応
        </span>

      </label>

    `;


    choices
      .querySelectorAll('input')
      .forEach(input => {

        input.addEventListener(
          'change',
          () => {

            field.classList.remove(
              'has-error'
            );

          }
        );

      });

  };


  /* =========================================================
     STYLE
     デザインは既存のまま。
     2カード化に必要な部分だけ調整。
     ========================================================= */

  const addStyles = () => {

    document
      .getElementById(
        'helmio-casting-only-final-style'
      )
      ?.remove();


    const style =
      document.createElement('style');


    style.id =
      'helmio-casting-only-final-style';


    style.textContent = `

      /* サービス2枚 */

      #service
      .service-grid {

        grid-template-columns:
          repeat(
            2,
            minmax(0, 1fr)
          ) !important;

        max-width:
          900px;

        margin-left:
          auto;

        margin-right:
          auto;

      }


      #service
      .service-card {

        min-height:
          0 !important;

      }


      /* 特徴の見出しに強制改行を入れない */

      #features
      .feature-item h3 {

        white-space:
          normal !important;

        word-break:
          normal !important;

      }


      /* フォームも2択 */

      #casting-form
      [data-required-group="service"]
      .choice-grid {

        grid-template-columns:
          repeat(
            2,
            minmax(0, 1fr)
          ) !important;

      }


      @media (
        max-width: 720px
      ) {

        #service
        .service-grid {

          grid-template-columns:
            1fr !important;

        }


        #casting-form
        [data-required-group="service"]
        .choice-grid {

          grid-template-columns:
            1fr !important;

        }

      }

    `;


    document.head.appendChild(
      style
    );

  };


  /* =========================================================
     APPLY
     ========================================================= */

  const apply = () => {

    updateMeta();

    removeExhibitionContent();

    updateHero();

    updateFeatures();

    updateServices();

    updateProfessionalsIntro();

    updateFlow();

    updateForm();

    addStyles();

  };


  const run = () => {

    apply();

    /*
      既存の古い追記コードが多いので
      最後にもう一度だけ確定させる
    */

    setTimeout(
      apply,
      120
    );

  };


  if (
    document.readyState === 'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      run,
      {
        once: true
      }
    );

  } else {

    run();

  }

})();
/* =========================================================
   HERO COPY FINAL FIX
   ========================================================= */

(() => {
  'use strict';

  const fixHeroCopy = () => {

    const title =
      document.getElementById(
        'professionals-title'
      );

    if (title) {
      title.innerHTML = `
        <span>
          <em class="hero-highlight">
            失敗できない企業イベントに、
          </em>
        </span>

        <span>
          局アナウンサーという選択を。
        </span>
      `;
    }


    const lead =
      document.querySelector(
        '.pro-hero__lead'
      );

    if (lead) {
      lead.textContent =
        'HELMIOは、元局アナウンサーを中心とした企業イベント専門のキャスティングサービスです。台本を読むだけではなく、案件内容を理解し、事前確認・読み合わせ・リハーサルを経て本番へ。記者発表、式典、カンファレンス、経営者登壇など、進行品質が求められる場を支えます。';
    }

  };


  const run = () => {
    fixHeroCopy();

    setTimeout(
      fixHeroCopy,
      150
    );
  };


  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      run,
      { once: true }
    );
  } else {
    run();
  }

})();
(() => {
  'use strict';

  const LOGO_FILES = [
    { name: '関西万博', file: './images/logo-expo2025.svg' },
    { name: 'JTB', file: './images/logo-jtb.svg' },
    { name: 'Jリーグ', file: './images/logo-jleague.svg' },
    { name: '笹川平和財団', file: './images/logo-sasakawa.svg' },
    { name: 'TOYOTA', file: './images/logo-toyota.svg' }
  ];

  const AD_VP_IMAGE = './images/ad-vp-narration.png';

  function injectStyles() {
    if (document.getElementById('helmio-casting-custom-style')) return;

    const style = document.createElement('style');
    style.id = 'helmio-casting-custom-style';
    style.textContent = `
      .helmio-logo-section {
        padding: 100px 0 40px;
        border-top: 1px solid #d9d9d9;
      }

      .helmio-logo-inner {
        width: min(1200px, calc(100% - 48px));
        margin: 0 auto;
      }

      .helmio-logo-eyebrow {
        margin: 0 0 16px;
        font-size: 13px;
        letter-spacing: 0.18em;
        color: #b58b3c;
        text-transform: uppercase;
      }

      .helmio-logo-title {
        margin: 0 0 18px;
        font-size: clamp(30px, 4vw, 52px);
        line-height: 1.2;
        color: #18385f;
        font-weight: 500;
      }

      .helmio-logo-subtitle {
        margin: 0 0 36px;
        font-size: 16px;
        line-height: 1.9;
        color: #4c5a6a;
      }

      .helmio-logo-grid {
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: 18px;
      }

      .helmio-logo-item {
        min-height: 108px;
        background: #f8f7f3;
        border: 1px solid #e8e2d8;
        border-radius: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }

      .helmio-logo-item img {
        max-width: 100%;
        max-height: 42px;
        object-fit: contain;
        display: block;
      }

      .helmio-logo-fallback {
        font-size: 18px;
        line-height: 1.5;
        color: #18385f;
        text-align: center;
        font-weight: 500;
      }

      .helmio-service-grid-3 {
        display: grid !important;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 28px;
        margin-top: 40px;
      }

      .helmio-service-card {
        display: flex;
        flex-direction: column;
        background: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 22px;
        overflow: hidden;
        height: 100%;
      }

      .helmio-service-card-media {
        aspect-ratio: 4 / 3;
        background: #f5f5f5;
      }

      .helmio-service-card-media img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .helmio-service-card-body {
        padding: 26px 24px 24px;
      }

      .helmio-service-card-number {
        margin: 0 0 10px;
        font-size: 13px;
        letter-spacing: 0.16em;
        color: #b58b3c;
      }

      .helmio-service-card-title {
        margin: 0 0 12px;
        font-size: 26px;
        line-height: 1.4;
        color: #18385f;
        font-weight: 500;
      }

      .helmio-service-card-price {
        margin: 0 0 14px;
        font-size: 16px;
        line-height: 1.6;
        color: #18385f;
        font-weight: 600;
      }

      .helmio-service-card-text {
        margin: 0;
        font-size: 15px;
        line-height: 1.9;
        color: #4c5a6a;
      }

      @media (max-width: 1100px) {
        .helmio-logo-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .helmio-service-grid-3 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 767px) {
        .helmio-logo-section {
          padding: 72px 0 20px;
        }

        .helmio-logo-inner {
          width: calc(100% - 32px);
        }

        .helmio-logo-grid,
        .helmio-service-grid-3 {
          grid-template-columns: 1fr;
        }

        .helmio-logo-item {
          min-height: 88px;
        }

        .helmio-service-card-title {
          font-size: 22px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function getHeadingText(section) {
    const heading = section.querySelector('h1, h2, h3, h4');
    return heading ? heading.textContent.replace(/\s+/g, ' ').trim() : '';
  }

  function findSectionByHeading(keywords) {
    const sections = [...document.querySelectorAll('section')];
    return sections.find((section) => {
      const text = getHeadingText(section);
      return keywords.some((keyword) => text.includes(keyword));
    });
  }

  function replaceFeatureSection() {
    const featureSection = findSectionByHeading(['HELMIOの特徴']);
    if (!featureSection) return;

    featureSection.className = '';
    featureSection.id = 'helmioLogoSection';
    featureSection.innerHTML = `
      <div class="helmio-logo-section">
        <div class="helmio-logo-inner">
          <p class="helmio-logo-eyebrow">ACHIEVEMENTS</p>
          <h2 class="helmio-logo-title">主な実績・関係先</h2>
          <p class="helmio-logo-subtitle">
            関西万博、JTB、Jリーグ、笹川平和財団、TOYOTA など、
            企業イベント・広報・ナレーション領域での実績があります。
          </p>
          <div class="helmio-logo-grid">
            ${LOGO_FILES.map((logo) => `
              <div class="helmio-logo-item">
                <img
                  src="${logo.file}"
                  alt="${logo.name}"
                  loading="lazy"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
                />
                <div class="helmio-logo-fallback" style="display:none;">${logo.name}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  function replaceServicesSection() {
    const serviceSection = findSectionByHeading(['サービス内容', '私たちのサービス', 'SERVICE']);
    if (!serviceSection) return;

    serviceSection.id = serviceSection.id || 'services';

    serviceSection.innerHTML = `
      <div class="helmio-logo-inner">
        <p class="helmio-logo-eyebrow">SERVICE</p>
        <h2 class="helmio-logo-title">サービス内容</h2>

        <div class="helmio-service-grid-3">
          <article class="helmio-service-card">
            <div class="helmio-service-card-body">
              <p class="helmio-service-card-number">01</p>
              <h3 class="helmio-service-card-title">司会・MCキャスティング</h3>
              <p class="helmio-service-card-price">90,000円〜 / 1日</p>
              <p class="helmio-service-card-text">
                式典、記者発表、カンファレンス、企業イベントなど、
                進行品質が求められる現場に合わせて、
                元局アナウンサーを中心とした人材をご提案します。
              </p>
            </div>
          </article>

          <article class="helmio-service-card">
            <div class="helmio-service-card-body">
              <p class="helmio-service-card-number">02</p>
              <h3 class="helmio-service-card-title">外国語対応MC・ナレーター</h3>
              <p class="helmio-service-card-price">130,000円〜</p>
              <p class="helmio-service-card-text">
                英語など外国語対応が必要なイベントや、
                海外来賓対応、国際カンファレンスなどに対応。
                内容理解から本番進行まで丁寧にサポートします。
              </p>
            </div>
          </article>

          <article class="helmio-service-card">
            <div class="helmio-service-card-media">
              <img src="${AD_VP_IMAGE}" alt="広告・VP・ナレーション" loading="lazy">
            </div>
            <div class="helmio-service-card-body">
              <p class="helmio-service-card-number">03</p>
              <h3 class="helmio-service-card-title">広告・VP・ナレーション</h3>
              <p class="helmio-service-card-price">案件ごとにお見積り</p>
              <p class="helmio-service-card-text">
                広告、企業VP、商品紹介動画、採用映像、館内音声など、
                伝える内容に合わせて、声・表現・届け方まで含めて対応します。
              </p>
            </div>
          </article>
        </div>
      </div>
    `;
  }

  function run() {
    injectStyles();
    replaceFeatureSection();
    replaceServicesSection();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }

  setTimeout(run, 200);
  setTimeout(run, 500);
})();
/* =========================================================
   SERVICE FINAL FIX
   01・02を元に戻して、03だけ追加
   ========================================================= */

(() => {
  'use strict';

  const fixServices = () => {

    const section =
      document.getElementById('service');

    if (!section) return;


    const cards =
      section.querySelectorAll(
        '.service-card'
      );


    /* =========================
       01 元の「一日司会」
       ========================= */

    const first = cards[0];

    if (first) {

      const body =
        first.querySelector(
          '.service-card__body'
        );

      if (body) {

        body.innerHTML = `
          <span class="service-card__number">
            01
          </span>

          <h3>
            一日司会
          </h3>

          <p class="service-card__catch">
            企業イベントを、
            経験あるプロの進行で
          </p>

          <p class="service-card__description">
            記者発表、式典、カンファレンス、
            表彰式、経営者登壇など。
            案件内容を事前に確認し、
            必要に応じて読み合わせ・
            リハーサルまで対応します。
          </p>

          <div class="service-card__price">
            <span>参考価格</span>
            <strong>90,000円〜</strong>
            <small>／1日</small>
          </div>

          <a
            class="service-card__link"
            href="#professionals"
          >
            候補者を見る
          </a>
        `;
      }
    }


    /* =========================
       02 元の「外国語対応」
       ========================= */

    const second = cards[1];

    if (second) {

      const body =
        second.querySelector(
          '.service-card__body'
        );

      if (body) {

        body.innerHTML = `
          <span class="service-card__number">
            02
          </span>

          <h3>
            外国語対応
          </h3>

          <p class="service-card__catch">
            国際イベント・海外ゲストにも対応
          </p>

          <p class="service-card__description">
            英語・中国語などの外国語進行、
            バイリンガルMC、
            海外ゲストを迎えるイベントなど、
            案件に合わせて対応可能な
            プロフェッショナルをご提案します。
          </p>

          <div class="service-card__price">
            <span>参考価格</span>
            <strong>130,000円〜</strong>
          </div>

          <a
            class="service-card__link"
            href="#casting-form"
          >
            外国語対応を相談する
          </a>
        `;
      }
    }


    /* =========================
       03 広告・VP・ナレーション
       ========================= */

    const third = cards[2];

    if (third) {

      const media =
        third.querySelector(
          '.service-card__media'
        );

      const image =
        media?.querySelector('img');

      if (image) {
        image.src =
          'ad-vp-narration.png';

        image.alt =
          '広告・VP・ナレーション撮影';
      }


      const body =
        third.querySelector(
          '.service-card__body'
        );

      if (body) {

        body.innerHTML = `
          <span class="service-card__number">
            03
          </span>

          <h3>
            広告・VP・ナレーション
          </h3>

          <p class="service-card__catch">
            映像・広告にも、
            伝えるプロを
          </p>

          <p class="service-card__description">
            企業VP、商品紹介動画、
            採用映像、WEB広告、
            ナレーションなど、
            案件に合う出演者・声をご提案します。
          </p>

          <div class="service-card__price">
            <span>参考価格</span>
            <strong>案件ごとにお見積り</strong>
          </div>

          <a
            class="service-card__link"
            href="#casting-form"
          >
            出演・ナレーションを相談する
          </a>
        `;
      }
    }

  };


  const apply = () => {
    fixServices();

    setTimeout(
      fixServices,
      120
    );

    setTimeout(
      fixServices,
      300
    );
  };


  if (
    document.readyState === 'loading'
  ) {
    document.addEventListener(
      'DOMContentLoaded',
      apply,
      { once: true }
    );
  } else {
    apply();
  }

})();
/* =========================================================
   SERVICE FINAL FIX
   01・02を元に戻して、03だけ追加
   ========================================================= */

(() => {
  'use strict';

  const fixServices = () => {

    const section =
      document.getElementById('service');

    if (!section) return;


    const cards =
      section.querySelectorAll(
        '.service-card'
      );


    /* =========================
       01 元の「一日司会」
       ========================= */

    const first = cards[0];

    if (first) {

      const body =
        first.querySelector(
          '.service-card__body'
        );

      if (body) {

        body.innerHTML = `
          <span class="service-card__number">
            01
          </span>

          <h3>
            一日司会
          </h3>

          <p class="service-card__catch">
            企業イベントを、
            経験あるプロの進行で
          </p>

          <p class="service-card__description">
            記者発表、式典、カンファレンス、
            表彰式、経営者登壇など。
            案件内容を事前に確認し、
            必要に応じて読み合わせ・
            リハーサルまで対応します。
          </p>

          <div class="service-card__price">
            <span>参考価格</span>
            <strong>90,000円〜</strong>
            <small>／1日</small>
          </div>

          <a
            class="service-card__link"
            href="#professionals"
          >
            候補者を見る
          </a>
        `;
      }
    }


    /* =========================
       02 元の「外国語対応」
       ========================= */

    const second = cards[1];

    if (second) {

      const body =
        second.querySelector(
          '.service-card__body'
        );

      if (body) {

        body.innerHTML = `
          <span class="service-card__number">
            02
          </span>

          <h3>
            外国語対応
          </h3>

          <p class="service-card__catch">
            国際イベント・海外ゲストにも対応
          </p>

          <p class="service-card__description">
            英語・中国語などの外国語進行、
            バイリンガルMC、
            海外ゲストを迎えるイベントなど、
            案件に合わせて対応可能な
            プロフェッショナルをご提案します。
          </p>

          <div class="service-card__price">
            <span>参考価格</span>
            <strong>130,000円〜</strong>
          </div>

          <a
            class="service-card__link"
            href="#casting-form"
          >
            外国語対応を相談する
          </a>
        `;
      }
    }


    /* =========================
       03 広告・VP・ナレーション
       ========================= */

    const third = cards[2];

    if (third) {

      const media =
        third.querySelector(
          '.service-card__media'
        );

      const image =
        media?.querySelector('img');

      if (image) {
        image.src =
          'ad-vp-narration.png';

        image.alt =
          '広告・VP・ナレーション撮影';
      }


      const body =
        third.querySelector(
          '.service-card__body'
        );

      if (body) {

        body.innerHTML = `
          <span class="service-card__number">
            03
          </span>

          <h3>
            広告・VP・ナレーション
          </h3>

          <p class="service-card__catch">
            映像・広告にも、
            伝えるプロを
          </p>

          <p class="service-card__description">
            企業VP、商品紹介動画、
            採用映像、WEB広告、
            ナレーションなど、
            案件に合う出演者・声をご提案します。
          </p>

          <div class="service-card__price">
            <span>参考価格</span>
            <strong>案件ごとにお見積り</strong>
          </div>

          <a
            class="service-card__link"
            href="#casting-form"
          >
            出演・ナレーションを相談する
          </a>
        `;
      }
    }

  };


  const apply = () => {
    fixServices();

    setTimeout(
      fixServices,
      120
    );

    setTimeout(
      fixServices,
      300
    );
  };


  if (
    document.readyState === 'loading'
  ) {
    document.addEventListener(
      'DOMContentLoaded',
      apply,
      { once: true }
    );
  } else {
    apply();
  }

})();
/* =========================================================
   SERVICE RESTORE FINAL
   01・02を元のカードデザインに戻す
   03だけ追加
   ========================================================= */

(() => {
  'use strict';

  const restoreServices = () => {

    const section =
      document.getElementById('service');

    if (!section) return;


    /* -------------------------
       前に追加した別デザインCSSを消す
       ------------------------- */

    document
      .getElementById('helmio-casting-custom-style')
      ?.remove();

    document
      .getElementById('helmio-casting-only-final-style')
      ?.remove();


    /*
      元のページと同じ
      container / section-head / service-grid /
      service-card 構造に戻す
    */

    section.className =
      'section section--cream';

    section.setAttribute(
      'aria-labelledby',
      'service-title'
    );


    section.innerHTML = `

      <div class="container">

        <header class="section-head">

          <div>

            <p class="section-label">
              SERVICE
            </p>

            <h2 id="service-title">
              サービス内容
            </h2>

          </div>

          <p>
            企業イベントの目的や会場、
            求める進行品質に合わせて、
            プロフェッショナルをご提案します。
          </p>

        </header>


        <div class="service-grid">


          <!-- =========================
               01 一日司会
               ========================= -->

          <article class="service-card">

            <div class="service-card__media">

              <span class="service-card__fallback">
                MC / ANNOUNCER
              </span>

              <img
                src="service-mc.jpg"
                alt="企業イベントで司会を務めるアナウンサー"
                loading="lazy"
                onerror="this.parentElement.classList.add('is-missing')"
              >

            </div>


            <div class="service-card__body">

              <span class="service-card__number">
                01
              </span>

              <h3>
                一日司会
              </h3>

              <p class="service-card__catch">
                企業イベントを、
                経験あるプロの進行で
              </p>

              <p class="service-card__description">
                記者発表、式典、
                カンファレンス、表彰式、
                経営者登壇など。
                案件内容を事前に確認し、
                必要に応じて読み合わせ・
                リハーサルまで対応します。
              </p>

              <div class="service-card__price">

                <span>
                  参考価格
                </span>

                <strong>
                  90,000円〜
                </strong>

                <small>
                  ／1日
                </small>

              </div>

              <a
                class="service-card__link"
                href="#professionals"
              >
                候補者を見る
              </a>

            </div>

          </article>



          <!-- =========================
               02 外国語対応
               ========================= -->

          <article class="service-card">

            <div class="service-card__media">

              <span class="service-card__fallback">
                BILINGUAL MC
              </span>

              <img
                src="service-bilingual.jpg"
                alt="国際イベントで進行するバイリンガルMC"
                loading="lazy"
                onerror="this.parentElement.classList.add('is-missing')"
              >

            </div>


            <div class="service-card__body">

              <span class="service-card__number">
                02
              </span>

              <h3>
                外国語対応
              </h3>

              <p class="service-card__catch">
                国際イベント・海外ゲストにも対応
              </p>

              <p class="service-card__description">
                英語・中国語などの外国語進行、
                バイリンガルMC、
                海外ゲストを迎えるイベントなど、
                案件に合わせて対応可能な
                プロフェッショナルをご提案します。
              </p>

              <div class="service-card__price">

                <span>
                  参考価格
                </span>

                <strong>
                  130,000円〜
                </strong>

              </div>

              <a
                class="service-card__link"
                href="#casting-form"
              >
                外国語対応を相談する
              </a>

            </div>

          </article>



          <!-- =========================
               03 広告・VP・ナレーション
               ========================= -->

          <article class="service-card">

            <div class="service-card__media">

              <span class="service-card__fallback">
                AD / VP / NARRATION
              </span>

              <img
                src="ad-vp-narration.png"
                alt="広告・VP・ナレーション撮影"
                loading="lazy"
                onerror="this.parentElement.classList.add('is-missing')"
              >

            </div>


            <div class="service-card__body">

              <span class="service-card__number">
                03
              </span>

              <h3>
                広告・VP・ナレーション
              </h3>

              <p class="service-card__catch">
                映像・広告にも、
                伝えるプロを
              </p>

              <p class="service-card__description">
                企業VP、商品紹介動画、
                採用映像、WEB広告、
                ナレーションなど、
                案件に合う出演者・声を
                ご提案します。
              </p>

              <div class="service-card__price">

                <span>
                  参考価格
                </span>

                <strong>
                  案件ごとにお見積り
                </strong>

              </div>

              <a
                class="service-card__link"
                href="#casting-form"
              >
                出演・ナレーションを相談する
              </a>

            </div>

          </article>


        </div>

      </div>

    `;


    /* -------------------------
       3枚横並びだけ保証
       フォントやカードデザインは
       既存CSSをそのまま使う
       ------------------------- */

    let style =
      document.getElementById(
        'service-restore-final-style'
      );

    if (!style) {

      style =
        document.createElement('style');

      style.id =
        'service-restore-final-style';

      document.head.appendChild(style);

    }


    style.textContent = `

      #service .service-grid {
        grid-template-columns:
          repeat(3, minmax(0, 1fr)) !important;
      }

      #service .service-card__media {
        display: block !important;
      }

      #service .service-card__media img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        object-position: center !important;
      }

      @media (max-width: 900px) {

        #service .service-grid {
          grid-template-columns:
            1fr !important;
        }

      }

    `;

  };


  const run = () => {

    restoreServices();

    /*
      古い追記コードが後から動いても
      最後にこれを勝たせる
    */

    setTimeout(
      restoreServices,
      350
    );

    setTimeout(
      restoreServices,
      750
    );

    setTimeout(
      restoreServices,
      1200
    );

  };


  if (
    document.readyState === 'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      run,
      { once: true }
    );

  } else {

    run();

  }

})();
/* =========================================================
   HELMIO PROFESSIONALS PAGE
   FINAL SERVICE / LOGO UPDATE

   ・HELMIOの特徴 → 実績ロゴエリアへ
   ・01 一日司会 → 元の画像付きカード
   ・02 外国語対応 → 元の画像付きカード
   ・03 広告・VP・ナレーション → 新規追加
   ・元のフォント / カードデザインに統一
   ========================================================= */

(() => {
  'use strict';


  /* =========================================================
     古い追加デザインを整理
     ========================================================= */

  const cleanupOldCustomStyles = () => {

    [
      'helmio-casting-custom-style',
      'helmio-casting-only-final-style',
      'service-restore-final-style',
      'helmio-service-grid-final-style',
      'helmio-logo-custom-style',
      'helmio-service-custom-style',
      'helmio-professionals-service-final-style'
    ].forEach(id => {

      document
        .getElementById(id)
        ?.remove();

    });


    /*
      前に作った別形式の
      ロゴセクションが残っていたら削除
    */

    document
      .getElementById(
        'helmioLogoSection'
      )
      ?.remove();

  };



  /* =========================================================
     FEATURESの場所を
     実績ロゴエリアに変更
     ========================================================= */

  const buildLogoSection = () => {

    const service =
      document.getElementById(
        'service'
      );

    if (!service) return;


    /*
      既存featuresがあれば
      その場所をそのまま使う
    */

    let section =
      document.getElementById(
        'features'
      );


    /*
      すでにfeaturesが削除済みなら
      SERVICEの直前に新しく作る
    */

    if (!section) {

      section =
        document.createElement(
          'section'
        );

      service.insertAdjacentElement(
        'beforebegin',
        section
      );

    }


    section.id =
      'selected-clients';

    section.className =
      'section helmio-clients-section';


    section.innerHTML = `

      <div class="container">

        <header class="helmio-clients-header">

          <p class="section-label">
            SELECTED EXPERIENCE
          </p>

          <h2>
            主な実績
          </h2>

          <p>
            企業イベント・カンファレンス・
            ステージ・映像など、
            さまざまな現場で経験を重ねています。
          </p>

        </header>


        <div class="helmio-client-grid">


          <!-- 大阪・関西万博 -->

          <div class="helmio-client-item">

            <img
              src="logo-expo2025.png"
              alt="大阪・関西万博"
              loading="lazy"
              onerror="
                this.style.display='none';
                this.nextElementSibling.style.display='block';
              "
            >

            <span class="helmio-client-fallback">
              大阪・関西万博
            </span>

          </div>



          <!-- JTB -->

          <div class="helmio-client-item">

            <img
              src="logo-jtb.png"
              alt="JTB"
              loading="lazy"
              onerror="
                this.style.display='none';
                this.nextElementSibling.style.display='block';
              "
            >

            <span class="helmio-client-fallback">
              JTB
            </span>

          </div>



          <!-- Jリーグ -->

          <div class="helmio-client-item">

            <img
              src="logo-jleague.png"
              alt="Jリーグ"
              loading="lazy"
              onerror="
                this.style.display='none';
                this.nextElementSibling.style.display='block';
              "
            >

            <span class="helmio-client-fallback">
              J.LEAGUE
            </span>

          </div>



          <!-- 笹川平和財団 -->

          <div class="helmio-client-item">

            <img
              src="logo-sasakawa.png"
              alt="笹川平和財団"
              loading="lazy"
              onerror="
                this.style.display='none';
                this.nextElementSibling.style.display='block';
              "
            >

            <span class="helmio-client-fallback">
              笹川平和財団
            </span>

          </div>



          <!-- TOYOTA -->

          <div class="helmio-client-item">

            <img
              src="logo-toyota.png"
              alt="TOYOTA"
              loading="lazy"
              onerror="
                this.style.display='none';
                this.nextElementSibling.style.display='block';
              "
            >

            <span class="helmio-client-fallback">
              TOYOTA
            </span>

          </div>


        </div>

      </div>

    `;

  };



  /* =========================================================
     SERVICE
     3枚とも「元のservice-card」で作り直す
     ========================================================= */

  const buildServices = () => {

    const section =
      document.getElementById(
        'service'
      );

    if (!section) return;


    /*
      元ページと同じsection構造
    */

    section.className =
      'section section--cream';

    section.setAttribute(
      'aria-labelledby',
      'service-title'
    );


    section.innerHTML = `

      <div class="container">


        <header class="section-head">

          <div>

            <p class="section-label">
              SERVICE
            </p>

            <h2 id="service-title">
              サービス内容
            </h2>

          </div>


          <p>
            企業イベントの目的や会場、
            求める進行品質に合わせて、
            プロフェッショナルをご提案します。
          </p>

        </header>



        <div class="service-grid">


          <!-- =================================================
               01 一日司会
               ================================================= -->

          <article class="service-card">


            <div class="service-card__media">

              <span class="service-card__fallback">
                MC / ANNOUNCER
              </span>


              <img
                src="service-mc.jpg"
                alt="企業イベントで司会を務めるアナウンサー"
                loading="lazy"
                onerror="
                  this.parentElement.classList.add('is-missing')
                "
              >

            </div>



            <div class="service-card__body">


              <span class="service-card__number">
                01
              </span>


              <h3>
                一日司会
              </h3>


              <p class="service-card__catch">
                企業イベントを、
                経験あるプロの進行で
              </p>


              <p class="service-card__description">

                記者発表、式典、
                カンファレンス、
                表彰式、経営者登壇など。

                案件内容を事前に確認し、
                必要に応じて
                読み合わせ・リハーサルまで
                対応します。

              </p>


              <div class="service-card__price">

                <span>
                  参考価格
                </span>

                <strong>
                  90,000円〜
                </strong>

                <small>
                  ／1日
                </small>

              </div>


              <a
                class="service-card__link"
                href="#professionals"
              >
                候補者を見る
              </a>


            </div>

          </article>




          <!-- =================================================
               02 外国語対応
               ================================================= -->

          <article class="service-card">


            <div class="service-card__media">

              <span class="service-card__fallback">
                BILINGUAL MC
              </span>


              <img
                src="service-bilingual.jpg"
                alt="国際イベントで進行するバイリンガルMC"
                loading="lazy"
                onerror="
                  this.parentElement.classList.add('is-missing')
                "
              >

            </div>



            <div class="service-card__body">


              <span class="service-card__number">
                02
              </span>


              <h3>
                外国語対応
              </h3>


              <p class="service-card__catch">
                国際イベント・
                海外ゲストにも対応
              </p>


              <p class="service-card__description">

                英語・中国語などの外国語進行、
                バイリンガルMC、
                海外ゲストを迎えるイベントなど。

                案件に合わせて、
                対応可能なプロフェッショナルを
                ご提案します。

              </p>


              <div class="service-card__price">

                <span>
                  参考価格
                </span>

                <strong>
                  130,000円〜
                </strong>

              </div>


              <a
                class="service-card__link"
                href="#casting-form"
              >
                外国語対応を相談する
              </a>


            </div>

          </article>




          <!-- =================================================
               03 広告・VP・ナレーション
               ================================================= -->

          <article class="service-card">


            <div class="service-card__media">

              <span class="service-card__fallback">
                AD / VP / NARRATION
              </span>


              <img
                src="ad-vp-narration.png.png"
                alt="広告・VP・ナレーションの撮影"
                loading="lazy"
                onerror="
                  this.parentElement.classList.add('is-missing')
                "
              >

            </div>



            <div class="service-card__body">


              <span class="service-card__number">
                03
              </span>


              <h3>
                広告・VP・ナレーション
              </h3>


              <p class="service-card__catch">
                映像・広告にも、
                伝えるプロを
              </p>


              <p class="service-card__description">

                企業VP、商品紹介動画、
                採用映像、WEB広告、
                ナレーションなど。

                案件の内容やブランドに合う
                出演者・声をご提案します。

              </p>


              <div class="service-card__price">

                <span>
                  参考価格
                </span>

                <strong>
                  案件ごとにお見積り
                </strong>

              </div>


              <a
                class="service-card__link"
                href="#casting-form"
              >
                出演・ナレーションを相談する
              </a>


            </div>

          </article>


        </div>


        <p class="service-price-note">

          ※参考価格です。
          案件内容・拘束時間・開催地域・
          事前準備の有無などにより
          個別にお見積もりします。

        </p>


      </div>

    `;

  };



  /* =========================================================
     FINAL STYLE
     元のデザインに戻す
     ========================================================= */

  const injectFinalStyles = () => {

    document
      .getElementById(
        'helmio-professionals-service-final-style'
      )
      ?.remove();


    const style =
      document.createElement(
        'style'
      );


    style.id =
      'helmio-professionals-service-final-style';


    style.textContent = `


      /* =====================================================
         CLIENT / EXPERIENCE LOGOS
         ===================================================== */

      #selected-clients {
        background:
          #fff;
      }


      #selected-clients
      .helmio-clients-header {
        display:
          grid;

        grid-template-columns:
          minmax(0,.72fr)
          minmax(360px,1.28fr);

        gap:
          70px;

        align-items:
          end;

        margin-bottom:
          48px;
      }


      #selected-clients
      .helmio-clients-header
      .section-label {
        grid-column:
          1 / -1;

        margin-bottom:
          -42px;
      }


      #selected-clients
      .helmio-clients-header
      h2 {
        color:
          var(--ink);

        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          clamp(
            34px,
            4vw,
            52px
          );

        font-weight:
          500;

        line-height:
          1.45;
      }


      #selected-clients
      .helmio-clients-header
      > p:last-child {
        color:
          var(--text);

        font-family:
          "Noto Sans JP",
          sans-serif;

        font-size:
          15px;

        line-height:
          2;
      }


      .helmio-client-grid {
        display:
          grid;

        grid-template-columns:
          repeat(
            5,
            minmax(0,1fr)
          );

        border-top:
          1px solid
          var(--line);

        border-bottom:
          1px solid
          var(--line);
      }


      .helmio-client-item {
        display:
          flex;

        align-items:
          center;

        justify-content:
          center;

        min-height:
          128px;

        padding:
          24px 18px;

        background:
          #fff;

        border-right:
          1px solid
          var(--line);
      }


      .helmio-client-item:last-child {
        border-right:
          0;
      }


      .helmio-client-item img {
        display:
          block;

        width:
          auto;

        max-width:
          135px;

        max-height:
          46px;

        object-fit:
          contain;
      }


      .helmio-client-fallback {
        display:
          none;

        color:
          var(--navy);

        font-family:
          "Noto Sans JP",
          sans-serif;

        font-size:
          16px;

        font-weight:
          700;

        letter-spacing:
          .03em;

        text-align:
          center;
      }




      /* =====================================================
         SERVICE
         元のカードデザイン
         ===================================================== */

      #service
      .service-grid {
        display:
          grid !important;

        grid-template-columns:
          repeat(
            3,
            minmax(0,1fr)
          ) !important;

        gap:
          24px !important;
      }


      #service
      .service-card {
        display:
          flex !important;

        flex-direction:
          column !important;

        min-height:
          590px !important;

        overflow:
          hidden !important;

        background:
          #fff !important;

        border:
          1px solid
          rgba(16,47,82,.14) !important;

        border-radius:
          14px !important;

        box-shadow:
          0 15px 36px
          rgba(16,47,82,.08) !important;
      }


      #service
      .service-card__media {
        position:
          relative !important;

        display:
          block !important;

        width:
          100% !important;

        aspect-ratio:
          1.75 / 1 !important;

        overflow:
          hidden !important;

        background:
          linear-gradient(
            135deg,
            #e8e1d6,
            #d8cdbd
          ) !important;
      }


      #service
      .service-card__media img {
        display:
          block;

        width:
          100% !important;

        height:
          100% !important;

        object-fit:
          cover !important;

        object-position:
          center center !important;
      }


      #service
      .service-card__media.is-missing
      img {
        display:
          none !important;
      }


      #service
      .service-card__media.is-missing
      .service-card__fallback {
        display:
          grid !important;
      }


      #service
      .service-card__fallback {
        display:
          none;

        position:
          absolute;

        inset:
          0;

        place-items:
          center;

        padding:
          20px;

        color:
          var(--navy);

        font-family:
          "Cormorant Garamond",
          serif;

        font-size:
          18px;

        letter-spacing:
          .12em;

        text-align:
          center;
      }


      #service
      .service-card__body {
        position:
          relative !important;

        display:
          flex !important;

        flex:
          1 !important;

        flex-direction:
          column !important;

        padding:
          54px 30px 28px !important;
      }


      #service
      .service-card__number {
        position:
          absolute !important;

        top:
          0 !important;

        left:
          50% !important;

        display:
          grid !important;

        width:
          78px !important;

        height:
          42px !important;

        place-items:
          center !important;

        color:
          var(--gold) !important;

        font-family:
          "Cormorant Garamond",
          serif !important;

        font-size:
          18px !important;

        font-weight:
          600 !important;

        letter-spacing:
          .12em !important;

        background:
          #fff !important;

        border:
          1px solid
          rgba(177,138,67,.42) !important;

        border-bottom:
          0 !important;

        border-radius:
          999px 999px 0 0 !important;

        transform:
          translate(
            -50%,
            -100%
          ) !important;
      }


      #service
      .service-card h3 {
        margin:
          0 !important;

        color:
          var(--ink) !important;

        font-family:
          "Noto Serif JP",
          serif !important;

        font-size:
          25px !important;

        font-weight:
          600 !important;

        line-height:
          1.55 !important;

        text-align:
          center !important;
      }


      #service
      .service-card__catch {
        margin:
          16px 0 0 !important;

        color:
          var(--ink) !important;

        font-family:
          "Noto Serif JP",
          serif !important;

        font-size:
          15px !important;

        font-weight:
          600 !important;

        line-height:
          1.75 !important;

        text-align:
          center !important;
      }


      #service
      .service-card__description {
        margin-top:
          18px !important;

        color:
          var(--text) !important;

        font-family:
          "Noto Sans JP",
          sans-serif !important;

        font-size:
          14px !important;

        font-weight:
          400 !important;

        line-height:
          2 !important;

        text-align:
          left !important;
      }


      #service
      .service-card__price {
        display:
          flex !important;

        flex-wrap:
          wrap;

        align-items:
          baseline;

        justify-content:
          center;

        gap:
          6px;

        margin-top:
          22px !important;

        padding-top:
          18px !important;

        border-top:
          1px solid
          rgba(16,47,82,.12);

        color:
          var(--navy);

        font-family:
          "Noto Sans JP",
          sans-serif !important;

        text-align:
          center;
      }


      #service
      .service-card__price span {
        color:
          var(--muted);

        font-size:
          11px;

        font-weight:
          600;
      }


      #service
      .service-card__price strong {
        color:
          var(--navy);

        font-size:
          18px;

        font-weight:
          700;
      }


      #service
      .service-card__price small {
        color:
          var(--muted);

        font-size:
          11px;
      }


      #service
      .service-card__link {
        display:
          flex !important;

        align-items:
          center !important;

        gap:
          8px !important;

        margin-top:
          auto !important;

        padding-top:
          20px !important;

        border-top:
          1px solid
          rgba(16,47,82,.14) !important;

        color:
          var(--navy) !important;

        font-family:
          "Noto Sans JP",
          sans-serif !important;

        font-size:
          14px !important;

        font-weight:
          700 !important;
      }


      #service
      .service-card__link::after {
        content:
          "→";

        color:
          var(--gold);
      }


      #service
      .service-price-note {
        margin-top:
          22px;

        color:
          var(--muted);

        font-size:
          12px;

        line-height:
          1.8;

        text-align:
          right;
      }




      /* =====================================================
         TABLET
         ===================================================== */

      @media (
        max-width: 980px
      ) {

        .helmio-client-grid {
          grid-template-columns:
            repeat(
              3,
              minmax(0,1fr)
            );
        }


        .helmio-client-item {
          border-bottom:
            1px solid
            var(--line);
        }


        #service
        .service-grid {
          grid-template-columns:
            1fr !important;

          max-width:
            620px;

          margin:
            0 auto;
        }


        #service
        .service-card {
          min-height:
            0 !important;
        }

      }




      /* =====================================================
         MOBILE
         ===================================================== */

      @media (
        max-width: 600px
      ) {

        #selected-clients
        .helmio-clients-header {
          grid-template-columns:
            1fr;

          gap:
            18px;
        }


        #selected-clients
        .helmio-clients-header
        .section-label {
          grid-column:
            auto;

          margin-bottom:
            0;
        }


        .helmio-client-grid {
          grid-template-columns:
            repeat(
              2,
              minmax(0,1fr)
            );
        }


        .helmio-client-item {
          min-height:
            96px;

          padding:
            18px 12px;
        }


        .helmio-client-item img {
          max-width:
            110px;

          max-height:
            36px;
        }


        .helmio-client-fallback {
          font-size:
            14px;
        }


        #service
        .service-card__body {
          padding:
            48px 22px 24px !important;
        }


        #service
        .service-card h3 {
          font-size:
            22px !important;
        }

      }

    `;


    document.head.appendChild(
      style
    );

  };



  /* =========================================================
     APPLY
     ========================================================= */

  const applyAll = () => {

    cleanupOldCustomStyles();

    buildLogoSection();

    buildServices();

    injectFinalStyles();

  };



  const run = () => {

    applyAll();


    /*
      これまでの古い追記コードより
      最後に確実に勝たせる
    */

    setTimeout(
      applyAll,
      150
    );


    setTimeout(
      applyAll,
      500
    );


    setTimeout(
      applyAll,
      1200
    );

  };



  if (
    document.readyState === 'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      run,
      {
        once: true
      }
    );

  } else {

    run();

  }

})();
/* =========================================================
   ACHIEVEMENTS DUPLICATE FIX
   実績ロゴエリアを1つだけ残す
   ========================================================= */

(() => {
  'use strict';

  const repairAchievements = () => {

    /* 古いロゴ実績セクションは削除 */
    document
      .querySelectorAll('#helmioLogoSection')
      .forEach(section => section.remove());


    /* selected-clients は1つだけ残す */
    const sections =
      Array.from(
        document.querySelectorAll(
          '#selected-clients'
        )
      );


    sections.forEach(
      (section, index) => {

        if (index > 0) {
          section.remove();
        }

      }
    );


    const selected =
      document.querySelector(
        '#selected-clients'
      );


    if (!selected) return;


    /* 見出しも詳細実績と被らないように変更 */
    const label =
      selected.querySelector(
        '.section-label'
      );

    if (label) {
      label.textContent =
        'SELECTED EXPERIENCE';
    }


    const title =
      selected.querySelector('h2');

    if (title) {
      title.textContent =
        '主な担当・参画実績';
    }


    const lead =
      selected.querySelector(
        '.helmio-clients-header > p:last-child'
      );

    if (lead) {
      lead.textContent =
        '企業イベント、カンファレンス、スポーツ、映像など、代表・参画メンバーの主な担当・参画実績です。';
    }


    /* 必ずサービスの直前に1個だけ配置 */
    const service =
      document.getElementById(
        'service'
      );

    if (
      service &&
      selected.nextElementSibling !== service
    ) {

      service.insertAdjacentElement(
        'beforebegin',
        selected
      );

    }

  };


  const run = () => {

    repairAchievements();

    /*
      古い追記コードのタイマー処理が
      後から実績欄を再生成するので、
      最後まで掃除する
    */

    [
      250,
      600,
      1000,
      1400,
      1800
    ].forEach(delay => {

      setTimeout(
        repairAchievements,
        delay
      );

    });

  };


  if (
    document.readyState === 'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      run,
      { once: true }
    );

  } else {

    run();

  }

})();
/* =========================================================
   今井 友理恵 追加
   ・元局アナウンサー枠
   ・村上史さんの直後
   ・一覧写真 = 白ノースリーブ
   ・詳細写真 = 白ノースリーブ / 全身 / ジャケット
   ========================================================= */

(() => {
  'use strict';


  const TALENT_ID =
    'yurie-imai';


  /* =========================================================
     PROFILE DATA
     ========================================================= */

  const yurieImai = {

    id:
      TALENT_ID,

    name:
      '今井 友理恵',

    kana:
      'いまい ゆりえ',

    englishName:
      'YURIE IMAI',

    /*
      PDFは今回なし。
      後でPDFを作った場合だけ
      ファイル名を入れればOK。
    */
    pdf:
      '',


    /* 一覧カードは2枚目の白ノースリーブ */
    cardImage:
      'yurie-imai-main.png',


    /*
      プロフィールを開いた時の写真

      1枚目
      白ノースリーブ

      2枚目
      全身

      3枚目
      白ジャケット
    */
    photos: [

      'yurie-imai-main.png',

      'yurie-imai-full.png',

      'yurie-imai-sub.png'

    ],


    /* =====================================================
       PROFILE SUMMARY
       他メンバーと同じ文量・書き方に整理
       ===================================================== */

    summary:
      '1993年11月24日生まれ、岩手県盛岡市出身。慶應義塾大学法学部政治学科卒業後、石川テレビにアナウンサーとして入社。5年間にわたり、平日朝の情報番組を中心に、ニュース、スポーツ、音楽番組、バラエティ、中継、インタビューなど幅広い現場を経験した。\n\n緊急の全国中継や著名人との共演など、臨機応変な対応が求められる現場も多数担当。2021年よりフリーアナウンサーとして、企業イベント、記者発表会、式典、セミナー、ラジオなどを中心に活動している。\n\n情報番組で培った安定した進行力と、ゲストの魅力を自然に引き出すコミュニケーション力を強みに、フォーマルな企業イベントからトークセッションまで幅広く対応する。',


    /* =====================================================
       BASIC PROFILE
       ===================================================== */

    profile: {

      height:
        '164cm',

      birthplace:
        '岩手県盛岡市',

      bloodType:
        '',

      education:
        '慶應義塾大学 法学部 政治学科',

      hobbies:
        '海外旅行、ドラマ鑑賞、お酒、ダンス',

      skills:
        'たくさん食べる、方言の使い分け、早起き',

      qualifications:
        'SSI認定 日本酒ナビゲーター、世界遺産検定2級'

    },


    /* =====================================================
       対応領域
       ===================================================== */

    tags: [

      '元局アナウンサー',

      '情報番組',

      'ニュース・報道',

      '企業イベント',

      '記者発表会',

      '式典',

      'カンファレンス',

      'トークセッション',

      'ラジオ',

      'スポーツ',

      'インタビュー'

    ],


    /* =====================================================
       主な経歴・実績
       ===================================================== */

    careers: [


      /* ==============================
         現在出演
         ============================== */

      {
        category:
          '現在出演',

        text:
          'FM yokohama「YOKOHAMA My Choice!」DJ'
      },

      {
        category:
          '現在出演',

        text:
          'LuckyFM「ダイバーシティニュース」キャスター'
      },

      {
        category:
          '現在出演',

        text:
          'グローバルウェイ「Next DX Leader」MC'
      },



      /* ==============================
         石川テレビ
         ============================== */

      {
        category:
          '石川テレビ',

        text:
          'アナウンサーとして5年間在籍。平日朝の情報番組を中心に、報道・バラエティ・スポーツ・音楽番組などを担当'
      },

      {
        category:
          '石川テレビ',

        text:
          '「石川さん情報Live リフレッシュ」'
      },

      {
        category:
          '石川テレビ',

        text:
          '「石川さんLive News it」'
      },

      {
        category:
          '石川テレビ',

        text:
          '「ボクシング 拳の嵐」'
      },

      {
        category:
          '石川テレビ',

        text:
          '「石川県ジュニアサッカー大会」／ゲスト：鈴木隆行'
      },

      {
        category:
          '石川テレビ',

        text:
          '音楽情報番組「N-18凸」／Da-iCE、フジファブリックほかインタビュー'
      },

      {
        category:
          '石川テレビ',

        text:
          '「池上彰が徹底解説！あなたの知らない石川の今」'
      },



      /* ==============================
         テレビ・全国放送
         ============================== */

      {
        category:
          'テレビ・全国放送',

        text:
          'フジテレビ「めざましテレビ」'
      },

      {
        category:
          'テレビ・全国放送',

        text:
          'フジテレビ「FNS27時間テレビ にほんのスポーツは強いっ！」'
      },

      {
        category:
          'テレビ・全国放送',

        text:
          'フジテレビ「直撃LIVE グッディ！」／「バイキング」／「国分太一のおさんぽジャパン」'
      },

      {
        category:
          'テレビ・全国放送',

        text:
          'FNS北陸「ぐっさんの北陸3県どんぶりハンター！」'
      },

      {
        category:
          'テレビ・全国放送',

        text:
          'FNS北陸「TKOが北陸暮らしの外国人と出会った」／「JOY×北陸のご長寿さんマジRESPECT！」'
      },

      {
        category:
          'テレビ・全国放送',

        text:
          'BSフジ「わがまま！気まま！旅気分」／つるの剛士とロケ共演'
      },

      {
        category:
          'テレビ・全国放送',

        text:
          '関西テレビ「にじいろジーン」／ガレッジセールとロケ共演'
      },



      /* ==============================
         企業イベント・記者発表会
         ============================== */

      {
        category:
          '企業イベント・記者発表会',

        text:
          '興和株式会社 大谷翔平選手 新CM発表会'
      },

      {
        category:
          '企業イベント・記者発表会',

        text:
          'デル・テクノロジーズ株式会社 Dell XPS 13 記者発表会／ゲスト：渋谷凪咲'
      },

      {
        category:
          '企業イベント・記者発表会',

        text:
          '株式会社PR TIMES 食べ物語 AWARDS & 試食会／プレスリリースアワード2023'
      },

      {
        category:
          '企業イベント・記者発表会',

        text:
          'メルクバイオファーマ株式会社 オンラインシンポジウム／ゲスト：安田美沙子'
      },

      {
        category:
          '企業イベント・記者発表会',

        text:
          'JR東海「いざいざ奈良」キャンペーンイベント'
      },

      {
        category:
          '企業イベント・記者発表会',

        text:
          'NTTコミュニケーションズ 営業担当向けセミナー'
      },

      {
        category:
          '企業イベント・記者発表会',

        text:
          'パーソル プロセス＆テクノロジー 社員総会'
      },

      {
        category:
          '企業イベント・記者発表会',

        text:
          'マイナビ 社内新規事業 最終プレゼンテーション＆表彰式'
      },

      {
        category:
          '企業イベント・記者発表会',

        text:
          '2024年 日本アクア決起大会 表彰式・懇親パーティー'
      },

      {
        category:
          '企業イベント・記者発表会',

        text:
          '住友商事グローバルメタルズ 第3回浮体式洋上風力発電カンファレンス'
      },

      {
        category:
          '企業イベント・記者発表会',

        text:
          '大興電子通信 エグゼクティブセミナー'
      },

      {
        category:
          '企業イベント・記者発表会',

        text:
          'スターツ出版 オズモール×コート・デュ・ローヌ ワインパーティー'
      },



      /* ==============================
         イベントMC
         ============================== */

      {
        category:
          'イベントMC',

        text:
          '石川さんカーニバル 2016〜2020／じゅんいちダビッドソン、アルコ＆ピースほか'
      },

      {
        category:
          'イベントMC',

        text:
          'kimono佳扇 きものパーティー2020／ゲスト：市川由紀乃'
      },

      {
        category:
          'イベントMC',

        text:
          'フォーエイト メジャーデビュー記念ミニライブイベント'
      },

      {
        category:
          'イベントMC',

        text:
          'Honda Kids 親子向け体験型オンラインイベント／ゲスト：デカキン'
      },

      {
        category:
          'イベントMC',

        text:
          'ダリア ヘアコンテスト D-CONTEST2022 -next generation- FINAL'
      },

      {
        category:
          'イベントMC',

        text:
          '第41回 関東誠鏡会 総会・懇親会'
      },

      {
        category:
          'イベントMC',

        text:
          'ダイヤモンド・プレミアム 3周年イベント オンラインセミナー'
      },



      /* ==============================
         トークセッション共演
         ============================== */

      {
        category:
          'トークセッション共演',

        text:
          '高城れに／渋谷凪咲／髙橋ひかる／黒川友香／安田美沙子／休井美郷／角田夏実／笠原将弘／きじまりゅうた／太田賢一／フォーエイト／ロッチ／アルコ＆ピース／ほいけんた／そいつどいつ／鈴木隆行 ほか'
      },



      /* ==============================
         TV・ラジオ インタビュー
         ============================== */

      {
        category:
          'TV・ラジオ インタビュー',

        text:
          '相川七瀬／役所広司／池松壮亮／仲野太賀／利重剛／伊東蒼／黒崎煌代／バッドボーイズ清人／フジファブリック／TOTALFAT ほか'
      },



      /* ==============================
         TVロケ共演
         ============================== */

      {
        category:
          'TVロケ共演',

        text:
          'ぐっさん／つるの剛士／JOY／ガレッジセール／TKO／Da-iCE／寺田真二郎／国分太一 ほか'
      }

    ],


    youtube:
      []

  };



  /* =========================================================
     TALENT DATAへ追加
     ========================================================= */

  const addTalentData = () => {

    if (
      !Array.isArray(
        window.HELMIO_TALENTS
      )
    ) {
      return;
    }


    /*
      同じIDがすでにあれば一旦削除
      → 二重登録を防ぐ
    */

    const existingIndex =
      window.HELMIO_TALENTS
        .findIndex(
          talent =>
            talent?.id ===
            TALENT_ID
        );


    if (
      existingIndex !== -1
    ) {

      window.HELMIO_TALENTS.splice(
        existingIndex,
        1
      );

    }


    /*
      window.HELMIO_TALENTS は
      モーダル側から参照されているため、
      配列自体を交換せず
      splice/pushで中身だけ変更する。
    */

    window.HELMIO_TALENTS.push(
      yurieImai
    );

  };



  /* =========================================================
     CARD
     村上史さんの直後へ追加
     ========================================================= */

  const addTalentCard = () => {

    const broadcastGroup =
      document.querySelector(
        '#broadcast-professionals-title'
      )
      ?.closest(
        '.talent-group'
      );


    const grid =
      broadcastGroup
        ?.querySelector(
          '.talent-cards--group'
        );


    if (!grid) {
      return;
    }


    /*
      再実行時の二重表示を防ぐ
    */

    grid
      .querySelector(
        `[data-talent-id="${TALENT_ID}"]`
      )
      ?.remove();


    const card =
      document.createElement(
        'button'
      );


    card.type =
      'button';

    card.className =
      'talent-card';

    card.setAttribute(
      'aria-haspopup',
      'dialog'
    );

    card.setAttribute(
      'data-talent-id',
      TALENT_ID
    );


    card.innerHTML = `

      <div class="talent-card__media">

        <span class="talent-card__fallback">
          YURIE IMAI
        </span>

        <img
          src="yurie-imai-main.png"
          alt="今井 友理恵"
          loading="lazy"
        >

      </div>


      <div class="talent-card-body">

        <p class="talent-name">
          今井 友理恵
        </p>

        <p class="talent-catchphrase">
          石川テレビ5年。
          報道×イベントの安定進行
        </p>

      </div>

    `;


    /*
      村上史さんを探して
      必ずその直後に置く
    */

    const murakami =
      grid.querySelector(
        '[data-talent-id="fumi-murakami"]'
      );


    if (murakami) {

      murakami.insertAdjacentElement(
        'afterend',
        card
      );

    } else {

      grid.appendChild(
        card
      );

    }


    /*
      画像読み込み失敗時は
      他カードと同じfallback処理
    */

    card
      .querySelector('img')
      ?.addEventListener(
        'error',
        event => {

          event.currentTarget
            .closest(
              '.talent-card__media'
            )
            ?.classList.add(
              'is-missing'
            );

        }
      );

  };



  /* =========================================================
     APPLY
     ========================================================= */

  const apply = () => {

    addTalentData();

    addTalentCard();

  };


  const run = () => {

    apply();


    /*
      既存のprofessionals-update.jsが
      カードを再構築した場合にも
      最後に今井さんを戻す
    */

    [
      150,
      450,
      900,
      1400
    ].forEach(
      delay => {

        setTimeout(
          apply,
          delay
        );

      }
    );

  };


  if (
    document.readyState ===
    'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      run,
      {
        once: true
      }
    );

  } else {

    run();

  }

})();
/* =========================================================
   東條 麻依子 追加
   ・元局アナウンサー枠
   ・今井友理恵さんの直後
   ・一覧写真 = 添付3枚目
   ・詳細写真 = 4枚
   ========================================================= */

(() => {
  'use strict';


  const TALENT_ID =
    'maiko-tojo';



  /* =========================================================
     PROFILE DATA
     ========================================================= */

  const maikoTojo = {

    id:
      TALENT_ID,

    name:
      '東條 麻依子',

    kana:
      '',

    englishName:
      'MAIKO TOJO',

    pdf:
      '',


    /* 一覧カードは添付3枚目 */
    cardImage:
      'maiko-tojo-main.png',


    /* プロフィール内の写真 */
    photos: [

      'maiko-tojo-main.png',

      'maiko-tojo-sub1.jpg',

      'maiko-tojo-full.png',

      'maiko-tojo-radio.png'

    ],



    /* =====================================================
       SUMMARY
       他のアナウンサーと同じ形式に整理
       ===================================================== */

    summary:
      '同志社大学経済学部卒業後、2018年にテレビせとうちへ入社。8年間、局アナウンサーとして報道・経済・スポーツ番組を担当した。報道番組「TSCnews5」のキャスターを経て、経済番組「プライド せとうち経済のチカラ」では6年間にわたりMC・ディレクターを担当。200人を超える経営者への取材・対談を経験している。\n\n企業の事業内容を紹介するだけでなく、挑戦の背景や働く人の思いまで掘り下げるインタビューを得意とし、経営者との対談やシンポジウムでは、相手の言葉を受けて次の問いにつなげるファシリテーションを行う。\n\nスポーツ分野では2022年からファジアーノ岡山の実況を担当。2024年にはクラブ史上初となるJ1昇格の瞬間を実況。企業イベント、式典、トークショーから経済・スポーツまで、内容を理解したうえで安定した進行に対応する。',



    /* =====================================================
       BASIC PROFILE
       提供情報がある項目だけ掲載
       ===================================================== */

    profile: {

      height:
        '',

      birthplace:
        '',

      bloodType:
        '',

      education:
        '同志社大学 経済学部',

      hobbies:
        '',

      skills:
        '経営者インタビュー、ファシリテーション、スポーツ実況',

      qualifications:
        ''

    },



    /* =====================================================
       対応領域
       ===================================================== */

    tags: [

      '元局アナウンサー',

      '経済番組',

      'ニュース・報道',

      '企業イベント',

      '式典',

      'トークショー',

      'ファシリテーション',

      '経営者インタビュー',

      'スポーツ実況',

      'ナレーション'

    ],



    /* =====================================================
       主な経歴・実績
       ===================================================== */

    careers: [


      /* ==============================
         テレビせとうち
         ============================== */

      {
        category:
          'テレビせとうち',

        text:
          '2018年入社。8年間、局アナウンサーとして報道・経済・スポーツ番組を担当'
      },

      {
        category:
          'テレビせとうち',

        text:
          '「TSCnews5」キャスター（2018年〜2019年）'
      },

      {
        category:
          'テレビせとうち',

        text:
          '「プライド せとうち経済のチカラ」MC・ディレクター（2020年〜2026年）'
      },

      {
        category:
          'テレビせとうち',

        text:
          '「スタートアップテラス 集まれ！せとうち未来人」'
      },

      {
        category:
          'テレビせとうち',

        text:
          '「LBS ザ・フォーラムせとうち in 岡山2025」'
      },

      {
        category:
          'テレビせとうち',

        text:
          '「せとうち企業対決！困っている人を助けるものづくり選手権」'
      },

      {
        category:
          'テレビせとうち',

        text:
          '「ジモサーチ 津山編」'
      },

      {
        category:
          'テレビせとうち',

        text:
          '「みんなの岡山県議会」'
      },



      /* ==============================
         経済・企業取材
         ============================== */

      {
        category:
          '経済・企業取材',

        text:
          '経済番組で6年間、MC・ディレクターとして200人を超える経営者を取材'
      },

      {
        category:
          '経済・企業取材',

        text:
          '地元経営者との対談・討論でファシリテーターを担当し、経営戦略や地域経済について議論を進行'
      },



      /* ==============================
         スポーツ実況
         ============================== */

      {
        category:
          'スポーツ実況',

        text:
          'ファジアーノ岡山 実況生中継'
      },

      {
        category:
          'スポーツ実況',

        text:
          '実況16試合を担当。2024年、クラブ史上初となるJ1昇格の瞬間を実況'
      },



      /* ==============================
         式典・企業イベント
         ============================== */

      {
        category:
          '式典・企業イベント',

        text:
          '英田エンジニアリング 50周年式典'
      },

      {
        category:
          '式典・企業イベント',

        text:
          '大松精機 赤磐工場竣工式 オープニングセレモニー＆トークショー'
      },

      {
        category:
          '式典・企業イベント',

        text:
          'つなぐ・はばたく青年経済人シンポジウム'
      },

      {
        category:
          '式典・企業イベント',

        text:
          'マルイ協力会 第29回総会＆トークショー'
      },

      {
        category:
          '式典・企業イベント',

        text:
          '日本トリム Presents 第14回全国女子選抜フットサル大会'
      },



      /* ==============================
         ファシリテーション
         ============================== */

      {
        category:
          'ファシリテーション',

        text:
          'シンポジウムや企業対談で、相手の回答を受けて問いを重ね、新たな視点や思いを引き出す進行を担当'
      },



      /* ==============================
         ナレーション
         ============================== */

      {
        category:
          'ナレーション',

        text:
          '映像の展開や音楽の流れに合わせ、間や抑揚を意識したナレーション収録に対応'
      }

    ],


    youtube:
      []

  };



  /* =========================================================
     TALENT DATAへ追加
     ========================================================= */

  const addTalentData = () => {

    if (
      !Array.isArray(
        window.HELMIO_TALENTS
      )
    ) {
      return;
    }


    const existingIndex =
      window.HELMIO_TALENTS
        .findIndex(
          talent =>
            talent?.id ===
            TALENT_ID
        );


    if (
      existingIndex !== -1
    ) {

      window.HELMIO_TALENTS.splice(
        existingIndex,
        1
      );

    }


    window.HELMIO_TALENTS.push(
      maikoTojo
    );

  };



  /* =========================================================
     CARD
     今井友理恵さんの直後へ
     ========================================================= */

  const addTalentCard = () => {

    const broadcastGroup =
      document.querySelector(
        '#broadcast-professionals-title'
      )
      ?.closest(
        '.talent-group'
      );


    const grid =
      broadcastGroup
        ?.querySelector(
          '.talent-cards--group'
        );


    if (!grid) {
      return;
    }


    /*
      二重表示防止
    */

    grid
      .querySelector(
        `[data-talent-id="${TALENT_ID}"]`
      )
      ?.remove();



    const card =
      document.createElement(
        'button'
      );


    card.type =
      'button';

    card.className =
      'talent-card';

    card.setAttribute(
      'aria-haspopup',
      'dialog'
    );

    card.setAttribute(
      'data-talent-id',
      TALENT_ID
    );


    card.innerHTML = `

      <div class="talent-card__media">

        <span class="talent-card__fallback">
          MAIKO TOJO
        </span>

        <img
          src="maiko-tojo-main.png"
          alt="東條 麻依子"
          loading="lazy"
        >

      </div>


      <div class="talent-card-body">

        <p class="talent-name">
          東條 麻依子
        </p>

        <p class="talent-catchphrase">
          経済番組MC6年。
          経営者の本音を引き出す進行力
        </p>

      </div>

    `;



    /*
      今井さんの直後に配置
    */

    const imai =
      grid.querySelector(
        '[data-talent-id="yurie-imai"]'
      );


    if (imai) {

      imai.insertAdjacentElement(
        'afterend',
        card
      );

    } else {

      /*
        今井さんがまだ描画前なら
        村上さんの直後に一時配置。
        後の再実行で今井さんの次へ移る。
      */

      const murakami =
        grid.querySelector(
          '[data-talent-id="fumi-murakami"]'
        );


      if (murakami) {

        murakami.insertAdjacentElement(
          'afterend',
          card
        );

      } else {

        grid.appendChild(
          card
        );

      }

    }



    card
      .querySelector('img')
      ?.addEventListener(
        'error',
        event => {

          event.currentTarget
            .closest(
              '.talent-card__media'
            )
            ?.classList.add(
              'is-missing'
            );

        }
      );

  };



  /* =========================================================
     APPLY
     ========================================================= */

  const apply = () => {

    addTalentData();

    addTalentCard();

  };


  const run = () => {

    apply();


    /*
      今井さん追加コードや
      既存カード再構築より後に
      最終位置を確定させる
    */

    [
      200,
      500,
      950,
      1500,
      1900
    ].forEach(
      delay => {

        setTimeout(
          apply,
          delay
        );

      }
    );

  };


  if (
    document.readyState ===
    'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      run,
      {
        once: true
      }
    );

  } else {

    run();

  }

})();
/* =========================================================
   HELMIO SERVICE
   FINAL 4 CARDS
   ・カードデザインは既存のまま
   ・01 一日司会
   ・02 広報・PR支援
   ・03 企業研修
   ・04 広告・VP・ナレーション
   ========================================================= */

(() => {
  'use strict';


  const rebuildServiceCards = () => {

    const section =
      document.getElementById('service');

    if (!section) return;


    section.className =
      'section section--cream';

    section.setAttribute(
      'aria-labelledby',
      'service-title'
    );


    section.innerHTML = `

      <div class="container">


        <header class="section-head">

          <div>

            <p class="section-label">
              SERVICE
            </p>

            <h2 id="service-title">
              サービス内容
            </h2>

          </div>


          <p>
            企業の「伝える」を、
            プロフェッショナルの力で。
            司会・広報・研修・映像まで、
            必要な領域に合わせてご相談いただけます。
          </p>

        </header>



        <div class="service-grid">


          <!-- =================================================
               01 一日司会
               ================================================= -->

          <article class="service-card">

            <div class="service-card__media">

              <span class="service-card__fallback">
                MC / ANNOUNCER
              </span>

              <img
                src="service-mc.jpg"
                alt="企業イベントで司会を務めるアナウンサー"
                loading="lazy"
                onerror="
                  this.parentElement.classList.add('is-missing')
                "
              >

            </div>


            <div class="service-card__body">

              <span class="service-card__number">
                01
              </span>

              <h3>
                一日司会
              </h3>

              <p class="service-card__catch">
                企業イベントを、
                経験あるプロの進行で
              </p>

              <p class="service-card__description">
                記者発表、式典、カンファレンス、
                表彰式、経営者登壇など。
                案件内容を事前に確認し、
                必要に応じて
                読み合わせ・リハーサルまで対応します。
                英語・中国語・韓国語に対応できる
                アナウンサーも在籍しています。
              </p>


              <div class="service-card__price">

                <span>
                  参考価格
                </span>

                <strong>
                  90,000円〜
                </strong>

                <small>
                  ／1日
                </small>

              </div>


              <a
                class="service-card__link"
                href="#professionals"
              >
                候補者を見る
              </a>

            </div>

          </article>



          <!-- =================================================
               02 広報・PR支援
               ================================================= -->

          <article class="service-card">

            <div
              class="service-card__media is-missing"
            >

              <span class="service-card__fallback">
                PUBLIC RELATIONS
              </span>

            </div>


            <div class="service-card__body">

              <span class="service-card__number">
                02
              </span>

              <h3>
                広報・PR支援
              </h3>

              <p class="service-card__catch">
                メディアの視点から、
                届く企画をつくる
              </p>

              <p class="service-card__description">
                元放送局アナウンサーと
                大手PR会社出身者が、
                企業の広報・PRを支援。
                メディアが何をニュースとして
                取り上げるのかを知る視点から、
                発信テーマの整理、PR企画、
                プレスリリース、
                メディアアプローチ、
                取材対応までサポートします。
              </p>


              <p class="service-card__mini">
                PR企画 ／ プレスリリース ／
                メディアリレーション ／
                取材対応 ／ PRイベント
              </p>


              <div class="service-card__price">

                <span>
                  参考価格
                </span>

                <strong>
                  案件ごとにお見積り
                </strong>

              </div>


              <a
                class="service-card__link"
                href="#casting-form"
              >
                広報・PRについて相談する
              </a>

            </div>

          </article>



          <!-- =================================================
               03 企業研修
               ================================================= -->

          <article class="service-card">

            <div
              class="service-card__media is-missing"
            >

              <span class="service-card__fallback">
                CORPORATE TRAINING
              </span>

            </div>


            <div class="service-card__body">

              <span class="service-card__number">
                03
              </span>

              <h3>
                企業研修
              </h3>

              <p class="service-card__catch">
                伝わる話し方を、
                仕事の武器に
              </p>

              <p class="service-card__description">
                放送・司会の現場で培った
                「話す・伝える・引き出す」技術を
                企業研修へ。
                マナー・秘書関連資格を持つ
                アナウンサーや、
                スピーチ指導経験を持つ講師が、
                第一印象、話し方、
                プレゼンテーション、
                質疑応答まで実践形式で指導します。
              </p>


              <div class="service-training-targets">

                <p>
                  <strong>新入社員</strong>
                  マナー・敬語・報連相・第一印象
                </p>

                <p>
                  <strong>営業・管理職</strong>
                  説明力・プレゼン・質問力
                </p>

                <p>
                  <strong>経営者・登壇者</strong>
                  スピーチ・記者発表・メディア対応
                </p>

              </div>


              <p class="service-card__mini">
                経営者・登壇者・政治家への
                スピーチ／プレゼンテーション
                指導実績あり
              </p>


              <div class="service-card__price">

                <span>
                  参考価格
                </span>

                <strong>
                  案件ごとにお見積り
                </strong>

              </div>


              <a
                class="service-card__link"
                href="#casting-form"
              >
                研修内容を相談する
              </a>

            </div>

          </article>



          <!-- =================================================
               04 広告・VP・ナレーション
               ================================================= -->

          <article class="service-card">

            <div class="service-card__media">

              <span class="service-card__fallback">
                AD / VP / NARRATION
              </span>

              <img
                src="ad-vp-narration.png.png"
                alt="広告・VP・ナレーション撮影"
                loading="lazy"
                onerror="
                  this.parentElement.classList.add('is-missing')
                "
              >

            </div>


            <div class="service-card__body">

              <span class="service-card__number">
                04
              </span>

              <h3>
                広告・VP・ナレーション
              </h3>

              <p class="service-card__catch">
                企業や商品の「顔」と「声」を、
                伝えるプロから
              </p>

              <p class="service-card__description">
                企業VP、商品紹介動画、
                WEB広告、採用映像、
                ナレーションなど。
                元局アナウンサーをはじめ、
                カメラ前での表現や
                ナレーション経験を持つ人材から、
                ブランドや企画に合う
                出演者・声をご提案します。
              </p>


              <div class="service-card__price">

                <span>
                  参考価格
                </span>

                <strong>
                  案件ごとにお見積り
                </strong>

              </div>


              <div class="service-card__actions">

                <a
                  class="service-card__link"
                  href="https://www.youtube.com/watch?v=3G7n4kBCafk&amp;feature=youtu.be"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  出演サンプルを見る
                </a>


                <a
                  class="service-card__link"
                  href="#casting-form"
                >
                  出演・ナレーションを相談する
                </a>

              </div>

            </div>

          </article>


        </div>



        <p class="service-price-note">
          ※参考価格です。
          案件内容・拘束時間・開催地域・
          事前準備の有無などにより
          個別にお見積もりします。
        </p>


      </div>

    `;


    /* =====================================================
       今までのカードデザインは維持
       4枚なのでグリッドだけ調整
       ===================================================== */

    let style =
      document.getElementById(
        'helmio-service-four-cards-style'
      );


    if (!style) {

      style =
        document.createElement('style');

      style.id =
        'helmio-service-four-cards-style';

      document.head.appendChild(style);

    }


    style.textContent = `

      /* 既存カードの見た目はそのまま */

      #service .service-grid {
        display:
          grid !important;

        grid-template-columns:
          repeat(
            4,
            minmax(0, 1fr)
          ) !important;

        gap:
          20px !important;
      }


      #service .service-card {
        min-width:
          0;
      }


      #service .service-card__media {
        display:
          block !important;
      }


      #service
      .service-card__media img {
        width:
          100% !important;

        height:
          100% !important;

        object-fit:
          cover !important;

        object-position:
          center center !important;
      }


      #service
      .service-card__mini {
        margin-top:
          16px;

        padding-top:
          14px;

        border-top:
          1px solid
          rgba(16,47,82,.10);

        color:
          var(--muted);

        font-family:
          "Noto Sans JP",
          sans-serif;

        font-size:
          11.5px;

        line-height:
          1.8;
      }


      #service
      .service-training-targets {
        margin-top:
          17px;

        padding:
          14px 15px;

        background:
          var(--cream);

        border-left:
          2px solid
          var(--gold);
      }


      #service
      .service-training-targets p {
        margin:
          0 0 10px;

        color:
          var(--text);

        font-family:
          "Noto Sans JP",
          sans-serif;

        font-size:
          11.5px;

        line-height:
          1.7;
      }


      #service
      .service-training-targets p:last-child {
        margin-bottom:
          0;
      }


      #service
      .service-training-targets strong {
        display:
          block;

        margin-bottom:
          2px;

        color:
          var(--navy);

        font-weight:
          700;
      }


      #service
      .service-card__actions {
        margin-top:
          auto;
      }


      #service
      .service-card__actions
      .service-card__link {
        margin-top:
          0 !important;
      }


      #service
      .service-card__actions
      .service-card__link
      + .service-card__link {
        margin-top:
          14px !important;
      }


      @media (
        max-width: 1100px
      ) {

        #service
        .service-grid {
          grid-template-columns:
            repeat(
              2,
              minmax(0,1fr)
            ) !important;
        }

      }


      @media (
        max-width: 700px
      ) {

        #service
        .service-grid {
          grid-template-columns:
            1fr !important;
        }

      }

    `;

  };



  /* =========================================================
     APPLY
     古いサービス書き換え処理より最後に勝たせる
     ========================================================= */

  const run = () => {

    rebuildServiceCards();


    [
      250,
      650,
      1300,
      1800,
      2400
    ].forEach(
      delay => {

        setTimeout(
          rebuildServiceCards,
          delay
        );

      }
    );

  };


  if (
    document.readyState ===
    'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      run,
      {
        once: true
      }
    );

  } else {

    run();

  }

})();
/* =========================================================
   HELMIO
   HERO + SERVICE FINAL PREMIUM DESIGN
   最終版
   ========================================================= */

(() => {
  'use strict';


  /* =========================================================
     HERO
     ========================================================= */

  const updateHeroFinal = () => {

    const title =
      document.getElementById(
        'professionals-title'
      );


    if (title) {

      title.innerHTML = `

        <span>
          <em class="hero-highlight">
            失敗できないコミュニケーションに、
          </em>
        </span>

        <span>
          局アナという選択肢を。
        </span>

      `;

    }


    const lead =
      document.querySelector(
        '.pro-hero__lead'
      );


    if (lead) {

      lead.textContent =
        'ニュース・取材の現場を経験した元放送局アナウンサーを中心に、企業イベント、広報、研修、映像など、企業のさまざまなコミュニケーションの場面を支えます。';

    }

  };



  /* =========================================================
     SERVICE
     ========================================================= */

  const rebuildPremiumServices = () => {

    const section =
      document.getElementById(
        'service'
      );

    if (!section) return;


    section.className =
      'section section--cream';

    section.setAttribute(
      'aria-labelledby',
      'service-title'
    );


    section.innerHTML = `

      <div class="container">


        <header class="helmio-service-premium-head">

          <p class="section-label">
            SERVICE
          </p>

          <h2 id="service-title">
            伝える力で、
            ビジネスの可能性を広げる
          </h2>

          <p>
            アナウンサーとして培った
            「伝える力」と専門性を掛け合わせ、
            企業のさまざまなコミュニケーションを支援します。
          </p>

        </header>



        <div class="helmio-service-premium-grid">


          <!-- =================================================
               01 EVENT
               ================================================= -->

          <article class="helmio-service-premium-card">


            <div class="helmio-service-premium-media">

              <img
                src="service-mc.jpg"
                alt="企業イベントで司会を務めるアナウンサー"
                loading="lazy"
              >

            </div>


            <div class="helmio-service-premium-body">


              <div class="helmio-service-premium-label">

                <span>
                  アナウンサー ×
                </span>

                <strong>
                  イベント
                </strong>

              </div>


              <h3>
                司会
              </h3>


              <div class="helmio-service-premium-line"></div>


              <p class="helmio-service-premium-description">

                社内イベントから、
                記者発表、式典、
                カンファレンス、表彰式、
                経営者登壇などに
                プロが対応。

              </p>


              <p class="helmio-service-premium-emphasis">

                英語・中国語・韓国語に対応できる
                アナウンサーも在籍しています。

              </p>


              <div class="helmio-service-premium-price">

                <span>
                  参考価格
                </span>

                <strong>
                  90,000円〜
                </strong>

                <small>
                  ／1日
                </small>

              </div>


              <a
                class="helmio-service-premium-link"
                href="#professionals"
              >
                候補者を見る
              </a>


              <span
                class="helmio-service-premium-number"
                aria-hidden="true"
              >
                01
              </span>


            </div>

          </article>



          <!-- =================================================
               02 PR
               ================================================= -->

          <article class="helmio-service-premium-card">


            <div class="helmio-service-premium-media">

              <img
                src="service-pr.png"
                alt="企業の広報・PR戦略を打ち合わせるアナウンサー"
                loading="lazy"
              >

            </div>


            <div class="helmio-service-premium-body">


              <div class="helmio-service-premium-label">

                <span>
                  アナウンサー ×
                </span>

                <strong>
                  広報・PR
                </strong>

              </div>


              <h3>
                広報・PR支援
              </h3>


              <div class="helmio-service-premium-line"></div>


              <p class="
                helmio-service-premium-description
                helmio-service-premium-description--strong
              ">

                メディアが何をニュースとして
                取り上げるのかを知る視点を熟知し、
                またメディアとのリレーションを活かし
                サポート。

              </p>


              <p class="helmio-service-premium-description">

                メディア発信テーマの整理、
                PR企画、プレスリリース、
                メディアアプローチ、
                取材対応まで。
                大手PR会社勤務のキャストが在籍。

              </p>


              <div class="helmio-service-premium-price">

                <span>
                  参考価格
                </span>

                <strong>
                  案件ごとにお見積り
                </strong>

              </div>


              <a
                class="helmio-service-premium-link"
                href="#casting-form"
              >
                広報・PRについて相談する
              </a>


              <span
                class="helmio-service-premium-number"
                aria-hidden="true"
              >
                02
              </span>


            </div>

          </article>



          <!-- =================================================
               03 TRAINING
               ================================================= -->

          <article class="helmio-service-premium-card">


            <div class="helmio-service-premium-media">

              <img
                src="service-training.png"
                alt="アナウンサーによる企業研修"
                loading="lazy"
              >

            </div>


            <div class="helmio-service-premium-body">


              <div class="helmio-service-premium-label">

                <span>
                  アナウンサー ×
                </span>

                <strong>
                  秘書・マナー検定
                </strong>

              </div>


              <h3>
                企業研修
              </h3>


              <div class="helmio-service-premium-line"></div>


              <p class="helmio-service-premium-description">

                マナー・秘書関連資格を持つキャスト、
                総裁選候補者へスピーチ指導経験を持つ
                キャストが在籍。

              </p>


              <p class="helmio-service-premium-emphasis">

                新入社員研修
                <span>
                  （マナー、第一印象など）
                </span>
                プレゼンといったビジネスマンの
                必須スキルから経営者スピーチまで
                実践形式で指導します。

              </p>


              <div class="helmio-service-premium-price">

                <span>
                  参考価格
                </span>

                <strong>
                  案件ごとにお見積り
                </strong>

              </div>


              <a
                class="helmio-service-premium-link"
                href="#casting-form"
              >
                研修内容を相談する
              </a>


              <span
                class="helmio-service-premium-number"
                aria-hidden="true"
              >
                03
              </span>


            </div>

          </article>



          <!-- =================================================
               04 AD / VP
               ================================================= -->

          <article class="helmio-service-premium-card">


            <div class="helmio-service-premium-media">

              <img
                src="ad-vp-narration.png.png"
                alt="広告・VP・ナレーション撮影"
                loading="lazy"
              >

            </div>


            <div class="helmio-service-premium-body">


              <div class="helmio-service-premium-label">

                <span>
                  アナウンサー ×
                </span>

                <strong>
                  モデル・映像
                </strong>

              </div>


              <h3>
                広告・VP・ナレーション
              </h3>


              <div class="helmio-service-premium-line"></div>


              <p class="helmio-service-premium-description">

                企業VP、商品紹介動画、
                WEB広告、採用映像、
                ナレーションなど、
                御社の顔としてブランドに合う、
                話せるモデル・出演者・声を
                ご提案します。

              </p>


              <div class="helmio-service-premium-price">

                <span>
                  参考価格
                </span>

                <strong>
                  案件ごとにお見積り
                </strong>

              </div>


              <div class="helmio-service-premium-actions">


                <a
                  class="helmio-service-premium-link"
                  href="https://www.youtube.com/watch?v=3G7n4kBCafk&amp;feature=youtu.be"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  出演サンプルを見る
                </a>


                <a
                  class="helmio-service-premium-link"
                  href="#casting-form"
                >
                  出演・ナレーションを相談する
                </a>


              </div>


              <span
                class="helmio-service-premium-number"
                aria-hidden="true"
              >
                04
              </span>


            </div>

          </article>


        </div>



        <p class="helmio-service-premium-note">

          ※参考価格です。
          案件内容・拘束時間・開催地域・
          事前準備の有無などにより
          個別にお見積もりします。

        </p>


      </div>

    `;

  };



  /* =========================================================
     STYLE
     ========================================================= */

  const injectPremiumServiceStyles = () => {

    document
      .getElementById(
        'helmio-service-premium-final-style'
      )
      ?.remove();


    const style =
      document.createElement(
        'style'
      );


    style.id =
      'helmio-service-premium-final-style';


    style.textContent = `


      /* =====================================================
         SECTION
         ===================================================== */

      #service {
        background:
          #faf8f3 !important;
      }


      #service
      .container {
        max-width:
          1380px;
      }



      /* =====================================================
         HEADING
         ===================================================== */

      #service
      .helmio-service-premium-head {
        max-width:
          940px;

        margin:
          0 auto 50px;

        text-align:
          center;
      }


      #service
      .helmio-service-premium-head
      .section-label {
        margin-bottom:
          18px;

        color:
          var(--gold);

        font-family:
          "Cormorant Garamond",
          serif;

        font-size:
          14px;

        font-weight:
          600;

        letter-spacing:
          .24em;
      }


      #service
      .helmio-service-premium-head h2 {
        margin:
          0;

        color:
          var(--navy);

        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          clamp(
            32px,
            4vw,
            50px
          );

        font-weight:
          500;

        line-height:
          1.5;

        letter-spacing:
          .01em;
      }


      #service
      .helmio-service-premium-head > p:last-child {
        max-width:
          760px;

        margin:
          18px auto 0;

        color:
          #475467;

        font-family:
          "Noto Sans JP",
          sans-serif;

        font-size:
          15px;

        font-weight:
          500;

        line-height:
          2;
      }



      /* =====================================================
         GRID
         ===================================================== */

      #service
      .helmio-service-premium-grid {
        display:
          grid;

        grid-template-columns:
          repeat(
            4,
            minmax(0, 1fr)
          );

        gap:
          14px;
      }



      /* =====================================================
         CARD
         ===================================================== */

      #service
      .helmio-service-premium-card {
        position:
          relative;

        display:
          flex;

        flex-direction:
          column;

        min-width:
          0;

        overflow:
          hidden;

        background:
          #fff;

        border:
          1px solid
          rgba(20,47,82,.10);

        box-shadow:
          0 14px 36px
          rgba(16,47,82,.055);
      }



      /* =====================================================
         IMAGE
         ===================================================== */

      #service
      .helmio-service-premium-media {
        width:
          100%;

        aspect-ratio:
          1.32 / 1;

        overflow:
          hidden;

        background:
          #ece8df;
      }


      #service
      .helmio-service-premium-media img {
        display:
          block;

        width:
          100%;

        height:
          100%;

        object-fit:
          cover;

        object-position:
          center center;
      }



      /* =====================================================
         BODY
         ===================================================== */

      #service
      .helmio-service-premium-body {
        position:
          relative;

        display:
          flex;

        flex:
          1;

        flex-direction:
          column;

        padding:
          28px 28px 26px;
      }



      /* =====================================================
         LABEL
         「アナウンサー×」は小さく
         掛ける側を大きく
         ===================================================== */

      #service
      .helmio-service-premium-label {
        display:
          flex;

        flex-wrap:
          wrap;

        align-items:
          baseline;

        gap:
          5px 9px;

        color:
          var(--navy);
      }


      #service
      .helmio-service-premium-label span {
        font-family:
          "Noto Sans JP",
          sans-serif;

        font-size:
          12px;

        font-weight:
          500;

        letter-spacing:
          .04em;

        opacity:
          .72;
      }


      #service
      .helmio-service-premium-label strong {
        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          clamp(
            25px,
            2.2vw,
            34px
          );

        font-weight:
          600;

        line-height:
          1.35;

        letter-spacing:
          -.02em;
      }



      /* =====================================================
         SERVICE NAME
         ===================================================== */

      #service
      .helmio-service-premium-body h3 {
        margin:
          18px 0 0;

        color:
          var(--navy);

        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          21px;

        font-weight:
          600;

        line-height:
          1.55;

        text-align:
          left;
      }



      /* =====================================================
         GOLD LINE
         ===================================================== */

      #service
      .helmio-service-premium-line {
        width:
          48px;

        height:
          1px;

        margin:
          18px 0;

        background:
          var(--gold);
      }



      /* =====================================================
         COPY
         濃く・少し大きく
         ===================================================== */

      #service
      .helmio-service-premium-description,
      #service
      .helmio-service-premium-emphasis {
        margin:
          0;

        color:
          #26384d;

        font-family:
          "Noto Sans JP",
          sans-serif;

        font-size:
          14px;

        font-weight:
          500;

        line-height:
          1.95;

        letter-spacing:
          .01em;
      }


      #service
      .helmio-service-premium-description
      + .helmio-service-premium-description,
      #service
      .helmio-service-premium-description
      + .helmio-service-premium-emphasis {
        margin-top:
          13px;
      }


      #service
      .helmio-service-premium-description--strong {
        color:
          #142f52;

        font-weight:
          700;
      }


      #service
      .helmio-service-premium-emphasis {
        color:
          #142f52;

        font-weight:
          700;
      }


      #service
      .helmio-service-premium-emphasis span {
        font-weight:
          500;
      }



      /* =====================================================
         PRICE
         ===================================================== */

      #service
      .helmio-service-premium-price {
        display:
          flex;

        flex-wrap:
          wrap;

        align-items:
          baseline;

        gap:
          5px 7px;

        margin-top:
          22px;

        padding-top:
          17px;

        border-top:
          1px solid
          rgba(16,47,82,.10);
      }


      #service
      .helmio-service-premium-price span {
        color:
          #6b7280;

        font-family:
          "Noto Sans JP",
          sans-serif;

        font-size:
          10px;

        font-weight:
          600;

        letter-spacing:
          .08em;
      }


      #service
      .helmio-service-premium-price strong {
        color:
          var(--navy);

        font-family:
          "Noto Serif JP",
          serif;

        font-size:
          17px;

        font-weight:
          600;
      }


      #service
      .helmio-service-premium-price small {
        color:
          #6b7280;

        font-size:
          10px;
      }



      /* =====================================================
         LINK
         ===================================================== */

      #service
      .helmio-service-premium-link {
        display:
          inline-flex;

        align-items:
          center;

        gap:
          8px;

        width:
          fit-content;

        margin-top:
          auto;

        padding-top:
          24px;

        color:
          var(--navy);

        font-family:
          "Noto Sans JP",
          sans-serif;

        font-size:
          13px;

        font-weight:
          700;

        text-decoration:
          none;

        border-bottom:
          1px solid
          var(--gold);
      }


      #service
      .helmio-service-premium-link::after {
        content:
          "→";

        color:
          var(--gold);

        font-size:
          15px;
      }


      #service
      .helmio-service-premium-actions {
        display:
          flex;

        flex-direction:
          column;

        align-items:
          flex-start;

        margin-top:
          auto;
      }


      #service
      .helmio-service-premium-actions
      .helmio-service-premium-link {
        margin-top:
          18px;
      }



      /* =====================================================
         LARGE NUMBER
         ===================================================== */

      #service
      .helmio-service-premium-number {
        position:
          absolute;

        right:
          16px;

        bottom:
          4px;

        color:
          rgba(177,138,67,.16);

        font-family:
          "Cormorant Garamond",
          serif;

        font-size:
          70px;

        font-style:
          italic;

        font-weight:
          400;

        line-height:
          1;

        pointer-events:
          none;
      }



      /* =====================================================
         NOTE
         ===================================================== */

      #service
      .helmio-service-premium-note {
        margin:
          22px 0 0;

        color:
          #6b7280;

        font-family:
          "Noto Sans JP",
          sans-serif;

        font-size:
          11px;

        line-height:
          1.8;

        text-align:
          right;
      }



      /* =====================================================
         TABLET
         ===================================================== */

      @media (
        max-width: 1120px
      ) {

        #service
        .helmio-service-premium-grid {
          grid-template-columns:
            repeat(
              2,
              minmax(0, 1fr)
            );

          gap:
            20px;
        }


        #service
        .helmio-service-premium-label strong {
          font-size:
            30px;
        }

      }



      /* =====================================================
         MOBILE
         ===================================================== */

      @media (
        max-width: 700px
      ) {

        #service
        .helmio-service-premium-head {
          margin-bottom:
            34px;

          text-align:
            left;
        }


        #service
        .helmio-service-premium-head h2 {
          font-size:
            29px;
        }


        #service
        .helmio-service-premium-head > p:last-child {
          margin-top:
            14px;

          font-size:
            14px;
        }


        #service
        .helmio-service-premium-grid {
          grid-template-columns:
            1fr;

          gap:
            22px;
        }


        #service
        .helmio-service-premium-media {
          aspect-ratio:
            1.65 / 1;
        }


        #service
        .helmio-service-premium-body {
          padding:
            25px 22px 24px;
        }


        #service
        .helmio-service-premium-label strong {
          font-size:
            29px;
        }


        #service
        .helmio-service-premium-description,
        #service
        .helmio-service-premium-emphasis {
          font-size:
            14px;

          line-height:
            1.9;
        }


        #service
        .helmio-service-premium-number {
          font-size:
            58px;
        }


        #service
        .helmio-service-premium-note {
          text-align:
            left;
        }

      }

    `;


    document.head.appendChild(
      style
    );

  };



  /* =========================================================
     APPLY
     ========================================================= */

  const applyFinalPremium = () => {

    updateHeroFinal();

    rebuildPremiumServices();

    injectPremiumServiceStyles();

  };


  const run = () => {

    applyFinalPremium();


    /*
      過去の大量の追記コードが
      あとからSERVICEを書き換えてくるため
      最後にこの版を何度か再適用
    */

    [
      300,
      700,
      1200,
      1800,
      2600,
      3400
    ].forEach(
      delay => {

        setTimeout(
          applyFinalPremium,
          delay
        );

      }
    );

  };


  if (
    document.readyState ===
    'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      run,
      {
        once: true
      }
    );

  } else {

    run();

  }

})();
/* =========================================================
   HELMIO SERVICE
   COPY / PRICE / LABEL FINAL TWEAK
   ========================================================= */

(() => {
  'use strict';


  const applyServiceTweaks = () => {

    const section =
      document.getElementById('service');

    if (!section) return;


    /* =====================================================
       セクション見出し
       ===================================================== */

    const heading =
      section.querySelector(
        '.helmio-service-premium-head h2'
      );

    if (heading) {

      heading.textContent =
        'プロのアナウンサーが企業の「伝える」をお手伝いします';

    }



    /* =====================================================
       02 広報・PR
       300,000円〜
       ===================================================== */

    const cards =
      section.querySelectorAll(
        '.helmio-service-premium-card'
      );


    const prCard =
      cards[1];

    if (prCard) {

      const price =
        prCard.querySelector(
          '.helmio-service-premium-price'
        );

      if (price) {

        price.innerHTML = `

          <span>
            参考価格
          </span>

          <strong>
            300,000円〜
          </strong>

        `;

      }

    }



    /* =====================================================
       03 企業研修
       1クール 300,000円〜
       ===================================================== */

    const trainingCard =
      cards[2];

    if (trainingCard) {

      const price =
        trainingCard.querySelector(
          '.helmio-service-premium-price'
        );

      if (price) {

        price.innerHTML = `

          <span>
            参考価格
          </span>

          <strong>
            300,000円〜
          </strong>

          <small>
            ／1クール
          </small>

        `;

      }


      /*
        ラベル：
        「秘書・マナー検定」が
        1行に収まるようにする
      */

      const label =
        trainingCard.querySelector(
          '.helmio-service-premium-label strong'
        );

      if (label) {

        label.textContent =
          '秘書・マナー検定';

      }

    }



    /* =====================================================
       04 広告
       ===================================================== */

    const adCard =
      cards[3];

    if (adCard) {

      const label =
        adCard.querySelector(
          '.helmio-service-premium-label strong'
        );

      if (label) {

        label.textContent =
          '広告';

      }


      const price =
        adCard.querySelector(
          '.helmio-service-premium-price'
        );

      if (price) {

        price.innerHTML = `

          <span>
            参考価格
          </span>

          <strong>
            案件ごとにお見積り
          </strong>

        `;

      }

    }



    /* =====================================================
       STYLE
       03の「秘書・マナー検定」を
       1行でギリギリ収める
       ===================================================== */

    let style =
      document.getElementById(
        'helmio-service-label-price-tweak'
      );


    if (!style) {

      style =
        document.createElement('style');

      style.id =
        'helmio-service-label-price-tweak';

      document.head.appendChild(style);

    }


    style.textContent = `

      /* ==============================
         SERVICE HEADING
         ============================== */

      #service
      .helmio-service-premium-head h2 {
        max-width:
          1000px;

        margin-left:
          auto;

        margin-right:
          auto;
      }


      /* ==============================
         03 TRAINING LABEL ONLY
         秘書・マナー検定を1行に
         ============================== */

      #service
      .helmio-service-premium-card:nth-child(3)
      .helmio-service-premium-label {
        flex-wrap:
          nowrap;
      }


      #service
      .helmio-service-premium-card:nth-child(3)
      .helmio-service-premium-label strong {
        white-space:
          nowrap;

        font-size:
          clamp(
            20px,
            1.8vw,
            27px
          ) !important;

        letter-spacing:
          -.04em;
      }


      /* ==============================
         04 広告
         少し存在感を出す
         ============================== */

      #service
      .helmio-service-premium-card:nth-child(4)
      .helmio-service-premium-label strong {
        font-size:
          clamp(
            25px,
            2.2vw,
            34px
          ) !important;
      }


      @media (
        max-width: 1120px
      ) {

        #service
        .helmio-service-premium-card:nth-child(3)
        .helmio-service-premium-label strong {
          font-size:
            25px !important;
        }

      }


      @media (
        max-width: 700px
      ) {

        #service
        .helmio-service-premium-card:nth-child(3)
        .helmio-service-premium-label strong {
          font-size:
            23px !important;

          letter-spacing:
            -.05em;
        }

      }

    `;

  };



  const run = () => {

    applyServiceTweaks();


    [
      400,
      900,
      1500,
      2200,
      3000,
      3800
    ].forEach(
      delay => {

        setTimeout(
          applyServiceTweaks,
          delay
        );

      }
    );

  };


  if (
    document.readyState === 'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      run,
      {
        once: true
      }
    );

  } else {

    run();

  }

})();
/* =========================================================
   HELMIO SERVICE FIX
   崩れ修正 + 文言最終調整
   ========================================================= */

(() => {
  'use strict';

  const setPrice = (card, mainText, noteText = '') => {
    if (!card) return;

    const price = card.querySelector('.helmio-service-premium-price');
    if (!price) return;

    price.innerHTML = `
      <span>参考価格</span>
      <strong>${mainText}</strong>
      ${noteText ? `<small>${noteText}</small>` : ''}
    `;
  };

  const setLabel = (card, text) => {
    if (!card) return;

    const strong = card.querySelector('.helmio-service-premium-label strong');
    if (strong) strong.textContent = text;
  };

  const applyServiceFix = () => {
    const section = document.getElementById('service');
    if (!section) return;

    const heading = section.querySelector('.helmio-service-premium-head h2');
    if (heading) {
      heading.textContent = 'プロのアナウンサーが企業の「伝える」をお手伝いします';
    }

    const cards = section.querySelectorAll('.helmio-service-premium-card');
    if (!cards.length) return;

    const eventCard = cards[0];
    const prCard = cards[1];
    const trainingCard = cards[2];
    const videoCard = cards[3];

    [eventCard, prCard, trainingCard, videoCard].forEach(card => {
      if (!card) return;
      card.classList.remove(
        'helmio-service-card-event',
        'helmio-service-card-pr',
        'helmio-service-card-training',
        'helmio-service-card-video'
      );
    });

    if (eventCard) eventCard.classList.add('helmio-service-card-event');
    if (prCard) prCard.classList.add('helmio-service-card-pr');
    if (trainingCard) trainingCard.classList.add('helmio-service-card-training');
    if (videoCard) videoCard.classList.add('helmio-service-card-video');

    /* 02 広報・PR */
    setPrice(prCard, '300,000円〜');

    /* 03 企業研修 */
    setLabel(trainingCard, '秘書・マナー検定');
    setPrice(trainingCard, '300,000円〜', '／1クール');

    /* 04 映像 */
    setLabel(videoCard, '映像');
    setPrice(videoCard, '案件ごとにお見積り');

    /*
      以前の崩れるスタイルを無効化
    */
    const oldStyle = document.getElementById('helmio-service-label-price-tweak');
    if (oldStyle) {
      oldStyle.remove();
    }

    /*
      修正版スタイル
    */
    let style = document.getElementById('helmio-service-fix-final-style');

    if (!style) {
      style = document.createElement('style');
      style.id = 'helmio-service-fix-final-style';
      document.head.appendChild(style);
    }

    style.textContent = `
      /* 見出し */
      #service .helmio-service-premium-head h2 {
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
      }

      /*
        03 企業研修
        「アナウンサー×」が縦崩れしないように修正
      */
      #service .helmio-service-card-training .helmio-service-premium-label {
        display: flex;
        align-items: baseline;
        gap: 10px 12px;
        flex-wrap: wrap;
      }

      #service .helmio-service-card-training .helmio-service-premium-label span {
        white-space: nowrap;
        flex: 0 0 auto;
        writing-mode: horizontal-tb !important;
        text-orientation: mixed !important;
      }

      #service .helmio-service-card-training .helmio-service-premium-label strong {
        white-space: nowrap;
        font-size: clamp(23px, 1.75vw, 28px) !important;
        letter-spacing: -0.04em;
        line-height: 1.12;
      }

      /*
        04 映像
      */
      #service .helmio-service-card-video .helmio-service-premium-label {
        display: flex;
        align-items: baseline;
        gap: 10px 12px;
        flex-wrap: wrap;
      }

      #service .helmio-service-card-video .helmio-service-premium-label span {
        white-space: nowrap;
        flex: 0 0 auto;
        writing-mode: horizontal-tb !important;
        text-orientation: mixed !important;
      }

      #service .helmio-service-card-video .helmio-service-premium-label strong {
        white-space: nowrap;
        font-size: clamp(26px, 2.1vw, 34px) !important;
        line-height: 1.12;
      }

      /*
        価格まわりの見た目安定
      */
      #service .helmio-service-card-training .helmio-service-premium-price strong,
      #service .helmio-service-card-video .helmio-service-premium-price strong,
      #service .helmio-service-card-pr .helmio-service-premium-price strong {
        line-height: 1.2;
      }

      @media (max-width: 900px) {
        #service .helmio-service-card-training .helmio-service-premium-label strong {
          font-size: 25px !important;
        }
      }

      @media (max-width: 700px) {
        #service .helmio-service-card-training .helmio-service-premium-label {
          gap: 8px 10px;
        }

        #service .helmio-service-card-training .helmio-service-premium-label span,
        #service .helmio-service-card-video .helmio-service-premium-label span {
          font-size: 15px;
        }

        #service .helmio-service-card-training .helmio-service-premium-label strong {
          font-size: 22px !important;
        }

        #service .helmio-service-card-video .helmio-service-premium-label strong {
          font-size: 28px !important;
        }
      }
    `;
  };

  const run = () => {
    applyServiceFix();

    [300, 800, 1400, 2200, 3200].forEach(delay => {
      setTimeout(applyServiceFix, delay);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }
})();
/* =========================================================
   SERVICE LABEL FINAL FIX
   ・アナウンサー× の縦崩れ完全修正
   ・専門領域を大きく表示
   ・04 広告 → 映像
   ========================================================= */

(() => {
  'use strict';

  const fixServiceLabels = () => {

    const section =
      document.getElementById('service');

    if (!section) return;


    const cards =
      section.querySelectorAll(
        '.helmio-service-premium-card'
      );

    if (!cards.length) return;


    /* =====================================
       01 イベント
       ===================================== */

    if (cards[0]) {

      const label =
        cards[0].querySelector(
          '.helmio-service-premium-label'
        );

      if (label) {

        label.innerHTML = `
          <span>アナウンサー ×</span>
          <strong>イベント</strong>
        `;

      }

    }


    /* =====================================
       02 広報・PR
       ===================================== */

    if (cards[1]) {

      const label =
        cards[1].querySelector(
          '.helmio-service-premium-label'
        );

      if (label) {

        label.innerHTML = `
          <span>アナウンサー ×</span>
          <strong>広報・PR</strong>
        `;

      }

    }


    /* =====================================
       03 秘書・マナー検定
       ===================================== */

    if (cards[2]) {

      const label =
        cards[2].querySelector(
          '.helmio-service-premium-label'
        );

      if (label) {

        label.innerHTML = `
          <span>アナウンサー ×</span>
          <strong>秘書・マナー検定</strong>
        `;

      }

    }


    /* =====================================
       04 映像
       ===================================== */

    if (cards[3]) {

      const label =
        cards[3].querySelector(
          '.helmio-service-premium-label'
        );

      if (label) {

        label.innerHTML = `
          <span>アナウンサー ×</span>
          <strong>映像</strong>
        `;

      }

    }



    /* =====================================
       古い修正CSSを無効化
       ===================================== */

    document
      .getElementById(
        'helmio-service-label-price-tweak'
      )
      ?.remove();

    document
      .getElementById(
        'helmio-service-fix-final-style'
      )
      ?.remove();


    /* =====================================
       最終CSS
       ===================================== */

    let style =
      document.getElementById(
        'helmio-service-label-absolute-final'
      );


    if (!style) {

      style =
        document.createElement('style');

      style.id =
        'helmio-service-label-absolute-final';

      document.head.appendChild(style);

    }


    style.textContent = `

      /* ==================================
         全カード共通

         アナウンサー ×
         専門領域

         の2段構成に固定
         ================================== */

      #service
      .helmio-service-premium-label {
        display:
          block !important;

        width:
          100% !important;

        min-width:
          0 !important;

        white-space:
          normal !important;
      }


      /* アナウンサー × */

      #service
      .helmio-service-premium-label span {
        display:
          block !important;

        width:
          auto !important;

        max-width:
          none !important;

        margin:
          0 0 5px !important;

        padding:
          0 !important;

        color:
          #66758a !important;

        font-family:
          "Noto Sans JP",
          sans-serif !important;

        font-size:
          12px !important;

        font-weight:
          500 !important;

        line-height:
          1.4 !important;

        letter-spacing:
          .06em !important;

        white-space:
          nowrap !important;

        word-break:
          keep-all !important;

        overflow-wrap:
          normal !important;

        writing-mode:
          horizontal-tb !important;

        text-orientation:
          mixed !important;
      }


      /* 掛け合わせる専門領域 */

      #service
      .helmio-service-premium-label strong {
        display:
          block !important;

        width:
          100% !important;

        margin:
          0 !important;

        color:
          var(--navy) !important;

        font-family:
          "Noto Serif JP",
          serif !important;

        font-size:
          31px !important;

        font-weight:
          600 !important;

        line-height:
          1.25 !important;

        letter-spacing:
          -.035em !important;

        white-space:
          nowrap !important;

        word-break:
          keep-all !important;

        overflow-wrap:
          normal !important;

        writing-mode:
          horizontal-tb !important;

        text-orientation:
          mixed !important;
      }


      /* ==================================
         03だけ文字数が多いので
         ギリギリ大きく1行に収める
         ================================== */

      #service
      .helmio-service-premium-card:nth-child(3)
      .helmio-service-premium-label strong {
        font-size:
          23px !important;

        letter-spacing:
          -.055em !important;
      }


      /* ==================================
         04 映像
         ================================== */

      #service
      .helmio-service-premium-card:nth-child(4)
      .helmio-service-premium-label strong {
        font-size:
          31px !important;
      }



      /* ==================================
         2列表示時
         ================================== */

      @media (
        max-width: 1120px
      ) {

        #service
        .helmio-service-premium-label strong {
          font-size:
            30px !important;
        }


        #service
        .helmio-service-premium-card:nth-child(3)
        .helmio-service-premium-label strong {
          font-size:
            27px !important;

          letter-spacing:
            -.04em !important;
        }

      }



      /* ==================================
         スマホ
         1列なので十分幅がある
         ================================== */

      @media (
        max-width: 700px
      ) {

        #service
        .helmio-service-premium-label span {
          font-size:
            12px !important;
        }


        #service
        .helmio-service-premium-label strong {
          font-size:
            29px !important;
        }


        #service
        .helmio-service-premium-card:nth-child(3)
        .helmio-service-premium-label strong {
          font-size:
            26px !important;

          letter-spacing:
            -.045em !important;
        }

      }

    `;

  };


  const run = () => {

    fixServiceLabels();


    /*
      過去のコードが後からカードを再生成するので
      最後までこの修正版を勝たせる
    */

    [
      300,
      700,
      1200,
      1800,
      2600,
      3500,
      4500
    ].forEach(
      delay => {

        setTimeout(
          fixServiceLabels,
          delay
        );

      }
    );

  };


  if (
    document.readyState === 'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      run,
      {
        once: true
      }
    );

  } else {

    run();

  }

})();
