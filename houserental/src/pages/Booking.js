import React, { useState } from 'react';
import './Booking.css'; // Make sure to adjust the path to your styling file

const Booking = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);

  const handleBooking = (e) => {
    e.preventDefault();
    console.log('Booking Details:', { checkInDate, checkOutDate, guests });
    // Handle booking logic here (e.g., API call)
  };

  return (
    <div className="booking-container">
      <h2>Booking</h2>
      <form onSubmit={handleBooking}>
        <div className="form-group">
          <label htmlFor="check-in">Check-in Date</label>
          <input
            type="date"
            id="check-in"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="check-out">Check-out Date</label>
          <input
            type="date"
            id="check-out"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min="1"
            required
          />
        </div>
        <button type="submit" className="booking-button">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;
