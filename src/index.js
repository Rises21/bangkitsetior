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
const linkAnchor = document.getElementsByClassName("anchorLink");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburgerToggler");
  navbarMenu.classList.toggle("navMenu");
});
//console.log(window.screen.width, "<<<<<");
if (window.screen.width > 768) {
  hamburger.classList.remove("hamburgerToggler");
  navbarMenu.classList.remove("navMenu");
}

for (const i of linkAnchor) {
  i.addEventListener("click", function () {
    if (window.screen.width < 768) {
      hamburger.classList.toggle("hamburgerToggler");
      navbarMenu.classList.toggle("navMenu");
    }
  });
}

//header &
