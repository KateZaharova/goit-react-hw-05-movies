import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import Movies from "../pages/Movies";
import Cast from "../pages/Cast";
import Reviews from "../pages/Reviews";
import {Layout} from "./Layout";



export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/movies/:movieId" element={<MovieDetails/>}>
                <Route path="cast" element={<Cast/>} />
                <Route path="reviews" element={<Reviews/>} />   
          </Route>
        </Route>
      </Routes>
  );
};


