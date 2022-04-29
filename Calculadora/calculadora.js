class Calculadora {
  static soma(numero1, numero2) {
    return numero1 + numero2;
  }

   static subtracao(numero1, numero2) {
    return numero1 - numero2;
   }
  
   static multiplicacao(numero1, numero2) {
    return numero1 * numero2;
   }
  
   static divisao(numero1, numero2) {
    return numero1 / numero2;
   }
  
    static expressao(numero1, numero2) {
    return numero1 + numero2 / numero1 - numero2;
  }
}

module.exports = Calculadora;
