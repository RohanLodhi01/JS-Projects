const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputsField = document.querySelectorAll(".goal-input");
const progressBar = document.querySelector(".progress-bar");
const errorLabel = document.querySelector(".error-label");
const progressValue = document.querySelector(".progress-value");

checkBoxList.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    const isAllGoalsFilled = [...inputsField].every(function (input) {
      return input.value;
    });

    if (isAllGoalsFilled) {
      checkbox.parentElement.classList.toggle("completed");
      progressValue.style.width = "33.33%";
    } else {
      progressBar.classList.add("show-error");
    }
  });
});

// show error message on goals not filled 
inputsField.forEach((input) => {
  input.addEventListener("focus", () => {
    progressBar.classList.remove("show-error");
  });
});
