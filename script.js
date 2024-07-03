const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

open.addEventListener("click", () => container.classList.add("show-nav"));
close.addEventListener("click", () => container.classList.remove("show-nav"));
btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
