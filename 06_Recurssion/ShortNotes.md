# 1. What is Recursion?

**Definition:** Recursion occurs when a function calls itself. It continues endlessly until a specific **Base Condition** is met.

### Critical Thinking Models

- **The "Waiting" Game (Stack Space):**

  - When a recursive function calls itself, the _current_ function does not finish immediately. It **pauses** at that specific line.
  - It remains in the **Stack Space** (memory), waiting for the called function to return a value or complete execution.
  - **Stack Overflow:** If you forget the base condition, functions keep piling up in the stack until memory runs out.

- **The Recursion Tree:**
  - Visualizing the flow is crucial. **Never** try to trace deep recursion in your head. Draw a tree where each node is a function call.
  - **Flow:** Down the tree (Calling phase) $\rightarrow$ Base Case $\rightarrow$ Up the tree (Returning phase).

---

# 2. Execution Flow & Backtracking

Where you write your code determines the output order. This is the most critical concept for control flow.

### The Two Zones of a Recursive Function

1.  **Pre-Call Zone (Ascending Phase):** Code written _before_ the recursive call. It executes while the stack is building up (going forward).

    - _Example:_ Printing `i` before `f(i+1)` $\rightarrow$ Prints `1, 2, 3...`

2.  **Post-Call Zone (Descending/Backtracking Phase):** Code written _after_ the recursive call. It executes while the stack is clearing (returning back).
    - _Example:_ Printing `i` after `f(i+1)` returns $\rightarrow$ Prints `3, 2, 1...`

### Critical Thinking Exercise:

To print `1` to `N` _without_ using `i+1` (i.e., strictly using `i-1` logic), you must use **Backtracking**.

- **Logic:** Call `f(i-1)` first.
- **Action:** Print `i` _after_ the call returns.
- **Result:** The print happens only when the base case (0) hits and returns control back up the stack.

---

# 3. Parameterised vs. Functional Recursion

There are two major ways to solve problems (e.g., Sum of first N numbers).

### A. Parameterised Recursion (Carrying the Answer)

- **Logic:** The answer is calculated step-by-step and passed down as a parameter.
- **Structure:** `void f(i, sum)` $\rightarrow$ calls `f(i-1, sum+i)`
- **Mental Model:** "I am accumulating the result as I go down. When I hit the base case, I simply print or store the accumulated value."

### B. Functional Recursion (Returning the Answer)

- **Logic:** The function is expected to **return** a value to its caller.
- **Structure:** `int f(n)` $\rightarrow$ returns `n + f(n-1)`
- **Mental Model:** "I don't know the full sum, but I know it is `current_val` + `sum_of_rest`. I will trust the recursive call `f(n-1)` to bring me the correct sum of the rest."
- **Key:** This is the foundation for **Dynamic Programming (DP)** later.

---

# 4. Multiple Recursion Calls (The Fibonacci Pattern)

This happens when a function calls itself multiple times (e.g., `return f(n-1) + f(n-2)`).

### Critical Thinking Insight

- **Sequential Execution:** Calls do **NOT** happen simultaneously.
  - `f(n-1)` executes fully (going deep into its own tree and returning) _before_ `f(n-2)` even starts.
- **Time Complexity:**
  - One call $\rightarrow$ Linear $O(N)$
  - Two calls $\rightarrow$ Exponential $O(2^N)$. The number of calls doubles at every level.
- **Trace:** Always finish the **left branch** of the tree completely before moving to the right branch.

---

# 5. Practical Patterns (Two Pointers)

Used for problems like **Reverse Array** or **Check Palindrome**.

- **Logic:** Instead of loops, pass `start` and `end` indices.
- **Optimization:** You only need **one variable** `i`.
  - The second pointer is always mathematically derivable: `n - i - 1`.
- **Base Case:** Stop when `i >= n/2` (when the pointers cross or meet).
