// https://www.javascripttutorial.net/javascript-dom/javascript-form/

const form = document.querySelector("#signup");

function showInstruction(element, state) {
  const instruction = element.parentNode.querySelector("small");
  element.className = state ? "success" : "error";
  instruction.innerText = state ? "" : "Please enter " + element.id;
}

function hasValue(element) {
  if (element.value.trim() === "") {
    showInstruction(element, false);
    return false;
  } else {
    showInstruction(element, true);
    return true;
  }
}

form.addEventListener("submit", function (event) {
  // stop form submission
  event.preventDefault();

  const name = form.elements["name"];
  const email = form.elements["email"];

  const name_state = hasValue(name);
  const email_state = hasValue(email);

  //if(hasValue(email) && hasValue(name))
  //if(hasValue(name) && hasValue(email))
  if (name_state && email_state) form.submit();
});

/*if(element.id == 'name')
        instruction.innerText = "Please enter name";
        if(element.id == 'email')
        instruction.innerText = "Please enter email";*/
/*switch (element.id) {
      case "name":
        instruction.innerText = "Please enter name";
        break;
      case "email":
        instruction.innerText = "Please enter email";
        break;
    }*/
//instruction.innerText = "Please enter "+ element.id;
