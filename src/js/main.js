import AOS from "aos";
import lozad from "lozad";

import {
  setBackgroundElement,
  detectCloseElement,
  buttonToTop,
  clickScrollToDiv,
  appendCaptchaASP,
} from "./helper";
import { header } from "./header";
import { swiperInit } from "./swiper";
import { dropDown } from "./menu";
$(document).ready(function () {
  $(".tabs").each(function () {
    $(this).tabslet({
      container: $(this).data("tabs-container"),
    });
  });
  setBackgroundElement();
  header.init();
  swiperInit();
  dropDown();
});

/*==================== Aos Init ====================*/
AOS.init({
  offset: 100,
});
/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
