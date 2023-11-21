// This JavaScript code is a function called `main` that reads a string `S` and tries
// convert it to a number using the `Number(S)` function. Here is a step-by-step explanation of the code:

// 1. `const S = readLine();`: This line reads a line of input using the `readLine()` function
// (assuming `readLine()` is defined somewhere in the execution environment).
// The read string is stored in the constant `S`.

// 2. `isNaN(Number(S)) ? error : console.log(S);`:
// This line tries to convert the string `S` into a number using the `Number(S)` function. Here's how it works:

// - `Number(S)` tries to convert the string `S`
// into a number. If the conversion is successful, the result is a number; otherwise,
// the result will be NaN (Not-a-Number).

// - `isNaN()` is a function that checks whether the value
// passed as argument is NaN. Therefore, `isNaN(Number(S))` checks whether the conversion of `S`
// for a number resulted in NaN.

// - The ternary operator `? :` is used to make a
// conditional check. If the expression `isNaN(Number(S))` is true
// (i.e. the conversion resulted in NaN), it executes `error`, otherwise it executes `console.log(S)`.

// 3. `catch (err) { console.log("Bad String"); }`: This `catch` block catches any exception that may be thrown within the `try` block. If converting `S` to number results in an exception (for example, if `S` cannot be converted to number), then it prints "Bad String".

// In short, the code tries to convert the string `S` to a number and, if successful, prints the number. If the conversion is not successful and an exception is thrown, it prints "Bad String". This allows the program to handle invalid input in a controlled way, rather than throwing an unhandled error.
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
