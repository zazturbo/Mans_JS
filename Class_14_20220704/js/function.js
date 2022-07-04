let tex = "skaitīt līdz" + 5 + ":<br>";
for (var i = 1; i <= 5; i++) {
  tex = tex + i + "<Br>";
}
document.getElementById("function").innerHTML = tex;

function counter(N, html_el_id_nr) {
  text = "for count until " + N + ":<br>";
  for (let i = 1; i <= N; i++) {
    text = text + i + "<br>";
  }

  document.getElementById("count_" + html_el_id_nr).innerHTML = text;
}
counter(10, 4);
counter(15, 1);
counter(5, 3);
