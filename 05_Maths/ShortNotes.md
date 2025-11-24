# Basic Maths Problem Solving Approach

When solving mathematical programming problems, follow these fundamental principles:

## 1. **Digit Extraction**

- Use **modulo (%)** to extract the last digit: `digit = num % 10`
- Use **integer division (//)** to remove the last digit: `num = num / 10`
- Extract digits one by one in a loop until the number becomes 0
- **Key insight**: This works because every number can be broken down into its constituent digits

**Common applications**:

- Counting digits in a number
- Reversing a number
- Checking if a number is palindrome or Armstrong number

## 2. **Optimization Using √n**

- For problems involving divisors, factors, or primality: iterate only up to **√n** instead of n
- Divisors are symmetric about √n (if i divides n, then n/i also divides n)
- This reduces time complexity from O(n) to O(√n)

**Common applications**:

- Finding all divisors
- Checking if a number is prime
- Finding GCD efficiently

## 3. **Number Properties**

### Palindrome

- Compare the number with its reverse
- Or use two pointers (left & right) to check symmetry
- **Remember**: Negative numbers are never palindromes

### Armstrong Number

- An n-digit number is Armstrong if: sum of (each digit^n) = original number
- Example: 153 = 1³ + 5³ + 3³
- First count the digits, then apply the formula

### Prime Number

- A number with only 2 factors: 1 and itself
- Handle edge cases: 1 (not prime), 2 (prime), 3 (prime)
- Check divisibility only up to √n for optimization

## 4. **GCD & LCM**

- **GCD (HCF)**: Greatest common divisor - find the largest number that divides both
  - Euclidean algorithm is optimal: GCD(a,b) = GCD(b, a%b)
- **LCM**: Least common multiple - use the formula: `LCM(a,b) = (a × b) / GCD(a,b)`
- **Key insight**: GCD and LCM are inversely related through this formula

## Tips for Success

- **Analyze the problem type**: Identify if it's about digits, divisors, or number properties
- **Think mathematically**: Look for mathematical relationships before coding
- **Use optimal approaches**: Always consider √n optimization when iterating
- **Handle edge cases**: Check for 1, negative numbers, 0, and small numbers (2, 3)
- **Modulo and division**: Master these two operations for digit manipulation
- **Break it down**: Complex problems often combine multiple techniques (digit extraction + property checking)
