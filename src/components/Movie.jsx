import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

function Movie() {

    const [movieList, setMovieList] = useState([])
    const [randomMovie, setRandomMovie] = useState(null)
    const [genero, setGenero] = useState("18"); // "18" é o ID para Drama
    console.log(movieList)



    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=7910a34e6bf45d1d308910b1e280b32e&with_genres=18")
            .then(res => res.json())
            .then(json => setMovieList(json.results))
    }
    useEffect(() => {
        getMovie()
    }, [])

    function SortearFilme() {
        const indice = Math.floor(
            Math.random() * movieList.length
        )
        const filmesorteado = movieList[indice];
        setRandomMovie(filmesorteado);

    }




    {/*<h1>{movie.original_title}</h1>*/ }

    return (
        <section className="movie-section">

            <button onClick={SortearFilme} className="sort-button">
                🎲 Sortear Filme
            </button>

            <div className="random-movie">
                <h2>Filme Sorteado</h2>
                {randomMovie !== null ? (
                    <MovieCard filme={randomMovie} />
                ) : (
                    <p>Nenhum filme sorteado ainda.</p>
                )}
            </div>

            <div className="movies-list">
                <div className="movies-grid">
                    {movieList.map((movie) => (
                        <img key={movie.id} style={{ width: '220px', height: '330px' }} src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Movie