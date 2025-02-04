function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // Correct: result1 is 8
const result2 = subtract(10, 5); // Correct: result2 is 5

// Uncommon error: Type inference issue
const result3 = add(5, "3"); // Type error expected, but compiles without error in certain configurations
const result4 = subtract(10, "5");  // Type error expected, but compiles without error in certain configurations
console.log(result3, result4); // This line might produce unexpected results