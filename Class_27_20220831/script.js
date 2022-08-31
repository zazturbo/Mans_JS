let btn = document.querySelector("#btn");

// function display() {
//   alert("It was clicked!");
// }

// btn.addEventListener("click", display);

// btn.addEventListener("click", () => {
//   alert("It was clicked!");
// });

// btn.addEventListener("click", (event) => {
//   alert("It was clicked!");
//   console.log(event.type);
// });

btn.addEventListener("click", (event) => {
  // 'mousedown' 'mouseup' 'mouseover'
  console.log("event.type: " + event.type);
  console.log("event.bubbles: " + event.bubbles);
  console.log("event.cancelable: " + event.cancelable);
  console.log("event.currentTarget: ", event.currentTarget);
  console.log("event.target: ", event.target);
  //event.currentTarget.innerText = 'Ouch!';
  console.log(
    "event.defaultPrevented (before event.preventDefault()): " +
      event.defaultPrevented
  );
  console.log("event.detail: " + event.detail);
  console.log("event.eventPhase: " + event.eventPhase);
  event.preventDefault();
  console.log(
    "event.defaultPrevented (after event.preventDefault()): " +
      event.defaultPrevented
  );
});

// https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
function hide(e) {
  e.currentTarget.style.visibility = "hidden";
  console.log("e.currentTarget: ", e.currentTarget);
  console.log("e.target: ", e.target);
  // When this function is used as an event handler: this === e.currentTarget
}

const ps = document.getElementsByTagName("p");

for (let i = 0; i < ps.length; i++) {
  // console: print the clicked <p> element
  ps[i].addEventListener("click", hide, false);
}

document.body.addEventListener("click", hide, false);
