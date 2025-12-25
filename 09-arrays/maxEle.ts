class MyArray {
  public arr: number[];

  constructor(arr: number[]) {
    this.arr = arr;
  }

  public getMaxEle_bruteForce(): number {
    const sortedArr = this.arr.sort((a: number, b: number): number => a - b);
    const n = this.arr.length;
    return sortedArr[n - 1]!;
  }

  public getMinEle_bruteForce(): number {
    const sortedArr = this.arr.sort((a: number, b: number): number => a - b);
    return sortedArr[0]!;
  }

  public getMinEle_optimal(): number {
    let minEle = Infinity;
    for (const ele of this.arr) {
      if (ele < minEle) minEle = ele;
    }
    return minEle;
  }

  public getMaxEle_optimal(): number {
    let maxEle = -Infinity;
    for (const ele of this.arr) {
      if (ele > maxEle) maxEle = ele;
    }
    return maxEle;
  }
}

const brr = new MyArray([-12, -5, 12, 7]);
// const maxEle = brr.getMaxEle();
// const minEle = brr.getMinEle();
// const maxEle = brr.getMaxEle_optimal();
// const minEle = brr.getMinEle_optimal();
// console.log(minEle, maxEle);
