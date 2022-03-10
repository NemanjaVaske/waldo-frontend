const clear = require("./clear");
const createPlayground = require("./createPlayground");
const findCharacter = require("./findCharacter");
const timer = require("./timer");

const letsPlay = async (imageId) => {
  if (imageId) {
    const res = await fetch(
      `https://quiet-fortress-06303.herokuapp.com/api/v1/images/${imageId}`
    );
    const data = await res.json();
    //removing all from content
    clear();
    createPlayground(data.url);
    let timerF = setInterval(timer, 1000);
    //must pass timerF,once it finished to stop it
    findCharacter(timerF, data);
  }
};
module.exports = letsPlay;
