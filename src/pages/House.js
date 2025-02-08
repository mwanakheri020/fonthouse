import React from 'react';
import './House.css'; // Make sure to adjust the path to your styling file

const House = ({ house }) => {
  return (
    <div className="house-container">
      <h2>{house.name}</h2>
      <img src={house.imageUrl} alt={house.name} className="house-image" />
      <p>{house.description}</p>
      <p><strong>Price:</strong> ${house.pricePerMonth} per month</p>
      <p><strong>Location:</strong> {house.location}</p>
      <button className="view-details-button">View Details</button>
    </div>
  );
};

export default House;
