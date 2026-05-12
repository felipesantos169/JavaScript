let produtos = [
    {id: 1, nome: "Laxante", preco: 10.00, estoque: 25},
    {id: 2, nome: "cano PVC", preco: 33.00, estoque: 20},
    {id: 3, nome: "PlayStation 5", preco: 1200, estoque: 5}
  ];
  
  let idSelecionado = null

  const catalogo = document.getElementById('catalogo')
  const nome = document.getElementById('nome')
  const preco = document.getElementById('preco')
  const estoque = document.getElementById('estoque')

  function renderizarCatalogo(){

    produtos.forEach (produto => {
        const card = document.createElement('div');
        card.className = 'produto-card';
        card.dataset.id = produto.id;

        card.innerHTML = 
            `<h3>${produto.nome}</h3>
            <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
            <p class="estoque">Estoque: ${produto.estoque}</p>`;

        
        card.addEventListener('click', () => {
        document.querySelectorAll('.produto-card').forEach(c =>
        c.classList.remove('ativo')
        );
        card.classList.add('ativo');
        idSelecionado = Number(card.dataset.id);
        });

        catalogo.appendChild(card);
        });      
 }
  function adicionarProduto(event) {

          event.preventDefault();
          const novoNome = nome.value;
          const novoPreco = Number(preco.value);
          const novoEstoque = Number(estoque.value);

          const novoProduto = {
              id: produtos.length + 1,
              nome: novoNome,
              preco: novoPreco,
              estoque: novoEstoque
          };
          produtos.push(novoProduto)

          document.getElementById('catalogo').innerHTML = '';
          renderizarCatalogo();
  }
   function removerProduto(event) {

       event.preventDefault();

       if(idSelecionado !== null){
        produtos = produtos.filter(produto => produto.id != idSelecionado)
       }

       idSelecionado = null

        catalogo.innerHTML = '';
        renderizarCatalogo();
   }
      function limparFormulario(event) {

        event.preventDefault();

        nome.value = "";
        preco.value = "";
        estoque.value = "";
  
        idSelecionado = null;

        document.querySelectorAll('.produto-card').forEach(card => {
            card.classList.remove('ativo');

        });

        catalogo.innerHTML = '';
        renderizarCatalogo();
    }

  renderizarCatalogo()
 