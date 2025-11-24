const calculateSum = (n) => {
  // Base case
  if (n === 1) return 1;

  // Otherwise...
  return n + calculateSum(n - 1);
};

const result = calculateSum(10);
console.log(result);
