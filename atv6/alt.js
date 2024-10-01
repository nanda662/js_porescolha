let pessoas = [];
const MAX_PESSOAS = 15;

function cadastrar() {
    if (pessoas.length < MAX_PESSOAS) {
        for (let i = pessoas.length; i < MAX_PESSOAS; i++) {
            let nome = prompt(`Digite o nome da ${i + 1}ª pessoa:`);
            let altura = parseFloat(prompt(`Digite a altura de ${nome}:`));
            
            pessoas.push({
                nome: nome,
                altura: altura
            });
        }
    } else {
        alert("Todas as 15 pessoas já foram cadastradas.");
    }
}

function mostrarMenoresOuIguais() {
    alert("Pessoas com altura menor ou igual a 1.5m:");
    pessoas.forEach(pessoa => {
        if (pessoa.altura <= 1.5) {
            alert(`Nome: ${pessoa.nome}, Altura: ${pessoa.altura}m`);
        }
    });
}

function mostrarMaiores() {
    alert("Pessoas com altura maior que 1.5m:");
    pessoas.forEach(pessoa => {
        if (pessoa.altura > 1.5) {
            alert(`Nome: ${pessoa.nome}, Altura: ${pessoa.altura}m`);
        }
    });
}

function mostrarEntre15e20() {
    alert("Pessoas com altura entre 1.5m e 2.0m:");
    pessoas.forEach(pessoa => {
        if (pessoa.altura > 1.5 && pessoa.altura < 2.0) {
            alert(`Nome: ${pessoa.nome}, Altura: ${pessoa.altura}m`);
        }
    });
}

function calcularMediaAlturas() {
    let soma = 0;
    pessoas.forEach(pessoa => {
        soma += pessoa.altura;
    });
    let media = soma / pessoas.length;
    alert(`A média das alturas é: ${media.toFixed(2)}m`);
}

function menu() {
    let opcao;
    do {
        opcao = prompt(
            "Menu:\n" +
            "1. Cadastrar 15 Pessoas\n" +
            "2. Mostrar pessoas com altura <= 1.5m\n" +
            "3. Mostrar pessoas com altura > 1.5m\n" +
            "4. Mostrar pessoas com altura entre 1.5m e 2.0m\n" +
            "5. Calcular e mostrar média das alturas\n" +
            "6. Sair\n" +
            "Escolha uma opção:"
        );
        
        switch (parseInt(opcao)) {
            case 1:
                cadastrar();
                break;
            case 2:
                mostrarMenoresOuIguais();
                break;
            case 3:
                mostrarMaiores();
                break;
            case 4:
                mostrarEntre15e20();
                break;
            case 5:
                calcularMediaAlturas();
                break;
            case 6:
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida!");
        }
    } while (opcao != 6);
}

// Executar o menu
menu();
