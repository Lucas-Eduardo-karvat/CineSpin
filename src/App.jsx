import { movies } from "./data/movies";

function App() {
  return (
    <div>
      <h1>LISTA DE FILMES</h1>
      <ul>
        {movies.map((movie) => {
          return (
            <li>
              <div>
                <h2>{movie.title}</h2>
                <h2>{movie.genre}</h2>
                <h3>{movie.rating}</h3>
                <img src={movie.poster} alt={movie.id} />
                <p>{movie.synopsis}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;