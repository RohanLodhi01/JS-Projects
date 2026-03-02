const inputBox = document.getElementById("input-box");
const tasksContainer = document.getElementById("list-container");
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
}

tasksContainer.addEventListener(
  "click",
  function (e) {
    console.log(e.target.tagName == "LI");
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false,
);
