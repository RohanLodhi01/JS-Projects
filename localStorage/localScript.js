// ******** this is not the recommeded practice their is no issue in this code ********

// this is a input tag
const nameInput = document.querySelector(".name");

// this is span tag
const nameElement = document.querySelector(".name-tag");

// assign the user input to name-tag

// nameElement.innerText = localStorage.myName;

// // add an 'input' event to nameInput
// nameInput.addEventListener("input", (e) => {

//   // assign value to myName in local storage
//   localStorage.myName = e.target.value;
//   nameElement.innerText = localStorage.myName

// });



// THIS IS THE CORRECT PRACTICE 

nameElement.innerText = localStorage.getItem('myName');

nameInput.addEventListener("input", (e) => {

  // assign value to myName in local storage
  localStorage.setItem('myName',e.target.value)
  nameElement.innerText = localStorage.myName

});