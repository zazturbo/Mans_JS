var x = 100;
document.getElementById("dec").innerHTML = x;
var secība = "";
var nultais_bits = (x >> 0) & 1;
console.log(nultais_bits);
secība = nultais_bits + secība;
console.log(nultais_bits);
nultais_bits = (x >> 1) & 1;
secība = nultais_bits + secība;
console.log(nultais_bits);
nultais_bits = (x >> 2) & 1;
secība = nultais_bits + secība;
console.log(nultais_bits);
nultais_bits = (x >> 3) & 1;
secība = nultais_bits + secība;
console.log(nultais_bits);
nultais_bits = (x >> 4) & 1;
secība = nultais_bits + secība;
console.log(nultais_bits);
nultais_bits = (x >> 5) & 1;
secība = nultais_bits + secība;
console.log(nultais_bits);
nultais_bits = (x >> 6) & 1;
secība = nultais_bits + secība;
console.log(nultais_bits);
nultais_bits = (x >> 7) & 1;
secība = nultais_bits + secība;
console.log(nultais_bits);

document.getElementById("bin").innerHTML = secība;

var r = 6371;
document.getElementById("radius").innerHTML = r;
var g = 40009.88;
document.getElementById("garums").innerHTML = g;

var vards_uzvards = "Jānis Bērziņš,";
var nauda = 15000;
var peļņa_1 = (nauda * 0, 01) * 1;
var peļņa_2 = (nauda * 0, 02) * 2;
var peļņa_3 = (nauda * 0, 03) * 3;
var peļņa_4 = (nauda * 0, 04) * 4;
var peļņa_5 = (nauda * 0, 05) * 5;
document.getElementById("client").innerHTML = vards_uzvards;
document.getElementById("money").innerHTML = nauda;
document.getElementById("procenti_1").innerHTML = peļņa_1;
document.getElementById("procenti_2").innerHTML = peļņa_2;
document.getElementById("procenti_3").innerHTML = peļņa_3;
document.getElementById("procenti_4").innerHTML = peļņa_4;
document.getElementById("procenti_5").innerHTML = peļņa_5;
