
// ===============================
// JavaScript Practice File
// Covers Concepts: Chapters 6–25
// Author: Bro Hussain (Practice)
// ===============================

// -------- Chapter 6: Increment / Decrement --------
let num = 1;
let postInc = num++;   // postInc = 1, num = 2
let preInc  = ++num;   // preInc = 3, num = 3
let postDec = num--;   // postDec = 3, num = 2
let preDec  = --num;   // preDec = 1, num = 1

// -------- Chapter 7: Operator Precedence --------
let totalA = 1 + 3 * 4;        // 13
let totalB = (1 + 3) * 4;      // 16
let totalC = (2 * 4) * (4+2);  // 48

// -------- Chapter 8: Concatenation --------
let userName = "Ali";
let greet = "Thanks, " + userName + "!";
let mixNums = "2 plus 2 equals " + (2 + 2);

// -------- Chapter 9: Prompts (browser only) --------
// Uncomment to test in browser
// let ageStr = prompt("Enter your age:", "18");
// let age = Number(ageStr); // convert string to number

// -------- Chapter 10–12: if / else / else if --------
let city = "Vatican";
let message;
if (city === "Vatican") {
  message = "Correct!";
} else if (city === "Rome") {
  message = "Close!";
} else {
  message = "Incorrect.";
}

// -------- Chapter 11: Comparison Operators --------
let score = 75;
let passed = score >= 50; // true

// -------- Chapter 13: Logical Operators --------
let weight = 320;
let time = 5.8;
let tryout = (weight > 300 && time < 6) ? "Tryout" : "Cookout";

let GPA = 2.7;
let SAT = 900;
let admitted = (GPA > 2.5 || SAT > 1000);

// -------- Chapter 14: Nested if --------
let role;
let isAdult = true;
let isCitizen = false;

if (isAdult) {
  if (isCitizen) {
    role = "Eligible Voter";
  } else {
    role = "Adult, not citizen";
  }
} else {
  role = "Minor";
}

// -------- Chapter 15–17: Arrays --------
let fruits = ["apple", "banana", "mango"];
fruits.push("orange");        // add end
fruits.pop();                 // remove end
fruits.unshift("grape");      // add start
fruits.shift();               // remove start

let sliced = fruits.slice(0, 2);
fruits.splice(1, 0, "kiwi");  // insert at index 1

// -------- Chapter 18–20: for loops --------
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}

// flags & breaks
let found = false;
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "banana") {
    found = true;
    break;
  }
}

// nested loops
let pairs = [];
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    pairs.push([i, j]);
  }
}

// -------- Chapter 21–25: Strings --------
let text = "JavaScript is Awesome";

let lower = text.toLowerCase();
let upper = text.toUpperCase();
let len = text.length;
let part = text.slice(0, 10);
let index = text.indexOf("is");
let charAt5 = text.charAt(5);
let replaced = text.replace("Awesome", "Powerful");

console.log({
  postInc, preInc, postDec, preDec,
  totalA, totalB, totalC,
  greet, mixNums,
  message, passed, tryout, admitted,
  role, fruits, sliced, sum, found, pairs,
  lower, upper, len, part, index, charAt5, replaced
});
