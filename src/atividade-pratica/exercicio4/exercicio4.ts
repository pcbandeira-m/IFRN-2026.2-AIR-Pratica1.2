/*
4. EXTRAÇÃO DOS PRIMEIRA SELEÇÃO
   Leia o array e pegue apenas os dois primeiros elementos utilizando o método SLICE do Array.
*/

export function fatiaDoArray(valores:number[]): number[] {
    let resultado: number[];

    if(valores == null) {
        console.log("Array vazio")
        return resultado = valores;
    } else if(valores.length == 1) {
        console.log("Este array está vazio")
        return resultado = valores;
    } else {
        resultado = valores.slice(0, 2)
    }

    return resultado;
} 

// let numeros: number[] = [2, 4, 6, 2, 8, 9, 5];
// console.log(fatiaDoArray(numeros));