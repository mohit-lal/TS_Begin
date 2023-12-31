abstract class Department {
    // Property
    // name: string;
    // id: number;
  
    // Private property is only access from inside of the class.
    //It cannot be modified from child class
    // private employees: string[] = [];
  
    // Protected property can be accessed from child classes as well
    protected employees: string[] = [];
  
    // Static property
    static fiscalYear = "2023";
  
    // Constructor method
    constructor(protected readonly id: string, public name: string) {
      // this.name = name;
      // this.id = id
      /*  We cannot access static property and static method by the instance of a class
      i.e is we cannot use this keyword */
      // console.log(this.fiscalYear);
      console.log(Department.fiscalYear);
    }
  
    // Abstract Method because we are just defining a method and leaving implementation to each child classes
    abstract describe(this: Department): void; 
    //{
  
      // Instead we can use the class name itself
      // Here the input param is an instance of class
  //     console.log("Department: " + this.name + "  : " + this.id);
  //     // console.log('Department (${this.id}): (${this.name})');
  //   }
  
    static createEmployee(name: string) {
      return { name: name };
    }
  
    addEmployee(employee: string) {
      this.employees.push(employee);
    }
  
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }
  
  class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
      /* Whenever we need to access the constructor of parent class we should use 
      super. Also super should be used as a function and passed in params as in 
      constructor of parents. super() should be used before this */
      super(id, "IT");
      this.admins = admins;
    }
  
    describe() {
        console.log("IT department" + this.id);
    }
  }
  
  class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;
  
    // Singleton pattern or private constructor
    // This limits the class instantiation to just once and it we need to accedd such methods we can use static
    private constructor(id: string, private reports: string[]) {
      super(id, "Accounting");
      this.lastReport = reports[0];
    }
  
    // static method getInstance to instantiate singleton
    static getInstance() {
      if (AccountingDepartment.instance) {
        return this.instance;
      }
      this.instance = new AccountingDepartment('d2', []);
      return this.instance;
    }
  
    // getter method
    get mostRecentReport() {
      if (this.lastReport) {
        return this.lastReport;
      }
      throw new Error("Sorry, no report found.");
    }
  
    // setter method
    set mostRecentReport(value: string) {
      if (!value) {
        throw new Error("Pass in a VALUE.");
      }
      this.addReports(value);
    }
  
  //   abstract describe(this: Department): void;
  
    addEmployee(name: string) {
      if (name !== "") {
        // Here since employees is a protected property we can use it in child class
        this.employees.push(name);
      }
    }
  
    addReports(text: string) {
      this.reports.push(text);
      this.lastReport = text;
    }
  
    printReports() {
      console.log(this.reports);
    }
  
  
    // Overriding abstract method
    describe() {
        console.log("Accounting Dpartment" + this.id);
    }
  }
  
  const employee1 = Department.createEmployee("Ballon");
  console.log(employee1, Department.fiscalYear);
  
  const accounting = AccountingDepartment.getInstance();
  const accounting2 = AccountingDepartment.getInstance();
  // const accounting = new AccountingDepartment("d2", []);
  
  console.log(accounting, accounting2);
  // Putting = will trigger the setter method
  accounting.mostRecentReport = "Year end reports";
  accounting.addReports("Adding reports");
  console.log(accounting.mostRecentReport);
  accounting.describe();
  // accounting.printReports();
  
  // accounting.printReports();
  accounting.addEmployee("Mohit");
  // console.log(AccountingDepartment.createEmployee("Del"));
  // accounting.printEmployeeInformation();
  
  // const it = new ITDepartment("d1", ["Max"]);
  
  // it.addEmployee("Max");
  // it.addEmployee("Manu");
  
  // // Trying to access a private property results in error
  // // it.employees[2] = "Anna";
  
  // it.describe();
  // it.name = "New Name";
  // it.printEmployeeInformation();
  // console.log(it);
  
  // The code below won't show any error but will give as undefined
  // Here we are getting undefined because we dont get the name property with this.name
  // const accountingCopy = {describe: accounting.describe};
  // accountingCopy.describe();
  
  /* However declaring name property like in Department will make it work 
  as we have name property */
  // const accountingCopy = {name: "Dummy", describe: accounting.describe};
  // accountingCopy.describe();
  