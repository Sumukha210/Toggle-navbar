const nav = document.querySelector("nav");

let scroll_position = 30;
let scroll_direction;

nav.classList.add("active__menu");

window.addEventListener("scroll", () => {
  scroll_direction =
    document.body.getBoundingClientRect().top > scroll_position ? "up" : "down";
  scroll_position = document.body.getBoundingClientRect().top;

  if (scroll_direction === "up") {
    nav.classList.add("active__menu");
  } else {
    nav.classList.remove("active__menu");
  }
});
