// console.log("Hello world, This is Javascript Lesson 1");

// var fullName = "Mark John";
// let gender = "Male";
// // const age = 34;
// let programmer = true || false;
// experience = undefined;

// console.log(fullName, gender, age, experience);

// // Javascript Objects and Arrays

// let person = {
//   age: 45,
//   name: "John Doe",
//   weight: 77,
// };

// console.log(person);
// console.log("The age is ", person.age, "Years Old");

// let studentNames = ["John Doe", "Jane", "Grace", "Mark"];

// console.log(studentNames);
// console.log(studentNames[1]);

// var age = 16;

// if (age < 18) {
//   console.log("Not Allowed to vote");
// }

var age = 18;

if (age <= 18) {
  console.log("Not Allowed to vote");
} else {
  console.log("You are Allowed to vote");
}

var people = 36;

if (people < 20) {
  console.log("Less than 20 people turned out");
} else if (people > 30) {
  console.log("Turn out was too high");
} else {
  console.log("People turn out in a good number");
}

let mark = prompt("Enter Marks");

if (mark >= 75) {
  console.log("Score too high");
} else if (mark >= 60 && mark <= 74) {
  console.log("Better");
} else if (mark >= 50 && mark <= 59) {
  console.log("Good");
} else {
  console.log("Failed");
}
