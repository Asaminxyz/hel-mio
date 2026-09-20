(() => {
  'use strict';

  const rikaHayakawa = {
    id: 'rika-hayakawa',
    name: '早川 里香',
    kana: 'はやかわ りか',
    englishName: 'RIKA HAYAKAWA',
    pdf: 'rika-hayakawa-profile.pdf',
    cardImage: 'rika-hayakawa.jpg',
    photos: [
      'rika-hayakawa.jpg',
      'rika-hayakawa-2.jpg',
      'rika-hayakawa-3.jpg'
    ],
    summary:
      '理系メーカーでの開発職を経てMCへ転身。展示会・企業イベント・式典・スポーツイベントなど幅広い現場で司会を担当。技術系・BtoBイベントを得意とし、落ち着いた進行と臨機応変な対応力を強みとする。展示会プレゼンテーション、セミナー、記者発表会、インタビュー、リポート、ライブ配信、ナレーションまで幅広く対応。',
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
  };

  const buildCard = (id, name, englishName, image) => `
    <button aria-haspopup="dialog" class="talent-card" data-talent-id="${id}" type="button">
      <div class="talent-card__media">
        <span class="talent-card__fallback">${englishName}</span>
        <img alt="${name}" loading="lazy" src="${image}">
      </div>
      <div class="talent-card-body"><p class="talent-name">${name}</p></div>
    </button>`;

  const apply = () => {
    if (Array.isArray(window.HELMIO_TALENTS)) {
      const existing = window.HELMIO_TALENTS.findIndex(t => t && t.id === rikaHayakawa.id);
      if (existing >= 0) window.HELMIO_TALENTS.splice(existing, 1, rikaHayakawa);
      else window.HELMIO_TALENTS.push(rikaHayakawa);
    }

    const container = document.getElementById('talentCards');
    if (!container) return;

    container.classList.add('talent-groups');
    container.innerHTML = `
      <section class="talent-group" aria-labelledby="experienced-professionals-title">
        <p class="talent-group__eyebrow">BROADCAST PROFESSIONALS</p>
        <h3 class="talent-group__title" id="experienced-professionals-title">元局アナウンサー・放送経験豊富なプロフェッショナル</h3>
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
        <h3 class="talent-group__title" id="pro-mc-title">企業イベント・展示会に強い プロMC・ナレーター</h3>
        <p class="talent-group__lead">式典・展示会・セミナー・記者発表会・ナレーションなど、企業の現場で安定した進行と表現力を発揮するプロフェッショナルです。</p>
        <div class="talent-cards talent-cards--group">
          ${buildCard('seira-minami', '南 青良', 'SEIRA MINAMI', 'seira-new.jpeg')}
          ${buildCard('rika-hayakawa', '早川 里香', 'RIKA HAYAKAWA', 'rika-hayakawa.jpg')}
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
      </section>`;

    container.querySelectorAll('.talent-card__media img').forEach(img => {
      img.addEventListener('error', () => img.closest('.talent-card__media')?.classList.add('is-missing'));
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply, { once: true });
  } else {
    apply();
  }
})();
