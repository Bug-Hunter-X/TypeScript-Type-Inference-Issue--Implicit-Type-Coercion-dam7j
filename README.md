# TypeScript Type Inference Issue

This repository demonstrates a subtle bug related to TypeScript's type inference. In certain scenarios, TypeScript might not enforce type checking strictly, leading to unexpected runtime behavior.  The bug involves implicit type coercion where string values are treated as numbers in arithmetic operations without throwing a compile-time error. This can be particularly problematic when dealing with user inputs or external data where type safety is crucial.

## How to Reproduce

1. Clone this repository.
2. Compile and run the `bug.ts` file using the TypeScript compiler (tsc) and a Node.js runtime.
3. Observe that the program executes without compile-time errors, but the results are unexpected due to implicit type coercion.

## Solution

The `bugSolution.ts` file provides a fix for the problem by enhancing type checking, preventing the implicit type coercion, and ensuring that the code behaves as expected.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.