document.querySelector("form").addEventListener("submit", addToDo);
function addToDo(event) {
  //preventing the default form action from running
  event.preventDefault();

  // create a new list item
  const item = document.createElement("li");

  // set text of the newly created list item to the value
  // of the input with an id of "item"
  item.innerText = document.getElementById("item").value;

  // add completeToDo function to each item to grey out item on click
  item.addEventListener("click", completeToDo);

  // create a new button element with innertext 'X'
  const button = document.createElement("button");
  button.innerText = "X";
  // add removeToDo function to the button on each list item created
  button.addEventListener("click", removeToDo);
  item.appendChild(button);

  // select the unordered list that will hold the newly created li
  const list = document.querySelector("ul");

  // attach the newly created li to the unordered list
  list.appendChild(item);

  // reset input field
  document.getElementById("item").value = "";
}

function removeToDo(event) {
  // event.target => button
  // event.target.parentNode => li
  event.target.parentNode.remove();
}

function completeToDo(event) {
  const value = event.target.getAttribute("aria-checked");
  if (value !== "true") {
    event.target.setAttribute("aria-checked", "true");
  } else {
    event.target.setAttribute("aria-checked", "false");
  }
}
