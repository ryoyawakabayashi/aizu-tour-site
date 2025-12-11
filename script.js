document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("sideMenu");
  const openBtn = document.querySelector(".menu-toggle");
  const closeBtn = document.getElementById("menuClose");

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

  // 言語切り替えは、あとで必要になったらここに追記
});
