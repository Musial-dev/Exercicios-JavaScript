/*
Crie um programa que dado um numero imprima a sua tabuada 
*/

let numero = 10;

for (var i = 1; i <= 10; i++) {
    console.log(i * numero);
}


/*
Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero par encontrado.
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function ehPar(numero) {
  return numero % 2 === 0;
}

for (let i = 0; i < numeros.length; i++) {
  if (ehPar(numeros[i])) {
    console.log(numeros[i]);
  }
}