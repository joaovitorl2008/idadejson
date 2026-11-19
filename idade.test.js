const verificarIdade = require('./idade');

describe('Verificação de Idade', () => {
  test('retorna true para uma idade adulta (ex: 25)', () => {
    expect(verificarIdade(25)).toBe(true);
  });

  test('retorna false para uma idade menor de idade (ex: 15)', () => {
    expect(verificarIdade(15)).toBe(false);
  });

  test('retorna true para a idade limite (18)', () => {
    expect(verificarIdade(18)).toBe(true);
  });

  // Opcional: testes parametrizados com test.each
  describe('Casos adicionais com test.each', () => {
    test.each([
      [0, false],
      [17, false],
      [18, true],
      [60, true],
    ])('para a idade %i, deve retornar %s', (idade, esperado) => {
      expect(verificarIdade(idade)).toBe(esperado);
    });
  });

  // Opcional: tratamento de valores inválidos
  describe('Valores inválidos', () => {
    test('lança erro para número negativo', () => {
      expect(() => verificarIdade(-5)).toThrow(
        'Erro: A idade não pode ser negativa'
      );
    });

    test('lança erro para valor não numérico (texto)', () => {
      expect(() => verificarIdade('vinte')).toThrow(
        'Erro: Informe um valor numérico válido'
      );
    });

    test('lança erro para NaN', () => {
      expect(() => verificarIdade(NaN)).toThrow(
        'Erro: Informe um valor numérico válido'
      );
    });
  });
});