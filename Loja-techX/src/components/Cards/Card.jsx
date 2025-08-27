import React from "react";
import "./card.css";
import teclado from "../../assets/teclado.jpg"; // caminho relativo certo
import mouse from "../../assets/mouse.jpg";
import fone from "../../assets/fone.jpg";

export default function Card() {
    // Objeto com dados do produto
    const produtos = [


        {
            nome: "Teclado Mecânico",
            descricao: "Switches lineares, keycaps PBT e RGB per-key.",
            preco: 399.90,
            imagem: teclado
        },

        {
            nome: "Mouse Gamer Sem Fio Razer",
            descricao: "Design ergonômico, Sensor óptico Razer Focus+ e Switches ópticos de mouse da 2ª geração da Razer.",
            preco: 544.90,
            imagem: mouse
        },

        {
            nome: "Headset Gamer",
            descricao: "Modelo: K10, Freqüência: 20HZ-20KHZ, Microfone: 6.0 x 2.7mm e Conector: P2 (3.5mm) + USB.",
            preco: 102.90,
            imagem: fone
        }
    ];

    return (
        <>
            {produtos.map((produto, index) => (
                <article className="card" key={index}>
                    <img
                        className="card__img"
                        src={produto.imagem}
                        alt={produto.nome}
                    />

                    <div className="card__body">
                        <h3 className="card__title">{produto.nome}</h3>
                        <p className="card__desc">{produto.descricao}</p>
                    </div>

                    <div className="card__footer">
                        <span className="card__price">
                            R$ {produto.preco.toFixed(2).replace(".", ",")}
                        </span>
                        <button
                            className="card__btn"
                            onClick={() => alert(`Ver mais: ${produto.nome}`)}
                        >
                            Ver mais
                        </button>
                    </div>
                </article>
            ))}
        </>
    );
}