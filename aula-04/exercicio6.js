// rie uma classe chamada "Retângulo" com os atributos largura e altura. Adicione um construtor para inicializar esses atributos. Implemente um método para calcular a área do retângulo. Crie objetos de retângulos com diferentes dimensões e exiba suas áreas. 🟩📏

class Retangulo {
    constructor(largura, altura) {
        this.altura = altura;
        this.largura = largura;
    }

    areaRetangulo() {
        console.log(`Àrea do Retângulo: ${this.altura * this.largura}`)
    }
}

const retangulo1 = new Retangulo(10, 10)

retangulo1.areaRetangulo()