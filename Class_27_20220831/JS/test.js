document.addEventListener("keydown", function (e) {
  KEY = ["t", "e", "s", "t"];
  this.INPUT = this.INPUT || [];
  this.INPUT.push(e.key);

  if (this.INPUT.some((e, i) => KEY[i] != e)) this.INPUT = [this.INPUT.pop()];
  else if (this.INPUT.length == KEY.length) {
    alert("Congratulations!");
    this.INPUT = [];
  }
});
