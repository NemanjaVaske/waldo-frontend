const findCharacter = () => {
  const mainImage = document.getElementsByClassName("main-picture")[0];
  mainImage.addEventListener("click", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    console.log(x, y);
  });
};
module.exports = findCharacter;
