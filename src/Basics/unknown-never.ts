let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "n";
// userName = userInput;

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  // This never returns anything
  throw { message: message, errorCode: code };
}

generateError("An error occured", 500);
