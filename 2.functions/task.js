function getArrayParams(...arr) {
  let min, max, sum, avg;
  min = Math.min(...arr);
  max = Math.max(...arr);
  sum = arr.reduce((acc, c) => acc + c);
  avg = (sum / arr.length).toFixed(2);
  avg = (Number(avg));
  return {min:min, max:max, avg:avg};
}


function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
