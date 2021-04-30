const links = document.querySelectorAll(".link-davita");

let address = "https://davitamebel.ru";
export let saveLinks = [];


links.forEach((link) => {
  link.addEventListener("mousedown", () => {
  
    if (link.hasAttribute("data-link"))
      address = link.getAttribute("data-link"); 

    if (localStorage.link) {
     
      let data = JSON.parse(localStorage.getItem("link"));
      data.push(address);
     
      localStorage.setItem("link", JSON.stringify(data));
    } else {
      saveLinks.push(address);
     
      localStorage.setItem("link", JSON.stringify(saveLinks));
    }

    /*       setTimeout(()=> {
        localStorage.removeItem('link')
      }, 10000) */
  });
});
