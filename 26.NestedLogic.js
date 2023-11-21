function calculateFine(input) {
// split: divide em várias partes com base em espaços em branco (espaços, guias, quebras de linha)
// .map(Number): a cada parte do array resultante. A função Number é usada para converter cada parte em um número
  const [d1, m1, y1, d2, m2, y2] = input.split(/\s/).map(Number);
  if (
    y1 < y2 ||
    (y1 === y2 && m1 < m2) ||
    (y1 === y2 && m1 === m2 && d1 <= d2)
  ) {
    return 0; // No fine if returned on or before the expected return date
  } else if (y1 === y2 && m1 === m2) {
    return 15 * (d1 - d2); // Fine for returning after the expected return day but within the same month
  } else if (y1 === y2 && m1 > m2) {
    return 500 * (m1 - m2); // Fine for returning after the expected return month but within the same year
  } else {
    return 10000; // Fixed fine for returning after the expected year
  }
}

// Usando operador ternário
// function processData(input) {
//   //Enter your code here
//   const [d1, m1, y1, d2, m2, y2] = input.split(/\s/).map(Number);
//   if (y1 !== y2) console.log(y1 > y2 ? 10000 : 0);
//   else if (m1 !== m2) console.log(m1 > m2 ? (m1 - m2) * 500 : 0);
//   else console.log(d1 > d2 ? (d1 - d2) * 15 : 0);
// } 

// Example usage:
const expectedDay = 14;
const expectedMonth = 10;
const expectedYear = 2023;
const actualDay = 20;
const actualMonth = 10;
const actualYear = 2023;

const input = `${actualDay} ${actualMonth} ${actualYear} ${expectedDay} ${expectedMonth} ${expectedYear}`;
const fine = calculateFine(input);

console.log("Fine: $" + fine);
