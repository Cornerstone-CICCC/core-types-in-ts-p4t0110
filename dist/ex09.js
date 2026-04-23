"use strict";
function throwError(message) {
    throw new Error(message);
}
try {
    throwError("Something went wrong!");
}
catch (e) {
    console.log("Caught error:", e);
}
function throwVoid() {
    console.log("This returns void");
}
throwVoid();
