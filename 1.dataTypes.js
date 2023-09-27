// Declare variables for int, double, and string
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
