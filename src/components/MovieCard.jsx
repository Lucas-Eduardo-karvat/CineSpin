
function MovieCard({ filme }) {
  return (
    <div>
      <h3>{filme.original_title}</h3>
      <img
        style={{ width: '220px', height: '330px' }}
        src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
        alt={filme.title}
      />
      <p>Nota: {filme.vote_average}</p>
      <p>Lançamento: {filme.release_date}</p>
      <p>Sinopse: {filme.overview}</p>
    </div>

  )
}

export default MovieCard