import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useEffect, useState, Suspense} from 'react';
import { fetchMovieDetails } from "api";
import {Container, WrapperPhoto, WrapperText, StyledLink, WrapperAddInfo} from "../components/MovieDetails.styled"


export default function MovieDetails() {
    const location = useLocation();
    const [movieDetails, setMovieDetails] = useState({});
    const imgPrefix = "https://image.tmdb.org/t/p/w500"
    const { movieId } = useParams();
 
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
        

    function getYear(date) {
        if (date !== undefined) {
            return date.slice(0, 4);
        } 
        return '';
    };


    function getGenres(genres) {
        if (genres !== undefined) {
            return genres.map(genre => genre.name).join(' ');
        }
        return '';
    };


    function getUserScore(vote_average) {
        if (vote_average !== undefined) {
            return ((vote_average) * 10).toFixed(0);
        }
        return "";
    }

    return (
        <section>
            <Container>
                <WrapperPhoto>
                    <Link to={location?.state?.from ?? '/'}>Go back</Link>
                    <img src={imgPrefix + movieDetails.poster_path} alt={movieDetails.title} />
                </WrapperPhoto>
                <WrapperText>
                    <h2>{movieDetails.title} ({getYear(movieDetails.release_date)})</h2>
                    <p>User Score: { getUserScore(movieDetails.vote_average)} %</p>
                    <h2>Overview</h2>
                    <p>{movieDetails.overview}</p>
                    <h2>Genres</h2>
                    <p>{getGenres(movieDetails.genres)}</p>
               </WrapperText>

            </Container>
            <WrapperAddInfo>
                <h2>Additional information</h2>
            <nav>
                <li>
                    <StyledLink to="cast">Cast</StyledLink>
                </li>
                <li>
                    <StyledLink to="reviews">Reviews</StyledLink>
                </li>
            </nav>
            </WrapperAddInfo>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>
            
        </section>
    )
}

