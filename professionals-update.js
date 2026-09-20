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
