// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event
const input = document.querySelector("#userInput");
const copyButton = document.querySelector("#copy");
const output = document.querySelector("#output");

copyButton.addEventListner("click", handleClick);

function copyText() {
  outputDiv.textContent = input.value;
}

let userInput2 = document.querySelector("#userInput2");
userInput2.addEventListener("input", handleInput);

let section = document.querySelector("#inputEventExample");
let element = document.createElement("div");
element.setAttribute("class", "outpout");
section.append(element);

function handleInput(event) {
  console.log(userInput2.value);
  Element.textContent = userInput2.value;
}
