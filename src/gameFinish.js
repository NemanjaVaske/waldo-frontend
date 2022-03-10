const clear = require("./clear");
const scoreForm = require("./scoreForm");

const gameFinish = (timerF, data) => {
  const record = document.getElementById("timer").innerHTML;
  clear();
  window.clearInterval(timerF);
  scoreForm(record, data);
};
module.exports = gameFinish;
