// Get current year
const year=new Date().getFullYear();
document.getElementById("currentyear").textContent=year;

// Get last modified date
const lastModified=document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;

// Calculate wind chill
const temperature = 27;
const windSpeed = 10;

function calculateWindChill(temp, wind) {
  return (
    13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)
  );

}

let windChill = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
  windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
}

document.getElementById("windChill").textContent = windChill;

