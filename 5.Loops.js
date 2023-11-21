// Task
// Given an integer, , print its first  multiples.
// Each multiple  (where ) should be printed on a new line in the form: n x i = result.

function main(N) {
  // var N = parseInt(readLine());

  // Loop For Clássico, (inicialização; condição; expressão final)
  for (let x = 1; x < 11; x++) {
    const result = N * x;
    console.log(N + " x " + x + " = " + result);
  }
}

main(6);

// readLine(), The Readline module in Node.js allows reading the input stream line by line.
// This module wraps the process standard output and the process standard input objects.
// Readline module makes it easy to input and read user-supplied output
