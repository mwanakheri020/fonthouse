import React from 'react';
import './House.css';  // Ensure the correct CSS file is imported
import axios from 'axios';
import {useState , useEffect } from 'react';

function House() {
  // const  [name , setName] = useState('');
  // const [location , setLocation] = useState('');
  // const [price , setPrice] = useState('');
  const [House , setHouse ] = useState([]);

  useEffect (() => {
    load();
    
  }, []);


  async function load() {
  const result = await axios.get('http://127.0.0.1:8000/api/house/');
  setHouse (result.data);
    
  }




  return (
    <div className="house-container">
      <h1>Available Houses</h1>
      <p>Explore our collection of houses available for rent:</p>
      <table className='table table-dark mt-4' align='center'>
        <thead>
          <tr>
            <th>House name</th>
            <th>House Location</th>
            <th>House Price</th>
          </tr>
          </thead> 
          <tbody>
            {House.map((house, index) => (
              <tr>
                <td>{house.name}</td>
                <td>{house.location}</td>
                <td>{house.price}</td>
              </tr>
            ))}
            </tbody>
      </table>

      
    </div>
  );
}

export default House;