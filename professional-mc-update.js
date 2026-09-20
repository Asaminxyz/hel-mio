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

  const newTalents = [
    {
      id: 'asuka-nakashima',
      name: '中島 あすか',
      kana: 'なかしま あすか',
      englishName: 'ASUKA NAKASHIMA',
      pdf: 'asuka-nakashima-profile.pdf',
      cardImage: 'asuka-nakashima.jpg',
      photos: [
        'asuka-nakashima.jpg',
        'asuka-nakashima-2.jpg',
        'asuka-nakashima-3.jpg'
      ],
      summary:
        '青山学院大学法学部卒業後、2019年にテレビ岩手へアナウンサーとして入社。情報番組のMC、ニュース、天気・中継・取材リポート、スポーツ中継、ナレーションなど幅広く経験。2025年に退社後は愛知県を拠点に、会社員とアナウンサーの両立で活動している。',
      profile: {
        height: '',
        birthplace: '兵庫県姫路市',
        bloodType: '',
        education: '青山学院大学 法学部',
        hobbies:
          'サッカー観戦、旅行、御朱印巡り、香り、読書、ドライブ、音楽・映画鑑賞',
        skills: '',
        qualifications: '世界遺産検定2級、アロマテラピー検定1級'
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
          category: 'テレビ岩
