// Movies renting App

//     Create a movie renting app
//     There should be an array of movie names
//     There should be an input and a search button
//     When the person enters a name of a movie it should search the array
//     If the name exists it should show an H1 element that says: "The movie can be rented" in green text
//     If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
//     The input should not be case sensitive ( it should find the movie regardless of capital or small letters )

const movieArray = ['The Godfather',
    'Home Alone',
    'The Dark Knight',
    'Vertigo',
    'Star Wars',
    `Pulp Fiction`,
    `Spirited Away`];

function searchMovie() {
    const movieInput = document.getElementById('movieInput').value.trim().toLowerCase();
    const resultDiv = document.getElementById('result');

    if (!movieInput) {
        resultDiv.textContent = 'Please enter a movie';
        resultDiv.style.color = 'orange';
        return;
    }

    const foundMovie = movieArray.find(movie => movie.toLowerCase() === movieInput);

    if (foundMovie) {
        resultDiv.textContent = 'The movie can be rented';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = 'The movie can\'t be rented';
        resultDiv.style.color = 'red';
    }
}

let btn = document.getElementById("searchBtn");
btn.addEventListener("click", searchMovie);
