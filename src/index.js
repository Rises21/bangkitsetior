//header @
const bodyWidth = document.getElementsByTagName("body");
const hamburger = document.querySelector("#hamburger");
const navbarMenu = document.querySelector("#navbarMenu");
const linkAnchor = document.getElementsByClassName("anchorLink");

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbarFixed");
  } else {
    header.classList.remove("navbarFixed");
  }
  for (const i of linkAnchor) {
    if (window.scrollY > 480) {
      i.classList.add("navLinkColor");
    } else {
      i.classList.remove("navLinkColor");
    }
  }
};

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburgerToggler");
  navbarMenu.classList.toggle("navMenu");
});

if (bodyWidth[0].offsetWidth > 768) {
  hamburger.classList.remove("hamburgerToggler");
  navbarMenu.classList.remove("navMenu");
}

for (const i of linkAnchor) {
  i.addEventListener("click", function () {
    if (bodyWidth[0].offsetWidth < 768) {
      hamburger.classList.toggle("hamburgerToggler");
      navbarMenu.classList.toggle("navMenu");
    }
  });
}

//header &
