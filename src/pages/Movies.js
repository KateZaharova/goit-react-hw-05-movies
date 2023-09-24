import { Searchbar, SearchForm, SearchFormBtn, SearchFormInput } from "../components/Movies.styled";
import { useSearchParams} from "react-router-dom";
import { fetchSearchMovie } from "api";
import { useEffect, useState } from 'react';
import MoviesList from "../components/MoviesList/MoviesList"

export default function Movies({ onSubmit }) {

const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get("query") ?? "";
const [moviesItems, setMoviesItems] = useState([]);
    
    console.log(query)

    useEffect(() => {
    async function getMovies() {
        try {
        const popularMovies = await fetchSearchMovie(query);
        setMoviesItems(popularMovies.results);
        } catch (error) {
            console.log(error)
      } 
    }

    getMovies();
  }, [query]);

    
const handleSubmit = (evt) => {
    evt.preventDefault();
    const query = evt.target.elements.request.value;
    const nextParams = query !== "" ? { query} : {};
    setSearchParams(nextParams);
    ;
  }

    
    
    return (
        <>
            {(moviesItems.length === 0) && 
        <Searchbar className="searchbar">
  <SearchForm className="form" onSubmit={(evt) => {handleSubmit(evt)}}>
          <SearchFormBtn type="submit" className="button" ></SearchFormBtn>

    <SearchFormInput
      className="input"
      type="text"
      name="request"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
          />
        </SearchForm>
            </Searchbar>
          }  
       { (moviesItems.length > 0)  &&  <MoviesList movies={moviesItems}></MoviesList>              
            }
            </>
            )
            
}