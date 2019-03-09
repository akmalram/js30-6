'use strict';
const log = console.log;
const link = `https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json`;

let cities = [];

fetch(link)
    .then(res => res.json())
    .then(data => cities = data);

function findMatch(word, array) {
    const regex = new RegExp(word, 'gi');
    return array.filter((place) => {
        return place.city.match(regex) || place.state.match(regex);
    });
}
function dispMatch(word) {
    let matchedArr = findMatch(word, cities);

    let html = matchedArr.map(place => {
        return `<div class="suggestion">
                <li class="city">${place.city}</li>
                <li class="state">${place.state}</li>
                <li class="population">${place.population}</li>
            </div>`;
    }).join(' ');
    suggestions.innerHTML = html;
}

setTimeout( () => {
    search.addEventListener('input', (e) => {
        dispMatch(e.target.value);
    });
},100)