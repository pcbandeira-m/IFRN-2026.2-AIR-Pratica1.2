import { elementosAoQuadradoFor, elementosAoQuadradoEach } from "./exercicio1";

const numeros: number[] = [3, 5, 7, 3, 8, 9, 1];
const resultadoEsperado: number[] = [9, 25, 49, 9, 64, 81, 1];

test('Quadrado dos elementos do array usando "for"', () => {
  expect(elementosAoQuadradoFor(numeros)).toEqual(resultadoEsperado);
});

test('Quadrado dos elementos do array usando "forEach"', () => {
  expect(elementosAoQuadradoEach(numeros)).toEqual(resultadoEsperado);
});