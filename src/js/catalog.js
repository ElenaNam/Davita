//import jQuery from "jquery";
import * as data from "./data/dataForCatalog";
import {saveLinks} from './linksForRedirect';

const catalogBtn = document.querySelector(".category-btn");

const slidesCopy = data.default.concat();

let catalogBtnActive = "kitchen";

catalogBtn.innerHTML === "Кухни"
  ? catalogBtn.classList.add("category-btn-active")
  : false;

const makeBtnActive = (btnInner) => {
  if (btnInner === "Прихожие") catalogBtnActive = "hallways";
  if (btnInner === "Детские") catalogBtnActive = "childrenrooms";
  if (btnInner === "Кухни") catalogBtnActive = "kitchen";
  if (btnInner === "Офис") catalogBtnActive = "office";
  if (btnInner === "Гостиные") catalogBtnActive = "livingrooms";
  if (btnInner === "Спальни") catalogBtnActive = "bedrooms";

  return catalogBtnActive;
};

const filterSlider = (className, filter) => {
  $(className).slick("slickUnfilter");
  $(className).slick("slickFilter", filter);
};

$(".category-btn").on("click", function () {
  $(".category-btn-active").removeClass("category-btn-active");
  $(this).addClass("category-btn-active");

  let btnActive = makeBtnActive(this.innerHTML);
  let filterClass = `.${btnActive}`;

  filterSlider(".catalog-slider", filterClass);
});

function initSlider() {
  for (let i = 0; i < slidesCopy.length; i++) {
    let categoryName = slidesCopy[i].src.split("/")[3].split("-")[0];

    $(
      '<div class="' +
        categoryName +
        ' card"><div><img src="' +
        slidesCopy[i].src +
        '" alt="' +
        slidesCopy[i].category +
        " " +
        slidesCopy[i].title +
        '"></div><div class="card-body"><a href="redirect.html" data-link="' +
        slidesCopy[i].link +
        '" target="_blank" rel="nofollow" class="link-davita"><h5 class="card-title"><span>' +
        slidesCopy[i].category +
        " " +
        "</span><span>" +
        slidesCopy[i].title +
        '</span></h5></a><p class="card-text">' +
        slidesCopy[i].description +
        "</p></div></div>"
    ).appendTo(".catalog-slider");
  }

  const saveLink = () => {
    let ch = $(".catalog-slider").children();

    //let n = Math.floor(Math.random() * (100 - 1)) + 1;

    for (let item of ch) {
      let el = item.children[1].children[0];
      el.addEventListener("mousedown", () => {
        let dataLink = el.getAttribute("data-link");
/*         saveLinks.push(dataLink);
        console.log(saveLinks);
        localStorage.setItem("link", JSON.stringify(saveLinks)); */

        if (localStorage.link) {
          let data = JSON.parse(localStorage.getItem("link"));
          data.push(dataLink);
          localStorage.setItem("link", JSON.stringify(data));
        } else {
          saveLinks.push(dataLink);
          localStorage.setItem("link", JSON.stringify(saveLinks));
        }
      });
    }
  };
  saveLink();

  $(".catalog-slider").slick({
    infinity: true,
    autoplay: true,
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    speed: 1000,
    autoplaySpeed: 2500,
    lazyLoad: "ondemand",
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    swipe: true,
    waitForAnimate: true,
    appendArrows: $(".catalog-slider-wrapper"),
    responsive: [
      {
        breakpoint: 900,

        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,

        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });
  $(".catalog-slider").slick("slickFilter", `.${catalogBtnActive}`);
}

initSlider();
