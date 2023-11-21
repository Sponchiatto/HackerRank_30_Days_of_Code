// Task
// Given a string, , of length  that is indexed from  to , print its even-indexed and odd-indexed
// characters as  space-separated strings on a single line (see the Sample below for more detail).

// Note:  is considered to be an even index.

// My Solution, only accepts one string at a time. And for this Challange it needs to aceept multiple strings.
// So I used the second code.
// function processData(input) {
//   //Enter your code here
//   let string = input;

//   let evenChars = "";
//   let oddChars = "";

//   for (let i = 0; i < string.length; i++) {
//     if (i % 2 === 0) {
//       evenChars += string[i];
//     } else {
//       oddChars += string[i];
//     }
//   }
//   return evenChars + " " + oddChars;
// }

// The difference here is that, the code 2 prints the results for each input line separatly in console.
// So, This code accepts an input string that can contain multiple lines, where each line is processed separately.
// It splits the input into lines using input.split("\n") and then iterates through the lines.
// For each line, it separates the characters into even and odd positions and stores them in the even and odd variables.
// Instead of returning a single string, it prints the outputs for each line in the console.
// The output consists of multiple lines, where each line contains the even and odd characters
// separated by a space.
function processData(input) {
  //Enter your code here
  input = input.split("\n");

  for (let i = 1; i < input.length; i++) {
    var splitWord = input[i].split("");
    // console.log(splitWord);
    var even = "";
    var odd = "";

    for (x = 0; x < splitWord.length; x++) {
      if (x % 2 == 0) {
        even = even + splitWord[x];
      } else {
        odd = odd + splitWord[x];
      }
      // console.log("Even:" + even);
      // console.log("Odd:" + odd);
    }
    // console.log(even + " " + odd);
  }
}

processData("2\nHacker\nRank");
