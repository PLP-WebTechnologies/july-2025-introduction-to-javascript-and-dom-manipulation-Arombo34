// =======================
// Part 1: Basics
// =======================

// Variable declaration & conditional
let age = 18; 
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Another variable + operator
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
console.log("The sum is: " + sum);


// =======================
// Part 2: Functions
// =======================

// Function 1: Greeting
function greetUser(name) {
  return "Hello, " + name + "!";
}

// Function 2: Calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

console.log(greetUser("Alice"));
console.log("Total = " + calculateTotal(50, 3));


// =======================
// Part 3: Loops
// =======================

// Example 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("Counting: " + i);
}

// Example 2: While loop
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}


// =======================
// Part 4: DOM Manipulation
// =======================

// Select elements
let output = document.getElementById("output");
let greetBtn = document.getElementById("greetBtn");
let toggleBtn = document.getElementById("toggleBtn");
let numberList = document.getElementById("numberList");

// Interaction 1: Button click → change text
greetBtn.addEventListener("click", function() {
  output.textContent = "I am the developer of this page!";
});

// Interaction 2: Toggle message
toggleBtn.addEventListener("click", function() {
  if (output.textContent === "Hidden message!") {
    output.textContent = "Message toggled back!";
  } else {
    output.textContent = "Hidden message!";
  }
});

// Interaction 3: Dynamically generate list items with loop
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = "Number " + i;
  numberList.appendChild(li);
}
