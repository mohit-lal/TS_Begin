"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "n";
// userName = userInput;
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    // This never returns anything
    throw { message: message, errorCode: code };
}
generateError("An error occured", 500);
