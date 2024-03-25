'use strict';

const x1 = parseFloat(prompt('Enter a coordinate for x1.'));
const y1 = parseFloat(prompt('Enter a coordinate for y1.'));
const x2 = parseFloat(prompt('Enter a coordinate for x2.'));
const y2 = parseFloat(prompt('Enter a coordinate for y2.'));

const distance = Math.sqrt(((x2 - x1) ** 2 + (y2 - y1) ** 2));
document.querySelector('#distance').innerHTML = 'The distance between the two points: ' + parseFloat(distance.toFixed(2));