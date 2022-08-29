let btn = document.getElementById("btnRate");
let output = document.getElementById("output");

let radio_btns = document.getElementById("btn-group");

btn.addEventListener("click", () => {
  let rates = document.getElementsByName("rate");
  rates.forEach((rate) => {
    //console.log(rate);
    console.log(rate.value + " " + rate.checked);
    if (rate.checked) {
      output.innerText = `You selected: ${rate.value}`;
    }
  });
  alert("Continue!");
});

radio_btns.addEventListener("click", () => {
  let rates = document.getElementsByName("rate");
  rates.forEach((rate) => {
    //console.log(rate);
    console.log(rate.value + " " + rate.checked);
    if (rate.checked) {
      output.innerText = `You selected: ${rate.value}`;
    }
  });
  alert("Continue!");
});
