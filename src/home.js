const clear = require("./clear");
const letsPlay = require("./letsPlay");

const home = async () => {
  clear();

  const content = document.getElementById("content");
  const fetchImages = async () => {
    const res = await fetch(
      "https://quiet-fortress-06303.herokuapp.com/api/v1/images"
    );
    const data = await res.json();
    // create image
    data.forEach((image) => {
      const img = document.createElement("img");
      img.classList.add("home-image");
      img.setAttribute("src", `./assets/image/${image.url}`);
      content.appendChild(img);
      img.addEventListener("click", () => {
        letsPlay(image.id);
      });
    });
  };
  await fetchImages();
};

module.exports = home;
