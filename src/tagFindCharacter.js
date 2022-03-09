const tagFindCharacter = (pos_x, pos_y, charName) => {
  const mainImage = document.getElementsByClassName("picture-cover")[0];
  const tag = document.createElement("div");
  const findCharacter = document.getElementById(`${charName}`);
  findCharacter.style.border = "3px solid limegreen";

  tag.classList.add("tag");
  tag.style.top = pos_y + 6 + "px";
  tag.style.left = pos_x - 10 + "px";
  mainImage.appendChild(tag);
};
module.exports = tagFindCharacter;
