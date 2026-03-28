// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static values (Brazil example)
const temp = 28;
const wind = 10;

// Function
function calculateWindChill(t, v) {
  return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
}

let windChill = "N/A";

// Conditions (não vai calcular porque temp > 10)
if (temp <= 10 && wind > 4.8) {
  windChill = calculateWindChill(temp, wind) + " °C";
}

document.getElementById("windChill").textContent = windChill;