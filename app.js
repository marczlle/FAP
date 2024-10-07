"use strict";
// Descrição: Criar uma interface ProdutoInterface que possua as seguintes propriedades:
// ● nome: string
// ● preco: number
// ● descricao ?: string(opcional)
// ● quatidadeEmEstoque: boolean
// Criar uma classe Produto que implementa ProdutoInterface.
// Criar um método que exibir o nome, preco do produto.
// Criar uma instância de um produto.
Object.defineProperty(exports, "__esModule", { value: true });
var produto = /** @class */ (function () {
    function produto(nome, preco, emEstoque, descricao) {
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.descricao = descricao;
    }
    produto.prototype.exibir = function () {
        return "Produto:".concat(this.nome, " \nPre\u00E7o:").concat(this.preco);
    };
    return produto;
}());
var produto1 = new produto('Caneta', 150, true);
console.log(produto1.exibir());
var funcionario = /** @class */ (function () {
    function funcionario(nome, cargo, salario, horasTrabalhadas) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.horasTrabalhadas = horasTrabalhadas;
    }
    funcionario.prototype.calcularPagamento = function () {
        var pagamentoPorHora = this.salario / (this.horasTrabalhadas);
        return "Seu pagamento por hora \u00E9: ".concat(pagamentoPorHora, " \nE seu sal\u00E1rio foi de:").concat(this.salario);
    };
    return funcionario;
}());
var funcionario1 = new funcionario('teste1', 'teste1', 1000, 8);
var funcionario2 = new funcionario('teste2', 'teste3', 1700, 8);
console.log(funcionario1.calcularPagamento());
console.log(funcionario2.calcularPagamento());
