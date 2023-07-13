function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 12));
// In JS if we return a value from a function which doesn't return any thing we get an undefined value
console.log(printResult(add(5, 12)));
var combineValues; // () tells that combineValues takes only function and => number will tell that it will return a number
combineValues = add;
// combineValues = printResult;
console.log(combineValues(8, 8));
// let someVal: undefined; undefined is a type in TS
