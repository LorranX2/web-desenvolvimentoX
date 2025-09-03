import { useState } from "react";
import "./CrudFornecedores.css";

function gerarId() {
  return Date.now() + Math.floor(Math.random() * 1000);
}

const categorias = ["Materiais", "Serviços", "Logística", "TI", "Outros"];

export default function CrudFornecedores() {
  const [lista, setLista] = useState([]);
  const [form, setForm] = useState({
    id: null,
    razao_social: "",
    nome_fantasia: "",
    CNPJ: "",
    email: "",
    telefone: "",
    categoria: "",
  });

  const emEdicao = form.id !== null;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function limparForm() {
    setForm({
      id: null,
      razao_social: "",
      nome_fantasia: "",
      CNPJ: "",
      email: "",
      telefone: "",
      categoria: "",
    });
  }

  function adicionarFornecedor() {
    const novo = { id: gerarId(), ...form, id: gerarId() };
    setLista([novo, ...lista]);
    limparForm();
  }

  function iniciarEdicao(fornecedor) {
    setForm(fornecedor);
  }

  function atualizarFornecedor() {
    const atualizada = lista.map((f) =>
      f.id === form.id ? { ...form } : f
    );
    setLista(atualizada);
    limparForm();
  }

  function removerFornecedor(id) {
    const confirmar = window.confirm(
      "Tem certeza que deseja remover este fornecedor?"
    );
    if (confirmar) {
      setLista(lista.filter((f) => f.id !== id));
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    if (emEdicao) atualizarFornecedor();
    else adicionarFornecedor();
  }

  return (
    <div className="card crud">
      <h2 className="crud__title">Gestão de Fornecedores</h2>
      <p className="crud__subtitle">
        CRUD simples (sem validação) com dados básicos.
      </p>

      {/* Formulário */}
      <form onSubmit={onSubmit} className="crud__form">
        <div className="form-row">
          <div className="form-field">
            <label className="label">Razão Social</label>
            <input
              className="input"
              type="text"
              name="razao_social"
              value={form.razao_social}
              onChange={handleChange}
              placeholder="Ex.: ACME Industria LTDA"
            />
            </div>

            <div className="form-field">
              <label className="label">Nome Fantasia</label>
              <input
                className="input"
                type="text"
                name="nome_fantasia"
                value={form.nome_fantasia}
                onChange={handleChange}
                placeholder="Ex.: ACME"
              />
          </div>
        </div>




        <div className="form-row">
          <div className="form-field">
            <label className="label">Categoria</label>
            <select
              className="select"
              name="categoria"
              value={form.categoria}
              onChange={handleChange}
            >
              <option value="">Selecione uma categoria</option>
              {categorias.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label className="label">E-mail</label>
            <input
              className="input"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Ex.: contato@fornecedor.com.br"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label className="label">Telefone</label>
            <input
              className="input"
              type="text"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              placeholder="Ex.: (21) 98888-7777"
            />
          </div>

          <div className="form-field">
            <label className="label">CNPJ</label>
            <input
              className="input"
              type="text"
              name="CNPJ"
              value={form.CNPJ}
              onChange={handleChange}
              placeholder="Ex.: 00.000.000/0001-00"
            />
          </div>
        </div>

        <div className="actions">
          <button type="submit" className="btn btn-primary">
            {emEdicao ? "Atualizar" : "Adicionar"}
          </button>
          <button type="button" onClick={limparForm} className="btn btn-ghost">
            Limpar
          </button>
        </div>
      </form>

      {/* Tabela */}
      <table className="table">
        <thead>
          <tr>
            <th className="th">Razão Social</th>
            <th className="th">Nome Fantasia</th>
            <th className="th">CNPJ</th>
            <th className="th">Categoria</th>
            <th className="th">E-mail</th>
            <th className="th">Telefone</th>
            <th className="th">Ações</th>
          </tr>
        </thead>
        <tbody>
          {lista.length === 0 ? (
            <tr>
              <td className="td" colSpan={7}>
                — Nenhum fornecedor cadastrado —
              </td>
            </tr>
          ) : (
            lista.map((f) => (
              <tr key={f.id}>
                <td className="td">{f.razao_social}</td>
                <td className="td">{f.nome_fantasia}</td>
                <td className="td">{f.CNPJ}</td>
                <td className="td">{f.categoria}</td>
                <td className="td">{f.email}</td>
                <td className="td">{f.telefone}</td>
                <td className="td">
                  <div className="row-actions">
                    <button
                      className="btn btn-small"
                      onClick={() => iniciarEdicao(f)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-small"
                      onClick={() => removerFornecedor(f.id)}
                    >
                      Remover
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
