// Task
// Given an array, , of  integers, print 's elements in reverse order as a single
// line of space-separated numbers.

function reverseOrder(input) {
  // Reverses the order of elements in the 'input' array and assigns the result to 'reversed'
  const reversed = input.reverse();

  // The join() method joins all the elements of an array (or an array-like object)
  //  into a string and returns this string.
  const reversedString = reversed.join(" ");
  console.log(reversedString);
}

const myArray = [1, 2, 3, 4, 5];
reverseOrder(myArray);
