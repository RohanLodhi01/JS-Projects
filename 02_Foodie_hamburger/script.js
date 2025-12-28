const menu = document.querySelector(".hamburger-menu-container");
const headerContent = document.querySelector(".header-content");

const closeIcon = document.querySelector(".close-icon");
const gotoTop = document.querySelector(".go-to-top");
const mainContent = document.querySelector(".main-content");

gotoTop.addEventListener("click", () => {
  mainContent.scrollTo(0, 0);
});
menu.addEventListener("click", () => {
  headerContent.classList.add("menu-open");
});

closeIcon.addEventListener("click", () => {
  headerContent.classList.remove("menu-open");
});
