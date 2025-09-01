import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="container">
      <header className="header">
        <nav className="nav">
          <NavLink to="/" end className="link">Home</NavLink>
          <NavLink to="/about" className="link">Sobre</NavLink>
          <NavLink to="/users" className="link">Usuários</NavLink>
          <NavLink to="/partner" className="link">Parceiros</NavLink>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Rotas no React
      </footer>
    </div>
  );
}
