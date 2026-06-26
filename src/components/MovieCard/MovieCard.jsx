import React from 'react'
import './MovieCard.css' 

function MovieCard({ filme }) {
  if (!filme) return null;

  const mapearGeneros = (ids) => {
    const listaGeneros = {
      28: "Ação", 12: "Aventura", 16: "Animação", 35: "Comédia", 80: "Crime",
      99: "Documentário", 18: "Drama", 10751: "Família", 14: "Fantasia",
      36: "História", 27: "Terror", 10402: "Música", 9648: "Mistério",
      10749: "Romance", 878: "Ficção Científica", 10770: "Cinema TV",
      53: "Thriller", 10752: "Guerra", 37: "Faroeste"
    };

    return ids.map(id => listaGeneros[id] || "Outro").join(", ");
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        {filme.poster_path && (
          <img 
            src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} 
            alt={filme.title} 
          />
        )}
      </div>

      <div className="movie-details">
        <h3 className="movie-title">{filme.title}</h3>
        
        <div className="movie-metadata">
          <div className="movie-rating">
            ⭐ {filme.vote_average?.toFixed(1)}
          </div>
          
          <div className="movie-date">
            📅 {filme.release_date?.split("-").reverse().join("/")}
          </div>
        </div>

        <div className="movie-genres">
          <strong className="title-movie-genres">Gênero:</strong> {mapearGeneros(filme.genre_ids)}
        </div>

        <div className="movie-overview">
          <strong className="title-movie-overview">Sinopse:</strong> {filme.overview || "Sinopse não disponível."}
        </div>
      </div>

    </div>
  )
}

export default MovieCard