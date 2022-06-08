var x = 10;
document.getElementById("dec").innerHTML = x;
var bitNumber = 7;
var y = (x << (bitNumber - 7)) >> bitNumber;
var z = String(y);
y = (x << (bitNumber - 6)) >> bitNumber;
z = z + String(y);
y = (x << (bitNumber - 5)) >> bitNumber;
z = z + String(y);
y = (x << (bitNumber - 4)) >> bitNumber;
z = z + String(y);
y = (x << (bitNumber - 3)) >> bitNumber;
z = z + String(y);
y = (x << (bitNumber - 2)) >> bitNumber;
z = z + String(y);
y = (x << (bitNumber - 1)) >> bitNumber;
z = z + String(y);
y = (x << (bitNumber - 0)) >> bitNumber;
z = z + String(y);
document.getElementById("bin").innerHTML = z;

// a = 45;
// console.log(a);
// a++;
// console.log(a);
// ++a;
// console.log(a);
// a++;
// console.log(a);
// j = a * a;
// console.log(j);

// let c = 15;
// let d = b + c;
// var b = 9;
// console.log(d);
// let carname = "volvo";
// document.getElementById("demo").innerHTML = carname;

// const a = 5;
// console.log(a);
// {
//   console.log("scope ietvaros" + a);
//   const a = 6;
//   console.log("scope pēc mainīga izmaiņas blokā" + a);
// }
