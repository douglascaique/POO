class Animal {
    constructor(nome, especie, idade) {
        this.nome = nome;
        this.especie = especie;
        this.idade = idade
    }

    exibeInfo() {
        console.log(`O animal ${this.nome}, da espécie ${this.especie} ja tem por volta de ${this.idade} anos de idade`)
    }
}

const gato1 = new Animal('Hime', 'Felino', 5)

gato1.exibeInfo()