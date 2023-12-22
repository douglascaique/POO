// Crie uma classe chamada "Casa" com os atributos endereço, número de quartos e área em metros quadrados. Adicione um construtor para inicializar esses atributos. Crie objetos de casas e imprima seus detalhes. 🏠🛏️📐

class Casa {
    constructor(endereco, numeroQuartos, area) {
        this.endereco = endereco;
        this.numeroQuartos = numeroQuartos;
        this.area = area;
    }

    detalhes() {
        console.log(`A seguinte casa se encontra no endereço ${this.endereco}, com ${this.numeroQuartos} quartos e uma àrea de ${this.area} m²`)
    }
}

const casa1 = new Casa('Avenida Luis Caldas', 5, 250)
const casa2 = new Casa('Rua Anisio Teixeira', 2, 100)

casa1.detalhes()

casa2.detalhes()