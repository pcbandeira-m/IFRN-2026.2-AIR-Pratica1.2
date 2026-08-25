import numerosPares from "./exercicio5";

let numeros: number[] = [8, 3, 9, 5, 6, 12];

test('Filtragem de números pares', () => {
  expect(numerosPares(numeros)).toEqual([ 8, 6, 12 ]);
});