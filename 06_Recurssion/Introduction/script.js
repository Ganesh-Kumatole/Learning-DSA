let srNo = 1;

const printNtimes = function (n) {
  // Base condition
  if (n === 0) return;

  // Some logic...
  console.log(`${srNo}. Hello World...`);
  srNo++;

  // Recurssive Call
  printNtimes(n - 1);
};

const oneToN_forwardRecurssion = (n, i = 1) => {
  if (i > n) return;

  console.log(i);

  oneToN(n, i + 1);
};

const oneToN_backtracking = (n) => {
  if (n == 0) return;

  oneToN_backtracking(n - 1);

  console.log(n);
};

const NtoOne = (n) => {
  if (n == 0) return;

  console.log(n);

  NtoOne(n - 1);
};

// printNtimes(10);
// oneToN(10);
// NtoOne(12);
// oneToN_backtracking(23);
