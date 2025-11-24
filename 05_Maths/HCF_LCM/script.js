const fs = require('fs'); // Import fs module
const input = fs.readFileSync(0, 'utf-8'); // Read input file

const numbers = input.trim().split(' ');
const n1 = numbers[0];
const n2 = numbers[1];

const calculateGCD = (n1, n2) => {
  let hcf = 1;
  for (let i = Math.min(n1, n2); i > 0; i--) {
    if (n1 % i == 0 && n2 % i == 0) {
      hcf = i;
      break;
    }
  }
  return hcf;
};

const calculateLCM = (n1, n2) => {
  return (n1 * n2) / calculateGCD(n1, n2);
};

console.log('HCF:', calculateGCD(n1, n2));
console.log('LCM:', calculateLCM(n1, n2));
