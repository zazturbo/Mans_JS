var i = 5;
for (var i = 0; i < 10; i++) {}

let tex = "";
for (var i = 1; i < 5; i++) {
  tex = tex + i + "<Br>";
  if (i == 3) {
    break;
  }
}
document.getElementById("classic").innerHTML = tex;

let text = "";
var i = 1;
while (i < 7) {
  text = text + i + "<Br>";
  i++;
}
document.getElementById("non_classic").innerHTML = text;

var jauns = "";
var i = 1;
do {
  jauns = jauns + i + "<Br>";
  i++;
} while (i < 10 && i == 2);
document.getElementById("do_while").innerHTML = jauns;
// Šeit while nosacījumā ir true un false, rezultātā ir false, tāpēc tālāk cikls neiet.
