//PRACTICE WITH FUNCTIONS

// function halfNumber(number) {
//     let  half = number / 2;
//     return `Half of ${number} is ${half}.`;

// }

// function squareNumber(number) {
//     let square = Math.pow(number, 2);
//     return `The result of squaring the number ${number} is ${square}.`;
// }

// function percentOf(int1, int2) {
//     let percent = (int1 / int2) * 100;
//     return `${int1} is ${percent}% of ${int2}.`;
// }

// function findModulus(int1, int2) {
//     let mod = int1 % int2;
//     return `${mod} is the modulus of ${int1} and ${int2}.`
// }


//ROCK, PAPER, SCISSORS

function start() {


let user = prompt("Do you choose rock, paper or scissors?");
let choice = Math.random();
    if (choice < 0.34) {
	    choice = 'rock';
    } else if(choice <= 0.67) {
	    choice = 'paper';
    } else {
	    choice = 'scissors';
    }
let compare = function(x, y) {

    if(x === y){
        return alert('The result is a tie!');

    } else if (x === 'rock') {

        if (y ===' scissors') {
            return alert('rock wins');

        } else if (y === 'paper') {
            return alert('paper wins');
        }

    } else if (x === 'paper') {

        if(y === 'scissors') {
            return alert('scissors win');

        } else if(y === 'rock') {
            return alert('paper wins');
        }
    } else if(x === 'scissors') {
        if(y === 'paper') {
            return alert('scissors win');

        } else if(y === 'rock') {
            return alert('rock wins');
        }
    }
    
}
console.log(compare(user,choice));
start();
}



//BASIC CALCULATOR
// import * as calc from './modules/calculator.js';

// function start() {
    
//     while (true) {
//         let x = Number(prompt('Give me a number'));
//         let y = Number(prompt('Give me a number'));
        
//         let operation = prompt('What operation would you like to perform?(add, subtract, multiply, divide)'); 
  
        
//         if (operation === 'add') {
//             alert(calc.add(x,y));
//         } else if (operation === 'subtract') {
//             alert(calc.subtract(x,y));
//         } else if (operation === 'multiply') {
//             alert(calc.multiply(x,y));
//         } else if (operation === 'divide') {
//             alert(calc.divide(x,y));
//         } else {
//             alert( 'Please choose one add, subtract, multiply or divide');
//             start();
//         }
        
//     }    
// }
// start();



    









