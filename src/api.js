import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "262609caf2a64b4b637675370ec91f76";


export const fetchPopularMoviesToday = async () => {
    const resp = await axios.get(`/trending/movie/day?language=en-US&api_key=${API_KEY}`);
    return resp.data;
};


export const fetchMovieDetails = async (movieId) => {
    const resp = await axios.get(`/movie/${movieId}?language=en-US&api_key=${API_KEY}`);
    return resp.data;
};


export const fetchCast = async (movieId) => {
    const resp = await axios.get(`/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`);
    return resp.data;
};


export const fetchReview = async (movieId) => {
    const resp = await axios.get(`/movie/${movieId}/reviews?language=en-US&api_key=${API_KEY}`);
    return resp.data;
};


/*API key=262609caf2a64b4b637675370ec91f76
Токен доступу для читання API - eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjI2MDljYWYyYTY0YjRiNjM3Njc1MzcwZWM5MWY3NiIsInN1YiI6IjY1MDg5MWJlMzczYWMyMDBmZjA1ZmQ0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BVAxCHBNXR4qKxdw9juTzLiuwt4zS2kUHqWgFfmhnsk

+/trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
/search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
+/movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
+/movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
/movies/get-movie-reviews запит оглядів для сторінки кінофільму.
*/