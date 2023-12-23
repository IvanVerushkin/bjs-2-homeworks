"use strict"
// b²- 4*a*c
// a = 1, b = 5, c = 4
// a = 1, b = 2, c = 1
// a = 1, b = 2, c = 10

function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  let d = b ** 2 - (4 * a * c);

  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  } else if (d === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
  }

  return arr;
}

// console.log(solveEquation(1,2,10));

// calculateTotalMortgage - рассчитать общую сумму ипотеки
// percent - процент
// contribution - вклад
// amount - количество
// countMonths - считать месяцы
// S - тело кредита
// payment - платёж

// 10, 0, 50000, 12
// 52749.53

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent/100
  let n = countMonths/12
  let S = amount - contribution
  let payment = S * (P + (P / (((1 + P) ** n) - 1)))
  // return arr;
  return S
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));

// 2. Преобразуйте процентную ставку из диапазона от 0 до 100 в диапазон от 0 до 1 и из годовой ставки — в месячную.
// 3. Посчитайте тело кредита — сумму, которую нужно вернуть банку (сумма кредита минус первоначальный взнос).
// 4. Ежемесячная оплата рассчитывается по формуле: `Платёж = S * (P + (P / (((1 + P)^n) - 1)))`, где:
// `S` — тело кредита, `P` — 1/12 процентной ставки (от 0 до 1), `n` — количество месяцев, `^` — возведение в степень. 
// Для возведения в степень используйте оператор — `**`