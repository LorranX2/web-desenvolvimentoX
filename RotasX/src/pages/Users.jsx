import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Ada Lovelace" },
  { id: 2, name: "Alan Turing" },
];

export default function Users() {
  return (
    <>
      <h2>Usuários</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            <Link to={`/users/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
