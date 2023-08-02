"use strict";
class Department {
    // Constructor method
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // Property
        // name: string;
        // id: number;
        // Private property is only access from inside of the class. 
        //It cannot be modified from child class
        // private employees: string[] = [];
        // Protected property can be accessed from child classes as well 
        this.employees = [];
        // this.name = name;
        // this.id = id
    }
    // Method
    describe() {
        console.log("Department: " + this.name + "  : " + this.id);
        // console.log('Department (${this.id}): (${this.name})');
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        // Whenever we need to access the constructor of parent class we should use super
        // Also super should be used as a function and passed in params as in constructor of parents
        // super() should be used before this
        super(id, "IT");
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addEmployee(name) {
        if (name !== "") {
            // Here since employees is a protected property we can use it in child class
            this.employees.push(name);
        }
    }
    addReports(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = new AccountingDepartment('d2', []);
accounting.addReports("Adding reports");
accounting.printReports();
accounting.addEmployee("Mohit");
accounting.printEmployeeInformation();
const it = new ITDepartment('d1', ['Max']);
it.addEmployee("Max");
it.addEmployee("Manu");
// Trying to access a private property results in error
// it.employees[2] = "Anna"; 
it.describe();
it.name = 'New Name';
it.printEmployeeInformation();
console.log(it);
// The code below won't show any error but will give as undefined
// Here we are getting undefined because we dont get the name property with this.name
// const accountingCopy = {describe: accounting.describe};
// accountingCopy.describe();
/* However declaring name property like in Department will make it work
as we have name property */
// const accountingCopy = {name: "Dummy", describe: accounting.describe};
// accountingCopy.describe();
