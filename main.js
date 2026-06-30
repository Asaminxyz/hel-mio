const talentCards = document.getElementById("talentCards");
const modal = document.getElementById("profileModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

function photoOrPlaceholder(talent) {
  return talent.photos && talent.photos.length ? talent.photos[0] : "";
}

function renderCardImage(talent) {
  const photo = photoOrPlaceholder(talent);

  if (!photo) {
    return `<div class="talent-placeholder">HÉLMIO</div>`;
  }

  return `<img src="${photo}" alt="${talent.name}">`;
}

function renderSnsLinks(sns = {}) {
  const icons = {
    instagram: "IG",
    x: "X",
    youtube: "YT",
    tiktok: "TT"
  };

  return Object.entries(sns)
    .filter(([, url]) => url)
    .map(([key, url]) => `
      <a href="${url}" target="_blank" rel="noopener noreferrer" class="sns-icon">
        ${icons[key] || key}
      </a>
    `)
    .join("");
}

function renderInfoRows(data) {
  const rows = [
    ["カテゴリ", data.category],
    ["身長", data.height],
    ["対応エリア", data.area],
    ["得意分野", data.skills]
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
    <section class="profile-section">
      <h3>対応ジャンル</h3>
      <div class="genre-tags">
        ${genres.map(item => `<span>${item}</span>`).join("")}
      </div>
    </section>
  `;
}

function renderCareers(careers = []) {
  if (!careers.length) return "";

  return `
    <section class="profile-section">
      <h3>経歴・実績</h3>
      <table class="career-table">
        ${careers.map(([label, detail]) => `
          <tr>
            <th>${label}</th>
            <td>${detail}</td>
          </tr>
        `).join("")}
      </table>
    </section>
  `;
}

function renderYoutube(url) {
  if (!url) {
    return `
      <div class="profile-media-box">
        <h3>YOUTUBE</h3>
        <p>準備中です。</p>
      </div>
    `;
  }

  return `
    <div class="profile-media-box">
      <h3>YOUTUBE</h3>
      <iframe src="${url}" allowfullscreen></iframe>
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

function renderInstagram(embed = "") {
  return `
    <div class="profile-media-box profile-media-wide">
      <h3>INSTAGRAM</h3>
      ${embed || "<p>Instagram投稿の埋め込みをここに表示できます。</p>"}
    </div>
  `;
}

function renderTalentCards() {
  talentCards.innerHTML = talents.map(talent => `
    <button class="talent-card" data-profile="${talent.id}">
      ${renderCardImage(talent)}
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
  const mainPhoto = photoOrPlaceholder(data);

  modalContent.innerHTML = `
    <div class="profile-full">
      <div class="profile-top">
        <div class="profile-photo-area">
          ${
            mainPhoto
              ? `<img class="profile-main-photo" src="${mainPhoto}" alt="${data.name}">`
              : `<div class="profile-main-placeholder">HÉLMIO</div>`
          }
        </div>

        <div class="profile-info-area">
          <div class="profile-heading">
            <div class="profile-title">${data.title || ""}</div>
            <h2>${data.name}</h2>
            <div class="profile-kana">${data.kana || ""}</div>
            <div class="profile-en">${data.en || ""}</div>
            <div class="profile-sns">${renderSnsLinks(data.sns)}</div>
          </div>

          <table class="profile-detail-table">
            ${renderInfoRows(data)}
          </table>
        </div>
      </div>

      ${renderGenres(data.genres)}
      ${renderCareers(data.careers)}

      <div class="profile-media-grid">
        ${renderYoutube(data.youtube)}
        ${renderVoices(data.voices)}
        ${renderInstagram(data.instagramEmbed)}
      </div>

      <div class="profile-actions">
        <a href="#contact" id="profileContactButton">このタレントに依頼する</a>
      </div>
    </div>
  `;

  modal.classList.add("is-open");

  const contactButton = document.getElementById("profileContactButton");
  if (contactButton) {
    contactButton.addEventListener("click", () => {
      modal.classList.remove("is-open");

      const messageBox = document.querySelector('#contact textarea[name="message"]');
      if (messageBox && data.id !== "dummy") {
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
