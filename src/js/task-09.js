function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorName = document.querySelector(".color");
const buttonChangeColor = document.querySelector(".change-color");
const body = document.querySelector("body");

buttonChangeColor.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = body.style.backgroundColor;
});
