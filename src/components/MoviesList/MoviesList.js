import { useLocation, Link } from "react-router-dom";



export default function MoviesList({ movies }) {
  const location = useLocation();
  function getLink(movieId) {
    if (location.pathname === "/movies") {
      return "/movies/" + movieId; 
    }
    return "movies/" + movieId;
  };


  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={getLink(movie.id)} state={{from:location}}>
            <p>{movie.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

/*movies/${movie.id}*/
