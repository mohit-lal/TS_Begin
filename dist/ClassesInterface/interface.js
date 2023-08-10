"use strict";
// interface Person {
//   name: string;
//   age: number;
// while implementing interface we must adhere to interface structure
// we should define properties and methods as that of interface
class Person {
    constructor(n) {
        this.outputName = '...';
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name + ". My age is " + this.age);
        }
        else {
            console.log('Hi!');
        }
    }
}
let user1; // using interface as a type
user1 = new Person();
user1.greet("Hi I am ");
console.log(user1);
