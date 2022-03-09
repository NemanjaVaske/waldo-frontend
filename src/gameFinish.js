const clear = require("./clear");
const scoreForm = require("./scoreForm");

const gameFinish = (timerF, data) => {
  const record = document.getElementById("timer").innerHTML;
  console.log(record);
  clear();
  window.clearInterval(timerF);
  scoreForm(record, data);
  console.log("kraj");
};
module.exports = gameFinish;
