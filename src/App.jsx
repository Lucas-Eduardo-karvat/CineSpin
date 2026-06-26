import React from "react";
import Movie from "./pages/Movie/Movie";
import "./App.css";
import NavBar from "./components/Nav-Bar/NavBar";
import Footer from "./components/Footer/Footer";
import Fundo from "./components/Fundo/Fundo";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main>
        <Fundo/>
        <Movie />
      </main>
      <Footer />
    </div>
  );
}

export default App;