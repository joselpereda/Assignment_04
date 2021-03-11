//STEP 1
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
// function totalSum (srcArray) {

//     let i = 0;                  // While loop counter
//     let total = 0;              // To store sum of integers entered
//     let n = srcArray.length;    // Find the array length

//     // Cycle through the array and sum all of its elements
//     while (i < n)
//     {
//         total += Number(srcArray[i]);
//         i++;
//     }
//     return total;               // Return the total sum
//     }
// // Prompt the user to enter any given number of integers, seperated by commas
// let userInput = prompt("Enter a set of number seperated by commas: ");

// // Call function to calculate sum and display in the browser
// alert(`The sum of the numbers entered is ${totalSum(userInput.split(','))}`);