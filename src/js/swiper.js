import Swiper from "swiper";
import { Autoplay, Navigation, Thumbs, EffectFade, Pagination } from "swiper/modules";

/**
 * @param swiperInit
 */
export function swiperInit() {
  swiperGallery();
  swiperSlide();
  homeBannerSlider();
  homePartnerSlider();
}

function swiperGallery() {
  // Khởi tạo Swiper Thumb trước
  const swiperThumb = new Swiper(".swiper-thumb", {
    modules: [Autoplay, Navigation],
    spaceBetween: 12,
    slidesPerView: 3.5,
    freeMode: true,
    watchSlidesProgress: true,
    loop: true,
    slideToClickedSlide: true, // Đảm bảo khi click vào thumb, Swiper chính sẽ chuyển đến ảnh tương ứng
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 4.5,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 6,
      },
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
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
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
    spaceBetween: 12,
    slidesPerView: 1.5,
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
    breakpoints: {
      576: {
        spaceBetween: 20,
        slidesPerView: 2.5,
      },
      1024: {
        spaceBetween: 40,
        slidesPerView: 3,
      },
    },
  });

  const swiperCertificate = new Swiper(".swiper-certificate", {
    modules: [Autoplay, Navigation],
    spaceBetween: 12,
    slidesPerView: 2.5,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    breakpoints: {
      586: {
        slidesPerView: 3.5,
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 12,
      },
    },

    navigation: {
      nextEl: ".certificate-next",
      prevEl: ".certificate-prev",
    },
  });

  const swiper4Certificate = new Swiper(".swiper-4-certificate", {
    modules: [Autoplay, Navigation],
    spaceBetween: 12,
    slidesPerView: 2.5,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    breakpoints: {
      576: {
        slidesPerView: 3.5,
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: 4,
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

  const swiperSingleProject = new Swiper(".swiper-single-project .swiper", {
    modules: [Autoplay, Navigation],
    spaceBetween: 12,
    slidesPerView: 1.25,
    freeMode: true,
    initialSlide: 1,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      1024: {
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 40,
      },
    },
  });
}

function homeBannerSlider() {
  const homeBannerSlider = new Swiper(".home-banner-slider .swiper", {
    modules: [Autoplay, EffectFade, Navigation, Pagination],
    slidesPerView: "1",
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".home-banner-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".home-banner-slider .wrap-button-slide .btn-next",
      prevEl: ".home-banner-slider .wrap-button-slide .btn-prev",
    },
  });
}

function homePartnerSlider() {
  // Slider cho thumbnails (slider nhỏ)
  const homePartnerThumbSlider = new Swiper(".partner-thumb-slider .swiper", {
    modules: [Autoplay, Navigation, Pagination],
    slidesPerView: 3.5,
    spaceBetween: 20,
    loop: true,
    speed: 5000,
    centeredSlides: true,
    allowTouchMove: false,
    disableOnInteraction: false,
    autoplay: {
      delay: 1,
      waitForTransition: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 5.5,
      },
      1024: {
        slidesPerView: 9,
        loop: true,
      },
    },
  });

  const homePartnerSlider = new Swiper(".partner-slider .swiper", {
    modules: [Autoplay, Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      disableOnInteraction: false,
      waitForTransition: true,
    },
    pagination: {
      el: ".partner-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".partner-slider .wrap-button-slide .btn-next",
      prevEl: ".partner-slider .wrap-button-slide .btn-prev",
    },
  });
}
