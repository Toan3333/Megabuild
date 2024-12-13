import Swiper from "swiper";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";

/**
 * @param swiperInit
 */
export function swiperInit() {
  swiperGallery();
  swiperSlide();
}

function swiperGallery() {
  // Khởi tạo Swiper Thumb trước
  const swiperThumb = new Swiper(".swiper-thumb", {
    modules: [Autoplay, Navigation],
    spaceBetween: 23,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    loop: true,
    slideToClickedSlide: true, // Đảm bảo khi click vào thumb, Swiper chính sẽ chuyển đến ảnh tương ứng
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
  });

  // Khởi tạo Swiper chính
  const swiperDetail = new Swiper(".swiper-detail", {
    spaceBetween: 10,
    loop: true,
    modules: [Autoplay, Navigation, Thumbs],
    thumbs: {
      swiper: swiperThumb, // Liên kết thumbnail với Swiper chính
    },
    navigation: {
      nextEl: ".custom-next", // Điều hướng nút next
      prevEl: ".custom-prev", // Điều hướng nút prev
    },
  });
}

function swiperSlide() {
  const swiper = new Swiper(".swiper-project", {
    modules: [Autoplay, Navigation],
    spaceBetween: 40,
    slidesPerView: 3,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    speed: 1500,

    navigation: {
      nextEl: ".project-btn-next",
      prevEl: ".project-btn-prev",
    },
  });

  const swiperCertificate = new Swiper(".swiper-certificate", {
    modules: [Autoplay, Navigation],
    spaceBetween: 12,
    slidesPerView: 6,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 12,
      },
      1920: {
        slidesPerView: 6,
        spaceBetween: 12,
      },
    },

    navigation: {
      nextEl: ".certificate-next",
      prevEl: ".certificate-prev",
    },
  });

  const swiperNews = new Swiper(".swiper-news", {
    modules: [Autoplay, Navigation],
    spaceBetween: 20,
    slidesPerView: 1,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    speed: 1500,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },

    navigation: {
      nextEl: ".news-btn-next",
      prevEl: ".news-btn-prev",
    },
  });
}
