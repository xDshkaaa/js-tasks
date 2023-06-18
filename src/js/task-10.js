function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const dataCreate = document.querySelector("[data-create]");
const dataDestroy = document.querySelector("[data-destroy]");
const input = document.querySelector('[type="number"]');

dataCreate.addEventListener("click", () => {
  let number = input.value;
  createBoxes(number);
});

let boxArray = [];

const createBoxes = (amount) => {
  let size = 30;

  for (let index = 0; index < amount; index++) {
    let randomImage = getRandomHexColor();
    boxArray[
      index
    ] = `<div style="width: ${size}px; height: ${size}px; background-color: ${randomImage};"></div>
    `;

    size += 10;
  }

  return (boxes.innerHTML = boxArray.join(""));
};

// destroy boxes
const destroyBoxes = () => {
  boxes.innerHTML = "";
  boxArray = [];
};

dataDestroy.addEventListener("click", destroyBoxes);
