import ordemDecrescente from "./exercicio3";

test('Array formatado em ordem (alfabética) decrescente', () => {
  expect(ordemDecrescente(['carro', 'boneco', 'ave', 'lapis'])).toBe([ 'lapis', 'carro', 'boneco', 'ave' ]);
});