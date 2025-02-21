// ========================
// JavaScript Code Example
// Topics: Variable Declaration & Comments
// Sources:
// 1. https://www.w3schools.com/js/js_comments.asp
// 2. https://www.w3schools.com/js/js_variables.asp
// ========================

// === 1. Single-line comment: Variable declaration ===
var carName = "Volvo"; // Variable 'carName' holds the value "Volvo"

/*
=== 2. Multi-line comment: Mathematical operations ===
The following code declares two variables and calculates their sum.
*/
var x = 5;
var y = 10;
var total = x + y; // Calculate the sum of x and y

// === 3. String Variables ===
var firstName = "John";
var lastName = "Doe";

// === 4. Number Variables ===
var age = 30;
var height = 175.5; // Unit: cm

// === 5. Boolean Variable ===
var isMarried = false; // Indicates marital status (true / false)

// === 6. Array Variable ===
var favoriteColors = ["Red", "Green", "Blue"]; // Array of colors

// === 7. Object Variable ===
var person = {
    firstName: "Jane",
    lastName: "Smith",
    age: 28,
    isMarried: true
};

// ========================
// Console Output for Debugging
// ========================
console.log("🚗 Car Name:", carName);
console.log("🔢 Total:", total);
console.log("👤 Name:", firstName + " " + lastName);
console.log("📅 Age:", age);
console.log("📏 Height:", height + " cm");
console.log("💍 Married:", isMarried);
console.log("🎨 Favorite Colors:", favoriteColors.join(", "));
console.log("🧑 Person Object:", person);

// === 8. Extended: Calculate array length ===
console.log("📌 Colors Count:", favoriteColors.length);

// === 9. Add a new color to the array ===
favoriteColors.push("Yellow");
console.log("🎨 Updated Colors:", favoriteColors);

// === 10. Conditional Statement: Check age ===
if (age > 18) {
    console.log("✅ You are an adult.");
} else {
    console.log("❌ You are underaged.");
}

// === 11. Function Example ===
function greetUser(name) {
    return "Hello, " + name + "!";
}
console.log(greetUser(firstName)); // Call the function
