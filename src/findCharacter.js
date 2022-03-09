const gameFinish = require("./gameFinish");
const tagFindCharacter = require("./tagFindCharacter");
const clear = require("./clear");

const findCharacter = (timerF, data) => {
  const mainImage = document.getElementsByClassName("main-picture")[0];
  let find = 0;
  mainImage.addEventListener("click", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;

    data.characters.forEach((char) => {
      if (
        char.x_pos - x <= 7 &&
        char.x_pos - x >= -7 &&
        char.y_pos - y <= 7 &&
        char.y_pos - y >= -7
      ) {
        //TODO dodati funkciju koja stavlja flag i oznacava kog smo pronasli
        tagFindCharacter(char.x_pos, char.y_pos, char.name);
        find++;
        if (find === data.characters.length) {
          gameFinish(timerF, data);
        }
      }
    });
  });
};
module.exports = findCharacter;
