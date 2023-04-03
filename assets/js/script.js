let imageToChange = document.querySelector(".home-logo");
var header = document.querySelector("#header");
AOS.init();

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 150) {
    header.style.backgroundColor = "#4831D4";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

window.addEventListener("load", () => {
  loading.style.display = "none";
});
