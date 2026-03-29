import Resolver from "@forge/resolver";

const resolver = new Resolver();

// No payloads
resolver.define("function-1", () => {
  console.log("function-1");
});

// Only request payload
resolver.define("function-2", (request) => {
  console.log("function-2:", request.payload);
});

// Only request payload
resolver.define("function-3", () => {
  console.log("function-3");
  return { foo: "bar" };
});

// Both payloads
resolver.define("function-4", (request) => {
  console.log("function-4:", request.payload);
  return { foo: "bar" };
});

// Invocation error
resolver.define("function-5", () => {
  throw new Error("Error from the Forge function");
});

export const handler = resolver.getDefinitions();
