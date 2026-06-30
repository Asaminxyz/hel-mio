const talentCards = document.getElementById("talentCards");
const modal = document.getElementById("profileModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

function snsIcon(label) {
  const icons = {
    instagram: "Instagram",
    youtube: "YouTube",
    tiktok: "TikTok",
    x: "X"
  };
  return icons[label] || label;
}

function renderSnsLinks(sns = {}) {
  const links = Object.entries(sns)
    .filter(([, url]) => url)
    .map(([key, url]) => `
      <a href="${url}" target="_blank" rel="noopener noreferrer">
        ${snsIcon(key)}
      </a>
    `)
    .join("");

  return links ? `<div class="profile-sns">${links}</div>` : "";
}

function renderInfoRows(data) {
  const rows = [
    ["カテゴリ", data.category],
    ["生年月日", data.birthday],
    ["身長", data.height],
    ["出身地", data.birthplace],
    ["血液型", data.blood],
    ["学歴", data.education],
    ["趣味", data.hobbies],
    ["特技", data.skills],
    ["資格", data.licenses]
  ].filter(([, value]) => value);

  return rows.map(([label, value]) => `
    <tr>
      <th>${label}</th>
      <td>${value}</td>
    </tr>
  `).join("");
}

function renderCareers(careers = []) {
  if (!careers.length) return "";

  return `
    <div class="career-block">
      <h3>経歴</h3>
      <table class="career-table">
        ${careers.map(([media, detail]) => `
          <tr>
            <th>${media}</th>
            <td>${detail}</td>
          </tr>
        `).join("")}
      </table>
    </div>
  `;
}

function renderThumbnails(data) {
  if (!data.thumbnails || !data.thumbnails.length) return "";

  return `
    <div class="profile-thumbs">
      ${data.thumbnails.map(src => `
        <img src="${src}" alt="${data.name}">
      `).join("")}
    </div>
  `;
}

function renderTalentCards() {
  talentCards.innerHTML = talents.map(talent => `
    <button class="talent-card" data-profile="${talent.id}">
      <img src="${talent.image}" alt="${talent.name}">
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
          <img class="profile-main-photo" src="${data.image}" alt="${data.name}">
          ${renderThumbnails(data)}
        </div>

        <div class="profile-info-area">
          <div class="profile-heading">
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

      ${renderCareers(data.careers)}

      <div class="profile-media-grid">
        <div class="profile-media-box">
          <h3>YOUTUBE</h3>
          <iframe src="${data.youtube}" allowfullscreen></iframe>
        </div>

        <div class="profile-media-box">
          <h3>VOICE SAMPLE</h3>
          <p>ナレーション / MCサンプル</p>
          <audio controls src="${data.voice}"></audio>
        </div>

        <div class="profile-media-box profile-media-wide">
          <h3>${data.snsEmbedTitle || "SNS SAMPLE"}</h3>
          ${data.snsEmbedHtml || "<p>SNS投稿の埋め込みをここに表示できます。</p>"}
        </div>
      </div>

      <div class="profile-actions">
        <a href="#contact" onclick="document.getElementById('profileModal').classList.remove('is-open')">
          このタレントに依頼する
        </a>
      </div>
    </div>
  `;

  modal.classList.add("is-open");
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
