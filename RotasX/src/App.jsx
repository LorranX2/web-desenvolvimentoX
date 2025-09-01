import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import Partner from "./pages/Partner";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="partner" element={<Partner />} />
      </Route>
    </Routes>
  );
}
