function sumToCycle(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumToCycle(3));

function sumToRecursion(n) {
  if(n === 1) {
    return 1;
  } else {
    return n + sumToRecursion(n - 1);
  }
}

console.log(sumToRecursion(3));

function sumToFactorial(n) {
  return n * (n + 1) / 2;
}

console.log(sumToFactorial(3));