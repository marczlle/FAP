//Desafio Calculo Salario

var readlineSync = require('readline-sync');

// Valor Ganho por hora

var ganhoHora = readlineSync.questionFloat("Quanto voce ganha por hora? ")
var horasTrabalhadas = readlineSync.questionFloat("Informe o numero de horas trabalhadas no mes: ")

// calculo

var resultado = (ganhoHora * horasTrabalhadas);

// Exibicao

console.log(`O total do salário é de: R$ ${resultado.toFixed(2)}`)
