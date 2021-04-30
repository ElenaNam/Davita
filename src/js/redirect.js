import * as linksForRedirect from "./linksForRedirect";

const davita = document.getElementById("davita");
const time = document.getElementById("time");

// обратный отсчет 10 -> 1
let value = 9;

const updateTime = () => {
  time.innerHTML = `0${value}`;
  if (value === 1) return;
  value--;
};

const clickOnLink = () => {
  let data = JSON.parse(localStorage.getItem("link"));
  location.replace(data[0]);
};

const clearAddress = () => {
  let data = JSON.parse(localStorage.getItem("link"));
  data.shift();
  localStorage.setItem("link", JSON.stringify(data));
};

let interval = setInterval(updateTime, 1000);
setTimeout(clearInterval, 10000, interval);

setTimeout(clickOnLink, 9500);

window.addEventListener("unload", clearAddress);

davita.addEventListener("click", (e) => {
  e.preventDefault();
  clickOnLink();
  //location.replace(JSON.parse(localStorage.getItem("link")));
  window.addEventListener("unload", clearAddress);
});
