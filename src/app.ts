const userNames = "Max";
//  Variable defined with const cannot be changed
// let age = 30;
// let is dependent on the scope of the variables 

// age = 29;

// var result;
// function addn(a: number, b: number) {
//     result = a+b;
//     return result;
// }
// console.log("Hello world.");
// console.log("Hello world.");
// console.log(result);

// Arrow function
const addM = (a:number, b: number = 1) => a+b; // for 1 expression no need for curly braces
const addN = (a:number, b: number) => {
    return a+b
}

// console.log(addM(5,6));

const pringOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    // button.addEventListener('click', () => {}); // If you have no parameters you have to use and empty pair of parentheses: () => {}
    button.addEventListener('click', event => console.log(event)); 
}
pringOutput(addN(5,3));

const hobbies = ['Sports', 'Cooking', 'a', 'b'];
const activeHobbies = ['Hiking'];

// Spread Operator ... and object
activeHobbies.push(...activeHobbies);

const personA = {
    name: 'Max',
    age: 35,
};

const copiedPerson = {...personA}; // Copies the whole object with key value pair rather than a pointer

const addSprd = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = addSprd(2, 4, 6, 87, 98, 23, 4, 2);
console.log(addedNumbers);

//Array Destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2, remainingHobbies);

// Object Destructuring
const { name: userNameA, age } = personA;
console.log(userNameA, age);