let myTime = document.querySelector(".textColor");

setInterval(() => {
  getCurrentTime();
}, 1000);

function getCurrentTime() {
  let time = new Date();
  let hours = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let am_pm = hours >= 12 ? "PM" : "AM";

  hours %= 12;
  if (hours == 0) {
    hours = 12;
  }

  myTime.innerHTML = `${converting(hours)} : ${converting(min)} : ${converting(
    sec
  )} ${am_pm}`;
}
function converting(num) {
  return num.toString().padStart(2, "0");
}
