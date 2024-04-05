// Create a simple discount calculator that takes two values from the variables - the total price and the discount percentage - and prints the discounted value.

let totalValue = 2000;
let discountPercentage = 20;

let discountedPrice = totalValue - (discountPercentage / 100) * totalValue;
console.log("The final price after discount is: Rs." + discountedPrice);
