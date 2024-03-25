'use script';

const input = parseInt(prompt("How many movies do you want to rate?"));
const movies = [];

function details() {

}

for (let i = 0; i < input; i++) {
    const details = prompt('Enter the title: ');
    const rating = parseFloat(prompt('Enter the rating on scale 1 to 5: '));
    const movie = {
        details,
        rating,
    };
    movies.push(movie);
}

movies.sort((a, b) => b.rating - a.rating);

const movieList = document.getElementById("movieList");
for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    movieList.innerHTML += `<p>${movie.details} - Rating: ${movie.rating}</p>`;
}




