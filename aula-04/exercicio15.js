// Crie uma classe chamada "Jogo" com os atributos nome, gênero e classificação etária. Implemente um construtor para esta classe. Crie objetos de jogos e exiba suas informações. 🎮🕹️📢

class Jogo {
    constructor(nome, genero, classificacaoEtaria) {
        this.nome = nome;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
    }

    info() {
        console.log(`NOME: ${this.nome} GENERO: ${this.genero} CLASSIFICAÇÃO ETÁRIA: ${this.classificacaoEtaria} anos`)
    }
}

const kh = new Jogo('Kingdom Hearts', 'RPG', 18)

kh.info()