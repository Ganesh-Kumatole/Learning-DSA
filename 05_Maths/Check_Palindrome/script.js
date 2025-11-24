const fs = require('fs'); // Import fs module
const number = fs.readFileSync(0, 'utf-8'); // Read input file

const isPalindrome = (num) => {
  if (num < 0) return false; // Negative number can't be palindrome

  const numStr = String(num);

  let isPld = true; // Define flag

  let left = 0; // left pointer
  let right = numStr.length - 1; // right pointer

  while (left <= right) {
    if (numStr[left] === numStr[right]) {
      left++;
      right--;
    } else {
      isPld = false;
      break;
    }
  }

  if (isPld) return true;
  else return false;
};

console.log(isPalindrome(number));
