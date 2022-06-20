var c = 3;
var a = 1;
var b = 2;

console.log(a, b, c);

if (a > b && a > c) {
  console.log("Vislielākais ir:" + a);
} else if (c > a && c > b) {
  console.log("Vislielākais ir:" + c);
} else {
  console.log("Vislielākais ir:" + b);
}

if ((a > b && a < c) || (a < b && a > c)) {
  console.log("Vidējais ir:" + a);
} else if ((c > a && c < b) || (c > b && c < a)) {
  console.log("Vidējais ir:" + c);
} else {
  console.log("Vidējais ir:" + b);
}

if (a < c && a < b) {
  console.log("Vismazākais ir:" + a);
} else if (c < a && c < b) {
  console.log("Vismazākais ir:" + c);
} else {
  console.log("Vismazākais ir:" + b);
}
