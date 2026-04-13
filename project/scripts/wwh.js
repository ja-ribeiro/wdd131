const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// ARRAY + OBJECT
const characters = [
  { name: "Harry Potter", house: "Gryffindor" },
  { name: "Hermione Granger", house: "Gryffindor" },
  { name: "Draco Malfoy", house: "Slytherin" }
];

// ARRAY METHOD (AGORA TEM)
const characterNames = characters.map(c => c.name);
console.log(`Characters: ${characterNames.join(", ")}`);

// SAVE FAVORITE
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

// FORM
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;

    const message = `Thank you, ${name}. Your message has been sent successfully!`;

    document.getElementById("formResult").textContent = message;
  });
}