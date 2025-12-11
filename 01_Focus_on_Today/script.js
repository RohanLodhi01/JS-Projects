const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputsField = document.querySelectorAll(".goal-input");
const progressBar = document.querySelector('.progress-bar')
// const errorLabel = document.querySelector('.error-label')

checkBoxList.forEach((checkbox) => {
  
  checkbox.addEventListener("click", (e) => {

    const isAllGoalsFilled = [...inputsField].every(function (input) {
      return input.value;
    });

    if (isAllGoalsFilled) {
      checkbox.parentElement.classList.toggle("completed");
    }else{
      progressBar.classList.add('show-error')
    }

  });
});

