import React, { useEffect, useState } from 'react'

function Movie() {

    const [movieList, setMovieList] = useState([])


    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=7910a34e6bf45d1d308910b1e280b32e&page=2")
            .then(res => res.json())
            .then(json => setMovieList(json.results))
    }
    useEffect(() => {
        getMovie()
    }, [])

    console.log(movieList)

    return (
        <div>
            {movieList.map((movie) => (

                <div>
                    <h1>{movie.original_title}</h1>
                    <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
                </div>


            ))}
        </div>
    )
}

export default Movie