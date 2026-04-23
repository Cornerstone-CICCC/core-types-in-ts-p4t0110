function throwError(message: string): never {
  throw new Error(message);
}

try {
  throwError("Something went wrong!");
} catch (e) {
  console.log("Caught error:", e);
}

function throwVoid(): void {
  console.log("This returns void");
}

throwVoid();
