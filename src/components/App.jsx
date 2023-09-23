import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import Movies from "../pages/Movies";
import Cast from "../pages/Cast";
import Reviews from "../pages/Reviews";
import NotFound from "../pages/NotFound";
import { Container, StyledLink  } from "./Layout";
import { GlobalStyle} from "./GlobalStyle";


export const App = () => {
  return (
    <Container>
      <nav>
        <StyledLink to="/" end>Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="movies/:movieId/cast" element={<Cast />} />
            <Route path="movies/:movieId/reviews" element={<Reviews/> } />   
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <GlobalStyle/>
    </Container>
  );
};


/*API key=262609caf2a64b4b637675370ec91f76

Токен доступу для читання API - eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjI2MDljYWYyYTY0YjRiNjM3Njc1MzcwZWM5MWY3NiIsInN1YiI6IjY1MDg5MWJlMzczYWMyMDBmZjA1ZmQ0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BVAxCHBNXR4qKxdw9juTzLiuwt4zS2kUHqWgFfmhnsk

/trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
/search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
/movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
/movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
/movies/get-movie-reviews запит оглядів для сторінки кінофільму.
*/