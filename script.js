document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("sideMenu");
  const openBtn = document.querySelector(".menu-toggle");
  const closeBtn = document.getElementById("menuClose");
  const pageKey = document.body?.dataset?.page || "index";
  const langSelect = document.getElementById("langSelect");

  const langTargets = {
    ja: {
      index: "index.html",
      missions: "missions.html",
      streetwalk: "streetwalk.html",
    },
    en: {
      index: "index-en.html",
      missions: "missions-en.html",
      streetwalk: "streetwalk-en.html",
    },
    zh: {
      index: "index-zh.html",
      missions: "missions-zh.html",
      streetwalk: "streetwalk-zh.html",
    },
  };

  if (openBtn && menu) {
    openBtn.addEventListener("click", () => {
      menu.classList.add("open");
    });
  }

  if (closeBtn && menu) {
    closeBtn.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  }

  // メニュー内のリンクを押したら閉じる
  if (menu) {
    menu.addEventListener("click", (e) => {
      if (e.target.tagName === "A" || e.target.classList.contains("lang-btn")) {
        menu.classList.remove("open");
      }
    });
  }

  // 言語切り替え（ドロップダウン）
  if (langSelect) {
    const currentLang = document.documentElement.lang || "ja";
    langSelect.value = currentLang;
    langSelect.addEventListener("change", () => {
      const lang = langSelect.value;
      const target = langTargets[lang]?.[pageKey];
      if (target) {
        window.location.href = target;
      }
    });
  }
});

// ハッシュタグコピー機能
function copyHashtags(elementId, button) {
  const text = document.getElementById(elementId).textContent;
  navigator.clipboard.writeText(text).then(() => {
    const icon = button.querySelector('.copy-icon');
    if (icon) {
      icon.src = 'check-icon.svg';
      button.classList.add('copied');
      setTimeout(() => {
        icon.src = 'copy-icon.svg';
        button.classList.remove('copied');
      }, 2000);
    }
  });
}
