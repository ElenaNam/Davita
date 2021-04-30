$(function () {
  $(".about-slider").slick({
    mobileFirst: true,
    infinity: true,
    autoplay: true,
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 2700,
    lazyLoad: "ondemand",
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    swipe: true,
    waitForAnimate: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 576,
        settings: "unslick",
      },
    ],
  });  
});
