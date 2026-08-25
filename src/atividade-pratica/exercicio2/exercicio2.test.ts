import arrayFormatado from "./exercicio2";

let palavras: string[] = ['Arrays', 'com', 'TypeScript'];

test('Array formatado com espaços entre as strings', () => {
  expect(arrayFormatado(palavras)).toBe("Arrays com TypeScript");
});