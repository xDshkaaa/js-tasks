const counter = {
  value: 0,
  incr(value) {
    this.value += value;
  },
  decr(value) {
    this.value -= value;
  },
};

const decrButton = document.querySelector('[data-action="decrement"]');
const incrButton = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

const decrFunc = () => {
  counter.decr(1);
  value.textContent = counter.value;
};
const incrFunc = () => {
  counter.incr(1);
  value.textContent = counter.value;
};

decrButton.addEventListener("click", decrFunc);
incrButton.addEventListener("click", incrFunc);
