// Exercise 1: Get the array of all directors.

function getAllDirectors(movies) {
  
  return movies.map(movies => movies.director);
}

// Exercise 2: Get the films of a certain director

function getMoviesFromDirector(movies, director) {

  return movies.filter(movies => movies.director == director);
}

// Exercise 3: Calculate the average of the films of a given director.

function moviesAverageOfDirector(movies, director) {

  let moviesOfDirector = movies.filter( movie => movie.director === director );
  let moviestotalScore = moviesOfDirector.reduce((total, movie) => total + movie.score, 0);
  let moviesAverageScore = moviestotalScore / moviesOfDirector.length;
  
  return parseFloat(moviesAverageScore.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 

function orderAlphabetically(movies) {
  
  let moviesTitles = movies.map(movie => movie.title);
  let orderTitles = moviesTitles.sort();
  let firstTwentyTitles = orderTitles.slice(0, 20);

  return firstTwentyTitles;
}

// Exercise 5: Order by year, ascending

function orderByYear(movies) {

  let moviesArrayCopy = [...movies];
  let moviesByYear = moviesArrayCopy.sort((first, second) => {
    if (first.year !== second.year) {
      return first.year - second.year; // sorts movie by year .
    }

  return first.title.localeCompare(second.title); // goes if both years are equal, then sorts movies alphabetically.
  });

  return moviesByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
