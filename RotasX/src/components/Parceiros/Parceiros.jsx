import { useState } from "react";
import nike from '../../assets/Logo-Adidas.png'
import adidas from '../../assets/Logo-Nike.png'
import puma from '../../assets/Logo-Puma.png'
import Olympikus from '../../assets/Logo-Olympikus.png'
import "./Parceiros.css";

export default function ParceiroCard() {
  // dados fakes
  const [produtos] = useState([
    { id: 1, nome: "Nike", img: nike },
    { id: 2, nome: "Adidas", img: adidas },
    { id: 3, nome: "Puma", img: puma },
    { id: 4, nome: "Olympikus", img: Olympikus },
    
  ]);

  return (
    <div className="grid">
      {produtos.map((p) => (
        <article className="card" key={p.id}>
          <img src={p.img} alt={p.nome} />
          <h3>{p.nome}</h3>
        </article>
      ))}
    </div>
  );
}