let id
let nome
let preco
let estoque
let operacao

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
    return produtos.push('{id: 6, nome: "Lixeira", preco = 25, estoque: 10}')
}

function listar(){
    for (const p of produtos) {
      console.log(p)
    }
}

function buscarPorNome(nome){
    const nomeProduto = produtos.filter(produto => produto.nome === nome)
    return nomeProduto
}

function atualizar(id, nome, preco, estoque){
    const idEncontrado = produtos.find(produto => produto.id === id)
    idEncontrado.nome = nome
    idEncontrado.preco = preco
    idEncontrado.estoque = estoque
    return idEncontrado
}

const produtos = [
  {id: 1, nome: "Laxante", preco: 10.00, estoque: 25},
  {id: 2, nome: "Macarrão", preco: 15.00, estoque: 50},
  {id: 3, nome: "Bife", preco: 27.00, estoque: 30},
  {id: 4, nome: "cano PVC", preco: 33.00, estoque: 20},
  {id: 5, nome: "PlayStation 5", preco: 1.200, estoque: 5}
];
