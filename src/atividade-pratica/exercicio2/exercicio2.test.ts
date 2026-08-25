import arrayFormatado from "./exercicio2";

test('Array formatado com espaços entre as strings', () => {
  expect(arrayFormatado(['Arrays', 'com', 'TypeScript'])).toBe("Arrays com TypeScript");
});