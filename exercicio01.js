/*
Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade
calcule e imprima a sua media e a sua classificação conforme a tabela abaixo:

Media = (nota 1 + nota 2 + nota 3) / 3 

Classificação:
Media menor que 5 - reprovação 
Média entre 5 e 7 - recuperação 
Média acima de 7 - passou de semestre;
*/

let notaUm = 8
let notaDois = 10
let notaTres = 9
let mediaDasNotas = (notaUm + notaDois + notaTres) / 3;

if (mediaDasNotas < 5) {
    console.log("O aluno reprovou")
} else if (mediaDasNotas >= 5 && mediaDasNotas < 8) {
    console.log("O aluno irá para recuperação")
} else {
    console.log("Parabéns, o aluno passou de ano!")
}