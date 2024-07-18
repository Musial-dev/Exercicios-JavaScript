/*
Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto medio de combustivel por km rodado.
Crie um método que dado a quantidade de km e o preço do combustivel nos de o valor
gasto em reais para realizar este percurso
*/

class Carro {
	marca; 
	cor;
	gastoMedioKm;

    constructor(marca, cor, gastoMedioKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

	calcularGastoViagem(distancia, precoCombustivel) {
        return distancia * this.gastoMedioKm * precoCombustivel;
    }
}

let chevette = new Carro ('Chevrolet', 'Vermelho', 1/12); 
console.log(chevette.calcularGastoViagem(70, 5));

let corsa = new Carro ('Chevrolet', 'Roxo', 1/10);
console.log(corsa.calcularGastoViagem(87, 5));

let omega = new Carro ('Chevrolet', 'Azul', 1/15);
console.log(corsa.calcularGastoViagem(90, 5));

let chevy = new Carro ('Chevrolet', 'Azul', 1/13);
console.log(corsa.calcularGastoViagem(80, 5));


