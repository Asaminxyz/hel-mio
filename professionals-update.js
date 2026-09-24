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
