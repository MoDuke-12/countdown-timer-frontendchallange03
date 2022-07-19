let daysEle = document.querySelector("#days"),
  hoursEle = document.querySelector("#hours"),
  minsEle = document.querySelector("#mins"),
  secondsEle = document.querySelector("#seconds");

const newYear = "1 Jan 2023";

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  //   Get Total Second
  const totalSeconds = (newYearDate - currentDate) / 1000;
  // Conver Second to days,hours,mins and seconds
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEle.innerHTML = days;
  hoursEle.innerHTML = formatTime(hours);
  minsEle.innerHTML = formatTime(mins);
  secondsEle.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);
