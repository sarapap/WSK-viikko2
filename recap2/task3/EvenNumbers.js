'use strict';

const numbers = [];
while (true) {
    const input = prompt("Enter a number (or 'done' to finish): ");
    numbers.push(input);
    if (input == 'done') {
        alert('Program has ended.');
        break;
    } 
} 

const evenNumbers = [];
for (const number of numbers) {
    if (number % 2 == 0) {
        evenNumbers.push(number);
    }}

const ifEven = document.querySelector('#number1');
const ifNotEven = document.querySelector('#number2');

if (evenNumbers.length > 0) {
    ifEven.innerHTML = "Even numbers: " + evenNumbers.join(", ");
    ifNotEven.innerHTML = "";
} else {
    ifEven.innerHTML = "";
    ifNotEven.innerHTML = "Even numbers: None";
}