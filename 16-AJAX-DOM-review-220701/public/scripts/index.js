// Acá tenes que escribir el código para que tu app funcione
const input = document.querySelector("input");

axios.get("/api/items").then((response) => {
  const items = response.data;
  items.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  items.forEach((item) => addItemToList(item));
});

input.addEventListener("keypress", (e) => {
  if (input.value && e.key === "Enter") {
    e.preventDefault();
    axios
      .post("/api/items", { title: e.target.value })
      .then((response) => {
        const item = response.data;
        addItemToList(item);
        input.value = "";
      })
      .catch((error) => console.log(error));
  }
});

list.addEventListener("click", (e) => {
  if (e.target.matches("input[type='checkbox']")) {
    const label = e.target.parentNode;
    const id = label.parentNode.id;
    const completed = label.classList.contains("completed");
    axios
      .put(`/api/items/${id}`, { isCompleted: !completed })
      .then(() => label.classList.toggle("completed"))
      .catch((error) => console.log(error));
  }
});

list.addEventListener("click", (e) => {
  if (e.target.matches("i")) {
    const item = e.target.parentNode;
    const id = item.id;
    axios
      .delete(`/api/items/${id}`)
      .then(() => {
        item.remove();
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
});

document.querySelector(".clear").addEventListener("click", () => {
  axios
    .delete("/api/items")
    .then(() => {
      while (list.firstChild) {
        list.firstChild.remove();
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
});
