const talentCards = document.getElementById("talentCards");
const modal = document.getElementById("profileModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

function renderTalentCards() {
  talentCards.innerHTML = talents.map(talent => `
    <button class="talent-card" data-profile="${talent.id}">
      <img src="${talent.image}" alt="${talent.name}" onerror="this.onerror=null;this.src='${talent.fallbackImage}'">
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
    <div class="profile">
      <div class="profile-photo">
        <img src="${data.image}" alt="${data.name}" onerror="this.onerror=null;this.src='${data.fallbackImage}'">
      </div>

      <div>
        <h2>${data.name}<span>${data.en}</span></h2>

        <table class="profile-table">
          <tr><th>カテゴリ</th><td>${data.category}</td></tr>
          <tr><th>対応エリア</th><td>${data.area}</td></tr>
          <tr><th>得意分野</th><td>${data.skill}</td></tr>
          <tr><th>実績</th><td>${data.works}</td></tr>
        </table>

        <div class="media-grid">
          <div class="media-box">
            <h3>YOUTUBE</h3>
            <iframe src="${data.youtube}" allowfullscreen></iframe>
          </div>

          <div class="media-box">
            <h3>VOICE SAMPLE</h3>
            <p>ナレーション / MCサンプル</p>
            <audio controls src="${data.audio}"></audio>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("is-open");
}

modalClose.addEventListener("click", () => {
  modal.classList.remove("is-open");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("is-open");
  }
});

renderTalentCards();
