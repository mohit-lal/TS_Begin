"use strict";
// Union types example. Use | to be more flexible with the types. Below find the string and number
function combine(input1, // Use of union type to provide with either string or number
input2, // Use of Alias type as Combinable type consist of both number and string. It can contain both.
// Literal type: As the name suggest it is specific strings or numbers in type
resultConversion
/* Use of Literal type here.
  'resultConversion' is expecting not all string
  But "as-number" & "as-text" specific string
*/
) {
    let result;
    if ((typeof input1 == "number" && typeof input2 == "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    //   if (resultConversion === "as-number") {
    //     // return parseFloat(result);
    //     return +result;
    //   } else {
    //     return result.toString();
    //   }
}
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
const combinedStringAges = combine("30", "20", "as-number");
console.log(combinedStringAges);
const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
