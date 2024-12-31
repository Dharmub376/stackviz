let stack = [];
let maxStackSize = 0;

function setStackSize() {
  const sizeInput = document.getElementById("stackSizeInput").value;

  if (sizeInput <= 0) {
    displayWarning("Stack size must be greater than 0!");
    return;
  }

  maxStackSize = parseInt(sizeInput);
  stack = []; // Reset stack
  updateStack();
  displayMessage(`Stack size set to: ${maxStackSize}`);
}

function push() {
  const inputElement = document.getElementById("stackInput");
  let value = inputElement.value.trim();

  if (stack.length >= maxStackSize) {
    displayWarning("Stack Overflow! Cannot push more items.");
    return;
  }

  if (value === "") {
    value = Math.floor(Math.random() * 100); // Generate a random number
  }

  stack.push(value);
  inputElement.value = "";
  updateStack();
  displayMessage(`Pushed: ${value}`);
}

function pop() {
  if (stack.length === 0) {
    displayWarning("Stack Underflow! Cannot pop from an empty stack.");
    return;
  }

  const poppedValue = stack.pop();
  updateStack();
  displayMessage(`Popped: ${poppedValue}`);
}

function peek() {
  if (stack.length === 0) {
    displayWarning("Stack is empty! Nothing to peek.");
    return;
  }

  const topValue = stack[stack.length - 1];
  displayMessage(`Top of stack: ${topValue}`);
}

function clearStack() {
  stack = [];
  updateStack();
  displayMessage("Stack cleared!");
}

function display() {
  if (stack.length === 0) {
    displayWarning("Stack is empty!");
    return;
  }

  displayMessage(`Stack elements: {${stack.join(", ")}}`);
}

function updateStack() {
  const stackContainer = document.getElementById("stackContainer");
  const stackIndexes = document.getElementById("stackIndexes");
  stackContainer.innerHTML = "";
  stackIndexes.innerHTML = "";

  stack.forEach((item, index) => {
    const stackItem = document.createElement("div");
    stackItem.className = "stack-item";
    stackItem.textContent = item;
    stackContainer.appendChild(stackItem);

    const indexDiv = document.createElement("div");
    indexDiv.textContent = stack.length - 1 - index;
    stackIndexes.appendChild(indexDiv);
  });

  clearWarning();
}

function displayMessage(message) {
  const outputElement = document.getElementById("output");
  outputElement.textContent = message;
}

function displayWarning(warning) {
  const warningElement = document.getElementById("warning");
  warningElement.textContent = warning;
}

function clearWarning() {
  const warningElement = document.getElementById("warning");
  warningElement.textContent = "";
}

function copyCode(id) {
  const code = document.getElementById(id).textContent;
  navigator.clipboard.writeText(code).then(() => {
    alert("Code copied to clipboard! 📋");
  });
}