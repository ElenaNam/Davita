//нужен рефакторинг

export const stopSliders = () => {
  
  $(".first-slider").slick("slickPause");
  $(".catalog-slider").slick("slickPause");
  $(".about-slider").slick("slickPause");
  $(".reviews-slider").slick("slickPause");
};

export const playSliders = () => {

  $(".first-slider").slick("slickPlay");
  $(".catalog-slider").slick("slickPlay");
  $(".about-slider").slick("slickPlay");
  $(".reviews-slider").slick("slickPlay");
};
