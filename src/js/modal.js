export const overlay = document.querySelector(".overlay");
import { stopSliders, playSliders } from "./sliderMove";

export const closeModal = () => {
  
  document.body.classList.remove("modal-open");
  overlay.classList.add("hide");
  playSliders();
};

export const showModal = () => {
  
  document.body.classList.add("modal-open");
  overlay.classList.remove("hide");
  stopSliders();
};


