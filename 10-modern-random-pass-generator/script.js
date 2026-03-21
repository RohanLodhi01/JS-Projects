const generateButton = document.getElementById("genBtn");
const passwordField = document.getElementById("passField");
const copyButton = document.getElementById("copyBtn");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const symbol = "!@#$%^&*()_+-=[]{}|;:,.<>?";
const numbers = "0123456789";

const passwordLength = 12;
let allChars = uppercase + lowercase + symbol + numbers;

function generatePassword() {
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];

  while (passwordLength > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordField.value = password;
}

copyButton.addEventListener("click", async () => {
  const password = passwordField.value;

  if (!password) return; // return nothing

  try {
    await navigator.clipboard.writeText(password);

    copyButton.classList.replace("fa-copy", "fa-check");
    setTimeout(() => {
      copyButton.classList.replace("fa-check", "fa-copy");
    }, 2000);
  } catch {
    alert("something went wrong");
  }
});
