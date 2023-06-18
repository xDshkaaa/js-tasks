const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
//const listEl = ingredients.map((el) => `<li class='item'>${el}</li>`).join("");
//list.innerHTML = listEl;

const listElements = ingredients.map((el) => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = el;

  return listEl;
});

list.append(...listElements);
