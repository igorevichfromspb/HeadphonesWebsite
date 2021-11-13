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

/*==================== SHOW SCROLL UP ====================*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
