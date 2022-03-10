const sendForm = async (name, record, image) => {
  let records = 2;
  records = record.split(":");
  let min = parseInt(records[0], 10);
  let sec = parseInt(records[1], 10);
  records = sec + min * 60;
  const res = await fetch(
    `http://localhost:3000/api/v1/images/${image.id}/scores/${name}/${records}`,
    { method: "post" }
  );
  const data = await res.json();
  const content = document.getElementById("content");
  const list = document.createElement("ol");
  data.forEach((char) => {
    const listItem = document.createElement("li");
    let sec = char.seconds % 60;
    let min = char.seconds / 60;
    listItem.innerHTML = char.name + " with score " + min.toFixed() + ":" + sec;
    list.appendChild(listItem);
  });
  content.appendChild(list);
};

module.exports = sendForm;
