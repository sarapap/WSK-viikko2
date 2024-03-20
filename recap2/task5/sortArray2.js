'use script';

const array = [12, 21, 36, 46, 54, 62, 79, 88];

function sortArray(array, order) {
    if (order == 'asc') {
        return array.slice().sort((a,b) => a - b);
    } else if (order == 'desc') {
        return array.slice().sort((a,b) => b - a);
    }
}

const ascending = sortArray(array, 'asc');
const descending = sortArray(array, 'desc');
document.querySelector('#sortedNumbers1').innerHTML = 'Numbers ascending: ' + ascending;
document.querySelector('#sortedNumbers2').innerHTML = 'Numbers descending: ' + descending;
