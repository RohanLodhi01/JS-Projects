const menu = document.querySelector(".hamburger-menu-container");
const headerContent = document.querySelector(".header-content");

const closeIcon = document.querySelector(".close-icon");

menu.addEventListener("click", () => {
  headerContent.classList.add("menu-open");
});

closeIcon.addEventListener("click", () => {
  headerContent.classList.remove("menu-open");
});
