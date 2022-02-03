$(function () {
  $("#reviews-slider").slick({
    mobileFirst: true,
    infinity: true,
    autoplay: false,
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
    focusOnSelect: true,
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


$("#reviews-slider").on(
  "beforeChange",
  function (event, slick, currentSlide, nextSlide) {
    //остановить видео при перелистывании
    $(".slick-current iframe").attr(
      "src",
      $(".slick-current iframe").attr("src")
    );
  }
);


