// Declare second integer, double, and String variables.
// Read and save an integer, double, and String to your variables.
// Print the sum of both integer variables on a new line.
// Print the sum of the double variables on a new line.
// Concatenate and print the String variables on a new line
// The 's' variable above should be printed first.
let i;
let d;
let s;

// Parse integer, this command takes a string and returns a number in the specified base.
i = parseInt("12");
// Parse Double, takes a string and returns a decimal number
d = parseFloat("4.0");
s = "is the best place to learn and practice coding!"; // Read string

// Perform operations
const sumInt = 4 + i;
const sumDouble = 4.0 + d;
const concatenatedString = "HackerRank " + s;

// Print results
console.log(sumInt);
console.log(sumDouble.toFixed(1)); // Print double with one decimal place. toFixed() número de casas para fixar
console.log(concatenatedString);
