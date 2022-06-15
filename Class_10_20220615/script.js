var vards_uzvards = "Jānis Bērziņš,";
var nauda = 15000;
var pelna = [
  nauda * 0.0001 * 1,
  nauda * 0.0002 * 2,
  nauda * 0.0003 * 3,
  nauda * 0.0004 * 4,
  nauda * 0.0005 * 5,
];
document.getElementById("client").innerHTML = vards_uzvards;
document.getElementById("money").innerHTML = nauda;
document.getElementById("procenti_1").innerHTML = pelna[0];
document.getElementById("procenti_2").innerHTML = pelna[1];
document.getElementById("procenti_3").innerHTML = pelna[2];
document.getElementById("procenti_4").innerHTML = pelna[3];
document.getElementById("procenti_5").innerHTML = pelna[4];
//papildu uzdevums attēlot summas ar 2 zīmēm aiz punkta
//palabot algoritmu - ja % izmaksa notiek termiņa beigās 1 reizi
// const cars = [1, 2, 3];
// cars.sort();
