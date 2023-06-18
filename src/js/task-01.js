const list = document.querySelector("#categories");

const listItems = list.children;
const categoryAnimal = listItems[0].firstElementChild;
const ulAnimals = categoryAnimal.nextElementSibling;
const countOfAnimals = ulAnimals.children.length;

const numberOfAnimals = `Number of categories: ${listItems.length}`;
const firstCategory = `Category: ${categoryAnimal.textContent}`;
const firstElements = `Elements: ${countOfAnimals}`;

console.log(numberOfAnimals);
console.log(firstCategory);
console.log(firstElements);

// Products

const categoryProducts = listItems[1].firstElementChild;
const ulProducts = categoryProducts.nextElementSibling;
const countOfProducts = ulProducts.children.length;

const secondCategory = `Category: ${categoryProducts.textContent}`;
const secondElements = `Elements: ${countOfProducts}`;

console.log(secondCategory);
console.log(secondElements);

// Technologies

const categoryTechnologies = listItems[2].firstElementChild;
const ulTechnologies = categoryTechnologies.nextElementSibling;
const countOfTechnologies = ulTechnologies.children.length;

const thirdCategory = `Category: ${categoryTechnologies.textContent}`;
const thirdElements = `Elements: ${countOfTechnologies}`;

console.log(thirdCategory);
console.log(thirdElements);
