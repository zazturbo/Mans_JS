const Expires = new Date("2022-09-12T20:23:00.000");

document.cookie = `username=admin; path=/; expires=${Expires.toGMTString()}`;

let intervalID = setInterval(checkCookie, 1000);

function checkCookie() {
  var current = new Date();
  console.log(current);
  const str = document.cookie;
  console.log(str);
  if (str == "") {
    clearInterval(intervalID);
  }
}
