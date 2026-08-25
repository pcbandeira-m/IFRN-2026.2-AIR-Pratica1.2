import { Humano, Gato } from "./exercicio6";

test('Testando métodos mover() e comer() das classes que implementam Animal', () => {
  // 1. Instanciando as classes
  const humano = new Humano("Magali", 1.5, 50);
  const gato = new Gato("Preto", "Macho", 4, true);

  // 2. Espionando (spy) o console.log para validar a saída dos métodos
  const consoleSpy = vi.spyOn(console, 'log'); // Use jest.spyOn se estiver usando Jest

  // Testando execução inicial dos métodos
  humano.mover();
  expect(consoleSpy).toHaveBeenCalledWith("Correndo muito rápido. Uau!");

  humano.comer();
  expect(consoleSpy).toHaveBeenCalledWith("Comendo quantidades cavalares de comida.");

  gato.mover();
  expect(consoleSpy).toHaveBeenCalledWith("Correndo absurdamente rápido!");

  gato.comer();
  expect(consoleSpy).toHaveBeenCalledWith("Comendo ração na tigelinha, nhami nhami");

  // 3. Alterando os atributos dos objetos
  humano.nome = "João";
  humano.altura = 1.5;
  humano.peso = 95;

  gato.peso = 12;
  gato.domesticado = false;

  // Testando novamente os métodos após a alteração dos atributos
  humano.mover();
  expect(consoleSpy).toHaveBeenCalledWith("Correndo lentamente... zZzZzZzZ");

  humano.comer();
  expect(consoleSpy).toHaveBeenCalledWith("Comendo normalmente.");

  gato.mover();
  expect(consoleSpy).toHaveBeenCalledWith("Caminhando sem pressa.");

  gato.comer();
  expect(consoleSpy).toHaveBeenCalledWith("Comendo de sua própria caça, uau!");

  // Limpa o spy após os testes
  consoleSpy.mockRestore();
});