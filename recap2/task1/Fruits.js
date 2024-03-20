'use strict';

const fruits = ['apple', ' banana', ' orange', ' grape', ' kiwi'];
console.log("Fruits: " + fruits);

console.log("Length of Fruits: " + fruits.length);

console.log("Element at Index 2: " + fruits[2]);

const lastIndex = fruits.length - 1;
console.log("Last Element of Fruits: " + fruits[lastIndex]);

const vegetables = [];
const vegetableInput = prompt('Enter vegetable 1: ');
const vegetableInput2 = prompt('Enter vegetable 2: ');
const vegetableInput3 = prompt('Enter vegetable 3: ');

vegetables.push(vegetableInput);
vegetables.push(vegetableInput2);
vegetables.push(vegetableInput3);

console.log("Vegetables: " + vegetables);

console.log("Length of Vegetables: " + vegetables.length);
