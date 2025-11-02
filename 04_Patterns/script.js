class Patterns {
  pattern01(n) {
    /*
     * * * * *
     * * * * *
     * * * * *
     * * * * *
     * * * * *
     */

    for (let i = 0; i < n; i++) {
      let row = '';
      for (let j = 0; j < n; j++) {
        row += '* ';
      }
      console.log(row);
    }
  }

  pattern02(n) {
    /*
     *
     * *
     * * *
     * * * *
     * * * * *
     */

    for (let i = 0; i < n; i++) {
      let row = '';
      for (let j = 0; j <= i; j++) {
        row += '* ';
      }
      console.log(row);
    }
  }

  pattern03(n) {
    /*
     * * * * *
     * * * *
     * * *
     * *
     *
     */

    for (let i = 0; i < n; i++) {
      let row = '';
      for (let j = 0; j <= n - i - 1; j++) {
        row += '* ';
      }
      console.log(row);
    }
  }

  pattern04(n) {
    for (let i = 0; i < n; i++) {
      let row = '';
      // Append white spaces first...
      for (let j = 0; j < n - i - 1; j++) {
        row += ' ';
      }
      // Append stars...
      for (let k = 0; k < 2 * i + 1; k++) {
        row += '*';
      }
      console.log(row);
    }
  }

  pattern05(n) {
    for (let i = 0; i < n; i++) {
      let row = '';
      // Append white spaces...
      for (let j = 0; j < i; j++) {
        row += ' ';
      }
      // Append stars...
      for (let k = 0; k < 2 * (n - i - 1) - 1; k++) {
        row += '*';
      }
      console.log(row);
    }
  }

  pattern06(n) {
    // Print top half (including middle line)
    this.pattern04(n);

    // Print bottom half — start from i = 1 to avoid duplicating the middle line
    for (let i = 1; i < n; i++) {
      let row = '';
      // leading spaces
      for (let j = 0; j < i; j++) {
        row += ' ';
      }
      // stars: 2*(n - i) - 1
      for (let k = 0; k < 2 * (n - i) - 1; k++) {
        row += '*';
      }
      console.log(row);
    }
  }
}

const ptnrObj = new Patterns();
ptnrObj.pattern06(10);
