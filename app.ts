function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log("Result: " + num);
}
 
// cb is the call back function and TS is very strict with the params number and type and usually the Callback function does not return anything
// This is specifically in Typescript because we specified because we are ignoring any result 
// Here in this example we have stated that cb function will get a number as num and the output will be void which is in the declaration
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10,20, (result) => {
    console.log(result)
})

printResult(add(5,12));
// In JS if we return a value from a function which doesn't return any thing we get an undefined value
console.log(printResult(add(5,12))); 

let combineValues: (a: number, b: number) => number; // () tells that combineValues takes only function and => number will tell that it will return a number

combineValues = add;
// combineValues = printResult;

console.log(combineValues(8,8));
// let someVal: undefined; undefined is a type in TS