import { Outlet } from "react-router-dom";
import { useEffect, useState, Suspense } from 'react';
import { fetchPopularMoviesToday } from "api";
import MoviesList from "../components/MoviesList/MoviesList"


export default function Home() {
     const [moviesItems, setMoviesItems] = useState([]);

    useEffect(() => {
    async function getMovies() {
        try {
        const popularMovies = await fetchPopularMoviesToday();
        setMoviesItems(popularMovies.results);
        } catch (error) {
            console.log(error)
      } 
    }

    getMovies();
  }, []);

    return (
        <div>
            <main>
            <h1>Trending today</h1>
                <MoviesList movies={moviesItems}></MoviesList>
            </main>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>
        
        </div >
            
        
    )
}


