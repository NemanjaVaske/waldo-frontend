const sendForm = require("./sendForm");

const scoreForm = (record, data) => {
  const content = document.getElementById("content");
  const formContainer = document.createElement("div");
  formContainer.innerHTML = `<form>
  <p>Please enter your Name</p>
  <label>Name:</label>
  <input type="text" id="name"  name="name"/>
  
  <input type="submit" value="Submit" />
</form>`;
  content.appendChild(formContainer);
  formContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    sendForm(e.target.childNodes[5].value, record, data);
    console.log();
  });
};
module.exports = scoreForm;
