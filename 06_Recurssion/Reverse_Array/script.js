const arr = [3, 5, 9, 11, 15];
let reverseArr;

const method1 = (arr) => arr.reverse();

const method2 = function (arr) {
  let brr = [...arr];

  let begin = 0;
  let end = brr.length - 1;

  while (begin <= end) {
    if (brr[begin] == brr[end]) {
      begin++;
      end--;
    } else {
      brr[begin] = brr[begin] + brr[end];
      brr[end] = brr[begin] - brr[end];
      brr[begin] = brr[begin] - brr[end];
      begin++;
      end--;
    }
  }

  return brr;
};

const method3 = (begin, end, arr) => {
  // Base condition
  if (begin >= end) {
    console.log(arr);
    return;
  } else {
    let brr = [...arr];
    brr[begin] = brr[begin] + brr[end];
    brr[end] = brr[begin] - brr[end];
    brr[begin] = brr[begin] - brr[end];
    method3(begin + 1, end - 1, brr);
  }
};

// reverseArr = method2(arr);
// console.log(reverseArr);
method3(0, arr.length - 1, arr);
