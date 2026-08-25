/*
5. FILTRAGEM DE NÚMEROS PARES
   Leia o array e extraia apenas os elementos pares utilizando o método FILTER do Array, passando uma arrow function como parâmetro.
*/

let numerosPares = (numeros:number[]) => numeros.filter(numero => numero%2 == 0);

// let numeros:number[] = [8, 3, 9, 5, 6, 12];
// console.log(numerosPares(numeros));

export default numerosPares;