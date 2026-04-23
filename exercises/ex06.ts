function printId(id: number | string): number | string {
  if (typeof id === "number") {
    console.log("ID is a number:", id);
    return id;
  } else {
    console.log("ID is a string:", id);
    return id;
  }
}

printId(123);
printId("abc");
