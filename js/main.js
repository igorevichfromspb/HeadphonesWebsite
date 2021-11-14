/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector(".nav__menu");
const navToggle = document.querySelector(".nav__toggle");
const navClose = document.querySelector(".nav__close");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show__menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show__menu");
});
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.querySelector(".nav__menu");
  navMenu.classList.remove("show__menu");
}

navLink.forEach((element) => element.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (scrollY >= 50) {
    header.classList.add("scroll__header");
  } else {
    header.classList.remove("scroll__header");
  }
}
window.addEventListener("scroll", scrollHeader);
/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.querySelector(".scrollup");
  if (scrollY >= 200) {
    scrollUp.classList.add("show__scroll");
  } else {
    scrollUp.classList.remove("show__scroll");
  }
}
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active__link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active__link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
