// variável padrão do readline 

let readlineSync = require('readline-sync');

// variáveis

let nome = readlineSync.question("Digite seu nome: ");
let whatsapp = readlineSync.question("Digite seu número de Whatsapp: ");
let peso =readlineSync.questionFloat("Digite seu peso: ");
let altura = readlineSync.questionFloat("Digite sua altura: ");

// conta consumo ideal de água diário

let aguaDiaria = (peso * 0.035)

console.log(`Olá ${nome}, sua quantidade diária de água deve ser de: ${aguaDiaria.toFixed(3)}L`)

// cálculo imc

let imc = peso / (altura ** 2);

// tabela IMC

if (imc < 18.5){
    console.log(`Seu IMC é ${imc.toFixed(2)}, você está abaixo do peso.`);
} else if (imc > 18.5, imc < 24.9 ) {
    console.log(`Seu IMC é ${imc.toFixed(2)}, você está no peso normal.`);
} else if (imc > 25, imc < 29.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)}, você tem sobrepeso.`);
} else if (imc > 30, imc < 34.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)}, você tem obesidade grau 1 (leve).`);
} else if (imc > 35, imc < 39.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)}, você tem obesidade grau 2 (moderada).`);
} else { (imc > 40)
    console.log(`Seu IMC é ${imc.toFixed(2)}, você tem obesidade grau 3 (mórbida).`);
}
