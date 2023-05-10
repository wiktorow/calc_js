'use strict';

function calc() {

    const buttonValue = this.innerText;

    const resPlace = document.querySelector('#res');

    if(buttonValue === 'C') {
        resPlace.value = ''
    } else if(buttonValue === '='){
        resPlace.value = eval(resPlace.value);
    } else {
        resPlace.value += buttonValue;
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(element => {
    element.addEventListener('click', calc)
});