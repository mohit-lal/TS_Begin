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
var person = {
    name: 'Mohit',
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
var favouriteActivities;
favouriteActivities = ['sports'];
console.log(person.age);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('You are admin');
}
