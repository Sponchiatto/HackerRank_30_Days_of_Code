function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  const tip = meal_cost * (tip_percent / 100);

  // Calculate tax amount
  const tax = meal_cost * (tax_percent / 100);

  // Calculate total cost
  const total_cost = meal_cost + tip + tax;

  console.log(Math.round(total_cost));
}
