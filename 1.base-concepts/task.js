"use strict"
// b²- 4*a*c
// a = 1, b = 5, c = 4
// a = 1, b = 2, c = 1
// a = 1, b = 2, c = 10

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - (4 * a * c);

  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  } else if (d === 0) {
    let x1 = -b / (2 * a);
    arr.push(x1);
  };
  return arr;
};

// console.log(solveEquation(1,5,4));

// S - тело кредита
// payment - ежемесячный платёж

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let arr = [];
  let P = percent/100/12
  let S = amount - contribution
  let payment = S * (P + (P / (((1 + P) ** countMonths) - 1)))
  let totalSum = (payment * countMonths).toFixed(2)
  arr.push(Number(totalSum))
  return arr;
};
// console.log(calculateTotalMortgage(10, 0, 50000, 12));