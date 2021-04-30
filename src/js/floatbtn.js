import { overlay, showModal, closeModal } from "./modal";


const floatBlockTitle = document.querySelector(".float-block-title");
const btnClose = document.querySelector(".float-block-close");
const floatBlockCard = document.getElementById("floatBlockCard");
const imgPhone = document.querySelector(".float-block-title-inner-img");

floatBlockTitle.addEventListener("click", (e) => {
  
  //если планшет
  if (window.orientation === 90 || window.innerWidth > window.innerHeight) {
    if (!floatBlockCard.classList.contains("show")) {
      imgPhone.classList.add("hide");
    }
  }

  if (floatBlockCard.classList.contains("show")) {
    //закрыто
    btnClose.classList.add("hide");
    closeModal();

  } else {
    //открыто
   
    showModal();
    btnClose.classList.remove("hide");      
    
  }
});

//клик по кнопке Закрыть

btnClose.addEventListener("click", () => {
  floatBlockCard.classList.remove("show");
  btnClose.classList.add("hide");
  closeModal();


  //если планшет

  if (window.orientation === 90 || window.innerWidth > window.innerHeight) {
    imgPhone.classList.remove("hide");
  } 
});

overlay.addEventListener("click", () => {
  floatBlockCard.classList.remove("show");
  btnClose.classList.add("hide");
  closeModal();

  if (window.orientation === 90 || window.innerWidth > window.innerHeight) {
    imgPhone.classList.remove("hide");
  } 
});
