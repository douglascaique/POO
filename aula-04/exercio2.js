class Pessoa {
    constructor(nome, idade, cidade) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }
    mostra() {
        console.log(`${this.nome} tem ${this.idade} de idade e mora na cidade de ${this.cidade}  `)
    }
}
const pessoa1 = new Pessoa('Douglas', '25', 'Salvador');
const pessoa2 = new Pessoa('Luciana', '32', 'Aracaju');
const pessoa3 = new Pessoa('Leonardo', '35', 'Feira de Santana');

pessoa1.mostra()
pessoa2.mostra()
pessoa3.mostra()