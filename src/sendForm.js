const sendForm = async (name, record, image) => {
  let records = 2;
  const res = await fetch(
    `http://localhost:3000/api/v1/images/${image.id}/scores/${name}/${records}`,
    { method: "post" }
  );
  const data = await res.json();
  console.log(data);
  const content = document.getElementById("content");
  const list = document.createElement("ol");
  data.forEach((char) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${char.name} with score: ${data.seconds}`;
    list.appendChild(listItem);
  });
  content.appendChild(list);
};

module.exports = sendForm;
