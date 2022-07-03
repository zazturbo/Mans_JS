console.log("Skripta izpildes sākums:\n" + new Date());
document.getElementById("manual_count").innerHTML = "1<br>2<br>3<br>4<br>";

let text = "";
for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    text = text + i + " " + "pāra skaitlis" + "<br>";
  } else {
    text = text + i + " " + "nepāra skaitlis" + "<br>";
  }
}

document.getElementById("automatic_count").innerHTML = text;

const cars = ["BMW", "VOLVO", "SAAB", "FORD", "FIAT", "AUDI"];
let list = "";
for (let i = 2; i < cars.length; i++) {
  list += cars[i] + "<br>";
}

document.getElementById("auto").innerHTML = list;

text += cars[0] + "<br>";
text = text + cars[0] + "<br>";
let result = [];
for (let skaitlis = 1; skaitlis < 26; skaitlis++) {
  result.push(+skaitlis);
}
