class Difference {
  constructor(arr) {
    this.elements = arr;
    this.maximumDifference = 0;
  }

  computeDifference() {
    let max = -1;
    let min = 101; // Initialize to values that are outside the range of possible input

    for (let i = 0; i < this.elements.length; i++) {
      if (this.elements[i] > max) {
        max = this.elements[i];
        console.log(max);
      }
      if (this.elements[i] < min) {
        min = this.elements[i];
        console.log(min);
      }
    }

    this.maximumDifference = Math.abs(max - min);
  }
}

// Example usage:
const elementsArray = [1, 2, 5];
const difference = new Difference(elementsArray);
difference.computeDifference();
console.log("Maximum Absolute Difference:", difference.maximumDifference);
