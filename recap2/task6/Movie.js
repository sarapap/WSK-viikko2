'use script';

function details() {
    const details = prompt('Enter the title: ');
    const rating = parseFloat(prompt('Enter the rating on scale 1 to 5: '));
    if (rating == 0 || rating < 1 || rating > 5) {
        alert('Please enter a number between 1 and 5.');
        return null;
    } return { details, rating };
}

const input = parseInt(prompt("How many movies do you want to rate?"));
const movies = [];

for (let i = 0; i < input; i++) {
    const movie = details();
    movies.push(movie)
} 

movies.sort((a,b) => b.rating - a.rating);

const movieList = document.getElementById("movieList");
for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    movieList.innerHTML += `<p>${movie.details} - Rating: ${movie.rating}</p>`;
}




