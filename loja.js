let id = 6
let nome = 'Carvão'
let preco = 16.00
let estoque = 10
let operacao = 'adicionar'

function adicionar(id, nome, preco, estoque) {
    if(nome === ''){
        console.log('Erro ao inserir o nome!')
    }
    else if(preco <= 0){
        console.log('Erro ao inserir o preço!')
    }
    else if(estoque <= 0){
        console.log('O produto não pode estar zerado de estoque!')
    }
    else{
        return produtos.push({id, nome, preco, estoque})
    }
}

function listar(){
    for (const p of produtos) {
      console.log((p))
    }
}

function buscarPorNome(nome){
    const nomeProduto = produtos.filter(produto => produto.nome === nome)
    return nomeProduto
}

function atualizar(id, nome, preco, estoque){
    const atualizarProduto = produtos.find(produto => produto.id === id)
    atualizarProduto.nome = nome
    atualizarProduto.preco = preco
    atualizarProduto.estoque = estoque
    return atualizarProduto
}

    function remover(id){
        produtos = produtos.filter(produto => produto.id != id)
        return produtos
    }

    function operarLoja(operacao){
        switch(operacao){
            case 'adicionar':
                adicionar(id, nome, preco, estoque)
                listar()
                console.log('Produto adicionado!')
                break;
            case 'listar':
                listar()
                break;
            case 'buscarPorNome':
                buscarPorNome(nome)
                console.log(`id:${id}, nome:${nome}, preço:${preco}, estoque:${estoque} `)
                break;
            case 'atualizar':
                atualizar(id, nome, preco, estoque)
                listar()
                console.log('Produto atualizado!')
                break;
            case 'remover':
                remover(id)
                listar()
                console.log('Produto Removido!')
                break;
        default:
            console.log('Produto inexistente!')
            break;
    }
}
let produtos = [
  {id: 1, nome: "Laxante", preco: 10.00, estoque: 25},
  {id: 2, nome: "Macarrão", preco: 15.00, estoque: 50},
  {id: 3, nome: "Bife", preco: 27.00, estoque: 30},
  {id: 4, nome: "cano PVC", preco: 33.00, estoque: 20},
  {id: 5, nome: "PlayStation 5", preco: 1200, estoque: 5}
];

operarLoja(operacao)