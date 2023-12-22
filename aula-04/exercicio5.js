// Crie uma classe chamada "Livro" com os atributos título, autor e ano de publicação. Implemente um construtor para esta classe. Crie objetos de livros e exiba suas informações. 📖✍️📅

class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;

    }

    mostrar() {
        console.log(`${this.titulo} é um livro de ${this.autor} lançado em ${this.ano}`)
    }
}

const livro1 = new Livro('Eragon', 'Paolini', 2017)
const livro2 = new Livro('Eu sou o Número Quatro', 'Pittacus Lore', 2006)


livro1.mostrar()
livro2.mostrar()