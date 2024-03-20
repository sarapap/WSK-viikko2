'use strict';

const side1 = parseFloat(prompt('Enter one side of a triangle.'));
const side2 = parseFloat(prompt('Enter another side of a triangle.'));
const side3 = parseFloat(prompt('Enter third side of a triangle.'));

if (side1 == side2 && side1 == side3 && side2 == side3) {
    document.querySelector('#triangle').innerHTML = 'The triangle is equilateral.';
} else if (side1 == side2 || side1 == side3 || side2 == side3 ) {
    document.querySelector('#triangle2').innerHTML = 'The triangle is isosceles.';
} else {
    document.querySelector('#triangle3').innerHTML = 'The triangle is scalene.';
}