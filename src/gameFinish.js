const clear = require("./clear");

const gameFinish = (timerF) => {
  const record = document.getElementById("timer").innerHTML;
  console.log(record);
  clear();
  console.log("kraj");
  window.clearInterval(timerF);
};
module.exports = gameFinish;
