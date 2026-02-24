const slider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const genButton = document.getElementById("generate");
const passwordField = document.getElementById("password");
const copyIcon = document.getElementById('copyIcon')

// iniatlize o load
lengthValue.textContent = slider.value;

// update slider display on input
slider.addEventListener("input", () => {
    lengthValue.textContent = slider.value;
});
genButton.addEventListener("click", () => {
  passwordField.value = generatePassword();
});

// chars for password
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRST";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

// function to generate password
function generatePassword() {
  let genPassword = "";
  let allChars = "";

  allChars += lowercase.checked ? lowerChars : "";
  allChars += uppercase.checked ? upperChars : "";
  allChars += numbers.checked ? allNumbers : "";
  allChars += symbols.checked ? allSymbols : "";

  if (allChars === "") {
    alert("Please select at least one checkbox");
    return;
  }

  let i = 1;
  while (i <= slider.value) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }
  return genPassword;
}

copyIcon.addEventListener('click',()=>{
    let copiedPassoword = "";
    if(passwordField.value !== "" && passwordField.length !== 0){
        copiedPassoword = passwordField.value;
        passwordField.textContent = "";
    }
})