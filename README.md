# TS_Begin
A brief project while learning Typescript

# Union Types:
Union types are type formed from two or more types. But when using union types we must be careful as TypeScript will only allow an operation is it is valid for every member of union

        function combine(input1: number | string) {
        }

Here the function combine is expecting its param input1 to be either number or string. 

# Literal Types:
Literal types are specific types as we can refer to specific strings or numbers in type position

        function convert(input: "as-number" | "as-text") {

        }

Here the input is not expecting any string but "as-number" & "as-text" specifically.

# Alias Types:
Alias types are the alias for the types.

        type Combinable = number | string | "as-number";
        function convert(input: Combinable) {

        }

Here Combinable consists of both number and string and literal type with union type.

# Function Types:
Function types allows us to declare which type of function we want to use specifically

        let combineValues: (a: number, b: number) => number;
Here combineValues takes in a function denoted by () with 2 parameters with type number and return => number  

# Function Callbacks:
Typescript properly defines function call back with proper input params, output types.

        function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
        const result = n1 + n2;
        cb(result);
        }

        addAndHandle(10, 20, (result) => {
        console.log(result);
        });

Here in addAndHandle we are taking cb as the callback function, with num as input param with number type and it is not returning any thing.  Thus we have to call addAndHandle with 10, 20 as input params and anonymous function is given with result as input param and we just put console log without returning anything.