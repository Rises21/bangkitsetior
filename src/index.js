//header @
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbarFixed");
  } else {
    header.classList.remove("navbarFixed");
  }
};

const hamburger = document.querySelector("#hamburger");
const navbarMenu = document.querySelector("#navbarMenu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburgerToggler");
  navbarMenu.classList.toggle("navMenu");
});

//header &
