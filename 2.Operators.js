// Task 
// Given the meal price (base cost of a meal), tip percent 
// (the percentage of the meal price being added as tip), and tax percent 
// (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. 
// Round the result to the nearest integer.

function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  const tip = meal_cost * (tip_percent / 100);

  // Calculate tax amount
  const tax = meal_cost * (tax_percent / 100);

  // Calculate total cost
  const total_cost = meal_cost + tip + tax;

  console.log(Math.round(total_cost));
}
