const produto1 = new Produto(1, 'Caneta', 'Escritório', 'Fornecedor A', 1.50, 100);
const produto2 = new Produto(2, 'Caderno', 'Escritório', 'Fornecedor B', 5.00, 50);

const controleEstoque = new ControleEstoque();
controleEstoque.inventario.adicionarProduto(produto1);
controleEstoque.inventario.adicionarProduto(produto2);

controleEstoque.registrarMovimentacao(produto1, 20, 'entrada');
controleEstoque.registrarMovimentacao(produto2, 10, 'saida');

console.log(controleEstoque.inventario.listarProdutos());
console.log(controleEstoque.listarMovimentacoes());
