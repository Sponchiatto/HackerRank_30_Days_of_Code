// Classes são usadas para criar objetos com métodos e propriedades.
class Calculator {
  // Método power
  power(n, p) {
    if (n < 0 || p < 0) {
      throw "n and p should be non-negative";
    } else {
      return Math.pow(n, p);
    }
  }
}

// Exemplo de uso:
// A palavra new é usada para criar uma instância de uma classe. 
const calc = new Calculator();

// É o mesmo que tentar, se der certo realiza o método power. Se não der certo imprima mensagem de erro.
try {
  const result = calc.power(2, 3);
  console.log(result); // Deve imprimir 8
} catch (error) {
  console.error(error.message); // Se um erro for lançado, imprime a mensagem de erro
}

// Classes:
// O uso de classes é mais adequado quando você deseja criar objetos com métodos e propriedades relacioandos.
// Neste caso, a classe Calculator é criada para encapsular a funcionalidade de cálculo de potência.

// Isso permite que você crie várias instâncias da classe Calculator, cada uma mantendo seu próprio estado (se necessário)
// podendo chamar o método 'power' nelas.

// Classes são mais adequadas quando você tem uma funcionalidade mais complexa que envolve várias funções ou métodos
// relacionados. 

// Função:
// Se você precisa manter o estado e propriedade de um objeto e só precisa de uma função para calcular potências
// você pode simplesmente criar uma função.
// function power(n, p) {
//   if (n < 0 || p < 0) {
//     throw "n and p should be non-negative";
//   } else {
//     return Math.pow(n, p);
//   }
// }

// Ou seja, vai depender do seu projeto. Se você precisa de objetos com estado e propriedades associadas,
// classe é mais adequada. Se você precisa de uma funcinalidade simples, uma função pode ser mais direta.

// Propriedades: As propriedades são as características específicas de um objeto que o definem. 
// Elas representam os dados associados a esse objeto. Por exemplo, se estamos lidando com um objeto 
// "Car" (carro), suas propriedades podem incluir a marca, o modelo, a cor, a velocidade atual e assim por diante. 
// As propriedades descrevem o que um objeto é e contêm informações sobre ele.

// Estado: O "estado" de um objeto é o conjunto atual de valores em suas propriedades em um determinado momento. 
// Em outras palavras, o estado é uma representação instantânea das informações contidas nas propriedades do objeto 
// em um ponto específico no tempo. Quando você altera as propriedades de um objeto, seu estado muda. Portanto, 
// o estado é uma forma de descrever o que o objeto "é" neste momento.

// Em resumo, as propriedades são as informações específicas contidas em um objeto, e o estado é a representação 
// dessas informações em um determinado momento. A relação é que o estado de um objeto é determinado pelas 
// propriedades desse objeto. À medida que as propriedades mudam, o estado do objeto também muda. Portanto, esses 
// termos estão relacionados e frequentemente usados em conjunto ao discutir objetos em programação orientada a 
// objetos.