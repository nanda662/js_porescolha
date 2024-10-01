// Array para armazenar os registros dos funcionários
let funcionarios = [];
const MAX_FUNCIONARIOS = 20;

// Função para cadastrar os funcionários
function cadastrar() {
    if (funcionarios.length < MAX_FUNCIONARIOS) {
        for (let i = funcionarios.length; i < MAX_FUNCIONARIOS; i++) {
            let matricula = prompt(`Digite a matrícula do ${i + 1}º funcionário:`);
            let nome = prompt(`Digite o nome do ${i + 1}º funcionário:`);
            let salario = parseFloat(prompt(`Digite o salário de ${nome}:`));
            
            funcionarios.push({
                matricula: parseInt(matricula),
                nome: nome,
                salario: salario
            });
        }
        // Ordenar os registros por matrícula após o cadastro
        funcionarios.sort((a, b) => a.matricula - b.matricula);
    } else {
        alert("Todos os 20 funcionários já foram cadastrados.");
    }
}

// Função para pesquisar um funcionário pelo número de matrícula
function pesquisarPorMatricula() {
    let matriculaPesquisa = parseInt(prompt("Digite a matrícula do funcionário que deseja pesquisar:"));
    let funcionario = funcionarios.find(f => f.matricula === matriculaPesquisa);

    if (funcionario) {
        alert(`Funcionário encontrado: Matrícula: ${funcionario.matricula}, Nome: ${funcionario.nome}, Salário: R$${funcionario.salario.toFixed(2)}`);
    } else {
        alert("Funcionário não encontrado.");
    }
}

function mostrarAcimaDeMil() {
    alert("Funcionários com salário acima de R$1.000,00:");
    funcionarios
        .filter(f => f.salario > 1000)
        .forEach(f => {
            alert(`Matrícula: ${f.matricula}, Nome: ${f.nome}, Salário: R$${f.salario.toFixed(2)}`);
        });
}

function mostrarAbaixoDeMil() {
    alert("Funcionários com salário abaixo de R$1.000,00:");
    funcionarios
        .filter(f => f.salario < 1000)
        .forEach(f => {
            alert(`Matrícula: ${f.matricula}, Nome: ${f.nome}, Salário: R$${f.salario.toFixed(2)}`);
        });
}

function mostrarIgualMil() {
    alert("Funcionários com salário igual a R$1.000,00:");
    funcionarios
        .filter(f => f.salario === 1000)
        .forEach(f => {
            alert(`Matrícula: ${f.matricula}, Nome: ${f.nome}, Salário: R$${f.salario.toFixed(2)}`);
        });
}

function menu() {
    let opcao;
    do {
        opcao = prompt(
            "Menu:\n" +
            "1. Cadastrar 20 Funcionários\n" +
            "2. Pesquisar por Matrícula\n" +
            "3. Mostrar funcionários com salário acima de R$1.000,00\n" +
            "4. Mostrar funcionários com salário abaixo de R$1.000,00\n" +
            "5. Mostrar funcionários com salário igual a R$1.000,00\n" +
            "6. Sair\n" +
            "Escolha uma opção:"
        );
        
        switch (parseInt(opcao)) {
            case 1:
                cadastrar();
                break;
            case 2:
                pesquisarPorMatricula();
                break;
            case 3:
                mostrarAcimaDeMil();
                break;
            case 4:
                mostrarAbaixoDeMil();
                break;
            case 5:
                mostrarIgualMil();
                break;
            case 6:
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida!");
        }
    } while (opcao != 6);
}

menu();
