const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

function saveFavorite() {
  const select = document.getElementById("characterSelect");
  const result = document.getElementById("result");

  const value = select.value;

  if (value === "") {
    result.textContent = `Please select a character.`;
    return;
  }

  localStorage.setItem("favoriteCharacter", value);

  result.textContent = `Your favorite character is ${value}.`;
}

/* =========================
   IMAGE HOVER EFFECT (JS)
========================= */

// seleciona TODAS as imagens do site
const images = document.querySelectorAll("img");

images.forEach(img => {

  img.addEventListener("mouseenter", () => {
    img.style.transform = "translateY(-10px)";
    img.style.transition = "0.3s";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "translateY(0)";
  });

});