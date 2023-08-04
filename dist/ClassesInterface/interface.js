"use strict";
// interface Person {
//   name: string;
//   age: number;
// while implementing interface we must adhere to interface structure
// we should define properties and methods as that of interface
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name + ". My age is " + this.age);
    }
}
let user1; // using interface as a type
user1 = new Person("Max");
user1.greet("Hi I am ");
console.log(user1);
