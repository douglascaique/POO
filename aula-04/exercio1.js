class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    mostra() {
        console.log(`Informações sobre o veículo: 
        MARCA: ${this.marca} 
        MODELO ${this.modelo} 
        ANO: ${this.ano}  `)
    }
}
const carro1 = new Carro('toyota', 'SWV', '2011');
const carro2 = new Carro('Citroen', 'SUV', '2023')
const carro3 = new Carro('Wolsvagem', 'SUV', '2023')

carro1.mostra()
carro2.mostra()