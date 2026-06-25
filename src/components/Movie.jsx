import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

function Movie() {

    const [movieList, setMovieList] = useState([])
    const [MovieListFilters, setMovieListFilters] = useState([])
    const [randomMovie, setRandomMovie] = useState(null)
    const [genero, setGenero] = useState("18");
    const [nota, setNota] = useState("5");
    const [totalPagina, setTotalPagina] = useState(1);
    console.log(movieList)



    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=7910a34e6bf45d1d308910b1e280b32e")
            .then(res => res.json())
            .then(json => setMovieList(json.results))
    }
    useEffect(() => {
        getMovie()
    }, [])



    const getMovieFilters = () => {
        const paginaAleatoria = Math.floor(Math.random() * totalPagina) + 1

        return fetch("https://api.themoviedb.org/3/discover/movie?api_key=7910a34e6bf45d1d308910b1e280b32e&with_genres=" + genero + "&vote_average.gte=" + nota + "&page=" + paginaAleatoria)
            .then(res => res.json())
            .then(json => {
                setMovieListFilters(json.results)
                if (json.total_pages > 0) {
                    const limiteSeguro = Math.min(json.total_pages, 500)
                    setTotalPagina(limiteSeguro)
                }
                return json.results
            })
    }
    useEffect(() => {
        getMovieFilters()
    }, [genero, nota])

    function SortearFilme() {
   
        getMovieFilters().then(filmesAtualizados => {

            const tamanhoLista = filmesAtualizados?.length || 0

            if (tamanhoLista === 0) {
                alert("Nenhum filme encontrado com esses filtros nesta página. Altere as opções ou aguarde o carregamento.")
                return
            }
            else if (!MovieListFilters) {
                alert("lista de filmes está vazia ou ainda não carregou.")
                return
            }

            const indice = Math.floor(Math.random() * tamanhoLista)
            setRandomMovie(filmesAtualizados[indice])
        })
    }

    


    {/*<h1>{movie.original_title}</h1>*/ }

    return (
        <section className="movie-section">

            <button onClick={SortearFilme} className="sort-button">
                🎲 Sortear Filme
            </button>
            <div>
                <h1>Filtros</h1>
                <select value={genero} onChange={(e) => setGenero(e.target.value)} name="Categoria">
                    <option value="28">Ação</option>
                    <option value="12">Aventura</option>
                    <option value="16">Animação</option>
                    <option value="35">Comédia</option>
                    <option value="80">Crime</option>
                    <option value="99">Documentário</option>
                    <option value="18">Drama</option>
                    <option value="10751">Família</option>
                    <option value="14">Fantasia</option>
                    <option value="36">História</option>
                    <option value="27">Terror</option>
                    <option value="10402">Música</option>
                    <option value="9648">Mistério</option>
                    <option value="10749">Romance</option>
                    <option value="878">Ficção Científica</option>
                    <option value="10770">Cinema TV</option>
                    <option value="53">Thriller/Suspense</option>
                    <option value="10752">Guerra</option>
                    <option value="37">Faroeste</option>
                </select>
                <select value={nota} onChange={(e) => setNota(e.target.value)} name="Notas">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>



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