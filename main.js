const talentCards = document.getElementById("talentCards");
const modal = document.getElementById("profileModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

function photoOrPlaceholder(talent) {
  return talent.photos && talent.photos.length ? talent.photos[0] : "";
}

function renderCardImage(talent) {
  const photo = photoOrPlaceholder(talent);
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

function renderInstagram(embed = "") {
  if (!embed) return "";

  return `
    <div class="profile-media-box profile-media-wide">
      <h3>INSTAGRAM</h3>
      <div class="sns-embed">${embed}</div>
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
      <div class="profile-main-layout">
        <div class="profile-photo-wrap">
          ${
            mainPhoto
              ? `<img class="profile-main-photo" src="${mainPhoto}" alt="${data.name}">`
              : `<div class="profile-main-placeholder">HÉLMIO</div>`
          }
        </div>

        <div class="profile-text-wrap">
          <div class="profile-name-line">
            <h2>${data.name}</h2>
            <div class="profile-sns-icons">
              ${renderSnsIcons(data.sns)}
            </div>
          </div>

          <div class="profile-kana">${data.kana || ""}</div>

          <div class="profile-basic">
            ${renderProfileRows(data.profile)}
          </div>
        </div>
      </div>

      ${renderCareerRows(data.careers)}

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
