const inputBox = document.getElementById("input-box");
const tasksContainer = document.getElementById("list-container");
const addBtn = document.getElementById("add-button");
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    tasksContainer.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveToLocalStorage();
}

tasksContainer.addEventListener(
  "click",
  function (e) {
    console.log(e.target.tagName == "LI");
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveToLocalStorage();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveToLocalStorage();
    }
  },
  false,
);

function saveToLocalStorage() {
  localStorage.setItem("data", tasksContainer.innerHTML);
}

function fetchDataFromLocalStorage() {
  tasksContainer.innerHTML = localStorage.getItem("data");
}

fetchDataFromLocalStorage()
