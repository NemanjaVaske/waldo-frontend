let minutes = 0;
let seconds = 0;

const timer = () => {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
  }
  document.getElementById("timer").innerHTML = minutes + ":" + seconds;
};
module.exports = timer;
