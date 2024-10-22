const bodyTitle = document.querySelector(".body-title")
const bodySide = document.querySelector(".body-side")

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if(scroll > 0) {
    bodyTitle.classList.add("active")
  } else {
    bodyTitle.classList.remove("active")
  }
});