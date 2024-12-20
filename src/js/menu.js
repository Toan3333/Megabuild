import { CountUp } from "countup.js"; // Đảm bảo đúng cú pháp

export function dropDown() {
  document.addEventListener("DOMContentLoaded", function () {
    // Mảng các phần tử cần tìm
    const countElements = [
      { id: "stat-number-1", endVal: 100 },
      { id: "stat-number-2", endVal: 200 },
      { id: "stat-number-3", endVal: 300 },
      { id: "number-13", endVal: 13 },
      { id: "number-100", endVal: 100 },
      { id: "number-200", endVal: 200 },
    ];

    // Lặp qua các phần tử và khởi tạo CountUp nếu phần tử tồn tại
    countElements.forEach(({ id, endVal }) => {
      const countElement = document.getElementById(id);

      if (countElement) {
        const options = {
          startVal: 0, // Bắt đầu từ 0
          endVal: endVal, // Lấy giá trị endVal từ mảng countElements
          duration: 3, // Thời gian chạy (2 giây)
          separator: ",", // Ngăn cách nghìn, triệu, ...
          decimals: 0, // Số chữ số sau dấu phẩy
          suffix: "+", // Thêm dấu "+" sau số
        };

        const countUp = new CountUp(id, endVal, options);

        if (!countUp.error) {
          countUp.start();
        } else {
          console.error(countUp.error);
        }
      }
    });

    // Các chức năng khác
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
