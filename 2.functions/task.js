function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((acc, c) => acc + c, 0);
  let avg = Number((sum / arr.length).toFixed(2));
  return {min:min, max:max, avg:avg};
};

function summElementsWorker(...arr) {
  if (arr == 0) {
    return 0
  } else {
    let sum = arr.reduce((acc, c) => acc + c, 0);
    return sum
  };
};

function differenceMaxMinWorker(...arr) {
  if (arr == 0) {
    return 0
  } else {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let difference = max - min;
    return difference
  };
};

function differenceEvenOddWorker(...arr) {
  let even = 0;
  let odd = 0;
  let difference = 0;

  if (arr == 0) {
    return 0
  } else {
    arr.forEach(elem => {
      if (elem % 2 == 0) {
        even += elem
      } else if (elem % 2 != 0) {
        odd += elem
      };
    });
    difference = even - odd
    return difference
  };
};

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr == 0) {
    return 0
  } else {
    arr.forEach((elem) => {
      if (elem % 2 == 0) {
        sumEvenElement += elem;
        countEvenElement++;
      };
    });
    return sumEvenElement / countEvenElement
  };
};

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  arrOfArr.forEach((elem) => {
    let sum = func(...elem);
    maxWorkerResult = sum;
  });

  return maxWorkerResult;
};