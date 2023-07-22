const userNames = "Max";
//  Variable defined with const cannot be changed
let age = 30;
// let is dependent on the scope of the variables 

age = 29;

// var result;
// function addn(a: number, b: number) {
//     result = a+b;
//     return result;
// }
// console.log("Hello world.");
// console.log("Hello world.");
// console.log(result);

// Arrow function
const addM = (a:number, b: number) => a+b; // for 1 expression no need for curly braces
const addN = (a:number, b: number) => {
    return a+b
}

console.log(addM(5,6));

const pringOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    // button.addEventListener('click', () => {}); // If you have no parameters you have to use and empty pair of parentheses: () => {}
    button.addEventListener('click', event => console.log(event)); 
}
pringOutput(addN(5,3));