'use script';

const array = [12, 21, 36, 46, 54, 62, 79, 88];

function sortArray(array) {
    return array.sort((a,b) => a - b);
}

document.querySelector('#sortedNumbers').innerHTML = 'Sorted numbers: ' + array;