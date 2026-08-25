/*
1. ELEVAR ELEMENTOS AO QUADRADO
   Crie um programa que calcule o quadrado de cada elemento de um array utilizando duas estratégias:
   a) Iterando com "for" simples.
   b) Iterando com "forEach".
*/

export function elementosAoQuadrado(valores: number[]) {
    let quadrados: number[] = new Array(valores.length);

    for(let i=0; i < valores.length; i++) {
        quadrados[i] = valores[i]*valores[i];
    }

    return quadrados;
}