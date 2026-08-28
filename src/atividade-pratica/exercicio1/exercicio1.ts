/*
1. ELEVAR ELEMENTOS AO QUADRADO
   Crie um programa que calcule o quadrado de cada elemento de um array utilizando duas estratégias:
   a) Iterando com "for" simples.
   b) Iterando com "forEach".
*/

export function elementosAoQuadradoFor(valores: number[]) {
    let quadrados: number[] = new Array(valores.length);
    for(let i=0; i < valores.length; i++) {
        quadrados[i] = valores[i]*valores[i];
    }

    return quadrados;
}

// let numeros: number[] = [3, 5, 7, 3, 8, 9, 1];
// console.log(elementosAoQuadradoFor(numeros));

export function elementosAoQuadradoEach(valores: number[]) {
    let quadrados: number[] = [];
    valores.forEach(numero => quadrados.push(numero*numero));

    return quadrados;
}

// console.log(elementosAoQuadradoEach(numeros));