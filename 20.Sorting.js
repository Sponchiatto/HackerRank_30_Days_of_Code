function countSwaps(a) {
  let numSwaps = 0; // Variable to count the number of swaps

  // Outer loop iterates over each element in the array
  for (let i = 0; i < a.length; i++) {
    // Inner loop performs bubble sort by comparing adjacent elements
    for (let j = 0; j < a.length - 1; j++) {
      // If the current element is greater than the next element, swap them
      if (a[j] > a[j + 1]) {
        let temp = a[j]; // Temporary variable to hold the current element
        a[j] = a[j + 1]; // Swap the current element with the next element
        a[j + 1] = temp; // Place the next element in the current position
        numSwaps++; // Increment the swap counter
      }
    }
  }

  // Output information about the sorting process
  console.log(`Array is sorted in ${numSwaps} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
}

const array = [4, 2, 1, 5, 3]; // Array to be sorted (replace this with your array)
countSwaps(array); // Call the function to sort the array and count swaps
