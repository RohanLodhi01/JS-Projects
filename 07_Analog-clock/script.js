function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = hours * 30 + minutes * 0.5;

  document.getElementById("sec").style.transform = `rotate(${secondAngle}deg)`;
  document.getElementById("min").style.transform = `rotate(${minuteAngle}deg)`;
  document.getElementById("hour").style.transform = `rotate(${hourAngle}deg)`;
}

setInterval(() => {
  updateClock();
}, 1000);
