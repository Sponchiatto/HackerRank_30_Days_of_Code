function bitwiseAnd(N, K) {
  let max = -1;

  for (let i = 1; i <= N; i++) {
    for (let j = i + 1; j <= N; j++) {
      let bitwise = i & j;
      if (bitwise < K && bitwise > max) {
        max = bitwise;
      }
    }
  }

  return max;
}
