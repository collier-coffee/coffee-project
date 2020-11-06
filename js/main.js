"use strict"

function renderCoffee(coffee) {
    let html = '<p class="coffee">';
    // html += '<br>' + coffee.id + '<br>';
    html += '<br>' + coffee.name + ' ';
    html += coffee.roast + '<br>';
    // html += '</tr>';

    return html;
}
// prints out coffees

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
// turns each coffee into a string and displays

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    covfefe.innerHTML = renderCoffees(filteredCoffees);
}
// form for the light, medium, dark

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
// array of coffees

let covfefe = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');


covfefe.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

document.getElementById('coffeeName').style.width="100%";
document.getElementById('coffeeName').style.fontSize="14pt";
document.getElementById('roast-selection').style.width="100%";
document.getElementById('roast-selection').style.fontSize="14pt";
document.getElementById('submit').style.width="100%";
document.getElementById('submit').style.fontSize="14pt";
document.getElementById('submit').style.backgroundColor="#00ccdd";


