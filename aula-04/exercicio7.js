// Desenvolva uma classe chamada "Aluno" com os atributos nome, matrícula e lista de notas. Implemente um construtor para inicializar os atributos e um método para calcular a média das notas do aluno. Crie objetos de alunos e calcule suas médias. 🎓📊

class Aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }

    calcularMedia() {
        if (this.notas.length === 0) {
            return 0;
        }

        const soma = this.notas.reduce((total, nota) => total + nota, 0); //percorre a lista e realiza a soma
        console.log(`A média de ${this.nome}, de matrícula ${this.matricula}
        Média:  ${soma / this.notas.length}`) // média = notas somadas/quantidade de notas
    }
}

const aluno1 = new Aluno('Lucas', '20017218775', [8, 7, 9, 6])
const aluno2 = new Aluno('Lua', '10223365488', [5, 9, 7, 10])

aluno1.calcularMedia()
aluno2.calcularMedia()