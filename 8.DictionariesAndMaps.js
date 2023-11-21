function processData(input) {
  // Split the input into lines using line breaks \n
  input = input.split("\n");

  // Creating an array to store phone numbers
  var phoneBook = [];

  //Loop that starts from the second to the number of queries informed in the first line of the input
  for (i = 1; i <= parseInt(input[0]); i++) {
    // Split each line into an array using space as a separator
    var contactArray = input[i].split(" ");
    
    //Store the phone number associating the name as key and number as value
    phoneBook[contactArray[0]] = contactArray[1];
  }

  // Checks if the name provided in the query exists in the phoneBook and prints the corresponding phone number
  // or "Not found" otherwise.
  for (i = parseInt(input[0]) + 1; i < input.length; i++) {
    if (phoneBook[input[i]]) {
      // Se existir, ele imprime o nome e o número de telefone correspondente
      console.log(input[i] + "=" + phoneBook[input[i]]);
    } else {
      // Se não existir ele imprime "Not Found"
      console.log("Not found");
    }
  }
}

// Using ` ` (template literals) allows you to create multi-line strings, making it easier
// include line breaks and maintain readable formatting.
const input = `3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`;

processData(input);
