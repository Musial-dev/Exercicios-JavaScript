
/*
Refaça o exercicio abaixo utilizando funções:

Elabore um algoritmo que calcule o que deve ser pago por um produto,
considerando o preço normal da etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida
e efetuar o calculo adequato:

1 - A vista Debito, recebe 10% de desconto;
2 - A visto no Dinheiro ou Pix, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros; 
4 - Acima de duas vezes; preço normal de etiqueta mais juros de 10%; 
*/

function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100));
}

let precoEtiqueta = 100;
let formaDePagamento = 1;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(aplicarJuros(precoEtiqueta, 10));
}