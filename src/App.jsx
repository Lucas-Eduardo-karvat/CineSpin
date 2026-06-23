import Movie from "./components/Movie";

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>CineSpin 🎬</h1>
        <p>
          Descubra seu próximo filme com apenas um clique.
        </p>
      </header>

      <main>
        <Movie />
      </main>

      <footer className="footer">
        <p>© 2026 CineSpin • Projeto desenvolvido em React</p>
      </footer>
    </div>
  );
}

export default App;