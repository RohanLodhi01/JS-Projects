const dateOfBirth = document.getElementById("Dob");
const resultedDob = document.getElementById("result");
const calcAgeBtn = document.getElementById("calculateAge");

// console.log(dateStr.getMonth())

const currentDate = new Date();
const today = {
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
    (dob.day = dateStr.getDate()));
});

function calculateDateOfBirth() {
  if (!dob.year) {
    resultedDob.textContent = "Please select a Date Of Birth";
    return;
  }

  if (
    dob.year > today.curryear ||
    (dob.year === today.curryear && dob.month > today.currmonth) ||
    (dob.year === today.curryear &&
      dob.month === today.currmonth &&
      dob.day > today.currday)
  ) {
    resultedDob.textContent = "Please select a valid date before today";
    return;
  }
  let years = today.curryear - dob.year;
  let months = today.currmonth - dob.month;
  let days = today.currday - dob.day;

  //   Borrow if days are negative
  if (days < 0) {
    months--;
    const prevMonthsDays = new Date(
      today.curryear,
      today.currmonth - 1,
      0,
    ).getDate();
    days += prevMonthsDays;
  }

  //   Borrow if months are negative
  if (months < 0) {
    years--;
    months += 12;
  }

  resultedDob.textContent = `You are ${years} years, ${months} months, ${days} days old`;
}
