// Using let to declare a variable
let age = 25;
console.log("Initial age: ", age); // Expected Output: 25



// Using const to declare a variable
const birthYear = 1998;
console.log("Birth year: ", birthYear); // Expected Output: 1998
age = 31;
console.log("Updated Age: ", age);

// birthYear = 2000;
// console.log("Birth Year: ", birthYear); // Expected Output: 2000


let currentYear = 2024;
let yearsSinceBirth = currentYear - birthYear;
console.log("Years Since Birth: ", yearsSinceBirth);

currentYear = 2025;
yearsSinceBirth = currentYear - birthYear;
console.log("Years Since Birth After Update: ", yearsSinceBirth);


const greeting = "Hello";
let userName = "Alice";
let personalizedGreeting = greeting + ", " + userName + "!";
console.log(personalizedGreeting);

userName = "Bob";
personalizedGreeting = greeting + ", " + userName + "!";
console.log("updated greeting: ", personalizedGreeting);