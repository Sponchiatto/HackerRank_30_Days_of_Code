
//Processa os dados de entrada, ou seja, verifica se os números são primos ou não
function processData(input) {

  //Aqui a entrada é divida em linhas.
  //Ou seja, uma array de strings, onde cada elemento é uma linha de entrada.
  const lines = input.trim().split("\n");

  //O primeiro valor em lines é o número de casos de teste,
  //portanto, ele é convertido para um número inteiro.
  const numTestCases = parseInt(lines[0]);

  //Esse loop itera por cada caso de teste
  for (let i = 1; i <= numTestCases; i++) {

    //Para cada caso de teste o valor n é extraído da linha e convertido para um inteiro
    const n = parseInt(lines[i]);

    //Variável que vai determinar se o número é primo ou não
    let isPrime = true;

    //Estrutura if para determinar se n não é primo
    if (n <= 1) {
      isPrime = false;
    } else if (n <= 3) {
      isPrime = true;
    } else if (n % 2 === 0 || n % 3 === 0) {
      isPrime = false;
    } else {

    //Esse Loop otimiza a verificação no caso de números muito grandes
    // Loop que verifica se n é divisível por números na forma 6k +- 1
    // O loop ocmeça com j inicializando em 5. Porque já verficamos antes com os casos especiais antes
    // j * j verifica se o quadrado de j é menor ou igual a n, pois se n for divisível por algum
    //número maior que a sua raiz quadrada, então ele também é divisível por um número menor que sua raiz quadrada
    // j += 6 Dentro do loop é incrementado 6 a cada iteração. Aqui estamos verificando a divisiblidade de n por números
    // na forma 6(k +- 1) -> 5 (6k - 1)
    // Para cada valor de j verificamos se n é divisível por j ou por j + 2. Se for n for divisível por um desses
    // números isso significa que n não é primo.
      for (let j = 5; j * j <= n; j += 6) {
        if (n % j === 0 || n % (j + 2) === 0) {
          isPrime = false;
          break;
        }
      }
    }

    if (isPrime) {
      console.log("Prime");
    } else {
      console.log("Not prime");
    }
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
