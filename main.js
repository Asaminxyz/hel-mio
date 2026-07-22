document.addEventListener("DOMContentLoaded", () => {
  const talentCards =
    document.getElementById("talentCards");

  const profileModal =
    document.getElementById("profileModal");

  const modalContent =
    document.getElementById("modalContent");

  const modalClose =
    document.getElementById("modalClose");

  const menuButton =
    document.getElementById("menuButton");

  const siteNav =
    document.getElementById("siteNav");

  let currentTalent = null;


  function escapeHtml(value = "") {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }


  function getYouTubeEmbedUrl(url = "") {
    if (!url) {
      return "";
    }

    try {
      const parsedUrl = new URL(url);
      let videoId = "";

      if (
        parsedUrl.hostname.includes("youtu.be")
      ) {
        videoId =
          parsedUrl.pathname.replace("/", "");
      }

      if (
        parsedUrl.hostname.includes("youtube.com")
      ) {
        if (
          parsedUrl.pathname.includes("/embed/")
        ) {
          videoId =
            parsedUrl.pathname
              .split("/embed/")[1];
        } else if (
          parsedUrl.pathname.includes("/shorts/")
        ) {
          videoId =
            parsedUrl.pathname
              .split("/shorts/")[1];
        } else {
          videoId =
            parsedUrl.searchParams.get("v") || "";
        }
      }

      videoId =
        videoId
          .split("?")[0]
          .split("&")[0];

      if (!videoId) {
        return "";
      }

      return `https://www.youtube.com/embed/${videoId}`;
    } catch (error) {
      return "";
    }
  }


  function createTalentCards() {
    if (
      !talentCards ||
      typeof talents === "undefined" ||
      !Array.isArray(talents)
    ) {
      return;
    }

    talentCards.innerHTML =
      talents
        .map((talent) => {
          const imageHtml =
            talent.cardImage
              ? `
                <img
                  src="${escapeHtml(talent.cardImage)}"
                  alt="${escapeHtml(talent.name)}"
                  loading="lazy"
                >
              `
              : `
                <div class="talent-placeholder">
                  Coming Soon
                </div>
              `;

          return `
            <button
              class="talent-card"
              type="button"
              data-talent-id="${escapeHtml(talent.id)}"
            >
              ${imageHtml}

              <div class="talent-card-body">

                <p class="talent-name">
                  ${escapeHtml(talent.name)}
                </p>

                <p class="talent-title">
                  ${escapeHtml(talent.title)}
                </p>

              </div>
            </button>
          `;
        })
        .join("");

    const cards =
      talentCards.querySelectorAll(
        ".talent-card"
      );

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const talentId =
          card.dataset.talentId;

        const selectedTalent =
          talents.find(
            (talent) =>
              talent.id === talentId
          );

        if (selectedTalent) {
          openProfile(selectedTalent);
        }
      });
    });
  }


  function createProfileMeta(profile = {}) {
    const rows = [
      {
        label: "出身地",
        value: profile.birthplace
      },
      {
        label: "身長",
        value: profile.height
      },
      {
        label: "特技・対応",
        value: profile.specialties
      },
      {
        label: "言語",
        value: profile.languages
      },
      {
        label: "資格",
        value: profile.qualifications
      }
    ].filter((item) => item.value);

    if (rows.length === 0) {
      return "";
    }

    return `
      <div class="profile-meta">

        ${rows
          .map(
            (item) => `
              <div class="profile-meta-row">

                <div class="profile-meta-label">
                  ${escapeHtml(item.label)}
                </div>

                <div class="profile-meta-value">
                  ${escapeHtml(item.value)}
                </div>

              </div>
            `
          )
          .join("")}

      </div>
    `;
  }


  function createPhotoArea(talent) {
    const photos =
      Array.isArray(talent.photos)
        ? talent.photos.filter(Boolean)
        : [];

    if (photos.length === 0) {
      return `
        <div class="profile-gallery">

          <div class="profile-main-placeholder">
            Coming Soon
          </div>

        </div>
      `;
    }

    const mainPhoto = photos[0];

    const thumbnails =
      photos.length > 1
        ? `
          <div class="profile-thumbs">

            ${photos
              .map(
                (photo, index) => `
                  <button
                    class="profile-thumb ${
                      index === 0
                        ? "is-active"
                        : ""
                    }"
                    type="button"
                    data-photo="${escapeHtml(photo)}"
                    aria-label="${escapeHtml(
                      talent.name
                    )}の写真${index + 1}を表示"
                  >
                    <img
                      src="${escapeHtml(photo)}"
                      alt=""
                      loading="lazy"
                    >
                  </button>
                `
              )
              .join("")}

          </div>
        `
        : "";

    return `
      <div class="profile-gallery">

        <img
          class="profile-main-photo"
          id="profileMainPhoto"
          src="${escapeHtml(mainPhoto)}"
          alt="${escapeHtml(talent.name)}"
        >

        ${thumbnails}

      </div>
    `;
  }


  function createCareerSection(careers = []) {
    if (
      !Array.isArray(careers) ||
      careers.length === 0
    ) {
      return "";
    }

    return `
      <section class="profile-section">

        <h3 class="profile-section-title">
          CAREER
        </h3>

        <div class="profile-career-list">

          ${careers
            .map(
              (career) => `
                <div class="profile-career-row">

                  <div class="profile-career-category">
                    ${escapeHtml(career.category)}
                  </div>

                  <div>
                    ${escapeHtml(career.text)}
                  </div>

                </div>
              `
            )
            .join("")}

        </div>

      </section>
    `;
  }


  function createTagsSection(tags = []) {
    if (
      !Array.isArray(tags) ||
      tags.length === 0
    ) {
      return "";
    }

    return `
      <section class="profile-section">

        <h3 class="profile-section-title">
          FIELD
        </h3>

        <div class="profile-tags">

          ${tags
            .map(
              (tag) => `
                <span class="profile-tag">
                  ${escapeHtml(tag)}
                </span>
              `
            )
            .join("")}

        </div>

      </section>
    `;
  }


  function createYouTubeSection(videos = []) {
    if (
      !Array.isArray(videos) ||
      videos.length === 0
    ) {
      return "";
    }

    const validVideos =
      videos
        .map((video) => ({
          title:
            video.title || "動画サンプル",
          embedUrl:
            getYouTubeEmbedUrl(video.url)
        }))
        .filter((video) => video.embedUrl);

    if (validVideos.length === 0) {
      return "";
    }

    return `
      <section
        class="profile-section profile-movie-section"
      >

        <h3 class="profile-section-title">
          MOVIE
        </h3>

        <div class="profile-movie-list">

          ${validVideos
            .map(
              (video) => `
                <article class="profile-movie-item">

                  <div class="profile-movie-frame">

                    <iframe
                      src="${escapeHtml(video.embedUrl)}"
                      title="${escapeHtml(video.title)}"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>

                  </div>

                  <p class="profile-movie-title">
                    ${escapeHtml(video.title)}
                  </p>

                </article>
              `
            )
            .join("")}

        </div>

      </section>
    `;
  }


  function createProfileHtml(talent) {
    return `
      <article
        class="profile-sheet"
        id="profileSheet"
      >

        <div class="pdf-only pdf-brand">

          <strong>
            HÉLMIO
          </strong>

          <span>
            Corporate Communication &amp; Casting
          </span>

        </div>


        <div class="profile-header">

          ${createPhotoArea(talent)}

          <div class="profile-information">

            <p class="profile-overline">
              PROFESSIONAL PROFILE
            </p>

            <h2
              class="profile-name"
              id="profileModalTitle"
            >
              ${escapeHtml(talent.name)}
            </h2>

            ${
              talent.kana
                ? `
                  <p class="profile-kana">
                    ${escapeHtml(talent.kana)}
                  </p>
                `
                : ""
            }

            ${
              talent.englishName
                ? `
                  <p class="profile-en">
                    ${escapeHtml(
                      talent.englishName
                    )}
                  </p>
                `
                : ""
            }

            <p class="profile-summary">
              ${escapeHtml(talent.summary)}
            </p>

            ${createProfileMeta(talent.profile)}

          </div>

        </div>


        ${createCareerSection(talent.careers)}

        ${createTagsSection(talent.tags)}

        ${createYouTubeSection(talent.youtube)}


        ${
          talent.id !== "coming-soon"
            ? `
              <div class="profile-actions">

                <button
                  class="profile-action secondary"
                  id="downloadProfilePdf"
                  type="button"
                >
                  プロフィールPDFをダウンロード
                </button>

                <button
                  class="profile-action primary"
                  id="contactTalent"
                  type="button"
                >
                  この方について法人相談する
                </button>

              </div>
            `
            : `
              <div class="profile-actions">

                <button
                  class="profile-action primary"
                  id="contactTalent"
                  type="button"
                >
                  キャスティングについて相談する
                </button>

              </div>
            `
        }

      </article>
    `;
  }


  function openProfile(talent) {
    if (
      !profileModal ||
      !modalContent
    ) {
      return;
    }

    currentTalent = talent;

    modalContent.innerHTML =
      createProfileHtml(talent);

    profileModal.classList.add(
      "is-open"
    );

    profileModal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "modal-open"
    );

    setupPhotoThumbnails();
    setupProfileActions();

    window.setTimeout(() => {
      modalClose?.focus();
    }, 50);
  }


  function closeProfile() {
    if (!profileModal) {
      return;
    }

    profileModal.classList.remove(
      "is-open"
    );

    profileModal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "modal-open"
    );

    currentTalent = null;
  }


  function setupPhotoThumbnails() {
    const mainPhoto =
      document.getElementById(
        "profileMainPhoto"
      );

    const thumbnails =
      document.querySelectorAll(
        ".profile-thumb"
      );

    if (
      !mainPhoto ||
      thumbnails.length === 0
    ) {
      return;
    }

    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener(
        "click",
        () => {
          const photo =
            thumbnail.dataset.photo;

          if (!photo) {
            return;
          }

          mainPhoto.src = photo;

          thumbnails.forEach((item) => {
            item.classList.remove(
              "is-active"
            );
          });

          thumbnail.classList.add(
            "is-active"
          );
        }
      );
    });
  }


  function setupProfileActions() {
    const downloadButton =
      document.getElementById(
        "downloadProfilePdf"
      );

    const contactButton =
      document.getElementById(
        "contactTalent"
      );

    downloadButton?.addEventListener(
      "click",
      downloadProfilePdf
    );

    contactButton?.addEventListener(
      "click",
      moveToContact
    );
  }


  function downloadProfilePdf() {
    if (!currentTalent) {
      return;
    }

    if (
      typeof html2pdf === "undefined"
    ) {
      alert(
        "PDF生成ライブラリを読み込めませんでした。"
      );

      return;
    }

    const profileSheet =
      document.getElementById(
        "profileSheet"
      );

    if (!profileSheet) {
      return;
    }

    const clonedProfile =
      profileSheet.cloneNode(true);

    clonedProfile.removeAttribute("id");
    clonedProfile.classList.add(
      "pdf-export"
    );

    clonedProfile
      .querySelectorAll(
        "iframe, .profile-movie-section"
      )
      .forEach((element) => {
        element.remove();
      });

    const temporaryContainer =
      document.createElement("div");

    temporaryContainer.style.position =
      "fixed";

    temporaryContainer.style.left =
      "-99999px";

    temporaryContainer.style.top = "0";

    temporaryContainer.appendChild(
      clonedProfile
    );

    document.body.appendChild(
      temporaryContainer
    );

    const safeName =
      currentTalent.englishName
        ? currentTalent.englishName
            .toLowerCase()
            .replaceAll(" ", "-")
        : currentTalent.id;

    const options = {
      margin: 0,

      filename:
        `helmio-profile-${safeName}.pdf`,

      image: {
        type: "jpeg",
        quality: 0.98
      },

      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        scrollY: 0
      },

      jsPDF: {
        unit: "px",
        format: [794, 1123],
        orientation: "portrait"
      },

      pagebreak: {
        mode: [
          "avoid-all",
          "css",
          "legacy"
        ]
      }
    };

    html2pdf()
      .set(options)
      .from(clonedProfile)
      .save()
      .catch(() => {
        alert(
          "PDFの作成に失敗しました。"
        );
      })
      .finally(() => {
        temporaryContainer.remove();
      });
  }


  function moveToContact() {
    const contactSection =
      document.getElementById("contact");

    if (!contactSection) {
      return;
    }

    const messageField =
      contactSection.querySelector(
        'textarea[name="message"]'
      );

    if (
      messageField &&
      currentTalent
    ) {
      const talentName =
        currentTalent.id === "coming-soon"
          ? ""
          : currentTalent.name;

      messageField.value =
        talentName
          ? `${talentName}さんのキャスティングについて相談したいです。\n\n`
          : "キャスティングについて相談したいです。\n\n";
    }

    closeProfile();

    window.setTimeout(() => {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      messageField?.focus({
        preventScroll: true
      });
    }, 100);
  }


  modalClose?.addEventListener(
    "click",
    closeProfile
  );


  profileModal?.addEventListener(
    "click",
    (event) => {
      if (
        event.target === profileModal
      ) {
        closeProfile();
      }
    }
  );


  document.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key === "Escape" &&
        profileModal?.classList.contains(
          "is-open"
        )
      ) {
        closeProfile();
      }
    }
  );


  menuButton?.addEventListener(
    "click",
    () => {
      const isOpen =
        siteNav?.classList.toggle(
          "is-open"
        );

      menuButton.setAttribute(
        "aria-expanded",
        String(Boolean(isOpen))
      );
    }
  );


  siteNav
    ?.querySelectorAll("a")
    .forEach((link) => {
      link.addEventListener(
        "click",
        () => {
          siteNav.classList.remove(
            "is-open"
          );

          menuButton?.setAttribute(
            "aria-expanded",
            "false"
          );
        }
      );
    });


  createTalentCards();
});
