const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
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
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
];

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
let templeCards = document.querySelector('#templeCards');

function getTemple(temple) {
    let card = document.createElement('div');
    card.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Size: ${temple.area}</p>

        <img src="${temple.imageUrl}" alt="${temple.templeName} temple">
    `
    return card;
}

function displayTemples(temples) {
    templeCards.innerText = "";
    temples.forEach(temple => {
        templeCards.append(getTemple(temple));
    });
}

displayTemples(temples);

document.querySelector("#oldTemples").addEventListener('click', () => {
    const oldTemples = temples.filter(getOldTemples);
    displayTemples(oldTemples);
});

document.querySelector("#newTemples").addEventListener('click', () => {
    const newTemples = temples.filter(getNewTemples);
    displayTemples(newTemples);
});

document.querySelector("#largeTemples").addEventListener('click', () => {
    const largeTemples = temples.filter(getLargeTemples);
    displayTemples(largeTemples);
});

document.querySelector("#smallTemples").addEventListener('click', () => {
    const smallTemples = temples.filter(getSmallTemples);
    displayTemples(smallTemples);
});

function getOldTemples(temple) {
    const year = temple.dedicated.split(", ")[0];
    if (year < 1900) {
        return temple;
    }
}

function getNewTemples(temple) {
    const year = temple.dedicated.split(", ")[0];
    if (year > 2000) {
        return temple;
    }
}

function getLargeTemples(temple) {
    if (temple.area > 90000) {
        return temple;
    }
}

function getSmallTemples(temple) {
    if (temple.area < 10000) {
        return temple;
    }
}

// Set dates
const currentYear = document.querySelector('#year');
const lastModified = document.querySelector('#lastModified');

currentYear.innerText = new Date().getFullYear();
lastModified.innerText = `Last Modification: ${document.lastModified}`;