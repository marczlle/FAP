// Sistema de hotel
var readlineSync = require('readline-sync');

var tipoQuarto = readlineSync.question("Qual tipo de quarto? ")
var quantidadeDias = readlineSync.question("Quantas diárias? ")

if (tipoQuarto == "standard") {
    var calculoStandart = quantidadeDias * 150
    console.log(`Tipo de quarto: Standard
        Quantidade de diárias: ${quantidadeDias}
        Valor total da estadia: R$ ${calculoStandart.toFixed(2)}`);
} else if (tipoQuarto == "luxo") {
    var calculoLuxo = quantidadeDias * 300
    console.log(`Tipo de quarto: Luxo
        Quantidade de diárias: ${quantidadeDias}
        Valor total da estadia: R$ ${calculoLuxo.toFixed(2)}`);
} else if (tipoQuarto == "suite") {
    var calculoSuite = quantidadeDias * 500
    console.log(`Tipo de quarto: Suíte
        Quantidade de diárias: ${quantidadeDias}
        Valor total da estadia: R$ ${calculoSuite.toFixed(2)}`);
    }
