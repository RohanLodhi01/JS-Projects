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

// nameElement.innerText = localStorage.getItem("myName");

// let inputValue
// nameInput.addEventListener("input", (e) => {
// //   // assign value to myName in local storage
//   localStorage.setItem("myName", e.target.value);
// //   // inputValue = e.target.value
//   nameElement.innerText = localStorage.myName;
// });

// set age to local storage
// const ageElement = document.querySelector(".age-tag");
// const ageInput = document.querySelector(".age");

// ageElement.innerText = localStorage.getItem("myAge")
// ageInput.addEventListener("input", (e) => {
//   localStorage.setItem("myAge", e.target.value);

//   ageElement.innerText = localStorage.myAge;
// });

// how to insert a whole obj in local storage

const ageElement = document.querySelector(".age-tag");
const ageInput = document.querySelector(".age");

//instead of doing this
// const myData =  {
//   name: '',
//   age: ''
// }

// do this
const myData = JSON.parse(localStorage.getItem("myData")) || {};

if(myData.name){
  nameElement.innerText = myData.name
}
if(myData.age){
  ageElement.innerText = myData.age
}
nameInput.addEventListener("input", (e) => {
  myData.name = e.target.value;
  localStorage.setItem("myData", JSON.stringify(myData));
  nameElement.innerText = e.target.value;
});

ageInput.addEventListener("input", (e) => {
  myData.age = e.target.value;
  localStorage.setItem("myData", JSON.stringify(myData));
  ageElement.innerText = e.target.value;
});


// to remove all item in local storage
// localStorage.clear()

// to remove single item in local storage
// localStorage.removeItem('key')