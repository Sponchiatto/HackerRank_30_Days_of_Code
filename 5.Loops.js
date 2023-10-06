// Task
// Given an integer, , print its first  multiples. 
// Each multiple  (where ) should be printed on a new line in the form: n x i = result.

function main() {
  var N = parseInt(readLine());

  // Loop For Clássico, (inicialização; condição; expressão final)
  for (let x = 1; x < 11; x++) {
    const result = N * x;
    console.log(N + " x " + x + " = " + result);
  }
}

// readLine(), O módulo Readline em Node.js permite a leitura do fluxo de entrada linha por linha. 
// Este módulo envolve a saída padrão do processo e os objetos de entrada padrão do processo. 
// O módulo Readline facilita a entrada e a leitura da saída fornecida pelo usuário