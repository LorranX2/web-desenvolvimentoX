import { useState } from "react"; 
// Aqui estamos pegando uma ferramenta chamada useState do React.
// Essa ferramenta guarda informações e deixa a tela atualizar quando algo muda.

import "./CrudProdutos.css"; 
// Aqui estamos puxando o arquivo de estilos (CSS) para deixar a tela mais bonita.

export default function CrudProdutos() { 
  // Essa parte cria uma "caixinha" chamada CrudProdutos, que é o nosso componente.

  // ===============================
  // ESTADOS (lugares para guardar coisas)
  // ===============================
  const [produtos, setProdutos] = useState([]); 
  // Aqui temos uma lista vazia chamada "produtos". 
  // Quando adicionamos algo, essa lista guarda todos os produtos.

  const [form, setForm] = useState({ id: null, nome: "", preco: "" }); 
  // Aqui temos um "formulário" que começa vazio. 
  // Ele guarda o nome e o preço do produto que estamos digitando.

  // ===============================
  // FUNÇÕES (ações que podemos fazer)
  // ===============================
  function limparForm() { 
    // Essa função limpa o formulário, deixando tudo em branco de novo.
    setForm({ id: null, nome: "", preco: "" });
  }

  function geraId() { 
    // Essa função cria um número único para cada produto.
    // Assim, cada produto tem um "RG" para a gente saber qual é qual.
    return Date.now() + Math.floor(Math.random() * 1000);
  }

  function adicionarProduto() { 
    // Essa função cria um novo produto e coloca ele na lista.
    const novo = { id: geraId(), nome: form.nome, preco: form.preco };
    setProdutos([...produtos, novo]); // Coloca o novo produto junto com os outros.
    limparForm(); // Depois de adicionar, limpa os campos do formulário.
  }

  function atualizarProduto() { 
    // Essa função pega um produto que já existe e troca as informações dele.
    setProdutos(
      produtos.map((p) =>
        p.id === form.id ? { ...p, nome: form.nome, preco: form.preco } : p
      )
    );
    limparForm(); // E limpa os campos quando termina de atualizar.
  }

  function onSubmit(e) { 
    // Essa função é chamada quando clicamos no botão de adicionar ou salvar.
    e.preventDefault(); // Aqui falamos para a página "não recarregar sozinha".
    if (form.id === null) { 
      // Se não tem ID, é um produto novo.
      adicionarProduto();
    } else { 
      // Se já tem ID, é um produto que estamos editando.
      atualizarProduto();
    }
  }

  function editarProduto(produto) { 
    // Quando clicamos no botão "Editar", essa função coloca
    // as informações desse produto no formulário para mudarmos.
    setForm({ id: produto.id, nome: produto.nome, preco: produto.preco });
  }

  function removerProduto(id) { 
    // Essa função tira um produto da lista usando o ID dele.
    setProdutos(produtos.filter((p) => p.id !== id));
  }

  // ===============================
  // TELA (o que aparece)
  // ===============================
  return (
    <section className="crud">
      {/* Título da página */}
      <h2>Cadastro de Produtos</h2>

      {/* Formulário para digitar nome e preço */}
      <form className="produto-form" onSubmit={onSubmit}>
        {/* Campo para digitar o nome */}
        <div className="linha">
          <label>
            Nome
            <input
              name="nome"
              value={form.nome} // Aqui mostramos o que já está no estado.
              onChange={(e) => setForm({ ...form, nome: e.target.value })} 
              // Quando alguém digita, guardamos no estado.
              placeholder="Ex.: Teclado"
            />
          </label>
        </div>

        {/* Campo para digitar o preço */}
        <div className="linha">
          <label>
            Preço (R$)
            <input
              name="preco"
              type="number"
              value={form.preco} // Mostra o preço que já está no estado.
              onChange={(e) => setForm({ ...form, preco: e.target.value })} 
              // Atualiza o estado quando a pessoa digita um novo preço.
              placeholder="Ex.: 199.90"
            />
          </label>
        </div>

        {/* Botões abaixo do formulário */}
        <div className="botoes">
          <button type="submit" className="btn primario">
            {/* Se não estamos editando, o botão mostra "Adicionar". 
                Se estamos editando, mostra "Salvar alterações". */}
            {form.id === null ? "Adicionar produto" : "Salvar alterações"}
          </button>

          {/* Se estamos editando, aparece um botão para cancelar */}
          {form.id !== null && (
            <button
              type="button"
              className="btn secundario"
              onClick={limparForm} // Quando clicamos, limpa os campos.
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      {/* Parte que mostra a lista de produtos */}
      <div className="lista">
        {produtos.length === 0 ? (
          // Se não tem nada na lista, mostra essa mensagem.
          <p className="vazio">Nenhum produto cadastrado.</p>
        ) : (
          // Se tem produtos, mostramos todos eles em uma lista.
          <ul>
            {produtos.map((p) => (
              <li key={p.id}>
                {/* Aqui mostramos o nome e o preço do produto */}
                <span>
                  {p.nome} — R$ {p.preco}
                </span>

                {/* Botões ao lado do produto */}
                <div className="acoes">
                  {/* Botão para editar */}
                  <button
                    className="btn secundario"
                    onClick={() => editarProduto(p)}
                  >
                    Editar
                  </button>

                  {/* Botão para remover */}
                  <button
                    className="btn perigo"
                    onClick={() => removerProduto(p.id)}
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
