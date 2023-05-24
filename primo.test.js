const primo = require('./primo');

describe('Teste da função primo', () => {
  test('Deve retornar true se o número tiver apenas 2 divisores', () => {
    const numero = 7;
    expect(primo(numero)).toBe(true);
  });

  test('Deve retornar false se o número tiver mais de 2 divisores', () => {
    const numero = 10;
    expect(primo(numero)).toBe(false);
  });
});

