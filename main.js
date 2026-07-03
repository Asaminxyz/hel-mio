/* ==================================================
   HÉLMIO
   main.js
================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------------
     Talent Cards
  --------------------------------*/

  const cards = document.getElementById("talentCards");

  if (cards && window.TALENTS) {

    cards.innerHTML = "";

    TALENTS.forEach((talent) => {

      const card = document.createElement("button");
      card.className = "talent-card";
      card.type = "button";

      const thumb = talent.photos && talent.photos.length
        ? `<img src="${talent.photos[0]}" alt="${talent.name}">`
        : `<div class="talent-placeholder">${talent.name.charAt(0)}</div>`;

      card.innerHTML = `
        ${thumb}
        <div class="talent-card-body">
            <div class="talent-name">${talent.name}</div>
            <div class="talent-title">${talent.title || ""}</div>
        </div>
      `;

      card.addEventListener("click", () => openProfile(talent));

      cards.appendChild(card);

    });

  }


  /* -------------------------------
     Modal
  --------------------------------*/

  const modal = document.getElementById("profileModal");
  const content = document.getElementById("modalContent");
  const closeBtn = document.getElementById("modalClose");

  function openProfile(talent){

      if(!modal || !content) return;

      const photos = talent.photos || [];

      const mainPhoto = photos.length
          ? `<img class="profile-main-photo" id="mainPhoto" src="${photos[0]}" alt="${talent.name}">`
          : `<div class="profile-main-placeholder">${talent.name.charAt(0)}</div>`;

      const thumbs = photos.map((src,index)=>`
          <button class="profile-thumb ${index===0 ? "is-active":""}"
                  data-src="${src}">
              <img src="${src}" alt="">
          </button>
      `).join("");

      const careerRows = (talent.career || []).map(item=>`
          <tr>
            <th>${item.year}</th>
            <td>${item.text}</td>
          </tr>
      `).join("");

      content.innerHTML = `

<div class="profile-main-layout">

<div>

${mainPhoto}

${photos.length>1 ? `
<div class="profile-thumbs">
${thumbs}
</div>` : ""}

</div>

<div>

<div class="profile-name-line">

<div>

<h2>${talent.name}</h2>

<div class="profile-kana">${talent.kana || ""}</div>

<div class="profile-en">${talent.en || ""}</div>

</div>

</div>

<div class="profile-basic">

${talent.birth ? `
<div class="profile-row">
<div class="profile-label">生年月日</div>
<div class="profile-value">${talent.birth}</div>
</div>` : ""}

${talent.height ? `
<div class="profile-row">
<div class="profile-label">身長</div>
<div class="profile-value">${talent.height}</div>
</div>` : ""}

${talent.skills ? `
<div class="profile-row">
<div class="profile-label">特技</div>
<div class="profile-value">${talent.skills}</div>
</div>` : ""}

</div>

</div>

</div>

${careerRows ? `
<div class="profile-career">

<h3>Career</h3>

<table>

${careerRows}

</table>

</div>` : ""}

${talent.youtube ? `
<div class="profile-media-grid">

<div class="profile-media-box">

<h3>Movie</h3>

<iframe
src="https://www.youtube.com/embed/${talent.youtube}"
allowfullscreen>
</iframe>

</div>

</div>` : ""}

<div class="profile-actions">

<a href="#contact"
onclick="document.getElementById('profileModal').classList.remove('is-open');">

お問い合わせはこちら

</a>

</div>

`;

      modal.classList.add("is-open");

      document.body.style.overflow="hidden";


      const thumbButtons = modal.querySelectorAll(".profile-thumb");

      thumbButtons.forEach(btn=>{

          btn.addEventListener("click",()=>{

              document.getElementById("mainPhoto").src=btn.dataset.src;

              thumbButtons.forEach(t=>t.classList.remove("is-active"));

              btn.classList.add("is-active");

          });

      });

  }


  function closeModal(){

      modal.classList.remove("is-open");

      document.body.style.overflow="";

  }


  if(closeBtn){

      closeBtn.addEventListener("click",closeModal);

  }

  if(modal){

      modal.addEventListener("click",(e)=>{

          if(e.target===modal){

              closeModal();

          }

      });

  }

  document.addEventListener("keydown",(e)=>{

      if(e.key==="Escape"){

          closeModal();

      }

  });


  /* -------------------------------
     Smooth Scroll
  --------------------------------*/

  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

      anchor.addEventListener("click",(e)=>{

          const target=document.querySelector(anchor.getAttribute("href"));

          if(!target) return;

          e.preventDefault();

          target.scrollIntoView({

              behavior:"smooth",

              block:"start"

          });

      });

  });

});
