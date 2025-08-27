import React, { useState } from "react";

function Contador() {
 
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState("João"); 

  return (
    <>
      <div>
        <h2>Contador: {contador}</h2>
        <button onClick={() => setContador(contador + 1)}>Adicionar</button>
        <button onClick={() => setContador(contador - 1)}>Remover</button>
        <button onClick={() => setContador(0)}>Reset</button>
      </div>

      <div>
        <h2>Nome: {nome}</h2>
        <button onClick={() => setNome(nome === "João" ? "Maria" : "João")}> Trocar nome </button>
        
      </div>
    </>
  );
}

export default Contador;
