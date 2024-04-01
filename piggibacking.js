const stack = document.querySelector('.stack');
const stackContainer = stack.querySelector('.stack-container');
const addElementButton = stack.querySelector('.add-element');
const removeElementButton = stack.querySelector('.remove-element');
let currentStack = [];

// Function to add an element to the stack
function addElement() {
  const newElement = document.createElement('div');
  newElement.classList.add('stack-element');
  newElement.textContent = `Element ${currentStack.length + 1}`;
  stackContainer.appendChild(newElement);
  currentStack.push(newElement);
}

// Function to remove an element from the stack
function removeElement() {
  if (currentStack.length === 0) return;
  const removedElement = currentStack.pop();
  removedElement.remove();
}

// Add event listeners to buttons
addElementButton.addEventListener('click', addElement);
removeElementButton.addEventListener('click', removeElement);