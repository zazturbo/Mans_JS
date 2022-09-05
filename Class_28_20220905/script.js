// let note = document.querySelector(".note");
// console.log(note.parentNode);
// https://www.javascripttutorial.net/javascript-dom/javascript-get-parent-element-parentnode/

let note = document.querySelector(".note");
console.log("...parentNode: ", note.parentNode);

// https://www.javascripttutorial.net/javascript-dom/javascript-get-child-element/
let content = document.getElementById("menu");
let firstChild = content.firstChild;
console.log("...firstChild: ", firstChild);
console.log("...firstChild.nodeType: ", firstChild.nodeType);
console.log("...firstChild.nodeName: ", firstChild.nodeName);
