import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard/ProductCard";

export default function Home() {
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // simula carregamento de 1 segundo
    const timer = setTimeout(() => setCarregando(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h2>Bem-vindo à Home!</h2>
      {carregando ? <p>Carregando...</p> : <ProductCard />}
    </>
  );
}
