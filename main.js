const talentCards = document.getElementById("talentCards");
const modal = document.getElementById("profileModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

function getMainPhoto(talent) {
  return talent.photos && talent.photos.length ? talent.photos[0] : "";
}

function renderCardImage(talent) {
  const photo = getMainPhoto(talent);

  return photo
    ? `<img src="${photo}" alt="${talent.name}">`
    : `<div class="talent-placeholder">HÉLMIO</div>`;
}

function renderSnsIcons(sns = {}) {
  const icons = {
    instagram: "◎",
    x: "𝕏",
    youtube: "▶",
    tiktok: "♪"
  };

  return Object.entries(sns)
    .filter(([, url]) => url)
    .map(([key, url]) => `
      <a href="${url}" target="_blank" rel="noopener noreferrer" class="profile-sns-icon">
        ${icons[key] || key}
      </a>
    `)
    .join("");
}

function renderProfileRows(profile = []) {
  return profile
    .filter(([, value]) => value)
    .map(([label, value]) => `
      <div class="profile-row">
        <div class="profile-label">${label}：</div>
        <div class="profile-value">${value}</div>
      </div>
    `)
    .join("");
}

function renderPhotoThumbs(photos = [], name = "") {
  if (!photos || photos.length <= 1) return "";

  return `
    <div class="profile-thumbs">
      ${photos.map((photo, index) => `
        <button class="profile-thumb ${index === 0 ? "is-active" : ""}" type="button" data-photo="${photo}">
          <img src="${photo}" alt="${name}">
        </button>
      `).join("")}
    </div>
  `;
}

function renderCareerRows(careers = []) {
  if (!careers.length) return "";

  return `
    <section class="profile-career">
      <h3>経歴</h3>
      <table>
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
  if (!url) return "";

  return `
    <div class="profile-media-box">
      <h3>YOUTUBE</h3>
      <iframe src="${url}" allowfullscreen></iframe>
    </div>
  `;
}

function renderVoices(voices = []) {
  if (!voices.length) return "";

  return `
    <div class="profile-media-box">
      <h3>VOICE SAMPLE</h3>
      ${voices.map(voice => `
        <p>${voice.title}</p>
        <audio controls src="${voice.file}"></audio>
      `).join("")}
    </div>
  `;
}

function renderTalentCards() {
  talentCards.innerHTML = talents.map(talent => `
    <button class="talent-card" data-profile="${talent.id}">
      ${renderCardImage(talent)}
      <div class="talent-card-body">
        <div class="talent-name">${talent.name}</div>
        <div class="talent-title">${talent.title || ""}</div>
      </div>
    </button>
  `).join("");

  document.querySelectorAll(".talent-card").forEach(card => {
    card.addEventListener("click", () => {
      const data = talents.find(talent => talent.id === card.dataset.profile);
      openProfile(data);
    });
  });
}

function openProfile(data) {
  const mainPhoto = getMainPhoto(data);
  const snsIcons = renderSnsIcons(data.sns);

  modalContent.innerHTML = `
    <div class="profile-full">
      <div class="profile-main-layout">
        <div class="profile-photo-wrap">
          ${
            mainPhoto
              ? `<img class="profile-main-photo" id="profileMainPhoto" src="${mainPhoto}" alt="${data.name}">`
              : `<div class="profile-main-placeholder">HÉLMIO</div>`
          }
          ${renderPhotoThumbs(data.photos, data.name)}
        </div>

        <div class="profile-text-wrap">
          <div class="profile-name-line">
            <h2>${data.name}</h2>
            ${snsIcons ? `<div class="profile-sns-icons">${snsIcons}</div>` : ""}
          </div>

          <div class="profile-kana">${data.kana || ""}</div>
          <div class="profile-en">${data.en || ""}</div>

          <div class="profile-basic">
            ${renderProfileRows(data.profile)}
          </div>
        </div>
      </div>

      ${renderCareerRows(data.careers)}

      <div class="profile-media-grid">
        ${renderYoutube(data.youtube)}
        ${renderVoices(data.voices)}
      </div>

      <div class="profile-actions">
        <a href="#contact" id="profileContactButton">このタレントに依頼する</a>
      </div>
    </div>
  `;

  modal.classList.add("is-open");

  document.querySelectorAll(".profile-thumb").forEach(button => {
    button.addEventListener("click", () => {
      const mainPhotoEl = document.getElementById("profileMainPhoto");

      if (mainPhotoEl) {
        mainPhotoEl.src = button.dataset.photo;
      }

      document.querySelectorAll(".profile-thumb").forEach(item => {
        item.classList.remove("is-active");
      });

      button.classList.add("is-active");
    });
  });

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
