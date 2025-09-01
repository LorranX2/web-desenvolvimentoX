import { useState, useEffect } from "react";
import ParceiroCard from "../components/Parceiros/Parceiros.jsx";

export default function partner() {
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // simula carregamento de 1 segundo
    const timer = setTimeout(() => setCarregando(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h2>Bem-vindo à página de parceiros!</h2>
      {carregando ? <p>Carregando...</p> : <ParceiroCard />}
    </>
  );
}
