const createPlayground = (pictureUrl) => {
  const content = document.getElementById("content");
  const characters = document.createElement("div");
  characters.classList.add("characters");
  const pictureCover = document.createElement("div");
  pictureCover.classList.add("picture-cover");
  const waldo = document.createElement("img");
  waldo.setAttribute("src", "./assets/image/waldo.jpg");
  characters.appendChild(waldo);
  const wenda = document.createElement("img");
  wenda.setAttribute("src", "./assets/image/wenda.jpg");
  characters.appendChild(wenda);
  const wizzard = document.createElement("img");
  wizzard.setAttribute("src", "./assets/image/wizard.jpg");
  characters.appendChild(wizzard);
  const odlaw = document.createElement("img");
  odlaw.setAttribute("src", "./assets/image/odlaw.jpg");
  characters.appendChild(odlaw);
  content.appendChild(characters);
  const mainPic = document.createElement("img");
  mainPic.setAttribute("src", `./assets/image/${pictureUrl}`);
  mainPic.classList.add("main-picture");
  pictureCover.appendChild(mainPic);
  content.appendChild(pictureCover);
};
module.exports = createPlayground;
