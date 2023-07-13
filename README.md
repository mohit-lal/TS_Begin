# TS_Begin
A brief project while learning Typescript

# Union Types:
Union types are type formed from two or more types. But when using union types we must be careful as TypeScript will only allow an operation is it is valid for every member of union

        function combine(input1: number | string) {
        };

Here the function combine is expecting its param input1 to be either number or string. 

# Literal Types:
Literal types are specific types as we can refer to specific strings or numbers in type position

        function convert(input: "as-number" | "as-text") {

        }

Here the input is not expecting any string but "as-number" & "as-text" specifically.