// Task
// Given an integer, , perform the following conditional actions:
// If  is odd, print Weird
// If  is even and in the inclusive range of  to , print Not Weird
// If  is even and in the inclusive range of  to , print Weird
// If  is even and greater than , print Not Weird
// Complete the stub code provided in your editor to print whether or not  is weird.

function main() {
  const N = parseInt(readLine().trim(), 10);

  // Estrutura condicional de Ifs e elses
  // Se o resto da divisão de N por 2 for diferente de 0, print Weird.
  if (N % 2 !== 0) {
    console.log("Weird");
  // Porém, se N estiver entre 2 e 5, print Not Weird
  } else {
    if (N >= 2 && N <= 5) {
      console.log("Not Weird");
    
    //  Porém se N estiver entre 6 e 20, imprima estranho
    } else if (N >= 6 && N <= 20) {
      console.log("Weird");
    
      // Se nenhbuma condição for atendida, imprima Not Weird
    } else {
      console.log("Not Weird");
    }
  }
}