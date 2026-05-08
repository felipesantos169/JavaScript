const produtos = [
    {id: 1, nome: "Laxante", preco: 10.00, estoque: 25},
    {id: 2, nome: "Macarrão", preco: 15.00, estoque: 50},
    {id: 3, nome: "Bife", preco: 27.00, estoque: 30},
    {id: 4, nome: "cano PVC", preco: 33.00, estoque: 20},
    {id: 5, nome: "PlayStation 5", preco: 1200, estoque: 5}
  ];

  function renderizarCatalogo(){
    const catalogo = document.getElementById('catalogo')

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
        });

        catalogo.appendChild(card);
        });      
 }
