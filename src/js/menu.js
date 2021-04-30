//import { overlay, showModal, closeModal } from "./modal";
import { stopSliders, playSliders } from "./sliderMove";


const menu = document.getElementById("navbarSupportedContent");
const listMenu = document.querySelector(".header__top-center");
const btnCollapseToggler = document.getElementById("btnCollapseToggler");
const btnCollapseIcon = document.querySelector(".navbar-toggler-icon");


const mediaQuerySmMax = window.matchMedia("(max-width: 576px)");
const itemListArr = Array.from(listMenu.children);

// закрытие гамбургер-меню по клику на пункт меню

itemListArr.forEach((li) => {
  li.addEventListener("click", () => {
    menu.classList.remove("show");
    $("html, body").css("overflow", "");
    playSliders();

    //closeModal();
  });
});

// остановка скролла страницы при открытом гамбургер-меню
// остановка слайдеров

btnCollapseToggler.addEventListener("click", () => {
  if (!menu.classList.contains("show")) {
    $("html, body").css("overflow", "hidden");
    //showModal();
    stopSliders();

  } else {
    $("html, body").css("overflow", "");
    //closeModal();
    playSliders();
  }
});

// закрытие гамбургер-меню по клику вне меню
// запуск слайдеров

document.body.addEventListener("click", (e) => {
  if (menu.classList.contains("show") &&
    e.target !== listMenu &&
    e.target !==
      btnCollapseIcon
  ) {
    $("html, body").css("overflow", "");
    menu.classList.remove("show");
    playSliders();

  }
});

// показать/скрыть шапку при скролле на мобильном

$(document).ready(function () {
  let lastScrollTop = 0;
  if (mediaQuerySmMax.matches) {
    $(window).scroll(function (event) {
      let current = $(this).scrollTop();

      if (current > lastScrollTop) {
        $("#header").fadeOut();
      } else {
        $("#header").fadeIn();
      }
      lastScrollTop = current;
    });
  }
  return;
});
