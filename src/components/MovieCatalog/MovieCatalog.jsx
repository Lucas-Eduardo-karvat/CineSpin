import React from 'react'
import './MovieCatalog.css'

function MovieCatalog({ filmes }) {

  return (
    <div className="catalog">
      <h3 className="catalog-section-subtitle">Você também pode gostar:</h3>
      <div className="images-grid">
        {filmes.map((movie) => (
          movie.poster_path && (
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="poster-img"
            />
          )
        ))}
      </div>
    </div>
  )
}

export default MovieCatalog