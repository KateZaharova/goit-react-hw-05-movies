import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState,  } from 'react';
import { fetchMovieDetails } from "api";


export default function MovieDetails() {

    const [movieDetails, setMovieDetails] = useState({});
    const imgPrefix = "https://image.tmdb.org/t/p/w500"
    const { movieId } = useParams();
    console.log(movieId)

    useEffect(() => {
    async function getMovieDetails() {
        try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovieDetails(movieDetails);
        } catch (error) {
            console.log(error)
      } 
    }
    getMovieDetails();
    }, []);
        
    return (
        <div>
            <button>Go back</button>
            <img src={imgPrefix+movieDetails.poster_path} alt={movieDetails.title} />


            <p>Additional information</p>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}

//export const fetchMovieDetails = async (movieId) => {
