let btn = document.getElementById("btnRate");

btn.addEventListener("click", () => {
  let btn_group1 = document.getElementById("btn-group1");
  let btns1 = btn_group1.getElementsByClassName("rate1");

  let data = [].map.call(btns1, (btn) => [btn.value, btn.checked]);
  console.log(data);

  let btn_group2 = document.getElementById("btn-group2");
  let btns2 = btn_group2.getElementsByClassName("rate2");

  data = [].map.call(btns2, (btn) => [btn.value, btn.checked]);
  console.log(data);
});
