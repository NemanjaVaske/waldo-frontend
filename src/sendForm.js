const sendForm = async (name, record, image) => {
  let records = record.split(":");
  let min = parseInt(records[0], 10);
  let sec = parseInt(records[1], 10);
  records = sec + min * 60;
  const res = await fetch(
    `https://quiet-fortress-06303.herokuapp.com/api/v1/images/${image.id}/scores/${name}/${records}`,
    { method: "post" }
  );
  const data = await res.json();
  const content = document.getElementById("content");
  const list = document.createElement("ol");
  list.textContent = "Best scores:";
  data.forEach((char) => {
    const listItem = document.createElement("li");
    let sec = char.seconds % 60;
    let min = char.seconds / 60;
    listItem.innerHTML =
      char.name + " with time " + Math.floor(min) + ":" + sec;
    list.appendChild(listItem);
  });
  content.appendChild(list);
  const btn = document.createElement("button");
  btn.textContent = "Play Again!";
  content.appendChild(btn);
  btn.addEventListener("click", () => {
    window.location.reload();
  });
};

module.exports = sendForm;
