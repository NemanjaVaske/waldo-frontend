const clear = require("./clear");
const createPlayground = require("./createPlayground");
const findCharacter = require("./findCharacter");
const letsPlay = async (imageId) => {
  if (imageId) {
    const res = await fetch(`http://localhost:3000/api/v1/images/${imageId}`);
    const data = await res.json();
    console.log(data.characters);
    //removing all from content
    clear();
    createPlayground(data.url);
    findCharacter(data.characters);
  }
};
module.exports = letsPlay;
