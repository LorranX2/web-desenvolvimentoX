import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Layout.css";
import { useAuth } from "../../auth/AuthContext";

export default function Layout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/", { replace: true });
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <h1 className="brand">Admin</h1>

        <nav className="nav">
          <NavLink
            to="/alunos"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Alunos
          </NavLink>
        </nav>

        {user ? (
          <>
            <span style={{ marginRight: 8 }}>Olá, {user.nome}</span>
            <button className="btn-logout" onClick={handleLogout}>
              Sair
            </button>
          </>
        ) : null}
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
