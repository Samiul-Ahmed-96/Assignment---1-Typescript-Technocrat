// Problem 1
// Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.

function processInput(input: string | number): number {
  if (typeof input === "string") {
    return input.length;
  } else if (typeof input === "number") {
    return input * input;
  }
  // This case is handled by TypeScript's type checking.
  return 0;
}

// Problem 2

// Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.

interface Address {
  city: string;
  street: string;
}

interface Person {
  address?: Address;
  phone?: string;
}

function getAddressCity(person: Person): string | undefined {
  return person.address?.city;
}
