import React, { useState } from "react";

export default function ListaSeries() {
  const [series, setSeries] = useState([
    {
      id: 1,
      titulo: "The Good Place",
      categoria: "Comédia",
      descricao: "Uma comédia leve sobre ética e amizade"
    }
  ]);

  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");

  function adicionarSerie(e) {
    e.preventDefault();
    const nova = {
      id: series.length + 1,
      titulo,
      categoria,
      descricao,
    };
    setSeries([...series, nova]);
    setTitulo("");
    setCategoria("");
    setDescricao("");
  }

  return (
    <section className="container">
      <h2 className="section-title">Séries (Netflix) — Cadastro simples</h2>

      {/* Formulário de cadastro */}
      <form onSubmit={adicionarSerie} className="form-card">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option>Comédia</option>
          <option>Comédia Teen</option>
          <option>Comédia/Drama Leve</option>
          <option>Reality</option>
          <option>Ação</option>
        </select>

        <textarea
          placeholder="Descrição"
          rows={3}
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <button type="submit">Adicionar</button>
      </form>

      <h2 className="section-title">Séries (Netflix) — Renderizadas de um Array</h2>

      {/* Lista das séries */}
      <div className="grid">
        {series.map((item) => (
          <article key={item.id} className="card">
            <header className="card-header">
              <h3 className="card-title">{item.titulo}</h3>
              <span className="badge">{item.categoria}</span>
            </header>
            <p className="card-desc">{item.descricao}</p>
          </article>  
        ))}
      </div>
    </section>
  );
}
