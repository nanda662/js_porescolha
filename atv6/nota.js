// Array para armazenar os registros dos alunos
let alunos = [];
const MAX_ALUNOS = 20;

// Função para cadastrar alunos
function cadastrar() {
    if (alunos.length < MAX_ALUNOS) {
        let nome = prompt("Digite o nome do aluno:");
        let notas = [];
        
        // Cadastro das 4 notas bimestrais
        for (let i = 1; i <= 4; i++) {
            let nota = parseFloat(prompt(`Digite a nota do ${i}º bimestre para ${nome}:`));
            notas.push(nota);
        }
        
        alunos.push({
            nome: nome,
            notas: notas,
            media: calcularMedia(notas)
        });

        // Após cadastrar, ordenar a lista por nome
        ordenarPorNome();
    } else {
        alert("Máximo de alunos cadastrados!");
    }
}

// Função para calcular a média das notas
function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

// Função para verificar se o aluno está aprovado ou reprovado
function verificarAprovacao(media) {
    return media >= 5 ? "Aprovado" : "Reprovado";
}

// Função para pesquisar alunos pelo nome e exibir a média e situação
function pesquisar() {
    let nomePesquisa = prompt("Digite o nome do aluno para pesquisar:");
    let encontrado = false;
    
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nome.toLowerCase() === nomePesquisa.toLowerCase()) {
            alert(`Nome: ${alunos[i].nome}`);
            alert(`Média: ${alunos[i].media.toFixed(2)}`);
            alert(`Situação: ${verificarAprovacao(alunos[i].media)}`);
            encontrado = true;
            break;
        }
    }
    
    if (!encontrado) {
        alert("Aluno não encontrado!");
    }
}

// Função para ordenar os registros dos alunos por nome
function ordenarPorNome() {
    alunos.sort((a, b) => a.nome.localeCompare(b.nome));
    alert("Alunos ordenados por nome.");
}

// Função para exibir todos os registros com médias e aprovação/reprovação
function mostrarTodos() {
    if (alunos.length === 0) {
        alert("Nenhum aluno cadastrado.");
    } else {
        alunos.forEach((aluno, index) => {
            alert(`${index + 1}. Nome: ${aluno.nome}`);
            alert(`Média: ${aluno.media.toFixed(2)}`);
            alert(`Situação: ${verificarAprovacao(aluno.media)}`);
            alert("------------------------");
        });
    }
}

// Função principal para exibir o menu e controlar o fluxo do programa
function menu() {
    let opcao;
    do {
        opcao = prompt(
            "Menu:\n" +
            "1. Cadastrar Aluno\n" +
            "2. Pesquisar Aluno por Nome\n" +
            "3. Mostrar Todos os Alunos\n" +
            "4. Sair\n" +
            "Escolha uma opção:"
        );
        
        switch (parseInt(opcao)) {
            case 1:
                cadastrar();
                break;
            case 2:
                pesquisar();
                break;
            case 3:
                mostrarTodos();
                break;
            case 4:
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida!");
        }
    } while (opcao != 4);
}

// Executar o menu
menu();
