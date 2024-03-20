'use script';

const numbers = [];
const enterNumbers = parseInt(prompt('Enter number 1: '));
const enterNumbers2 = parseInt(prompt('Enter number 2: '));
const enterNumbers3 = parseInt(prompt('Enter number 3: '));
const enterNumbers4 = parseInt(prompt('Enter number 4: '));
const enterNumbers5 = parseInt(prompt('Enter number 5: '));

numbers.push(enterNumbers);
numbers.push(enterNumbers2);
numbers.push(enterNumbers3);
numbers.push(enterNumbers4);
numbers.push(enterNumbers5);

document.querySelector('#number').innerHTML = 'Numbers: ' + numbers;

const number = parseInt(prompt('Enter a number to search: '))
if (numbers.includes(number)) {
    alert('Number ' + number + ' is found in the array.');
} else {
    alert('Number ' + number + ' is not found in the array.');
}

numbers.pop();
document.querySelector('#updatedList').innerHTML = 'Updated numbers: ' + numbers;

numbers.sort(function(a,b) {
    return a-b;
});
document.querySelector('#sortedNumbers').innerHTML = 'Sorted numbers: ' + numbers;


