//HOTEL
var readlineSync = require('readline-sync');

function inicioDoPrograma() {

    let tipoQuarto = readlineSync.question("Qual tipo de quarto? ")
    let quantidadeDias = readlineSync.questionInt("Quantas diárias? ")

   
     function calculo2(a, quantidadeDias) {
         return a * quantidadeDias;
     }

    if (tipoQuarto == 'standard') {
        console.log(`Tipo de quarto: Standard
          Quantidade de diárias: ${quantidadeDias}
          Valor total da estadia: R$ ${calculo2(150, quantidadeDias)}`);
    } else if (tipoQuarto == 'luxo') {
        console.log(`Tipo de quarto: Luxo
          Quantidade de diárias: ${quantidadeDias}
          Valor total da estadia: R$ ${calculo2(300, quantidadeDias)}`);
    } else if (tipoQuarto == 'suite') {
        console.log(`Tipo de quarto: Suíte
          Quantidade de diárias: ${quantidadeDias}
          Valor total da estadia: R$ ${calculo2(500, quantidadeDias)}`);
    } else{
         console.warn('Opção inválida, tente novamente!');
         inicioDoPrograma()
     }

}
inicioDoPrograma() 
