// Set dates
const currentYear = document.querySelector('#year');
const lastModified = document.querySelector('#lastModified');

currentYear.innerText = new Date().getFullYear();
lastModified.innerText = `Last Modification: ${document.lastModified}`;

// Calculate wind chill
const temp = document.querySelector('#temp');
const windSpeed = document.querySelector('#windSpeed');
const windChill = document.querySelector('#windChill');

const temperature = 9;
const speed = 6;
const unit = 'C';

temp.innerHTML = `${temperature} &deg;C`;
windSpeed.innerHTML = `${speed} km/h`;

function calculateWindChill(temp, windSpeed, unit) {
    return unit === 'C'
        ? 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
        : 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
}

if ((unit === 'C' && temperature <= 10 && speed > 4.8) ||
    (unit === 'F' && temperature <= 50 && speed > 3)) {
    console.log(calculateWindChill(temperature, speed, unit))
    windChill.innerHTML = `${calculateWindChill(temperature, speed, unit).toFixed(2)}&deg;C`;
} else {
    windChill.innerText = 'N/A';
}