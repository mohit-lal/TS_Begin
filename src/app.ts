// interface Person {
//   name: string;
//   age: number;

//   greet(phrase:string): void;
// }

// let user1: Person;

// user1 = {
//   name: "Max",
//   age: 30,
//   greet(phrase:string){
//     console.log(phrase + ' ' + this.name);
//   }
// };

// user1.greet("Hi there I am ");
interface Named {
  readonly name?: string;
  outputName?: string;
}


//Interface can be inherited
interface Greetable extends Named{
  greet( phrase: string): void;
}


// while implementing interface we must adhere to interface structure
// we should define properties and methods as that of interface
class Person implements Greetable{ // implementing interface in a class
  name?: string;
  outputName = '...'
  age = 30;

  constructor (n?: string) {

    if (n) {
      this.name = n;
    }
  }

  greet(phrase:string) {
    if (this.name) {
      
      console.log(phrase + ' ' + this.name + ". My age is " + this.age);
    } else {
      console.log('Hi!')
    }
  }
}

let user1: Greetable; // using interface as a type
user1 = new Person();
user1.greet("Hi I am ");
console.log(user1);