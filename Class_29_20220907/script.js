const form = document.querySelector("#signup");
function hasValue(element) {
  if (element.value.trim() === "") {
    element.className = "error";
    const instruction = element.parentNode.querySelector("small");
    if (element.id == "name") instruction.innerText = "Please enter name";
    if (element.id == "email") instruction.inner.email = "Please enter email";
  } else {
    element.className = "success";
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = form.elements["name"];
  const email = form.elements["email"];

  hasValue(name);
  hasValue(element);
});
