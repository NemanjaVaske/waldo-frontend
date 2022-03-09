const tagFindCharacter = require("./tagFindCharacter");

const findCharacter = (characters) => {
  const mainImage = document.getElementsByClassName("main-picture")[0];

  mainImage.addEventListener("click", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    characters.forEach((char) => {
      if (
        char.x_pos - x <= 7 &&
        char.x_pos - x >= -7 &&
        char.y_pos - y <= 7 &&
        char.y_pos - y >= -7
      ) {
        console.log("pronasli ste " + char.name);
        //TODO dodati funkciju koja stavlja flag i oznacava kog smo pronasli
        tagFindCharacter(char.x_pos, char.y_pos);
      }
    });
  });
};
module.exports = findCharacter;
