const readline = require('readline-sync');

let lista = [];

function showMenu() {
    console.log('===== MENU ===== \n1 - Adicionar tarefa \n2 - Excluir tarefa \n3 - Listar tarefas \n4 - Alterar tarefa \n5 - Sair do sistema');
    let menu = readline.question('Digite a opção desejada: ');

    switch (menu) {
        case '1':
            let nomeTarefa = readline.question('Nome da tarefa que deseja adicionar: ');
            adicionar(nomeTarefa);
            break;
        case '2':
            let excluir = readline.question('Que tarefa você quer excluir? ');
            deletar(excluir);
            break;
        case '3':
            listarTodos();
            break;
        case '4':
            let nomeAtual = readline.question('Qual o nome da tarefa que você quer alterar? ');
            alterar(nomeAtual);
            break;
        case '5':
            return;
        default:
            console.log('Opção inválida! Tente novamente.');
            showMenu();
    }
}

showMenu();

function adicionar(tarefa) {
    lista.push({ tarefa });
    console.log(`Tarefa ${tarefa} adicionado à lista.`);
    let opcao = readline.question('Quer adicionar mais alguma tarefa? (y/n) ');
    if (opcao.toLowerCase() === 'y') {
        let novaTarefa = readline.question('Que tarefa você quer adicionar? ');
        adicionar(novaTarefa);
    } else {
        showMenu();
    }
}

function deletar(tarefa) {
    let index = lista.findIndex(t => t.tarefa === tarefa); 
    if (index !== -1) {
        lista.splice(index, 1);
        console.log(`Tarefa ${tarefa} removida da lista.`);
    } else {
        console.log(`Tarefa ${tarefa} não encontrada na equipe.`);
    }
    showMenu();
}

function alterar(nomeAtual) {
    let index = lista.findIndex(t => t.tarefa === nomeAtual);
    if (index !== -1) {
        let novoNome = readline.question('Como deseja nomear a tarefa? ');
        lista[index].tarefa = novoNome;
        console.log(`Titulo da tarefa alterado de ${nomeAtual} para ${novoNome}.`);
    } else {
        console.log(`Tarefa ${nomeAtual} não encontrada na equipe.`);
    }
    showMenu();
}

function listarTodos() {
    if (lista.length === 0) {
        console.log('A equipe está vazia.');
    } else {
        console.log('Lista de tarefas:');
        lista.forEach((tarefas, index) => {
            console.log(`${index + 1}. ${tarefas.tarefa}`);
        });
    }
    showMenu();
}
