// Descrição: Criar uma interface ProdutoInterface que possua as seguintes propriedades:
// ● nome: string
// ● preco: number
// ● descricao ?: string(opcional)
// ● quatidadeEmEstoque: boolean
// Criar uma classe Produto que implementa ProdutoInterface.
// Criar um método que exibir o nome, preco do produto.
// Criar uma instância de um produto.

import { describe } from "node:test";

interface ProdutoInterface{
    nome: string;
    preco: number;
    descricao?: string;
    emEstoque: boolean;
}

class produto implements ProdutoInterface{
    nome: string;
    preco: number;
    emEstoque: boolean;
    descricao?: string;

    constructor(nome: string, preco: number, emEstoque: boolean, descricao?: string){
    this.nome = nome;
    this.preco = preco;
    this.emEstoque = emEstoque;
    this.descricao = descricao;
    }

    exibir(): string{
        return `Produto:${this.nome} \nPreço:${this.preco}`
    }
}

const produto1 = new produto('Caneta', 150, true);

console.log(produto1.exibir())

interface Ifuncionario{
    nome: string;
    cargo: string;
    salario: number;
    horasTrabalhadas: number;
}

class funcionario implements Ifuncionario{
    nome: string;
    cargo: string;
    salario: number;
    horasTrabalhadas: number;

    constructor(nome:string, cargo:string, salario:number, horasTrabalhadas:number) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.horasTrabalhadas = horasTrabalhadas;
    }

    calcularPagamento(): string {
        const pagamentoPorHora = this.salario / (this.horasTrabalhadas)
        return `Seu pagamento por hora é: ${pagamentoPorHora} \nE seu salário foi de:${this.salario}`
    }
}

const funcionario1 = new funcionario('teste1', 'teste1',1000, 8)
const funcionario2 = new funcionario('teste2', 'teste3', 1700, 8)

console.log(funcionario1.calcularPagamento())
console.log(funcionario2.calcularPagamento())
