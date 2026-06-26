import React, { useEffect, useState } from 'react'
import "./Fundo.css"


function Fundo() {
    const [movieListPopulares, setMovieListPopulares] = useState([])
    const filmesFundo = [
        ...movieListPopulares,
        ...movieListPopulares,
        ...movieListPopulares,
        ...movieListPopulares
    ];

    const getFilmesPopulares = () => {
        const paginaAleatoriaFundo = Math.floor(Math.random() * 100) + 1
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&sort_by=popularity.desc&language=pt-BR&page=${paginaAleatoriaFundo}`)
            .then(res => res.json())
            .then(json => {
                setMovieListPopulares(json.results)
            })
    }

    useEffect(() => {
        getFilmesPopulares()
    }, [])




    return (
        <div className="catalog-wrapper">
            <div className="images-grid-wrapper">
                {filmesFundo.map((movie, index) => (
                    movie.poster_path && (
                        <img
                            key={index}
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            className="poster-img-wrapper"
                        />
                    )
                ))}
            </div>
        </div>
    )
}

export default Fundo