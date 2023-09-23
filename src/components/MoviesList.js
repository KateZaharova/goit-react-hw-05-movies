

getMoviesList

export default function MoviesList = ({ movies }) => {
  return (
    <Container>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`${movie.id}`}>
            <p>{movie.name}</p>
          </Link>
        </div>
      ))}
    </Container>
  );
};


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjI2MDljYWYyYTY0YjRiNjM3Njc1MzcwZWM5MWY3NiIsInN1YiI6IjY1MDg5MWJlMzczYWMyMDBmZjA1ZmQ0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BVAxCHBNXR4qKxdw9juTzLiuwt4zS2kUHqWgFfmhnsk'
  }
};

fetch('https://api.themoviedb.org/3/authentication', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));