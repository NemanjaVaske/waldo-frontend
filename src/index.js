const home = require("./home");
const letsPlay = require("./letsPlay");

window.addEventListener("load", async () => {
  await home();
  letsPlay();
});
