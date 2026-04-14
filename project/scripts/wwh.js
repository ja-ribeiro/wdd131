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