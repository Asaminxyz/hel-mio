const talentCards = document.getElementById("talentCards");
const modal = document.getElementById("profileModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

function iconLabel(key) {
  const labels = {
    instagram: "Instagram",
    x: "X",
    youtube: "YouTube",
    tiktok: "TikTok"
  };
  return labels[key] || key;
}

function renderSnsLinks(sns = {}) {
  const links = Object.entries(sns)
    .filter(([, url]) => url)
    .map(([key, url]) => `
      <a href="${url}" target="_blank" rel="noopener noreferrer" class="sns-icon sns-${key}">
        ${iconLabel(key)}
      </a>
    `)
    .join("");

  return links ? `<div class="profile-sns">${links}</div>` : "";
}

function renderInfoRows(data) {
  const rows = [
    ["カテゴリ", data.category],
    ["身長", data.height],
    ["出身地", data.birthplace],
    ["対応エリア", data.area],
    ["得意分野", data.skills],
    ["趣味", data.hobbies],
    ["資格", data.licenses]
  ].filter(([, value]) => value);

  return rows.map(([label, value]) => `
    <tr>
      <th>${label}</th>
      <td>${value}</td>
    </tr>
  `).join("");
}

function renderGenres(genres = []) {
  if (!genres.length) return "";

  return `
    <div class="profile-section">
      <h3>対応ジャンル</h3>
      <div class="genre-tags">
        ${genres.map(item => `<span>${item}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderCareers(careers = []) {
  if (!careers.length) return "";

  return `
    <div class="profile-section">
      <h3>経歴・実績</h3>
      <table class="career-table">
        ${careers.map(([label, detail]) => `
          <tr>
            <th>${label}</th>
            <td>${detail}</td>
          </tr>
        `).join("")}
      </table>
    </div>
  `;
}

function renderGallery(gallery = []) {
  if (!gallery.length) return "";

  return `
    <div class="profile-section">
      <h3>出演実績ギャラリー</h3>
      <div class="works-gallery">
        ${gallery.map(item => `
          <figure>
            <img src="${item.image}" alt="${item.caption || ""}">
            <figcaption>${item.caption || ""}</figcaption>
          </figure>
        `).join("")}
      </div>
    </div>
  `;
}

function renderVoices(voices = []) {
  if (!voices.length) {
    return `
      <div class="profile-media-box">
        <h3>VOICE SAMPLE</h3>
        <p>準備中です。</p>
      </div>
    `;
  }

  return `
    <div class="profile-media-box">
      <h3>VOICE SAMPLE</h3>
      ${voices.map(voice => `
        <div class="voice-item">
          <p>${voice.title}</p>
          <audio controls src="${voice.file}"></audio>
        </div>
      `).join("")}
    </div>
  `;
}

function renderInstagramEmbed(embed = "") {
  if (!embed) {
    return `
      <div class="profile-media-box profile-media-wide">
        <h3>INSTAGRAM</h3>
        <p>Instagram投稿の埋め込みをここに表示できます。</p>
      </div>
    `;
  }

  return `
    <div class="profile-media-box profile-media-wide">
      <h3>INSTAGRAM</h3>
      <div class="sns-embed">
        ${embed}
      </div>
    </div>
  `;
}

function renderPhotoThumbs(data) {
  if (!data.photos || data.photos.length <= 1) return "";

  return `
    <div class="profile-thumbs">
      ${data.photos.map(src => `
        <button type="button" class="profile-thumb" data-src="${src}">
          <img src="${src}" alt="${data.name}">
        </button>
      `).join("")}
    </div>
  `;
}

function renderTalentCards() {
  talentCards.innerHTML = talents.map(talent => `
    <button class="talent-card" data-profile="${talent.id}">
      <img src="${talent.photos[0]}" alt="${talent.name}">
      <div class="talent-name">${talent.name}</div>
    </button>
  `).join("");

  document.querySelectorAll(".talent-card").forEach(card => {
    card.addEventListener("click", () => {
      const data = talents.find(t => t.id === card.dataset.profile);
      openProfile(data);
    });
  });
}

function openProfile(data) {
  modalContent.innerHTML = `
    <div class="profile-full">
      <div class="profile-top">
        <div class="profile-photo-area">
          <img class="profile-main-photo" id="profileMainPhoto" src="${data.photos[0]}" alt="${data.name}">
          ${renderPhotoThumbs(data)}
        </div>

        <div class="profile-info-area">
          <div class="profile-heading">
            <div class="profile-title">${data.title || ""}</div>
            <h2>${data.name}</h2>
            <div class="profile-kana">${data.kana || ""}</div>
            <div class="profile-en">${data.en || ""}</div>
            ${renderSnsLinks(data.sns)}
          </div>

          <table class="profile-detail-table">
            ${renderInfoRows(data)}
          </table>
        </div>
      </div>

      ${renderGenres(data.genres)}
      ${renderCareers(data.careers)}
      ${renderGallery(data.gallery)}

      <div class="profile-media-grid">
        <div class="profile-media-box">
          <h3>YOUTUBE</h3>
          <iframe src="${data.youtube}" allowfullscreen></iframe>
        </div>

        ${renderVoices(data.voices)}

        ${renderInstagramEmbed(data.instagramEmbed)}
      </div>

      <div class="profile-actions">
        <a href="#contact" id="profileContactButton">
          このタレントに依頼する
        </a>
      </div>
    </div>
  `;

  modal.classList.add("is-open");

  document.querySelectorAll(".profile-thumb").forEach(button => {
    button.addEventListener("click", () => {
      document.getElementById("profileMainPhoto").src = button.dataset.src;
    });
  });

  const contactButton = document.getElementById("profileContactButton");
  if (contactButton) {
    contactButton.addEventListener("click", () => {
      modal.classList.remove("is-open");
      const messageBox = document.querySelector('#contact textarea[name="message"]');
      if (messageBox) {
        messageBox.value = `${data.name}さんへの出演依頼について相談したいです。`;
      }
    });
  }
}

modalClose.addEventListener("click", () => {
  modal.classList.remove("is-open");
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("is-open");
  }
});

renderTalentCards();
