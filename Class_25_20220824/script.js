/*
const p = document.createElement("p");
p.textContent = "Once upon a time…";
console.log(p.nodeType);
console.log(p.textContent);
console.log(p.textContent.nodeType);
*/

const firstChildNode = document.documentElement.firstChild;
if (firstChildNode.nodeType !== Node.COMMENT_NODE) {
  console.warn("You should comment your code!");
  console.log(firstChildNode.nodeType);
  console.log(firstChildNode.nodeName);
  console.log(firstChildNode.nodeValue);
} else {
  console.log("Good! :-) code is commented/described");
  console.log(firstChildNode.nodeType);
  console.log(firstChildNode.nodeName);
  console.log(firstChildNode.nodeValue);
}

const secondChildNode = firstChildNode.nextSibling;
console.log(secondChildNode.nodeType);
console.log(secondChildNode.nodeName);
console.log(secondChildNode.nodeValue);

const thirdChildNode = secondChildNode.nextSibling;
console.log(thirdChildNode.nodeType);
console.log(thirdChildNode.nodeName);
console.log(thirdChildNode.nodeValue);

const fourthChildNode = thirdChildNode.nextSibling;
console.log(fourthChildNode.nodeType);
console.log(fourthChildNode.nodeName);
console.log(fourthChildNode.nodeValue);

const fifthChildNode = fourthChildNode.nextSibling;
console.log(fifthChildNode.nodeType);
console.log(fifthChildNode.nodeName);
console.log(fifthChildNode.nodeValue);

const lastChildNode = document.documentElement.lastChild;
console.log("\n");
console.log(lastChildNode.nodeType);
console.log(lastChildNode.nodeName);
console.log(lastChildNode.nodeValue);

console.log("\n");
console.log(document.firstChild.nodeType);
console.log(document.firstChild.nodeName);
console.log(document.firstChild.nodeValue);

console.log("\n");
console.log(document.firstChild.nextSibling.nodeType);
console.log(document.firstChild.nextSibling.nodeName);
console.log(document.firstChild.nextSibling.nodeValue);

console.log("\n");
console.log(document.lastChild.nodeType);
console.log(document.lastChild.nodeName);
console.log(document.lastChild.nodeValue);
