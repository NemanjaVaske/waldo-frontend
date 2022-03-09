const tagFindCharacter = (x, y) => {
  const mainImage = document.getElementsByClassName("picture-cover")[0];
  const tag = document.createElement("div");
  console.log(mainImage);
  tag.classList.add("tag");
  tag.style.top = y + 6 + "px";
  tag.style.left = x - 10 + "px";
  mainImage.appendChild(tag);
};
module.exports = tagFindCharacter;
