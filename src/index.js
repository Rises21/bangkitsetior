const hamburger = document.querySelector("#hamburger");
const navbarMenu = document.querySelector("#navbarMenu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("navMenu");
  navbarMenu.classList.toggle("navMenu");
});
