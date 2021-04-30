$(function () {
  $(".reviews-slider").slick({
    mobileFirst: true,
    infinity: true,
    autoplay: true,
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 4000,
    lazyLoad: "ondemand",
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    swipe: true,
    waitForAnimate: false,
    adaptiveHeight: true,
    appendArrows: $(".reviews-slider-wrapper"),
    responsive: [
      {
        breakpoint: 576,

        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,

        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });

});
