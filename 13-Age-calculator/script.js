const dateOfBirth = document.getElementById("Dob");
const resultedDob = document.getElementById("result");
const calcAgeBtn = document.getElementById("calculateAge");

// console.log(dateStr.getMonth())

const currentDate = new Date();
const date = {
  curryear: currentDate.getFullYear(),
  currmonth: currentDate.getMonth() + 1,
  currday: currentDate.getDate(),
};

calcAgeBtn.addEventListener("click", calculateDateOfBirth);

let dob = {};
dateOfBirth.addEventListener("input", (e) => {
  let dateStr = new Date(e.target.value);
  ((dob.year = dateStr.getFullYear()),
    (dob.month = dateStr.getMonth() + 1),
    (dob.day = dateStr.getDate() + 1));
});

function calculateDateOfBirth() {
  if (!dob.year) {
    resultedDob.textContent = "Please select a Date Of Birth";
    return;
  }

  if(dob.year > date.curryear || (dob.year == date.curryear && dob.month)){

  }
  let years = date.curryear - dob.year;
  let months = date.currmonth - dob.month;
  let days = date.currday - dob.day;

  //   Borrow if days are negative
  if (days < 0) {
    months--;
    days += 30;
  }

  //   Borrow if months are negative
  if (months < 0) {
    years--;
    months += 12;
  }

  resultedDob.textContent = `You are ${years} years, ${months} months, ${days} days old`;
}
