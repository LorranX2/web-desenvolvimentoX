import { useState } from "react"; 
import "./CrudUsuarios.css"; // Arquivo de estilos (igual ao CrudProdutos)

export default function CrudUsuarios() { 
  // Cria a “caixinha” do CrudUsuarios, que é o nosso componente principal.

  // ===============================
  // ESTADOS (lugares para guardar informações)
  // ===============================
  const [usuarios, setUsuarios] = useState([]); 
  // Lista de usuários. Começa vazia e vai guardando todos os usuários cadastrados.

  const [form, setForm] = useState({
    id: null,
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
  }); 
  // Formulário que guarda os dados do usuário que estamos digitando.

  // ===============================
  // FUNÇÕES (ações que podemos fazer)
  // ===============================
  function limparForm() { 
    // Limpa todos os campos do formulário, deixando tudo em branco.
    setForm({ id: null, nome: "", sobrenome: "", email: "", senha: "" });
  }

  function gerarId() { 
    // Cria um número único para cada usuário, como se fosse um RG.
    return Date.now() + Math.floor(Math.random() * 1000);
  }

  function adicionarUsuario() { 
    // Adiciona um novo usuário à lista.
    const novo = { id: gerarId(), nome: form.nome, sobrenome: form.sobrenome, email: form.email, senha: form.senha };

    console.log(novo)
    setUsuarios([...usuarios, novo]); // Coloca o novo usuário junto com os outros.
    limparForm(); // Limpa o formulário depois de adicionar.
  }

  function atualizarUsuario() { 
    // Atualiza os dados de um usuário que já existe na lista.
    setUsuarios(
      usuarios.map((u) =>
        u.id === form.id ? { ...u, ...form } : u
      )
    );
    limparForm(); // Limpa o formulário depois de atualizar.
  }

  function onSubmit(e) { 
    // Função chamada quando clicamos em Adicionar ou Salvar.
    e.preventDefault(); // Evita que a página recarregue sozinha.
    if (form.id === null) { 
      adicionarUsuario(); // Usuário novo
    } else { 
      atualizarUsuario(); // Usuário existente
    }
  }

  function editarUsuario(usuario) { 
    // Coloca as informações do usuário no formulário para editar
    // Garantindo que o ID seja número (mesmo tipo do ID gerado)
    setForm({ ...usuario });
  }

  function removerUsuario(id) { 
    // Remove um usuário da lista usando o ID.
    setUsuarios(usuarios.filter((u) => u.id !== id));
  }

  // ===============================
  // TELA (o que aparece para o usuário)
  // ===============================
  return (
    <section className="crud">
      <h2>Cadastro de Usuários</h2>

      <form className="usuario-form" onSubmit={onSubmit}>
        {/* Campo Nome */}
        <div className="linha">
          <label>
            Nome
            <input
              name="nome"
              value={form.nome} // Mostra o que está digitado no formulário
              onChange={(e) => setForm({ ...form, nome: e.target.value })} 
              // Atualiza o estado quando a pessoa digita algo
              placeholder="Digite o nome"
            />
          </label>
        </div>

        {/* Campo Sobrenome */}
        <div className="linha">
          <label>
            Sobrenome
            <input
              name="sobrenome"
              value={form.sobrenome}
              onChange={(e) => setForm({ ...form, sobrenome: e.target.value })} 
              placeholder="Digite o sobrenome"
            />
          </label>
        </div>

        {/* Campo E-mail */}
        <div className="linha">
          <label>
            E-mail
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })} 
              placeholder="Digite o e-mail"
            />
          </label>
        </div>

        {/* Campo Senha */}
        <div className="linha">
          <label>
            Senha
            <input
              type="password"
              name="senha"
              value={form.senha}
              onChange={(e) => setForm({ ...form, senha: e.target.value })} 
              placeholder="Digite a senha"
            />
          </label>
        </div>

        {/* Botões de ação */}
        <div className="botoes">
          <button type="submit" className="btn primario">
            {form.id === null ? "Adicionar usuário" : "Salvar alterações"}
          </button>

          {form.id !== null && (
            <button
              type="button"
              className="btn secundario"
              onClick={limparForm} // Cancela a edição
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      {/* Lista de usuários */}
      <div className="lista">
        {usuarios.length === 0 ? (
          <p className="vazio">Nenhum usuário cadastrado.</p>
        ) : (
          <ul>
            {usuarios.map((u) => (
              <li key={u.id}>
                <span>
                  <strong>{u.nome} {u.sobrenome}</strong> — {u.email}
                </span>

                <div className="acoes">
                  <button className="btn secundario" onClick={() => editarUsuario(u)}>
                    Editar
                  </button>
                  <button
                    className="btn perigo"
                    onClick={() => removerUsuario(u.id)}
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
