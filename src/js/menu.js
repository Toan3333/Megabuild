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

    menuLinks.forEach((link) => {
      link.classList.remove("active");

      if (currentUrl.includes(link.href)) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    const toggle = document.querySelector(".header-toggle");
    const menu = document.querySelector(".header-menu-mobile");
    const overlay = document.querySelector(".overlay");

    if (toggle && menu && overlay) {
      toggle.addEventListener("click", function () {
        const isMenuVisible = menu.classList.contains("is-show");

        menu.classList.toggle("is-show", !isMenuVisible);

        overlay.classList.toggle("is-show", !isMenuVisible);
      });

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
