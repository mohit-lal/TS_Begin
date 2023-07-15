// const person: {
//     name: string;
//     age: number;
// } = {

// const ADMIN = 0;
// const READ_ONLY = 1;
// const Author = 2;

enum Role {ADMIN, READ_ONLY, AUTHOR}; 
const person = {
    name: 'Mohit',
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

let favouriteActivities: any[];
favouriteActivities = ['sports', 5, 'kio']

console.log(person.age);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log('You are admin');

}