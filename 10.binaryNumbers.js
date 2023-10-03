function main() {
  //base 10 number
  // const n = parseInt(readLine().trim(), 10); - Node.js implementation
  const n = parseInt(prompt("Digite um número em decimal:"), 10); //JS implementation

  // Convert the integer to binary representation
  const binaryStr = n.toString(2);
  console.log(binaryStr);

  // Split the binary string by '0' to get an array of consecutive '1's
  const consecutiveOnes = binaryStr.split("0");
  console.log(consecutiveOnes);

  // Find the maximum length of consecutive '1's
  let maxConsecutiveOnes = 0;
  for (let i = 0; i < consecutiveOnes.length; i++) {
    if (consecutiveOnes[i].length > maxConsecutiveOnes) {
      maxConsecutiveOnes = consecutiveOnes[i].length;
    }
  }

  console.log(maxConsecutiveOnes);
}

main();
