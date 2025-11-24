const fs = require('fs');
const number = fs.readFileSync(0, 'utf-8');

function isPrime_bruteForce(num) {
  if (num == 2) return true;

  if (num == 1) return false;

  if (num < 1) {
    console.log('Please enter a positive integer!');
    return;
  }

  let prime = true;
  for (let i = 2; i <= num - 1; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

function isPrime_optimal(num) {
  // Edge cases
  if (num < 1) {
    return 'Please Enter a Positive Interger!';
  }

  if (num == 1) return false;

  if (num == 2 || num == 3) return true;

  // Define a flag
  let isPrime = true;

  // Iterate upto √n, as divisors are symmetric about √n
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

console.log(isPrime_optimal(number));
