"use strict";
function displayValue(value) {
    if (typeof value === "string") {
        console.log("String:", value);
    }
    else if (typeof value === "number") {
        console.log("Number:", value);
    }
    else {
        console.log("Unknown type");
    }
}
displayValue("hello");
displayValue(42);
function processUnknown(value) {
    if (typeof value === "string") {
        for (const char of value) {
            console.log(char);
        }
    }
}
processUnknown("Patrick");
