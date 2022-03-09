const clear = require("./clear");
const createPlayground = require("./createPlayground");
const letsPlay = async (imageId) => {
  if (imageId) {
    const res = await fetch(`http://localhost:3000/api/v1/images/${imageId}`);
    const data = await res.json();
    //removing all from content
    clear();
    createPlayground(data.url);
  }
};
module.exports = letsPlay;
