"use strict";
// class Department {
//     // Property
//     name: string;
//     private employees: string[] = [];
//     // Constructor method
//     constructor(n: string) {
//         this.name = n;
//     }
//     // Method
//     describe (this: Department) {  // Here the input param is an instance of class
//         console.log("Department: " + this.name);
//     }
//     addEmployee(employee: string) {
//         this.employees.push(employee);
//     }
//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }
// const accounting = new Department('Accounting');
// accounting.addEmployee("Max");
// accounting.addEmployee("Manu");
// // Trying to access a private property results in error
// // accounting.employees[2] = "Anna"; 
// accounting.describe();
// accounting.printEmployeeInformation();
// // The code below won't show any error but will give as undefined
// // Here we are getting undefined because we dont get the name property with this.name
// // const accountingCopy = {describe: accounting.describe};
// // accountingCopy.describe();
// /* However declaring name property like in Department will make it work 
// as we have name property */
// // const accountingCopy = {name: "Dummy", describe: accounting.describe};
// // accountingCopy.describe();
