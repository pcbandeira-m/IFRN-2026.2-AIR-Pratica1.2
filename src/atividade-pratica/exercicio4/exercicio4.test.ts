import { fatiaDoArray } from "./exercicio4";

let numeros: number[] = [2, 4, 6, 2, 8, 9, 5];

test('Array formatado em ordem (alfabética) decrescente', () => {
  expect(fatiaDoArray(numeros)).toEqual([ 2, 4 ]);
});