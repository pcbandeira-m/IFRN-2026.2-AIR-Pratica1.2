/*
3. ORDENAÇÃO DECRESCENTE
   Ordene os elementos de um array de forma decrescente utilizando o método SORT do Array, passando uma arrow function como parâmetro.
*/

let ordemDecrescente = (lista: string[]) => lista.sort((a:string, b:string) => a > b ? -1 : 1);

// let palavras = ['carro', 'boneco', 'ave', 'lapis'];
// console.log(ordemDecrescente(palavras));

export default ordemDecrescente;