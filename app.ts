
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "n";
userName = userInput;

if (typeof userInput === 'string') {
    userName = userInput;
}
