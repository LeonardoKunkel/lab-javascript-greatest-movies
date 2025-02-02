const movies = require("./data");
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(data) {
  const directors = data.map(person => person.director);
  return directors;
}

getAllDirectors(movies)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const spielberg = arr.filter((mov) => {
    if(mov.director === 'Steven Spielberg' && mov.genre.includes('Drama')) return mov;
  });
  return spielberg.length;
}

howManyMovies(movies)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(data) {
  if(data.length === 0) return 0;
  const scores = data.map((num) => {
    if(!num.score) {
      num.score = 0
    }
    return num.score
  });
  const averageScore = scores.reduce((acc, val) => {
    return acc + val;
  })
  let average = (averageScore / scores.length);
  return Number(average.toFixed(2));
}

scoresAverage(movies)

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(dramaArr) {
  let drama = dramaArr.filter((mov) => {
    return mov.genre.includes('Drama');
  })
  return scoresAverage(drama)
}

dramaMoviesScore(movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(yearArr) {
  const year = yearArr.map(mov => mov);
  year.sort(function(a, b) {
    if(a.year > b.year) return 1;
    if(a.year < b.year) return -1;
    if(a.title > b.title) return 1;
    if(a.title < b.title) return -1;
  });
  return year;
}

orderByYear(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(titleArr) {
  let title = titleArr.map(mov => mov.title)
  title.sort()
  return title.slice(0, 20);
}

orderAlphabetically(movies)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
