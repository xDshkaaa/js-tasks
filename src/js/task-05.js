const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const button = document.querySelector(".button");
input.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
  if (output.textContent === "") {
    output.textContent = "Anonymous";
  }
});
