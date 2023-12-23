class Conta {
    constructor(saldoInicial) {
        let saldo = saldoInicial;

        this.getSaldo = () => saldo;

        this.depositar = (valor) => {
            saldo += valor;
            console.log(`Depósito de ${valor} feito. Novo saldo: ${saldo}`);
        };

        this.sacar = (valor) => {
            if (saldo >= valor) {
                saldo -= valor;
                console.log(`Saque de ${valor} feito. Novo saldo: ${saldo}`);
            } else {
                console.log('Saldo insuficiente para saque.');
            }
        };

        this.realizarOperacao = (tipoOperacao, valor) => {
            if (tipoOperacao === 'deposito') {
                this.depositar(valor);
            } else if (tipoOperacao === 'saque') {
                this.sacar(valor);
            } else {
                console.log('Operação não reconhecida.');
            }
        };
    }
}

class ContaCorrente extends Conta {
    constructor(saldoInicial, limite) {
        super(saldoInicial);
        this.limite = limite;
    }

    sacar(valor) {
        if (this.getSaldo() + this.limite >= valor) {
            super.sacar(valor);
        } else {
            console.log('Limite de saque excedido.');
        }
    }

    realizarOperacao(tipoOperacao, valor) {
        if (tipoOperacao === 'saque') {
            this.sacar(valor);
        } else {
            console.log('Operação não permitida para Conta Corrente.');
        }
    }
}

class ContaPoupanca extends Conta {
    calcularJuros(taxa) {
        const saldo = this.getSaldo();
        const juros = saldo * taxa / 100;
        super.depositar(juros);
        console.log(`Juros de ${juros} creditados. Novo saldo: ${this.getSaldo()}`);
    }

    realizarOperacao(tipoOperacao, valor) {
        if (tipoOperacao === 'deposito') {
            this.depositar(valor);
        } else {
            console.log('Operação não permitida para Conta Poupança.');
        }
    }
}

// Lógica da interface

function depositarContaCorrente() {
    const valor = parseFloat(document.getElementById('ccDeposit').value);
    minhaContaCorrente.depositar(valor);
    atualizarSaldo('cc');
}

function sacarContaCorrente() {
    const valor = parseFloat(document.getElementById('ccWithdraw').value);
    minhaContaCorrente.sacar(valor);
    atualizarSaldo('cc');
}

function depositarContaPoupanca() {
    const valor = parseFloat(document.getElementById('cpDeposit').value);
    minhaContaPoupanca.depositar(valor);
    atualizarSaldo('cp');
}

function atualizarSaldo(tipo) {
    let saldoElement;
    if (tipo === 'cc') {
        saldoElement = document.getElementById('ccSaldo');
        saldoElement.textContent = `Saldo: $${minhaContaCorrente.getSaldo()}`;
    } else if (tipo === 'cp') {
        saldoElement = document.getElementById('cpSaldo');
        saldoElement.textContent = `Saldo: $${minhaContaPoupanca.getSaldo()}`;
    }
}

// Criando as contas
const minhaContaCorrente = new ContaCorrente(500, 200);
const minhaContaPoupanca = new ContaPoupanca(1000);

// Inicializando os saldos na interface
document.addEventListener('DOMContentLoaded', () => {
    atualizarSaldo('cc');
    atualizarSaldo('cp');
});
