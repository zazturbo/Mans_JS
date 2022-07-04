// var i = 5;
// for (var i = 0; i < 10; i++) {}

let tex = "";
var i = 1;
for (; i < 5; ) {
  tex = tex + i + "<Br>";
  i++;
}
document.getElementById("classic").innerHTML = tex;

let text = "";
var i = 1;
while (i < 5) {
  text = text + i + "<Br>";
  i++;
}
document.getElementById("non_classic").innerHTML = text;
