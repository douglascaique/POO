// Crie uma classe chamada "Produto" com os atributos nome, preço e quantidade em estoque. Implemente um construtor para inicializar esses atributos e métodos para calcular o valor total em estoque e para adicionar ou remover unidades do estoque. Crie objetos de produtos e teste os métodos. 

class Produto {
    constructor(nome, preco, quantidadeEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
    }

    valorTotalEmEstoque() {
        console.log(`O valor total em estoque é de R$: ${this.preco * this.quantidadeEstoque}`)
    }

    adicionarAoEstoque(quantidade) {
        this.quantidadeEstoque += quantidade;
        console.log(`Do estoque total de foi adicionado ${quantidade} unidades no estoque
        total em estoque ${this.quantidadeEstoque}`)
    }

    removerDoEstoque(quantidade) {
        if (this.quantidade >= quantidade) {
            this.quantidadeEstoque -= quantidade;

            console.log(`Foi removido ${quantidade} unidades no estoque
        total em estoque ${this.quantidadeEstoque}`)

        } else {
            console.log('Quantidade insuficiente em estoque.');
        }
    }

}


const produto1 = new Produto('Camisa', 20.90, 50);
const produto2 = new Produto('Tenis All Star', 209.99, 35)

console.log('Valor total em estoque (produto1):', produto1.valorTotalEmEstoque());
console.log('Valor total em estoque (produto2):', produto2.valorTotalEmEstoque());

produto1.adicionarAoEstoque(20);
console.log('Novo total em estoque (produto1) após adição:', produto1.valorTotalEmEstoque());

produto2.removerDoEstoque(50);
console.log('Novo total em estoque (produto2) após remoção:', produto2.valorTotalEmEstoque());