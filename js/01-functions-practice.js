// //STEP 1
// function halfNumber(numToHalf) {
//     return `Half of ${numToHalf} is ${numToHalf/2}.`;
// }
// console.log(halfNumber(97));

// //STEP 2
// function squareNumber(numToSquare) {
//     return `The result of squaring the number ${numToSquare} is ${numToSquare**2}.`;
// }
// console.log(squareNumber(7));

// //STEP 3
// function percentOf(num1, num2) {
//     return `${num1} is ${num1/num2 * 100}% of ${num2}.`;
// }
// console.log(percentOf(25,100));

// //STEP 4
// function findModulus(x, y) {
//     return `${x % y} is the modules of ${x} and ${y}.`
// }
// console.log(findModulus(7,3));

//STEP 5
function f (a) { // can include names still, if desired
    // arguments instance of Array -> false (exceptions to this?)
    var firstArg = arguments[0]
    let total = 0
    // a === firstArg -> always true
    // iterate all arguments, just as if it were an Array:
    for (var i = 0; i < firstArg.length; i++) {
        //alert(arguments[i]);
        //let total = 0;
        total += parseInt(firstArg[i]);
        console.log(total); 
    }
    //const sum =  arr.reduce((result,number)=> result+number);
    return `The sum of all the numbers is ${total}`;

}
let userInput = prompt("Enter a set of number seperated by commas: ");
f(userInput);