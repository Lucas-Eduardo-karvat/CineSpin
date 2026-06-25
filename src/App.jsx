import React from "react";
import Movie from "./pages/Movie/Movie";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      
      <nav className="navbar">
        <div className="nav-logo">
          <span>CineSpin 🎬</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#sorteador" className="active">Sorteador</a>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle-btn" title="Futuro Modo Noturno">
            🌙 Modo
          </button>
        </div>
      </nav>
      <main>
      <div className="home-container">
        
      </div>
      
      <div className="main-content" id="sorteador">
        <div className="section-title">
          <h2>Sorteador de Filmes</h2>
          <p>Configure os filtros abaixo e clique no dado para sortear.</p>
        </div>
        <Movie />
      </div>
      </main>

      <footer className="footer">
        <p>© 2026 CineSpin • Projeto React Simples</p>
      </footer>

    </div>
  );
}

export default App;