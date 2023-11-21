class Difference {
  constructor(arr) {
    this.elements = arr; // Initializes the 'elements' property with the input array
    this.maximumDifference = 0; // Initializes the 'maximumDifference' property to 0
  }

  // Method to compute the maximum absolute difference in the 'elements' array
  computeDifference() {
    let max = -1; // Initialize a variable to track the maximum value found in the array
    let min = 101; // Initialize to values that are outside the range of possible input

    // Loop through the 'elements' array to find the maximum and minimum values
    for (let i = 0; i < this.elements.length; i++) {
      if (this.elements[i] > max) {
        max = this.elements[i]; // Update 'max' if a larger value is encountered
        console.log(max);
      }
      if (this.elements[i] < min) {
        min = this.elements[i]; // Update 'min' if a smaller value is encountered
        console.log(min);
      }
    }

    // Calculate the maximum absolute difference between 'max' and 'min'
    this.maximumDifference = Math.abs(max - min);
  }
}

// Example usage:
const elementsArray = [1, 2, 5]; // Sample array of elements
const difference = new Difference(elementsArray); // Create a new 'Difference' object
difference.computeDifference(); // Compute the maximum absolute difference within the array
console.log("Maximum Absolute Difference:", difference.maximumDifference); // Output the computed maximum absolute difference
