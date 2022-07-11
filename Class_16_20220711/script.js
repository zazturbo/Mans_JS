// function square_statement(number) {
//   return number * number;
// }
// const x = square_statement(4);
// console.log(x);

// const square_expression = function (number) {
//   return number * number;
// };
// const y = square_expression(4);
// console.log(y);

// const factorial = function fac(n) {
//   return n < 2 ? 1 : n * fac(n - 1);
// };
// //rekursīvā funkcija .Šeit tas pats kas if else, 3 nav mazāks par 2, tad aiz: 3 gaida reizināšanu ar jaunizsaukto funkciju,kurā jāizpilda 3(n)-1 un aiziet uz nākamo ciklu.
// console.log(factorial(3));
// //izsaukt fac nevar, jo tā nav redzama

//piemērs ar funkciju,kuras arguments(viens no)
//arī ir funkcija

// function map(f, a) {
//   const result = [];
//   //   i = 0;
//   for (const v of a) {
//     // result[i] = f(v);
//     // i++;
//     result.push(f(v));
//   }
//   return result;
// }

// const function_for_array_each_element = function (x) {
//   return x * x * x;
// };

// const numbers = [0, 1, 2, 5, 10];
// const cube = map(function_for_array_each_element, numbers);
// console.log(cube);
