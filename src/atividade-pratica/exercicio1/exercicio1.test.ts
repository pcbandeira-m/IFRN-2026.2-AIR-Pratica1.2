import { elementosAoQuadrado } from "./exercicio1";

let numeros: number[] = [3, 5, 7, 3, 8, 9, 1];

test('Quadrado dos elementos do array', () => {
  expect(elementosAoQuadrado(numeros)).toEqual([9, 25, 49, 9, 64, 81, 1]);
});