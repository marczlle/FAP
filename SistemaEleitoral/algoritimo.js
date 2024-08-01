const readline = require('readline-sync') //constante para requerir o pacote readline que vai ser utilizado pra pedir informações do usuário

//criar um objeto vazio para colocar os candidatos

let votos = {
    candidato1: 0,
    candidato2: 0,
    candidato3: 0,
}

//pedir quantidade de eleitores

console.log('Eleição: \nCandidato 1: Digite 1 \nCandidato 2: Digite 2 \nCandidato 3: Digite 3')

let eleitores = readline.questionInt('Digite o número de eleitores: ')

//votar

count = 0

while( count < eleitores) {
    let voto = readline.question('Qual seu voto? ')

    switch(voto){
        case '1':
            votos.candidato1++
            console.log(`você votou no primeiro candidato.`)
            break;
        case '2':
            votos.candidato2++
            console.log(`você votou no segundo candidato.`)
            break;
        case '3':
            votos.candidato3++
            console.log(`você votou no terceiro candidato.`)
            break;
        default:
            console.log('Opção inválida! Tente novamente.')
            break;
    }
count++
}

console.log(`Resultado eleicao: \nCandidato 1: ${votos.candidato1} \nCandidato 2: ${votos.candidato2} \nCandidato 3: ${votos.candidato3}`)
