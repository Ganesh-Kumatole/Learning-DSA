### Practice problems: Determine Time Complexity of below code-snippets...

#### Snippet 01

```javascript
function function(n) {
    let i = 1, s = 1;
    while (s <= n) {
        i++;
        s = s + i;
        console.log("*");
    }
}
```

- **Solution:** $O(\sqrt{n})$
- **Reason:** The variable `s` represents the sum of an arithmetic series ($1+2+3+...+i$), which is $\frac{i(i+1)}{2}$. The loop stops when `s > n`, which happens when $\frac{i^2}{2} \approx n$. This implies the number of iterations `i` is approximately $\sqrt{n}$.

---

#### Snippet 02

```javascript
function function(n) {
    let count = 0;
    for (let i = n / 2; i <= n; i++) {
        for (let j = 1; j + (n / 2) <= n; j = j + 1) {
            for (let k = 1; k <= n; k = k * 2) {
                count++;
            }
        }
    }
}
```

- **Solution:** $O(n^2 \log n)$
- **Reason:** The first loop runs $O(n)$ times, the second loop runs $O(n)$ times, and the third loop is logarithmic, $O(\log n)$. The total complexity is their product.

---

#### Snippet 03

```javascript
function function(n) {
    if (n === 1) return;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            console.log("*");
            break;
        }
    }
}
```

- **Solution:** $O(n)$
- **Reason:** The `break` statement causes the inner loop to run only once. Therefore, the total complexity is dictated by the outer loop, which runs `n` times.

---

#### Snippet 04

```javascript
function function(N) {
    let a = 0;
    let i = N;
    while (i > 0) {
        a += i;
        i = Math.floor(i / 2);
    }
}
```

- **Solution:** $O(\log N)$
- **Reason:** The loop variable `i` is halved in each iteration, which is a classic logarithmic pattern.

---

#### Snippet 05

```javascript
function function(N) {
    let count = 0;
    for (let i = N; i > 0; i = Math.floor(i / 2)) {
        for (let j = 0; j < i; j++) {
            count += 1;
        }
    }
}
```

- **Solution:** $O(N)$
- **Reason:** The total number of operations is the sum of a geometric series: $N + N/2 + N/4 + ... + 1$. This sum converges to `2N`, which simplifies to $O(N)$.

---

#### Snippet 06

```javascript
function function(n) {
    for (let i = 0; i < n; i++) {
        for (let j = i; j < i * i; j++) {
            if (j % i === 0) {
                for (let k = 0; k < j; k++) {
                    console.log("*");
                }
            }
        }
    }
}
```

- **Solution:** $O(n^4)$
- **Reason:** The work done by the two inner loops for a fixed `i` is approximately $O(i^3)$. Summing this from `i=1` to `n` results in a total complexity of $O(n^4)$.

---

#### Snippet 07

```javascript
function fun(n, m) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let i = 0; i < m; i++) {
    console.log(i);
  }
}
```

- **Solution:** $O(n + m)$
- **Reason:** The two loops are consecutive. Their complexities are added, and since `n` and `m` are independent, the expression cannot be simplified further.

---

#### Snippet 08

```javascript
function fun(n) {
  for (let i = 0; i < n; i++) {
    console.log(Math.pow(i, n));
  }
}
```

- **Solution:** $O(n \log n)$
- **Reason:** The loop runs `n` times, and the `Math.pow()` function takes $O(\log n)$ time (using binary exponentiation). The total complexity is their product.

---

#### Snippet 09

```javascript
function f(n) {
  if (n <= 1) {
    return 1;
  }
  return f(n - 1) + f(n - 2);
}
```

- **Solution:** $O(2^n)$
- **Reason:** Each function call creates two more calls, leading to an exponential number of redundant computations.

---

#### Snippet 10

```javascript
function fun(n) {
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < Math.log(i); j++) {
      // O(1) operation
    }
  }
}
```

- **Solution:** $O(n \log n)$
- **Reason:** The total work is the sum $\sum_{i=1}^{n} \log(i)$, which is $\log(n!)$. Using Stirling's approximation, this is asymptotically equivalent to $O(n \log n)$.

---

#### Snippet 11

```javascript
function fun(N) {
  let counter = 0;
  for (let i = 0; i < N; i++) {
    counter += Math.floor(Math.random() * 100) + 1;
  }
  console.log(counter);
}
```

- **Solution:** $O(N)$
- **Reason:** The loop runs `N` times. The operation inside the loop is constant time, $O(1)$.

---

#### Snippet 12

```javascript
function fun(N, M) {
  let arr = [];
  let counter = 0;
  for (let i = 0; i < N; i++) {
    arr.push(i);
  }
  for (let i = 0; i < M; i++) {
    counter += 1;
  }
  console.log(counter);
}
```

- **Time Complexity:** $O(N + M)$
- **Space Complexity:** $O(N)$
- **Reason:** The time complexity is the sum of the two consecutive loops. The space complexity is determined by the array, which stores `N` elements.

---

#### Snippet 13

```javascript
function function(N, M) {
    let counter = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            counter += 1;
        }
    }
    console.log(counter);
}
```

- **Solution:** $O(N \cdot M)$
- **Reason:** The outer loop runs `N` times, and the inner loop runs `M` times for each of those iterations.

---

#### Snippet 14

```javascript
function fun(n, m) {
  let arr = Array(n)
    .fill(0)
    .map(() => Array(m).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let k = 1;
      while (k < n * m) {
        k *= 2;
      }
    }
  }
}
```

- **Solution:** $O(n \cdot m \cdot \log(nm))$
- **Reason:** The outer loops run `n * m` times. The inner `while` loop takes $\log(nm)$ steps.

---

#### Snippet 15

```javascript
function recursion(N) {
  if (N === 0) {
    return;
  }
  console.log(N);
  recursion(N - 1);
}
```

- **Time Complexity:** $O(N)$
- **Space Complexity:** $O(N)$
- **Reason:** The function calls itself `N` times (linear time). Each call adds to the call stack (linear space).

---

#### Snippet 16

```javascript
function fun(N) {
  let counter = 1;
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
      counter += 1;
    }
  }
  console.log(counter);
}
```

- **Solution:** $O(N^2)$
- **Reason:** The total operations are the sum of the series $1 + 2 + ... + N$, which is $\frac{N(N+1)}{2}$.

---

#### Snippet 17

```javascript
function fun(N) {
  for (let i = 1; i <= N; i++) {
    let j = N;
    while (j > 0) {
      j = Math.floor(j / 2);
    }
  }
}
```

- **Solution:** $O(N \log N)$
- **Reason:** The outer loop runs `N` times, and the inner `while` loop takes $\log N$ steps.

---

#### Snippet 18

```javascript
function fun(N) {
  let ans = 0;
  for (let i = 1; i <= N; i++) {
    for (let j = 0; j < N; j += i) {
      ans += 1;
    }
  }
  console.log(ans);
}
```

- **Solution:** $O(N \log N)$
- **Reason:** The total operations form a Harmonic Series ($N/1 + N/2 + ... + N/N$), which simplifies to $O(N \log N)$.

---

#### Snippet 19

```javascript
function bisect_left(arr, item) {
  let low = 0,
    high = arr.length;
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] >= item) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
}
```

- **Solution:** $O(\log n)$
- **Reason:** This is a binary search, which halves the search space in each iteration.

---

#### Snippet 20

```javascript
function calc(arr, N) {
  let j = 0;
  for (let i = 0; i < N; i++) {
    while (j < N && arr[i] < arr[j]) {
      j++;
    }
  }
}
```

- **Solution:** $O(N)$
- **Reason:** This uses a two-pointer technique. The inner loop's pointer `j` never resets, so both `i` and `j` traverse the array at most once. The total work is amortized to $O(N)$.

---

#### Snippet 21

```javascript
const maxa = 50;
let dp = Array(maxa + 1).fill(-1);

function fib(n) {
  if (dp[n] !== -1) return dp[n];
  if (n <= 1) return n;
  dp[n] = fib(n - 1) + fib(n - 2);
  return dp[n];
}

console.log(fib(maxa));
```

- **Solution:** $O(n)$
- **Reason:** This is memoized Fibonacci. Each value `fib(k)` is computed only once and stored, avoiding the exponential recalculations of the naive recursive approach.

---

#### Snippet 22

```javascript
function function(n) {
    let count = 0;
    for (let i = n / 2; i <= n; i++) {
        for (let j = 1; j <= n; j = j * 2) {
            for (let k = 1; k <= n; k = k * 2) {
                count++;
            }
        }
    }
}
```

- **Solution**: $O(n (\log n)^2)$
- **Reason**: The outer loop (`i`) runs `n/2` times, which is $O(n)$. The middle loop (`j`) is logarithmic as `j` doubles each time, running $O(\log n)$ times. The innermost loop (`k`) is also logarithmic, running $O(\log n)$ times. The total complexity is the product: $O(n \cdot \log n \cdot \log n)$.

---

#### Snippet 23

```javascript
function function(n) {
    let count = 0;
    for (let i = 1; i * i < n; i++) {
        for (let j = 0; j < n; j++) {
            count += 1;
        }
    }
}
```

- **Solution**: $O(n\sqrt{n})$
- **Reason**: The outer loop's condition `i * i < n` means it runs approximately $\sqrt{n}$ times. The inner loop runs `n` times for each of those iterations. The total complexity is the product: $O(\sqrt{n} \cdot n)$.

---

#### Snippet 24

```javascript
function function(n) {
    let counter = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i * i; j++) {
            for (let k = 0; k < j; k++) {
                counter += 1;
            }
        }
    }
}
```

- **Solution**: $O(n^5)$
- **Reason**: This is a complex triple-nested loop.
  - Outer loop (`i`) runs `n` times.
  - Middle loop (`j`) runs up to `i*i` times.
  - Inner loop (`k`) runs up to `j` times.
    The work for a fixed `i` is roughly $\sum_{j=0}^{i^2} j$, which is about $O((i^2)^2) = O(i^4)$. Summing this work across the outer loop gives $\sum_{i=0}^{n} i^4$, which results in a complexity of $O(n^5)$.

---

#### Snippet 25

```javascript
function function(n) {
    let counter = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j += 2) {
            counter += 1;
        }
    }
}
```

- **Solution**: $O(n^2)$
- **Reason**: The outer loop runs `n` times. The inner loop increments `j` by 2, so it runs approximately `n/2` times. The total operations are $n \cdot (n/2) = n^2/2$. In Big O notation, we drop the constant factor, resulting in $O(n^2)$.
