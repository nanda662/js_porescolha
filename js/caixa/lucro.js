// Variáveis globais
let saldo = 1000.0;
let nomeUsuario = "";
const senhaCorreta = "3589";
let extrato = ["Compra: -R$50,00", "Depósito: +R$200,00", "Compra: -R$30,00"];

// Função para verificar senha
function verificarSenha() {
    let senha = prompt("Digite sua senha:");
    if (senha !== senhaCorreta) {
        alert("Senha incorreta. Tente novamente.");
        return false;
    }
    return true;
}

// Função de saudação
function boasVindas() {
    nomeUsuario = prompt("Por favor, informe o seu nome:");
    alert(`Olá ${nomeUsuario}, é um prazer ter você por aqui!`);
}

// Função para mostrar saldo
function verSaldo() {
    if (verificarSenha()) {
        alert(`Seu saldo atual é: R$${saldo.toFixed(2)}`);
    }
}

// Função para saque
function sacarDinheiro() {
    if (verificarSenha()) {
        let valor = parseFloat(prompt("Informe o valor para saque: R$"));
        if (isNaN(valor) || valor <= 0) {
            alert("Operação não autorizada. O valor precisa ser maior que zero.");
        } else if (valor > saldo) {
            alert("Operação não autorizada. Saldo insuficiente.");
        } else {
            saldo -= valor;
            extrato.push(`Saque: -R$${valor.toFixed(2)}`);
            alert(`Saque realizado com sucesso! Saldo restante: R$${saldo.toFixed(2)}`);
        }
    }
}

// Função para depósito
function depositarDinheiro() {
    let valor = parseFloat(prompt("Informe o valor para depósito: R$"));
    if (isNaN(valor) || valor <= 0) {
        alert("Operação não autorizada. O valor precisa ser maior que zero.");
    } else {
        saldo += valor;
        extrato.push(`Depósito: +R$${valor.toFixed(2)}`);
        alert(`Depósito realizado com sucesso! Seu novo saldo é: R$${saldo.toFixed(2)}`);
    }
}

// Função para ver extrato
function verExtrato() {
    if (verificarSenha()) {
        alert("Extrato:\n" + extrato.join("\n"));
    }
}

// Função para transferência
function transferirDinheiro() {
    if (verificarSenha()) {
        let numeroConta = prompt("Informe o número da conta de destino:");
        if (!/^\d+$/.test(numeroConta)) {
            alert("Número da conta inválido. Use apenas números.");
            return;
        }
        let valor = parseFloat(prompt("Informe o valor para transferência: R$"));
        if (isNaN(valor) || valor <= 0) {
            alert("Operação não autorizada. O valor precisa ser maior que zero.");
        } else if (valor > saldo) {
            alert("Operação não autorizada. Saldo insuficiente.");
        } else {
            saldo -= valor;
            extrato.push(`Transferência: -R$${valor.toFixed(2)} para conta ${numeroConta}`);
            alert(`Transferência realizada com sucesso! Seu novo saldo é: R$${saldo.toFixed(2)}`);
        }
    }
}

// Função de erro
function erro() {
    alert("Opção inválida. Tente novamente.");
}

// Função principal (menu)
function inicio() {
    while (true) {
        let opcao = prompt(
            "Menu Principal:\n" +
            "1 - Saldo\n" +
            "2 - Extrato\n" +
            "3 - Saque\n" +
            "4 - Depósito\n" +
            "5 - Transferência\n" +
            "6 - Sair\n" +
            "Escolha uma opção:"
        );

        switch (opcao) {
            case "1":
                verSaldo();
                break;
            case "2":
                verExtrato();
                break;
            case "3":
                sacarDinheiro();
                break;
            case "4":
                depositarDinheiro();
                break;
            case "5":
                transferirDinheiro();
                break;
            case "6":
                alert(`${nomeUsuario}, foi um prazer ter você por aqui!`);
                return; // Encerra o loop e sai do sistema
            default:
                erro();
        }
    }
}

// Execução do sistema
boasVindas();
inicio();
