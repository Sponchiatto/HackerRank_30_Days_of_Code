// Declare second integer, double, and String variables.

// Read and save an integer, double, and String to your variables.

// Print the sum of both integer variables on a new line.

// Print the sum of the double variables on a new line.

// Concatenate and print the String variables on a new line

// The 's' variable above should be printed first.
let i;
let d;
let s;


// Parse integer, ou Analisar Inteiro, esse comando pega uma string e retorna um número na base especificada.
i = parseInt(readLine()); 
// Parse Double, ou analisar flutuante, pega uma string e retorna um número decimal
d = parseFloat(readLine()); 
s = readLine(); // Read string

// Perform operations
const sumInt = 4 + i;
const sumDouble = 4.0 + d;
const concatenatedString = "HackerRank " + s;

// Print results
console.log(sumInt);
console.log(sumDouble.toFixed(1)); // Print double with one decimal place. toFixed() número de casas para fixar
console.log(concatenatedString);
