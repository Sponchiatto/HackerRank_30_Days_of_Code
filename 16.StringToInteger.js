// Este código em JavaScript é uma função chamada `main` que lê uma string `S` e tenta
// convertê-la em um número usando a função `Number(S)`. Aqui está uma explicação passo a passo do código:

// 1. `const S = readLine();`: Esta linha lê uma linha de entrada usando a função `readLine()`
// (presumindo que `readLine()` esteja definido em algum lugar do ambiente de execução).
// A string lida é armazenada na constante `S`.

// 2. `isNaN(Number(S)) ? error : console.log(S);`:
// Esta linha tenta converter a string `S` em um número usando a função `Number(S)`. Aqui está como isso funciona:

//    - `Number(S)` tenta converter a string `S`
// em um número. Se a conversão for bem-sucedida, o resultado é um número; caso contrário,
// o resultado será NaN (Not-a-Number).

//    - `isNaN()` é uma função que verifica se o valor
// passado como argumento é NaN. Portanto, `isNaN(Number(S))` verifica se a conversão de `S`
// para um número resultou em NaN.

//    - O operador ternário `? :` é usado para fazer uma
// verificação condicional. Se a expressão `isNaN(Number(S))` for verdadeira
// (ou seja, a conversão resultou em NaN), ele executa `error`, caso contrário, ele executa `console.log(S)`.

// 3. `catch (err) { console.log("Bad String"); }`: Este bloco `catch` captura qualquer exceção que possa ser lançada dentro do bloco `try`. Se a conversão de `S` para número resultar em uma exceção (por exemplo, se `S` não puder ser convertido em número), então ele imprime "Bad String".

// Em resumo, o código tenta converter a string `S` em um número e, se for bem-sucedido, imprime o número. Se a conversão não for bem-sucedida e uma exceção for lançada, ele imprime "Bad String". Isso permite que o programa lide com entradas inválidas de forma controlada, em vez de lançar um erro não tratado.
function main() {
  const S = readLine();

  try {
    isNaN(Number(S)) ? error : console.log(S);
  } catch (err) {
    console.log("Bad String");
  }
}

// Chame a função com uma string que pode ser convertida para inteiro.
main("123"); // Deve imprimir 123

// Chame a função com uma string que não pode ser convertida para inteiro.
main("abc"); // Deve imprimir "Bad String"

// Chame a função com uma string vazia.
main(""); // Deve imprimir "Bad String"

// Chame a função com uma string que começa com números, mas contém caracteres não numéricos.
main("456abc"); // Deve imprimir "Bad String"

// function ReadString() {
//   const s = readLine(); // Read string

//   const integerValue = Number(s);

//   if (!isNaN(integerValue)) {
//     console.log(integerValue);
//   } else {
//     console.log("Bad String");
//   }
// }

// Chame a função com uma string que pode ser convertida para inteiro.
ReadString("123"); // Deve imprimir 123

// Chame a função com uma string que não pode ser convertida para inteiro.
ReadString("abc"); // Deve imprimir "Bad String"

// Chame a função com uma string vazia.
ReadString(""); // Deve imprimir "Bad String"

// Chame a função com uma string que começa com números, mas contém caracteres não numéricos.
ReadString("456abc"); // Deve imprimir "Bad String"
