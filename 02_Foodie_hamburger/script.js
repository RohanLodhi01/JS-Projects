const hamburgerMenu = document.querySelector(".hamburger-menu-container");
const headerContent = document.querySelector(".header-content");

const closeIcon = document.querySelector(".close-icon");
const gotoTop = document.querySelector(".go-to-top");
const mainContent = document.querySelector(".main-content");

const nav = document.querySelector("nav");
gotoTop.addEventListener("click", () => {
  mainContent.scrollTo(0, 0);
});
nav.addEventListener("click", (e) => {
  e.stopPropagation();
});
hamburgerMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  headerContent.classList.add("menu-open");
});

closeIcon.addEventListener("click", (e) => {
  headerContent.classList.remove("menu-open");
});

window.addEventListener("click", () => {
  headerContent.classList.remove("menu-open");
});
