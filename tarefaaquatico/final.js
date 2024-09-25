const readline = require('readline-sync');

let organizacoes = [];
let ecossistemas = []; 

let nome = readline.question('Qual seu nome? ');
console.log(`Olá, ${ nome } !Seja bem-vindo ao sistema. Nosso objetivo é a Recuperação de Ecossistemas Aquáticos.`);

function showMenu(){
    console.log(`\nO que você quer fazer ?\n1 - Cadastrar uma organização \n2 - Deletar uma organização \n3 - Cadastrar um ecossistema \n4 - Deletar um ecossistema \n5 - Listar \n6 - Sair do programa`);
    let escolha = readline.question('Digite a opção desejada: ');

    switch(escolha){
        case '1':
            let nomeOrganizacao = readline.question('Qual o nome da organização? ');
            adicionarOrganizacao(nomeOrganizacao.toLowerCase());
            break;
        case '2':
            let nomeExcluirOrganizacao = readline.question('Que organização você quer excluir? ');
            deletarOrganizacao(nomeExcluirOrganizacao.toLowerCase());
            break;
        case '3':
            let nomeEcossistema = readline.question('Que Ecossistema você quer cadastrar? ');
            let nomeBuscarOrganizacao = readline.question('Qual organização você quer associar? ');
            adicionarEcossistema(nomeEcossistema, nomeBuscarOrganizacao.toLowerCase());
            break;
        case '4':
            let nomeExcluirEcossistema = readline.question('Qual ecossistema você quer excluir? ');
            deletarEcossistema(nomeExcluirEcossistema.toLowerCase());
            break;
        case '5':
            listarTudo();
            break;
        case '6':
            return;
        default:
            console.log('Opção inválida! Tente novamente.');
            showMenu();
    }
}

showMenu();

function adicionarOrganizacao(nomeOrganizacao){
    organizacoes.push({nome: nomeOrganizacao});
    console.log(`A organização ${ nomeOrganizacao } foi adicionada.`);

    let escolhaOrganizacao = readline.question('Quer adicionar mais alguma organização? (y/n) ');

    if (escolhaOrganizacao.toLowerCase() == 'y'){
        let anotherOrganizacao = readline.question('Qual o nome da nova organização? ');
        adicionarOrganizacao(anotherOrganizacao.toLowerCase());
    } else if (escolhaOrganizacao.toLowerCase() == 'n'){
        console.log('Retornando ao Menu...');
        showMenu();
    } else {
        console.log('Opção inválida! Tente novamente.');
        adicionarOrganizacao(nomeOrganizacao);
    }
}

function deletarOrganizacao(nomeOrganizacao){
    let index = organizacoes.findIndex(org => org.nome == nomeOrganizacao);
    if (index != -1){
        organizacoes.splice(index, 1);

        ecossistemas = ecossistemas.filter(e => e.organizacao != nomeOrganizacao); // remover ecossistemas associados
        console.log(`A organização ${ nomeOrganizacao } foi deletada do sistema.`);
    } else {
        console.log('Organização não encontrada. Tente novamente!');
    }
    showMenu();
}

function listarTudo(){
    if(organizacoes.length == 0){
        console.log('Não há o que listar!');
    } else {
        console.log('\nLista de organizações: ');
        organizacoes.forEach((org, index) => {
            console.log(`${ index + 1 }. ${ org.nome } `);
            let ecossistemasAssociados = ecossistemas.filter(e => e.organizacao == org.nome); // listar ecossistemas associados
            if (ecossistemasAssociados.length > 0) {
                console.log('   Ecossistemas:');
                ecossistemasAssociados.forEach((eco, i) => {
                    console.log(`   ${ i + 1 }. ${ eco.nome } `); // mostrar ecossistemas associados
                });
            } else {
                console.log('   Nenhum ecossistema associado.');
            }
        });
    }
    showMenu();
}

function adicionarEcossistema(nomeEcossistema, nomeOrganizacao){
    let organizacao = organizacoes.find(org => org.nome == nomeOrganizacao);
    if (!organizacao) {
        console.log('Organização não encontrada. \n Retornando ao menu...');
        showMenu();
        return;
    }

    let existe = ecossistemas.find(e => e.nome == nomeEcossistema); 
    if (existe){
        console.log('Este ecossistema já está adicionado.');
        showMenu();
        return;
    }

    ecossistemas.push({ nome: nomeEcossistema, organizacao: nomeOrganizacao }); // adicionar ecossistema com vínculo
    console.log(`O ecossistema ${ nomeEcossistema } foi associado à organização ${ nomeOrganizacao }.`);
    showMenu();
}

function deletarEcossistema(nomeEcossistema){
    let indexEcossistema = ecossistemas.findIndex(e => e.nome == nomeEcossistema); 
    if (indexEcossistema != -1){
        ecossistemas.splice(indexEcossistema, 1); 
        console.log(`O ecossistema ${ nomeEcossistema } foi deletado.`);
    } else {
        console.log('Ecossistema não encontrado!');
    }
    showMenu();
}
