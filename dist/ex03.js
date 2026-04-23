"use strict";
function calculateDays(checkIn, checkOut) {
    const diff = checkOut.getTime() - checkIn.getTime();
    return diff / (1000 * 60 * 60 * 24);
}
const reservations = [];
const r1 = {
    customerInformation: "Alice",
    pricePerDay: 100,
    checkIn: new Date("2024-05-01"),
    checkOut: new Date("2024-05-03"),
    paymentInformation: {
        isPayed: false,
        totalPrice: 0
    }
};
r1.paymentInformation.totalPrice =
    calculateDays(r1.checkIn, r1.checkOut) * r1.pricePerDay;
reservations.push(r1);
console.log(reservations);
