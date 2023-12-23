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
    }
}

// Exemplo de uso:
const minhaConta = new Conta(100);
console.log(`Saldo inicial: ${minhaConta.getSaldo()}`);
minhaConta.depositar(50);
minhaConta.sacar(30);


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
}

class ContaPoupanca extends Conta {
    calcularJuros(taxa) {
        const saldo = this.getSaldo();
        const juros = saldo * taxa / 100;
        super.depositar(juros);
        console.log(`Juros de ${juros} creditados. Novo saldo: ${this.getSaldo()}`);
    }
}

// Exemplo de uso:
const minhaContaCorrente = new ContaCorrente(200, 100);
minhaContaCorrente.depositar(50);
minhaContaCorrente.sacar(300);

const minhaContaPoupanca = new ContaPoupanca(500);
minhaContaPoupanca.calcularJuros(2);
