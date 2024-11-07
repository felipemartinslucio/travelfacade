const FlightBooking = require('./FlightBooking');
const HotelBooking = require('./HotelBooking');
const CarRental = require('./CarRental');

class TravelFacade {
    constructor() {
        this.flightBooking = new FlightBooking();
        this.hotelBooking = new HotelBooking();
        this.carRental = new CarRental();
    }

    bookTrip() {
        this.flightBooking.bookFlight();
        this.hotelBooking.bookHotel();
        this.carRental.rentCar();
        console.log("Reserva de viagem concluída com sucesso!");
    }
}

module.exports = TravelFacade;