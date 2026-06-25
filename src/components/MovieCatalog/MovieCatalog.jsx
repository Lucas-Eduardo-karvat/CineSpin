import React from 'react'
import './MovieCatalog.css'

function MovieCatalog({ filmes }) {
  if (!filmes || filmes.length === 0) {
    return (
      <div className="catalog-error-wrapper">
        <p className="no-movies-text">Nenhum filme encontrado para os filtros selecionados.</p>
      </div>
    );
  }

  return (
    <div className="catalog-filtered-wrapper">
      <h3 className="catalog-section-subtitle">Filmes na mesma categoria:</h3>
      <div className="filtered-images-grid">
        {filmes.map((movie) => (
          movie.poster_path && (
            <img 
              key={movie.id} 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title}
              className="filtered-poster-img"
            />
          )
        ))}
      </div>
    </div>
  )
}

export default MovieCatalog