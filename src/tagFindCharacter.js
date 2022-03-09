const tagFindCharacter = (pos_x, pos_y) => {
  const mainImage = document.getElementsByClassName("picture-cover")[0];
  const tag = document.createElement("div");
  console.log(mainImage);
  tag.classList.add("tag");
  tag.style.top = pos_y + 6 + "px";
  tag.style.left = pos_x - 10 + "px";
  mainImage.appendChild(tag);
};
module.exports = tagFindCharacter;
