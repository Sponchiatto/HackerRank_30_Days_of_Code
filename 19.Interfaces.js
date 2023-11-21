class Calculator {
  divisorSum(n) {
    let sum = 0;

    // Loop through numbers from 1 to n and check if they are divisors
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        sum += i;
      }
    }

    return sum;
  }
}

// Example usage:
const calculator = new Calculator();
const result = calculator.divisorSum(6); // Calculate the sum of divisors for 6
console.log(result); // Output: 12 (1 + 2 + 3 + 6)
