import React, { useState } from "react";

function ListaCompras() {
  const [Compras, setCompras] = useState([]); // lista de Compras
  const [novaCompra, setNovaCompra] = useState(""); // valor digitado no input

  // Função para adicionar novo nome
  const adicionarNome = () => {
    if (novaCompra.trim() === "") return; // evita adicionar vazio
    setCompras([...Compras, novaCompra]);     // adiciona novo nome na lista
    setNovaCompra("");                    // limpa o input
  };

  return (
    <div>
      <h2>Lista de Compras:</h2>

      <input
        type="text"
        value={novaCompra}
        onChange={(e) => setNovaCompra(e.target.value)}
        placeholder="Digite um nome"
      />

      <button onClick={adicionarNome}>Adicionar</button>
      <>
      </>
      <p>Numero de itens: {Compras.length}</p>
     
      <ul>
   
        {Compras.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
    
      </ul>
    </div>
  );
}

export default ListaCompras;
