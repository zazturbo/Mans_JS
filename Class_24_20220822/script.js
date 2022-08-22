function myFunction() {
  let text = "Nospiediet pogu!\nIzvēlieties Labi vai Atcelt";
  if (confirm(text) == true) {
    let answer = prompt("Uz kādu resursu?");
    if (answer != null) {
      document.getElementById(
        "demo1"
      ).innerHTML = `Jūs izvēlējāties resursu: ${answer}`;
      location.replace(`https://${answer}`);
    }
  } else {
    text = "Jūs atcēlāt!";
  }
  document.getElementById("demo").innerHTML = text;
}

// let counter = 0;
// var x = setInterval(my_Function, 1000);

// document.getElementById("demo2").innerHTML = `Intervāla Id ${x}`;

// function my_Function() {
//   document.getElementById("demo3").innerHTML = counter;
//   counter++;
//   if (counter < 5) {
//     clearInterval(x);
//   }
// }
