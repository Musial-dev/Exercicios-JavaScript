/*
O IMC - Indice de Massa Corporal é um criterio da Orgnanização Mundial de Saude para dar 
uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre
sua condição de acordo com a tabela abaixo: 

Abaixo de 18.5 - Abaixo do peso;
Entre 18.5 e 25 - Peso normal;
Entre 25 e 30 - Acima do peso;
Entre 30 e 40 - Obeso;
Acima de 40 - Obesidade Grave; 
*/

let peso = 70; 
let altura = 1.78;
let calculoImc = peso / (altura * altura);

if (calculoImc < 18.5){
    console.log("Abaixo do peso")
} else if (calculoImc >= 18.5 && calculoImc < 25){
    console.log("Peso normal")
} else if (calculoImc >= 25 && calculoImc < 30){
    console.log("Acima do peso")
} else if (calculoImc >= 30 && calculoImc < 40){
    console.log("Obeso")
} else {
    console.log("Obesidade Grave")
}