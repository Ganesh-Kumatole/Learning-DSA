class Factorial {
  constructor(num) {
    this.num = num;
  }

  iterative() {
    let fact = 1;
    for (let i = 1; i <= this.num; i++) {
      fact *= i;
    }
    return fact;
  }

  parameterizedRecurssive(i = 1, fact = 1, num = this.num) {
    // Base condition
    if (i > num) {
      console.log(fact);
      return;
    }

    // Recurssive Call
    else {
      this.parameterizedRecurssive(i + 1, fact * i, this.num);
    }
  }

  functionalRecurrsive(num = this.num) {
    // Base condition
    if (num == 1) return 1;
    // Logic...
    else return num * this.functionalRecurrsive(num - 1);
  }
}

const fact10 = new Factorial(10);

console.log(fact10.iterative());
fact10.parameterizedRecurssive();
console.log(fact10.functionalRecurrsive());
