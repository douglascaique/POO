// Desenvolva uma classe chamada "ContaCorrente" com os atributos número da conta, saldo e nome do titular. Implemente um construtor para esta classe. Crie métodos para depositar e sacar dinheiro da conta. Teste esses métodos em objetos de conta corrente. 💳💵🏦

class ContaCorrente {
    constructor(numeroConta, saldo, nomeTitular) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.nomeTitular = nomeTitular;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`${valor} depositado em conta.
    Saldo total: ${this.saldo}`)
    }

    sacar(valor) {
        this.saldo -= valor;
        console.log(`${valor} sacado da conta.
        Saldo total: ${this.saldo}`)
    }
}

const conta1 = new ContaCorrente(10102, 1000, 'Luis')

conta1.depositar(50)
conta1.sacar(50)