// MENU
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuBtn.textContent = menuBtn.textContent === "☰" ? "X" : "☰";
});

// FOOTER
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ARRAY
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "USA",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "USA",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington DC",
    location: "USA",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Peru",
    location: "Peru",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City",
    location: "Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "São Paulo",
    location: "Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
  },
  {
    templeName: "Campinas",
    location: "Brazil",
    dedicated: "2002, May, 17",
    area: 48500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-6012-main.jpg"
  },
  {
    templeName: "Fortaleza",
    location: "Brazil",
    dedicated: "2019, June, 2",
    area: 36000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-5569-main.jpg"
  },
];

// DISPLAY
const gallery = document.querySelector(".gallery");

function displayTemples(list) {
  gallery.innerHTML = "";

  list.forEach(t => {
    const card = document.createElement("section");

    card.innerHTML = `
      <h3>${t.templeName}</h3>
      <p>${t.location}</p>
      <p>${t.dedicated}</p>
      <p>${t.area} sq ft</p>
      <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
    `;

    gallery.appendChild(card);
  });
}

// FILTER
function filter(type) {
  let result = temples;

  if (type === "old") result = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
  if (type === "new") result = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
  if (type === "large") result = temples.filter(t => t.area > 90000);
  if (type === "small") result = temples.filter(t => t.area < 10000);

  document.getElementById("title").textContent = type.toUpperCase();
  displayTemples(result);
}

// NAV
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const text = link.textContent.toLowerCase();

    if (text === "home") {
      document.getElementById("title").textContent = "Home";
      displayTemples(temples);
    } else {
      filter(text);
    }
  });
});

// LOAD
displayTemples(temples);