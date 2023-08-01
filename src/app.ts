class Department {
    // Property
    // name: string;
    // id: number;
    private employees: string[] = [];
    
    // Constructor method
    constructor(private readonly id: string, public name: string) {
        // this.name = name;
        // this.id = id
    }

    // Method
    describe (this: Department) {  // Here the input param is an instance of class
        console.log("Department: " + this.name +  "  : " + this.id);
        // console.log('Department (${this.id}): (${this.name})');
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('d1', 'Accounting');
accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// Trying to access a private property results in error
// accounting.employees[2] = "Anna"; 

accounting.describe();
accounting.name = 'New Name';
accounting.printEmployeeInformation();

// The code below won't show any error but will give as undefined
// Here we are getting undefined because we dont get the name property with this.name
// const accountingCopy = {describe: accounting.describe};
// accountingCopy.describe();

/* However declaring name property like in Department will make it work 
as we have name property */
// const accountingCopy = {name: "Dummy", describe: accounting.describe};
// accountingCopy.describe();

