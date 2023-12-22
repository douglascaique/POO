class Circulo {
    constructor(raio) {
        this.raio = raio;
    }

    calculaArea() {
        console.log("Área: ", Math.PI * this.raio ** 2);
    }

    calculaPerimetro() {
        console.log("Perímetro: ", 2 * Math.PI * this.raio);
    }

}


const circulo1 = new Circulo(30)

circulo1.calculaArea()
circulo1.calculaPerimetro()
