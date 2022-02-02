const header = document.querySelector(".header");
const input = document.querySelector(".input");

input.onkeydown = function changeHeader () {
  header.textContent = input.value;
};