const Calculadora = require("./calculadora");

describe("Calculadora", () => {
  const numero1 = 10;
  const numero2 = 5;

  test("Deve realizar a soma dos dois valores recebidos", () => {
    const resultadoEsperado = 15;
    const resultado = Calculadora.soma(numero1,numero2);

    expect(resultado).toBe(resultadoEsperado);
  });

   test("Deve realizar a subtracao dos dois valores recebidos", () => {
    const resultadoEsperado = 5;
    const resultado = Calculadora.subtracao(numero1,numero2);

    expect(resultado).toBe(resultadoEsperado);
   });
  
   test("Deve realizar a multiplicacao dos dois valores recebidos", () => {
    const resultadoEsperado = 50;
    const resultado = Calculadora.multiplicacao(numero1,numero2);

    expect(resultado).toBe(resultadoEsperado);
   });
  
   test("Deve realizar a divisao dos dois valores recebidos", () => {
    const resultadoEsperado = 2;
    const resultado = Calculadora.divisao(numero1,numero2);

    expect(resultado).toBe(resultadoEsperado);
   });
  
     test("Deve realizar a expressao dos dois valores recebidos", () => {
    const resultadoEsperado = 5.5;
    const resultado = Calculadora.expressao(numero1,numero2);

    expect(resultado).toBe(resultadoEsperado);
  });
});
