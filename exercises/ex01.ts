interface Reservation {
  customerInformation: string;
  paymentInformation: string;
  checkIn: Date;
  checkOut: Date;
}

const reservation: Reservation = {
  customerInformation: "John Doe",
  paymentInformation: "Credit Card",
  checkIn: new Date("2024-05-01"),
  checkOut: new Date("2024-05-05")
};

console.log("Reservation:", reservation);
