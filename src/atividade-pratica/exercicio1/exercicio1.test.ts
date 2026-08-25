import { elementosAoQuadrado } from "./exercicio1";

test('Quadrado dos elementos do array numeros = [3, 5, 7, 3, 8, 9, 1]', () => {
  expect(elementosAoQuadrado([3, 5, 7, 3, 8, 9, 1])).toBe([9, 25, 49, 9, 64, 81, 1]);
});