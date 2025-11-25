// Functional Way
const sum_Functional = (n) => {
  if (n == 1) return 1;
  else {
    return n + sum_Functional(n - 1);
  }
};

// Parameterized Way
const sum_Parameterized = function (i = 1, sum = 0, n) {
  if (i > n) {
    console.log(`The sum of first ${n} terms is: ${sum}`);
    return;
  } else {
    sum_Parameterized(i + 1, sum + i, n);
  }
};

// const sum = sum_Functional(10);
// console.log(sum);
// sum_Parameterized(1, 0, 10);
