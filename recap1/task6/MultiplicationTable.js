'use strict';

const integer = parseInt(prompt('Enter a positive integer:'));

if (integer > 0) {
    const table = document.querySelector('table');
    let tableHTML = '';

    for (let i = 1; i <= integer; i++) {
        tableHTML += '<tr>'; 

        for (let j = 1; j <= integer; j++) {
            const product = i * j;
            tableHTML += '<td>' + product + '</td>';
        }
        tableHTML += '</tr>';
    } table.innerHTML = tableHTML;
} else {
    document.querySelector('#product').innerHTML = 'Please enter a positive integer.';
}