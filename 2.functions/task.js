function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((acc, c) => acc + c, 0);
  let avg = Number((sum / arr.length).toFixed(2));
  return {min:min, max:max, avg:avg};
};

function summElementsWorker(...arr) {
  if (!arr.length == 0) {
    return arr.reduce((acc, c) => acc + c, 0);
  } else {
    return 0
  };
};

function differenceMaxMinWorker(...arr) {
  if (!arr.length == 0) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return max - min;
  } else {
    return 0
  };
};

function differenceEvenOddWorker(...arr) {
  let even = 0;
  let odd = 0;

  if (!arr.length == 0) {
    arr.forEach(elem => {
      if (elem % 2 == 0) {
        even += elem
      } else if (elem % 2 != 0) {
        odd += elem
      };
    });
    return even - odd
  } else {
    return 0
  };
};

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (!arr.length == 0) {
    arr.forEach((elem) => {
      if (elem % 2 == 0) {
        sumEvenElement += elem;
        countEvenElement++;
      };
    });
    return sumEvenElement / countEvenElement
  } else {
    return 0
  };
};

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  arrOfArr.forEach((elem) => {
    let result = func(...elem);
    if (maxWorkerResult < result) {
      maxWorkerResult = result;
    }
    
  });

  return maxWorkerResult;
};