import ordemDecrescente from "./exercicio3";

let palavras: string[] = ['carro', 'boneco', 'ave', 'lapis'];

test('Array formatado em ordem (alfabética) decrescente', () => {
  expect(ordemDecrescente(palavras)).toEqual([ 'lapis', 'carro', 'boneco', 'ave' ]);
});