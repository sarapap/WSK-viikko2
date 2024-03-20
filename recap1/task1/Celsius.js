'use strict';

const temp = parseFloat(prompt('Enter a temperature in Celsius.'));
const convertedF = temp * (9/5) + 32;
const convertedK = temp + 274.15;

document.querySelector('#fahrenheit').innerHTML = 'Converted value in Fahrenheit: ' + parseFloat(convertedF.toFixed(2));
document.querySelector('#kelvin').innerHTML = 'Converted value in Kelvin: ' + parseFloat(convertedK.toFixed(2));