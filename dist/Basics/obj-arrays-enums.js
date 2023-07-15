"use strict";
// const person: {
//     name: string;
//     age: number;
// } = {
// const ADMIN = 0;
// const READ_ONLY = 1;
// const Author = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Mohit',
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
let favouriteActivities;
favouriteActivities = ['sports', 5, 'kio'];
console.log(person.age);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('You are admin');
}
