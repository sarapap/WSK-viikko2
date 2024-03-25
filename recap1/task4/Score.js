'use strict';

const score = parseFloat(prompt('Type your score for course assessment (0-100):'));

switch (true) {
    case score >= 0 && score < 40:
        document.querySelector('#score1').innerHTML = 'You receive the grade of 0.';
        break;
    case score >= 40 && score < 52:
        document.querySelector('#score2').innerHTML = 'You receive the grade of 1.';
        break;
    case score >= 52 && score < 63:
        document.querySelector('#score3').innerHTML = 'You receive the grade of 2.';
        break;
    case score >= 63 && score < 75:
        document.querySelector('#score4').innerHTML = 'You receive the grade of 3.';
        break;
    case score >= 75 && score < 87:
        document.querySelector('#score5').innerHTML = 'You receive the grade of 4.';
        break;
    default:
        document.querySelector('#score6').innerHTML = 'You receive the grade of 5.';
        break;
}