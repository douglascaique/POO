// Crie uma classe chamada "Celular" com os atributos marca, modelo e armazenamento interno. Implemente um construtor para esta classe. Crie métodos para adicionar aplicativos ao celular e verificar o espaço disponível. Crie objetos de celulares e teste os métodos. 📱📥💾

class Celular {
    constructor(marca, modelo, armazenamentoInterno) {
        this.marca = marca;
        this.modelo = modelo;
        this.armazenamentoInterno = armazenamentoInterno;
        this.espacoUtilizado = 0;
        this.aplicativosInstalados = [];
    }

    adicionarAplicativo(nome, tamanho) {
        if (this.espacoUtilizado + tamanho <= this.armazenamentoInterno) {
            this.aplicativosInstalados.push(nome);
            this.espacoUtilizado += tamanho;
            console.log(`Aplicativo "${nome}" instalado.`);
        } else {
            console.log(`Espaço insuficiente para instalar o aplicativo "${nome}".`);
        }
    }

    verificarEspacoDisponivel() {
        const espacoDisponivel = this.armazenamentoInterno - this.espacoUtilizado;
        console.log(`Espaço disponível: ${espacoDisponivel} MB`);
        return espacoDisponivel;
    }
}

const celular1 = new Celular('Samsung', 'Galaxy S20', 512);
const celular2 = new Celular('Apple', 'iPhone 12', 256);

celular1.adicionarAplicativo('Instagram', 100);
celular1.adicionarAplicativo('WhatsApp', 50);
celular1.adicionarAplicativo('YouTube', 200);

celular2.adicionarAplicativo('Facebook', 80);
celular2.adicionarAplicativo('Twitter', 60);

celular1.verificarEspacoDisponivel();
celular2.verificarEspacoDisponivel();