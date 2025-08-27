import "./styles/global.css";
import ComponenteExemplo from "./components/ListaSeries/ListaSeries";

export default function App() {
  return (
    <main className="app">
      <nav className="navbar">
        <h1>Projeto: Séries Leves (Array → .map())</h1>
      </nav>

      <ComponenteExemplo />

      <footer className="footer">
        <small>Exercício didático — mapeando arrays no React</small>
      </footer>
    </main>
  );
}
