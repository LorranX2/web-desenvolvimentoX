import React, { useState } from "react";

function ListaNomes() {
  const [nomes, setNomes] = useState([]); // lista de nomes
  const [novoNome, setNovoNome] = useState(""); // valor digitado no input

  // Função para adicionar novo nome
  const adicionarNome = () => {
    if (novoNome.trim() === "") return; // evita adicionar vazio
    setNomes([...nomes, novoNome]);     // adiciona novo nome na lista
    setNovoNome("");                    // limpa o input
  };

  return (
    <div>
      <h2>Lista de Nomes:</h2>

      <input
        type="text"
        value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)}
        placeholder="Digite um nome"
      />

      <button onClick={adicionarNome}>Adicionar</button>

      <ul>
        {nomes.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaNomes;
