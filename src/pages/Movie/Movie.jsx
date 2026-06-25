import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import MovieCatalog from '../../components/MovieCatalog/MovieCatalog'
import './Movie.css'

function Movie() {
    // ESTADOS
    const [movieListPopulares, setMovieListPopulares] = useState([])
    const [MovieListFilters, setMovieListFilters] = useState([])
    const [randomMovie, setRandomMovie] = useState(null)
    const [genero, setGenero] = useState("");
    const [notaMin, setNotaMin] = useState("1");
    const [notaMax, setNotaMax] = useState("10");
    const [dataMin, setDataMin] = useState("1800-01-01");
    const [dataMax, setDataMax] = useState("2030-12-31");
    const [streaming, setStreaming] = useState("");
    const [totalPagina, setTotalPagina] = useState(1);

    // REQUISIÇÕES
    const getFilmesPopulares = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=7910a34e6bf45d1d308910b1e280b32e&sort_by=popularity.desc&language=pt-BR")
            .then(res => res.json())
            .then(json => {
                setMovieListPopulares(json.results || [])
            })
    }

    const getMovieFilters = () => {
        const paginaAleatoria = Math.floor(Math.random() * totalPagina) + 1

        return fetch("https://api.themoviedb.org/3/discover/movie?api_key=7910a34e6bf45d1d308910b1e280b32e&vote_count.gte=200&with_genres=" + genero
            + "&vote_average.gte=" + notaMin
            + "&vote_average.lte=" + notaMax
            + "&primary_release_date.gte=" + dataMin
            + "&primary_release_date.lte=" + dataMax
            + "&with_watch_providers=" + streaming
            + "&language=pt-BR"
            + "&page=" + paginaAleatoria)
            .then(res => res.json())
            .then(json => {
                setMovieListFilters(json.results || [])
                if (json.total_pages > 0) {
                    const limiteSeguro = Math.min(json.total_pages, 500)
                    setTotalPagina(limiteSeguro)
                }
                return json.results || []
            })
    }

    // EFEITOS (MONITORES)
    useEffect(() => {
        getFilmesPopulares()
    }, [])

    useEffect(() => {
        getMovieFilters()
    }, [genero, notaMin, notaMax, dataMin, dataMax, streaming])

    // LÓGICA DO BOTÃO
    function SortearFilme() {
        getMovieFilters().then(filmesAtualizados => {
            const tamanhoLista = filmesAtualizados?.length || 0

            if (tamanhoLista === 0) {
                alert("Nenhum filme encontrado com esses filtros. Altere as opções.")
                return
            }

            const indice = Math.floor(Math.random() * tamanhoLista)
            setRandomMovie(filmesAtualizados[indice])
        })
    }

    return (
    <section className="movie-container">
        
        {/* CONTAINER PRINCIPAL DO SORTEADOR (DIVIDIDO EM DUAS COLUNAS) */}
        <div className="sorter-layout">
            
            {/* COLUNA DA ESQUERDA: PAINEL DE CONTROLE (FILTROS + BOTÃO) */}
            <div className="sidebar-controls">
                <div className="control-panel">
                    <h2 className="filters-title">🎯 Filtros</h2>
                    
                    <div className="select-group">
                        <label className="select-label">Plataforma</label>
                        <select value={streaming} onChange={(e) => setStreaming(e.target.value)} name="Streaming" className="filter-select">
                            <option value="">Qualquer Plataforma</option>
                            <option value="8">Netflix</option>
                            <option value="119">Prime Video</option>
                            <option value="337">Disney+</option>
                            <option value="1899">Max (HBO)</option>
                            <option value="307">Globoplay</option>
                            <option value="2">Apple TV</option>
                        </select>

                        <label className="select-label">Gênero</label>
                        <select value={genero} onChange={(e) => setGenero(e.target.value)} name="Genero" className="filter-select">
                            <option value="">Qualquer Genero</option>
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

                        <label className="select-label">Avaliação</label>
                        <select value={`${notaMin}-${notaMax}`} onChange={(e) => {
                            const notasSeparadas = e.target.value.split("-");
                            setNotaMin(notasSeparadas[0])
                            setNotaMax(notasSeparadas[1])
                        }} name="Notas" className="filter-select">
                            <optgroup label="Grandes Faixas">
                                <option value="1-10">Qualquer Nota (1 a 10)</option>
                                <option value="1-4">Filmes Ruins (1 a 4)</option>
                                <option value="5-7">Filmes Medianos (5 a 7)</option>
                                <option value="8-10">Só Obras-Primas (8 a 10)</option>
                            </optgroup>
                            <optgroup label="Notas Específicas">
                                <option value="0-3.9">Notas iguais ou menores que 3 </option>
                                <option value="4-4.9">Apenas Notas 4 </option>
                                <option value="5-5.9">Apenas Notas 5 </option>
                                <option value="6-6.9">Apenas Notas 6 </option>
                                <option value="7-7.9">Apenas Notas 7 </option>
                                <option value="8-8.9">Apenas Notas 8 </option>
                                <option value="9-10">Apenas Notas 9 e 10</option>
                            </optgroup>
                        </select>

                        <label className="select-label">Época</label>
                        <select value={`${dataMin}/${dataMax}`} onChange={(e) => {
                            const dataSeparada = e.target.value.split("/")
                            setDataMin(dataSeparada[0])
                            setDataMax(dataSeparada[1])
                        }} name="Data de lançamento" className="filter-select">
                            <option value="1800-01-01/2030-12-31">Qualquer Ano</option>
                            <option value="2020-01-01/2026-12-31">Lançamentos Recentes</option>
                            <option value="2010-01-01/2019-12-31">Anos 2010</option>
                            <option value="2000-01-01/2009-12-31">Anos 2000</option>
                            <option value="1990-01-01/1999-12-31">Anos 90</option>
                            <option value="1980-01-01/1989-12-31">Anos 80</option>
                            <option value="1800-01-01/1979-12-31">Clássicos (Antes de 1980)</option>
                        </select>
                    </div>

                    {/* BOTÃO COLADO EMBAIXO DOS SELECTS */}
                    <button onClick={SortearFilme} className="sort-button">
                        🎲 {randomMovie !== null ? "Sortear Outro" : "Sortear Filme"}
                    </button>
                </div>
            </div>

            {/* COLUNA DA DIREITA: EXIBIÇÃO DO RESULTADO */}
            <div className="main-result-display">
                {randomMovie !== null ? (
                    <MovieCard filme={randomMovie} />
                ) : (
                    <div className="placeholder-text-box">
                        <p>Configure os filtros ao lado e clique em Sortear para encontrar seu filme.</p>
                    </div>
                )}
            </div>

        </div>

        {/* VITRINES DE FILMES (ABAIXO DO SORTEADOR) */}
        <div className="content-displays">
            <div className="display-section filter-results">
                <MovieCatalog filmes={MovieListFilters} />
            </div>
        </div>

    </section>
)
}

export default Movie