// DOM Selections
const menuBtn = document.querySelector(".nav-btn");
const nav = document.querySelector(".nav-links");
// Event Handlers

// open menu
const toggleNav = () => {
  if (nav.classList.contains("nav-show")) {
    nav.classList.remove("nav-show");
    menuBtn.textContent = "MENU";
  } else {
    nav.classList.add("nav-show");
    menuBtn.textContent = "CLOSE";
  }
};

// Event Listeners
menuBtn.addEventListener("click", toggleNav);
nav.addEventListener("click", toggleNav);
