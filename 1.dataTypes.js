// Declare second integer, double, and String variables.

// Read and save an integer, double, and String to your variables.

// Print the sum of both integer variables on a new line.

// Print the sum of the double variables on a new line.

// Concatenate and print the String variables on a new line

// The 's' variable above should be printed first.
let i;
let d;
let s;

// Read input from stdin
i = parseInt(readLine()); // Parse integer
d = parseFloat(readLine()); // Parse double
s = readLine(); // Read string

// Perform operations
const sumInt = 4 + i;
const sumDouble = 4.0 + d;
const concatenatedString = "HackerRank " + s;

// Print results
console.log(sumInt);
console.log(sumDouble.toFixed(1)); // Print double with one decimal place
console.log(concatenatedString);
