export function dropDown() {
  document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector(".dropdown-button");
    const dropdownNav = document.querySelector(".dropdowm-nav");

    dropdownBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdownNav.classList.toggle("show");
    });

    document.addEventListener("click", function (e) {
      if (!dropdownNav.contains(e.target) && e.target !== dropdownBtn) {
        dropdownNav.classList.remove("show");
      }
    });

    const menuLinks = document.querySelectorAll(".header-menu a");

    const currentUrl = window.location.href;

    // Duyệt qua tất cả các thẻ a
    menuLinks.forEach((link) => {
      link.classList.remove("active");

      if (currentUrl.includes(link.href)) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Quản lý menu và overlay
    const toggle = document.querySelector(".header-toggle"); // Nút toggle
    const menu = document.querySelector(".header-menu-mobile"); // Menu
    const overlay = document.querySelector(".overlay"); // Nền đen mờ

    if (toggle && menu && overlay) {
      // Hiển thị hoặc ẩn menu và overlay
      toggle.addEventListener("click", function () {
        const isMenuVisible = menu.classList.contains("is-show");

        // Toggle hiển thị menu
        menu.classList.toggle("is-show", !isMenuVisible);

        // Toggle hiển thị overlay
        overlay.classList.toggle("is-show", !isMenuVisible);
      });

      // Ẩn menu khi nhấn vào overlay
      overlay.addEventListener("click", function () {
        menu.classList.remove("is-show");
        overlay.classList.remove("is-show");
      });
    } else {
      console.error("Không tìm thấy phần tử .header-toggle, .header-menu-mobile hoặc .overlay");
    }

    // Search

    const searchBtn = document.querySelector(".header-search");
    const searchBar = document.querySelector(".search-bar-container");

    searchBtn.addEventListener("click", function () {
      searchBar.classList.toggle("active");
    });
  });
}

dropDown();
