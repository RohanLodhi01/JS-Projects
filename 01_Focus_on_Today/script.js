const checkBoxList = document.querySelectorAll(".custom-checkbox");

checkBoxList.forEach((checkbox) => {
  // console.log(checkbox)
  checkbox.addEventListener("click", (e) => {
    // console.log('clicked')
    checkbox.parentElement.classList.toggle("completed");
  });
});

