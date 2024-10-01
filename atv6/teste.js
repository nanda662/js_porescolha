let agenda = [];
const MAX = 10;

function cadastrar() {
    if (agenda.length < MAX) {
        let nome = prompt("Digite o nome:");
        let endereco = prompt("Digite o endereço:");
        let telefone = prompt("Digite o telefone:");
        
        agenda.push({
            nome: nome,
            endereco: endereco,
            telefone: telefone
        });
    } else {
        alert("Agenda cheia!");
    }
}

function pesquisar() {
    let nomePesquisa = prompt("Digite o nome para pesquisar:");
    let encontrado = false;
    
    for (let i = 0; i < agenda.length; i++) {
        if (agenda[i].nome.toLowerCase() === nomePesquisa.toLowerCase()) {
            alert(`Nome: ${agenda[i].nome}\nEndereço: ${agenda[i].endereco}\nTelefone: ${agenda[i].telefone}`);
            encontrado = true;
            break;
        }
    }
    
    if (!encontrado) {
        alert("Registro não encontrado!");
    }
}

function ordenar() {
    agenda.sort((a, b) => a.nome.localeCompare(b.nome));
    alert("Registros ordenados por nome.");
}

function mostrarTodos() {
    if (agenda.length === 0) {
        alert("Nenhum registro cadastrado.");
    } else {
        agenda.forEach((pessoa, index) => {
            alert(`${index + 1}. Nome: ${pessoa.nome}\nEndereço: ${pessoa.endereco}\nTelefone: ${pessoa.telefone}\n`);
        });
    }
}

function menu() {
    let opcao;
    do {
        opcao = prompt(
            "Menu:\n" +
            "1. Cadastrar\n" +
            "2. Pesquisar por nome\n" +
            "3. Ordenar por nome\n" +
            "4. Mostrar todos os registros\n" +
            "5. Sair\n" +
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
                ordenar();
                break;
            case 4:
                mostrarTodos();
                break;
            case 5:
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida!");
        }
    } while (opcao != 5);
}

// Executar o menu
menu();
