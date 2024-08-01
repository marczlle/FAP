const readlineSync = require('readline-sync');

let nota1 = readlineSync.questionFloat("Insira a nota da primeira prova:");
let nota2 = readlineSync.questionFloat("Insira a nota da segunda prova:");


var media = (nota1 + nota2) / 2;

if (media >= 7) {
 console.log("Parabéns! Você foi aprovado com média: ", media);
} else if (media <= 5) {
 console.log("Você está de recuperação com média: ", media);
} else {
 console.log("Infelizmente você foi reprovado com média: ", media);
}
