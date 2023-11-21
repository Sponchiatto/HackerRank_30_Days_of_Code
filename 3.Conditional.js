// Task
// Given an integer, , perform the following conditional actions:
// If  is odd, print Weird
// If  is even and in the inclusive range of  to , print Not Weird
// If  is even and in the inclusive range of  to , print Weird
// If  is even and greater than , print Not Weird
// Complete the stub code provided in your editor to print whether or not  is weird.

function main(N) {

  // Conditional structure of Ifs and elses
  // If the remainder of dividing N by 2 is different from 0, print Weird.
  if (N % 2 !== 0) {
    console.log("Weird");

    // However, if N is between 2 and 5, print Not Weird
  } else {
    if (N >= 2 && N <= 5) {
      console.log("Not Weird");

      // However, if N is between 6 and 20, print strange
    } else if (N >= 6 && N <= 20) {
      console.log("Weird");

      // If no conditions are met, print Not Weird
    } else {
      console.log("Not Weird");
    }
  }
}

main(10);
