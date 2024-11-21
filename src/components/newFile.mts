document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navbarList = document.querySelector(".navbar-list");
  const closeIcon = document.getElementById("close-icon");

  // Abrir menú
  hamburger.addEventListener("click", () => {
    navbarList.classList.toggle("active");
  });

  // Cerrar menú
  closeIcon.addEventListener("click", (e) => {
    e.preventDefault();
    navbarList.classList.remove("active");
  });
});
