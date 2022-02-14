// ==================== Nav
const toggle_open = document.querySelector(".nav-toggle-open");
const toggle_close = document.querySelector(".nav-toggle-close");
const nav_list = document.getElementById("nav-list");

// show
toggle_open.addEventListener("click", () => {
  nav_list.style.display = "block";
});
// move
toggle_close.addEventListener("click", () => {
  nav_list.style.display = "none";
});
