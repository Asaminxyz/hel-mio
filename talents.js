const profileLabels = {
  height: "身長",
  birthplace: "出身地",
  bloodType: "血液型",
  education: "学歴",
  hobbies: "趣味",
  skills: "特技",
  qualifications: "資格"
};

const talents = [
  {
    id: "asami-niijima",

    name: "新島 麻生",
    kana: "にいじま あさみ",
    englishName: "ASAMI NIIJIMA",

    cardImage: "S__27566083.jpg",

    photos: [
      "S__27566083.jpg",
      "S__27672581_0.jpg",
      "S__27672582_0.jpg"
    ],

    summary:
      "NHK地方局のニュースキャスター、スポーツキャスター、報道フィールドキャスターを経て、テレビ、企業イベント、国際イベント、スポーツ、広告・企業VPなど幅広い分野で活動。取材・インタビューからカンファレンスや式典の進行、登壇者のスピーチ支援まで、伝える内容の整理と現場での表現を一貫して支援する。",

    profile: {
      height: "160cm",
      birthplace: "大阪府",
      bloodType: "O型",
      education: "関西学院大学 国際学部",
      hobbies: "温泉、お酒",
      skills: "ラクロス、ピアノ",
      qualifications: "パーソナルカラー診断関連資格"
    },

    tags: [
      "ニュース・報道",
      "リポーター",
      "企業イベント",
      "国際イベント",
      "展示会",
      "式典",
      "スポーツ",
      "トークショー",
      "広告・企業VP",
      "スピーチ指導"
    ],

    careers: [
      /* ==============================
         テレビ・キャスター
      ============================== */
      {
        category: "テレビ・キャスター",
        text:
          "NHK地方局アナウンサー／朝のニュースキャスター・スポーツキャスター・報道フィールドキャスター"
      },
      {
        category: "テレビ・キャスター",
        text: "KBS京都 ニュースキャスター"
      },
      {
        category: "テレビ・キャスター",
        text: "TBS『Nスタ』出演"
      },
      {
        category: "テレビ・キャスター",
        text: "J:COM『LIVE news』リポーター"
      },
      {
        category: "テレビ・キャスター",
        text: "サンテレビ『NEWS×情報キャッチ＋』リポーター"
      },

      /* ==============================
         リポーター
      ============================== */
      {
        category: "リポーター",
        text: "笹川平和財団『ブルーエコノミー』広報・現地調査リポート"
      },
      {
        category: "リポーター",
        text: "YBS ルヴァンカップ リポーター"
      },
      {
        category: "リポーター",
        text: "Audi『チャージハブ』リポーター"
      },
      {
        category: "リポーター",
        text: "docomo公式ゴルフコンテンツ『東大ゴルフ』リポーター"
      },
      {
        category: "リポーター",
        text:
          "URBAN FUTURES presented by Livedoor リポーター・インタビュアー"
      },
      {
        category: "リポーター",
        text:
          "サンテレビ『日本財団 海と日本PROJECT inひょうご 海LIVE』リポーター"
      },
      {
        category: "リポーター",
        text: "MBSラジオ『ええかげんにせぇ！』リポーター"
      },

      /* ==============================
         広告・企業VP
      ============================== */
      {
        category: "広告・企業VP",
        text: "日立ソリューションズ タクシー広告・プロモーション映像"
      },
      {
        category: "広告・企業VP",
        text: "KDDI・大正製薬『アライ』WEB広告・プロモーション映像"
      },
      {
        category: "広告・企業VP",
        text: "JCB テレビ・インフォマーシャル"
      },
      {
        category: "広告・企業VP",
        text: "東京インテリア テレビCM"
      },
      {
        category: "広告・企業VP",
        text:
          "YA-MAN・ニトリ・セキスイハイム 広告・WEB・店頭ビジュアル"
      },
      {
        category: "広告・企業VP",
        text: "オリックス自動車 社内研修用動画ナビゲーター"
      },
      {
        category: "広告・企業VP",
        text: "さんふらわあ 駅サイネージ・パンフレット"
      },
      {
        category: "広告・企業VP",
        text:
          "鈴茂器工・大阪工業大学・オンライン家庭教師メガスタ 企業映像・WEB広告"
      },

      /* ==============================
         イベント・カンファレンス
      ============================== */
      {
        category: "イベント・カンファレンス",
        text: "大阪・関西万博 BLUE OCEAN DOME ファシリテーター"
      },
      {
        category: "イベント・カンファレンス",
        text: "大阪・関西万博 世界海の日特別イベント MatsuriステージMC"
      },
      {
        category: "イベント・カンファレンス",
        text: "Google Cloud Next Tokyo 2024・2025 MC"
      },
      {
        category: "イベント・カンファレンス",
        text:
          "Gartner Symposium・CIO Leadership Forum・Digital Workplace Summit MC"
      },
      {
        category: "イベント・カンファレンス",
        text: "PwC All Staff Meeting MC"
      },
      {
        category: "イベント・カンファレンス",
        text:
          "Panasonic・日経BP・SoftBank・Miro Japanなど、企業カンファレンス・セミナーMC"
      },
      {
        category: "イベント・カンファレンス",
        text: "経済産業省主催ピッチコンテスト『アトツギ甲子園』"
      },
      {
        category: "イベント・カンファレンス",
        text: "経団連主催 大企業経営層・人事担当者向けセミナー"
      },

      /* ==============================
         展示会・式典
      ============================== */
      {
        category: "展示会・式典",
        text: "Japan Mobility Show 2025 主催者ステージMC・ナレーター"
      },
      {
        category: "展示会・式典",
        text:
          "TOYOTAグループ・BMW・OMRON・大塚商会・JTBグループ・Canonなど展示会MC"
      },
      {
        category: "展示会・式典",
        text: "ZTE Japan 新製品発表会"
      },
      {
        category: "展示会・式典",
        text: "JTB入社式 2023年〜"
      },
      {
        category: "展示会・式典",
        text: "商船三井クルーズ×JTB 連携協定発表会"
      },
      {
        category: "展示会・式典",
        text: "一般財団法人大阪国際経済振興センター30周年記念パーティ"
      },
      {
        category: "展示会・式典",
        text: "企業表彰式・周年記念式典・新製品発表会 多数"
      },

      /* ==============================
         スポーツ
      ============================== */
      {
        category: "スポーツ",
        text: "Jリーグアウォーズ 2023〜2025 MC"
      },
      {
        category: "スポーツ",
        text: "ヴィッセル神戸 二冠優勝パーティ 司会"
      },
      {
        category: "スポーツ",
        text: "セレッソ大阪 パブリックビューイング・選手ステージ進行"
      },
      {
        category: "スポーツ",
        text:
          "三井不動産プレゼンツ サッカー日本代表戦パブリックビューイング"
      },
      {
        category: "スポーツ",
        text: "ダンロップフェニックストーナメント前夜祭"
      },
      {
        category: "スポーツ",
        text: "セイコーゴールデングランプリ陸上2024"
      },

      /* ==============================
         トークショー
      ============================== */
      {
        category: "トークショー",
        text: "俳優・アスリート・文化人を迎えたトークショーの司会・進行"
      },
      {
        category: "トークショー",
        text: "西野七瀬・松下奈緒・柴田理恵・武井壮・佐久間宣之ほか"
      },
      {
        category: "トークショー",
        text: "マセラティ オーナー向けタレントトークショー"
      },
      {
        category: "トークショー",
        text: "BMW全国キャラバン・ゲストトークショー"
      },
      {
        category: "トークショー",
        text: "dynabook35周年イベント／伊沢拓司"
      },

      /* ==============================
         モデル
      ============================== */
      {
        category: "モデル",
        text:
          "アデランス広告モデル／日本・中国・香港・台湾・タイ・シンガポール展開"
      },
      {
        category: "モデル",
        text: "日産自動車『SAKURA』紹介動画"
      },
      {
        category: "モデル",
        text: "SoftBank 広告・新商品発表会"
      },
      {
        category: "モデル",
        text: "ニトリ ルームウェア・WEB広告"
      },
      {
        category: "モデル",
        text: "Nikon 和装ウエディング・富士フイルム写真展イメージモデル"
      },
      {
        category: "モデル",
        text: "セキスイハイム・飛島建設・企業カタログ・WEB広告モデル"
      },
      {
        category: "モデル",
        text: "TVCM・スチール・企業広告・ブランドプロモーション出演多数"
      },

      /* ==============================
         スピーチ・登壇支援
      ============================== */
      {
        category: "スピーチ・登壇支援",
        text: "2024年 総裁選候補者への表現・スピーチ指導"
      },
      {
        category: "スピーチ・登壇支援",
        text: "国会議員・経営者の演説、登壇、プレゼンテーション支援"
      }
    ],

    youtube: [
      {
        title: "出演・司会サンプル",
        url: "https://www.youtube.com/embed/M7lc1UVf-VE"
      }
    ]
  },

  {
    id: "seira-minami",

    name: "南 青良",
    kana: "みなみ せいら",
    englishName: "SEIRA MINAMI",

    cardImage: "seira-new.jpeg",

    photos: [
      "seira-new.jpeg",
      "IMG_5397 (1).jpeg",
      "CCCC1076.jpeg"
    ],

    summary:
      "幼少期から歌手・女優として表現の世界で活動し、現在はモデル、MC、リポーターとしても幅広く活躍。長年培った表現力と、親しみやすく華やかな存在感を活かし、テレビ、企業イベント、展示会、広告、映像など多様な現場に対応する。ステージ上での進行力に加え、役柄やブランドの世界観を的確に表現できることを強みとする。",

    profile: {
      height: "160cm",
      birthplace: "東京都",
      bloodType: "A型",
      education: "桜美林大学 卒業",
      hobbies: "旅行、釣り、シュノーケリング",
      skills: "歌、水泳",
      qualifications: "実用英語技能検定 準2級、普通自動車運転免許"
    },

    tags: [
      "テレビ",
      "リポーター",
      "企業VP",
      "イベントMC",
      "カンファレンス",
      "展示会",
      "式典",
      "トークショー",
      "モデル",
      "広告"
    ],

    careers: [
      /* ==============================
         テレビ・リポーター
      ============================== */
      {
        category: "テレビ・リポーター",
        text: "NHK Eテレ 小学生ボッチャ競技会 進行MC"
      },
      {
        category: "テレビ・リポーター",
        text: "TBS『Nスタ』出演"
      },
      {
        category: "テレビ・リポーター",
        text: "J:COM『つながるセブン』『湘南デイリーニュース』"
      },
      {
        category: "テレビ・リポーター",
        text: "J:COM IBSA柔道 東京国際オープントーナメント"
      },
      {
        category: "テレビ・リポーター",
        text: "船橋競馬パドック中継・CS放送 平塚競輪・スカパー"
      },
      {
        category: "テレビ・リポーター",
        text: "FM湘南ナパサ・レディオ湘南『GOOD MORNING』・FMヨコハマ"
      },

      /* ==============================
         広告・企業VP
      ============================== */
      {
        category: "広告・企業VP",
        text: "積水ハウス 新施設紹介映像"
      },
      {
        category: "広告・企業VP",
        text: "メディカル・コンシェルジュ 企業説明動画"
      },
      {
        category: "広告・企業VP",
        text: "大阪中小企業投資育成 デジタルサイネージ映像"
      },
      {
        category: "広告・企業VP",
        text: "ルーシッドCM・日本政策金融公庫・アクアプラネット MA・ナレーション"
      },
      {
        category: "広告・企業VP",
        text: "企業紹介映像・サービス紹介映像・ナレーション 多数"
      },

      /* ==============================
         イベント・カンファレンス
      ============================== */
      {
        category: "イベント・カンファレンス",
        text: "Google Cloud Next Tokyo 2024・2025 MC"
      },
      {
        category: "イベント・カンファレンス",
        text:
          "Gartner Symposium・CIO Leadership Forum・Digital Workplace Summit MC"
      },
      {
        category: "イベント・カンファレンス",
        text: "PwC All Staff Meeting MC"
      },
      {
        category: "イベント・カンファレンス",
        text: "日経xwoman・日経ヘルス・日経IR関連セミナー"
      },
      {
        category: "イベント・カンファレンス",
        text:
          "Panasonic・サントリーホールディングス・デジタルアーツ オンラインイベント"
      },
      {
        category: "イベント・カンファレンス",
        text: "Googleセミナー・CP＋主催者ステージ・FOODEX 美食女子"
      },
      {
        category: "イベント・カンファレンス",
        text:
          "ENEOSパビリオン・大塚商会・freee・セイコーなど企業イベントMC"
      },
      {
        category: "イベント・カンファレンス",
        text:
          "NikkeiBP Executive Women カンファレンス・J-MONEYカンファレンス"
      },

      /* ==============================
         展示会・式典
      ============================== */
      {
        category: "展示会・式典",
        text: "Japan Mobility Show 2025 主催者ステージMC・ナレーター"
      },
      {
        category: "展示会・式典",
        text:
          "東京オートサロン・大阪オートメッセ・国際福祉機器展／SUZUKI"
      },
      {
        category: "展示会・式典",
        text:
          "CP＋・Inter BEE・Interop Tokyo・JIMTOF・JASISなど展示会MC"
      },
      {
        category: "展示会・式典",
        text:
          "ドラッグストアショー・リテールテック・CEATEC・働き方改革EXPOなど展示会MC"
      },
      {
        category: "展示会・式典",
        text: "TOYOTA・いすゞ自動車 新車発表会"
      },
      {
        category: "展示会・式典",
        text:
          "三菱電機・ウエルシア オープニングイベント・新ブランド発表会"
      },
      {
        category: "展示会・式典",
        text:
          "習志野市シルバー人材センター40周年記念式典・企業表彰式・顧客招待イベント"
      },
      {
        category: "展示会・式典",
        text: "企業表彰式・周年記念式典・新製品発表会 多数"
      },

      /* ==============================
         トークショー
      ============================== */
      {
        category: "トークショー",
        text: "dynabook35周年イベント／伊沢拓司"
      },
      {
        category: "トークショー",
        text: "セイコーゴールデングランプリ陸上2024 セイコーブース"
      },
      {
        category: "トークショー",
        text: "俳優・アスリート・文化人を迎えたトークショー司会"
      },

      /* ==============================
         モデル・広告
      ============================== */
      {
        category: "モデル・広告",
        text:
          "アデランス広告モデル／日本・中国・香港・台湾・タイ・シンガポール展開"
      },
      {
        category: "モデル・広告",
        text: "日産自動車『SAKURA』紹介動画"
      },
      {
        category: "モデル・広告",
        text: "SoftBank 広告・新商品発表会モデル"
      },
      {
        category: "モデル・広告",
        text: "ニトリ ルームウェアモデル"
      },
      {
        category: "モデル・広告",
        text: "Nikon 和装ウエディング・富士フイルム写真展イメージモデル"
      },
      {
        category: "モデル・広告",
        text:
          "オリエンタルランド・ワタミ・第一興商・飛島建設など広告モデル"
      },
      {
        category: "モデル・広告",
        text:
          "湘南ガールコンテスト準グランプリ・雑誌表紙・アパレルモデル"
      },
      {
        category: "モデル・広告",
        text:
          "TVCM・WEB・スチール・カタログ・ブランドプロモーション出演多数"
      }
    ],

    youtube: [
      {
        title: "演技・出演サンプル",
        url: "https://www.youtube.com/embed/M7lc1UVf-VE"
      }
    ]
  },

  {
    id: "fumi-murakami",

    name: "村上 史",
    kana: "むらかみ ふみ",
    englishName: "FUMI MURAKAMI",

    cardImage: "S__27557921.jpg",

    photos: [
      "S__27557921.jpg"
    ],

    summary:
      "summary:
  "新卒でラジオアナウンサーとしてキャリアをスタート。10年以上にわたり、放送局アナウンサーとして多様な現場で経験を重ねてきた。安定した進行力と落ち着き、聞き手に安心感を与える声に定評があり、格式ある式典から親しみやすいステージまで柔軟に対応。保育士資格を活かし、子ども向けイベントでも温かく丁寧な進行を行う。",

    profile: {
      height: "154cm",
      bloodType: "O型",
      education: "西南学院大学",
      hobbies: "鳥と遊ぶ",
      skills: "子供と遊ぶ",
      qualifications: "保育士資格"
    },

    tags: [
      "司会",
      "式典",
      "セミナー",
      "企業イベント",
      "インタビュー",
      "ナレーション",
      "オンライン配信"
    ],

    careers: [
      {
        category: "企業イベント",
        text: "企業カンファレンス・セミナー司会"
      },
      {
        category: "式典",
        text: "表彰式・周年記念式典・開会式進行"
      },
      {
        category: "インタビュー",
        text: "経営者・有識者・ゲストインタビュー"
      },
      {
        category: "ナレーション",
        text: "企業映像・紹介映像・イベント映像ナレーション"
      },
      {
        category: "オンライン",
        text: "オンラインイベント・ライブ配信進行"
      },
      {
        category: "その他",
        text: "案件内容に合わせた台本読み、アナウンス、ステージ進行"
      }
    ],

    youtube: [
      {
        title: "MC・ナレーションサンプル",
        url: "https://www.youtube.com/embed/M7lc1UVf-VE"
      }
    ]
  },

  {
    id: "coming-soon",

    name: "Coming Soon",
    kana: "",
    englishName: "NEW PROFESSIONAL",

    cardImage: "",

    photos: [],

    summary:
      "新しいプロフェッショナルのプロフィールを準備しています。キャスティングのご相談は、法人お問い合わせフォームからご連絡ください。",

    profile: {
      height: "",
      birthplace: "",
      bloodType: "",
      education: "",
      hobbies: "",
      skills: "",
      qualifications: ""
    },

    tags: [],
    careers: [],
    youtube: []
  }
];
