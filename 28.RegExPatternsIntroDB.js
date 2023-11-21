// Filtrar uma lista de e-mails e primeiros nomes, filtrando apenas contas do Gmail

"use strict";

const input = `4
Alice alice@gmail.com
Bob bob@gmail.com
Charlie charlie@gmail.com
David david@yahoo.com`;

// Dividir o array de linhas usando o caractere de nova linha
const inputLines = input.split("\n");
let currentLine = 0;

function readLine() {
  return inputLines[currentLine++];
}
function main() {
  const N = parseInt(readLine().trim());
  const gmailNames = [];

  for (let NItr = 0; NItr < N; NItr++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
    const firstName = firstMultipleInput[0];
    const emailID = firstMultipleInput[1];

    if (emailID.endsWith(".com") && emailID.includes("@gmail.")) {
      gmailNames.push(firstName);
    }
  }

  // Sort the array alphabetically
  gmailNames.sort();

  // Print the names
  for (let i = 0; i < gmailNames.length; i++) {
    console.log(gmailNames[i]);
  }
}
main();
