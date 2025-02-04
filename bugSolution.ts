function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // Correct: result1 is 8
const result2 = subtract(10, 5); // Correct: result2 is 5

// Solution: Strict type checking
const result3 = add(5, 3 as number); // Explicit type assertion
const result4 = subtract(10, 5 as number); // Explicit type assertion
console.log(result3, result4); // This will now produce the correct result

//Alternative solution using a stricter compiler option
//Compile with --strictNullChecks --strict flag to catch type issues at compile time