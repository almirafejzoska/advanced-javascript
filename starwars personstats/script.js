// StarWars Person Stats

// Create a button When the button is clicked, call the StarWars api for the first person.
// Print the person name in an h1 tag.
// Print the person stats in a table:

//     Height
//     Weight
//     Eye color
//     Hair color

// URL: https://swapi.dev/api/people/1 

function getStarWarsPerson() {
    fetch('https://swapi.dev/api/people/1')
        .then(response => response.json())
        .then(displayPersonStats)
        .catch(error => console.log(error));
}

let starWarsPerson = document.getElementById("getInfo");
starWarsPerson.addEventListener("click", getStarWarsPerson);

let nameInfo = document.getElementById('nameInfo');
let stats = document.getElementById('statsBody');

function displayPersonStats(personData) {
    nameInfo.textContent = personData.name;
    stats.innerHTML = '';

    const statNames = ['height', 'mass', 'eye_color', 'hair_color'];
    statNames.forEach(statName => {
        let statLabel = statName.replace('_', ' ');
        let row = `<tr><td>${statLabel}</td><td>${personData[statName]}</td></tr>`;
        stats.innerHTML += row;
    });
}
