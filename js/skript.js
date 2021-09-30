"use strict";

const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('сколько фильмов вы уже посмотрели?', ''),
    b = prompt('на сколько оцените эго?'),
    c = prompt('сколько фильмов вы уже посмотрели?', ''),
    d = prompt('на сколько оцените эго?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);