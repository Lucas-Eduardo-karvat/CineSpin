import { movies } from "../data/movies"
function MovieCard() {
  return (
    <div>{movies.map(movie) => {
        return <MovieCard>
            <h1>{movie.title}</h1>
        </div>
    }}
    </div>
  )
}

export default MovieCard