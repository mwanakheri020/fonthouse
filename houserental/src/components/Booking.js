import { useEffect, useState } from 'react';
import axios from 'axios';
import './Booking.css';

function Booking() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [houses, setHouses] = useState([]);
  const [editingHouse, setEditingHouse] = useState(null);
  const [editData, setEditData] = useState({ name: '', location: '', price: '' });

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const result = await axios.get('http://127.0.0.1:8000/api/house/');
    setHouses(result.data);
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/house/', {
        name,
        location,
        price,
      });
      alert('House Booked Successfully');
      setName('');
      setLocation('');
      setPrice('');
      load();
    } catch (err) {
      alert('House Booking Failed');
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/house/${id}`);
      setHouses(houses.filter(house => house.id !== id));
    } catch (err) {
      alert('Failed to delete house');
    }
  }

  const handleEditClick = (house) => {
    setEditingHouse(house.id);
    setEditData({ name: house.name, location: house.location, price: house.price });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  async function handleEditSubmit(event, id) {
    event.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/house/${id}`, editData);
      setHouses(houses.map(house => (house.id === id ? { ...house, ...editData } : house)));
      setEditingHouse(null);
    } catch (err) {
      alert('Failed to edit house');
    }
  }

  return (
    <div>
      <h1>House Booking</h1>
      <div className='container mt-4'>
        <form onSubmit={save}>
          <div>
            <label>House Name</label>
            <input
              type='text'
              className='form-control'
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className='form-control'>
            <label>Location</label>
            <input
              type='text'
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </div>
          <div className='form-control'>
            <label>Price</label>
            <input
              type='text'
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-primary mt-2'>
            Add House
          </button>
        </form>
      </div>
      <div>
        <h2>Available Houses</h2>
        <ul>
          {houses.map((house) => (
            <li key={house.id}>
              {editingHouse === house.id ? (
                <form onSubmit={(event) => handleEditSubmit(event, house.id)}>
                  <input
                    type='text'
                    name='name'
                    value={editData.name}
                    onChange={handleEditChange}
                  />
                  <input
                    type='text'
                    name='location'
                    value={editData.location}
                    onChange={handleEditChange}
                  />
                  <input
                    type='text'
                    name='price'
                    value={editData.price}
                    onChange={handleEditChange}
                  />
                  <button type='submit' className='btn btn-primary mt-2'>
                    Save
                  </button>
                  <button type='button' className='btn btn-secondary mt-2' onClick={() => setEditingHouse(null)}>
                    Cancel
                  </button>
                </form>
              ) : (
                <>
                  {house.name} - {house.location} - {house.price}
                  <button type='button' className='btn btn-warning mt-2' onClick={() => handleEditClick(house)}>
                    Edit
                  </button>
                  <button type='button' className='btn btn-danger mt-2' onClick={() => handleDelete(house.id)}>
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Booking;
