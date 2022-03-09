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
      }
    });
  });
};
module.exports = findCharacter;
