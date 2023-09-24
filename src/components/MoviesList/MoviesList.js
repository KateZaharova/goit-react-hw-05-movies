import { useLocation, Link } from "react-router-dom";



export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`movies/${movie.id}`} state={{from:location}}>
            <p>{movie.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};


