'use strict';

const integer = parseInt(prompt('Enter a positive integer:'));
let sum = 0;

if (integer > 0) {
    for (let i = 1; i <= integer; i++) {
        sum += i;
    }
    document.querySelector('#sum').innerHTML = 'The sum: ' + sum;
} else {
    document.querySelector('#sum').innerHTML = 'Please enter a positive integer.';
}


