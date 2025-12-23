const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputsField = document.querySelectorAll(".goal-input");
const progressBar = document.querySelector(".progress-bar");
const errorLabel = document.querySelector(".error-label");
const progressValue = document.querySelector(".progress-value");
const goalsLines = document.querySelector(".completingGoals");

const Qoutes = [
  "Raise the bar by completing your goals!",
  "Well begun ,half has done!",
  "Just a step away, keep going!",
  "Whoa! You completed all the Goals, time for chill :D",
];

// console.log(inputsFieldArr)
// const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {
//   first: {
//     name: "",
//     completed: false,
//   },
//   second: {
//     name: "",
//     completed: false,
//   },
//   third: {
//     name: "",
//     completed: false,
//   },
// };
const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {};
let goalsCompletedCount = Object.values(allGoals).filter(
  (goal) => goal.completed
).length;

progressValue.style.width = `${
  (goalsCompletedCount / inputsField.length) * 100
}%`;
progressValue.firstElementChild.innerText = `${goalsCompletedCount} / ${inputsField.length} completed`;

goalsLines.innerText = Qoutes[goalsCompletedCount];

checkBoxList.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    const isAllGoalsFilled = [...inputsField].every(function (input) {
      return input.value;
    });

    if (isAllGoalsFilled) {
      checkbox.parentElement.classList.toggle("completed");
      const inputId = checkbox.nextElementSibling.id;

      // updating true if goal completed
      allGoals[inputId].completed = !allGoals[inputId].completed;

      // updating goals count if completed
      goalsCompletedCount = Object.values(allGoals).filter(
        (goal) => goal.completed
      ).length;
      // console.log(inputId);
      
      progressValue.style.width = `${(goalsCompletedCount / inputsField.length) * 100}%`;
      progressValue.firstElementChild.innerText = `${goalsCompletedCount}/${inputsField.length} completed`;
      goalsLines.innerText = Qoutes[goalsCompletedCount];

      localStorage.setItem("allGoals", JSON.stringify(allGoals));
    } else {
      progressBar.classList.add("show-error");
    }
  });
});

inputsField.forEach((input) => {
  // show goals in input field
  // console.log(allGoals[input.id])
  if (allGoals[input.id]) {
    input.value = allGoals[input.id].name;
    // checkbox icon completed show
    if (allGoals[input.id].completed) {
      input.parentElement.classList.add("completed");
    }
  }

  // show error message on goals not filled
  input.addEventListener("focus", () => {
    progressBar.classList.remove("show-error");
  });
  // add goals to local storage using allGoals object
  input.addEventListener("input", (e) => {
    if (allGoals[input.id] && allGoals[input.id].completed) {
      input.value = allGoals[input.id].name;
      return;
    }
    // console.log(e.target)
    if (allGoals[input.id]) {
      allGoals[input.id].name = input.value;
    } else {
      allGoals[input.id] = {
        name: input.value,
        completed: false,
      };
    }

    // console.log(allGoals);

    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  });
});
