class Produto {
    constructor(id, nome, categoria, fornecedor, preco, quantidade) {
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.fornecedor = fornecedor;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}

class Inventario {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    atualizarQuantidade(id, quantidade) {
        const produto = this.produtos.find(prod => prod.id === id);
        if (produto) {
            produto.quantidade = quantidade;
        }
    }

    listarProdutos() {
        return this.produtos;
    }
}
