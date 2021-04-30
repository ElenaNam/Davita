import * as data from "./data/dataForFirst";
const slides = data.default;


  for (let i = 0; i < slides.length; i++) {
    $(
      '<div><img src="' +
        slides[i] +
        '" alt="promo-img"></div>'
    ).appendTo(".first-slider");
  }  

$(".first-slider").slick({
  infinity: true,
  autoplay: true,
  arrows: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  autoplaySpeed: 2700,
  //lazyLoad: "ondemand",
  pauseOnHover: true,
  pauseOnFocus: true,
  pauseOnDotsHover: true,
  swipe: true,
  waitForAnimate: false,
  appendArrows: $(".first-slider-wrapper"),
});
