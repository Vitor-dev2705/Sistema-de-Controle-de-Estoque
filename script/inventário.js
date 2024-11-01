class Movimentacao {
    constructor(produto, quantidade, tipo) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.tipo = tipo; // 'entrada' ou 'saida'
    }
}

class ControleEstoque {
    constructor() {
        this.inventario = new Inventario();
        this.movimentacoes = [];
    }

    registrarMovimentacao(produto, quantidade, tipo) {
        const movimentacao = new Movimentacao(produto, quantidade, tipo);
        this.movimentacoes.push(movimentacao);

        if (tipo === 'entrada') {
            this.inventario.atualizarQuantidade(produto.id, produto.quantidade + quantidade);
        } else if (tipo === 'saida') {
            this.inventario.atualizarQuantidade(produto.id, produto.quantidade - quantidade);
        }
    }

    listarMovimentacoes() {
        return this.movimentacoes;
        
    }
}


