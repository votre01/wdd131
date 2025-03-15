// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation');
const hambuttom = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambuttom.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambuttom.classList.toggle('show');
});

// const link = 'https://assets.churchofjesuschrist.org/59/a8/59a867c4052795ee6ac95c839229b3ec41b0c656/mexico_city_temple_exterior.jpeg';
const link = '../images/mexico-city-temple.jpeg';

let gallery = document.querySelector('#gallery');
let temples = document.querySelector('#temples');

function getTemple(link) {

    let templeImg = document.createElement('figure');
    templeImg.innerHTML = `
        <img src="${link}" alt=""/>
        <figcaption>Mexico City Temple</figcaption>
    `;
    return templeImg;
}

// for (i = 0; i < 16; i++) {
//     temples.append(getTemple(link));
// }

// Set dates
const currentYear = document.querySelector('#year');
const lastModified = document.querySelector('#lastModified');

currentYear.innerText = new Date().getFullYear();
lastModified.innerText = `Last Modification: ${document.lastModified}`;

