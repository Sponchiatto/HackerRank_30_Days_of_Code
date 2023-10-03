// Javascript program to find maximum
// sum of hour glass in matrix

let R = 6;
let C = 6;

// Returns maximum sum of
// hour glass in ar[][]
function findMaxSum(mat) {
  if (R < 3 || C < 3) {
    document.write("Not possible");
    process.exit(0);
  }
  // Here loop runs (R-2)*(C-2)
  // times considering different
  // top left cells of hour glasses.
  let max_sum = Number.MIN_VALUE;
  for (let i = 0; i < R - 2; i++) {
    for (let j = 0; j < C - 2; j++) {
      // Considering mat[i][j] as top
      // left cell of hour glass.
      let sum =
        mat[i][j] +
        mat[i][j + 1] +
        mat[i][j + 2] +
        mat[i + 1][j + 1] +
        (mat[i + 2][j] + mat[i + 2][j + 1] + mat[i + 2][j + 2]);

      // If previous sum is less than
      // current sum then update
      // new sum in max_sum
      max_sum = Math.max(max_sum, sum);
    }
  }
  return max_sum;
}

let numberArr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
let res = findMaxSum(numberArr);
document.write("Maximum sum of hour glass = " + res);
