// document.write("Hello today is on Thursday");

console.log("Hello class 3 codes");

const test = document.getElementById("test");
test.innerHTML = "Hello, this is our first DOM Content Paint";

const newItem = document.createElement("h1");
const headingOne = document.createTextNode("This is a new text node");
newItem.appendChild(headingOne);

const printToDom = document.getElementById("newElement");
printToDom.appendChild(newItem);

// Fix This as your Assignment
const getEl = document.querySelectorAll("p.intro");

document.getElementById(
  "demo"
).innerHTML = `My first Name is ${getEl[0].innerHTML} `;
