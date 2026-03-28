const age = 20;
const major = 'Computer Science';
console.log(age,major);

function sumNumbers(a, b) {
    alert(a + b);
}

const number = prompt("Enter a number:");

if(number % 2 == 0) {
    alert("Even");
} else {
    alert("Odd");
}

const fruits = ["Apple", "Orange", "Pineapple"];

fruits.forEach(fruit => console.log(fruit));