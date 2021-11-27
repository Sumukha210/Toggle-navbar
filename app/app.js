// Grab nav element from the dom
const nav = document.querySelector("nav");

// Creating variales
let scroll_position = 30;
let scroll_direction;

// Show Navbar when dom loads
nav.classList.add("active__menu");

// Create an scroll event listener
window.addEventListener("scroll", () => {
  scroll_direction =
    document.body.getBoundingClientRect().top > scroll_position ? "up" : "down";
  scroll_position = document.body.getBoundingClientRect().top;

  if (scroll_direction === "up") {
    // If you are scrolling up, then add active menu class
    nav.classList.add("active__menu");
  } else {
    // If you Scrolling down, remove the active menu class
    nav.classList.remove("active__menu");
  }
});
