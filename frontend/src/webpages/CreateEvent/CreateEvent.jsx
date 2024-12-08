import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './CreateEvent.css';

const CreateEvent = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");

  const handleEventSubmit = (e) => {
    e.preventDefault();
    navigate("/upcoming-events");
  };

  return (
    <>
      <Navbar />
      <div className="event-form-container">
        <h2>Create an Event</h2>
        <form className="event-form" onSubmit={handleEventSubmit}>
          <div className="form-columns">
            <div className="form-column">
              <input type="text" placeholder="Event Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="email" placeholder="Email Address" required />
              <input type="date" placeholder="Event Date" required />
              <input type="time" placeholder="Start Time" required />
            </div>
            <div className="form-column">
              <input type="time" placeholder="End Time" required />
              <input type="text" placeholder="Location" required />
              <input type="text" placeholder="Postcode" required />
              <input type="number" placeholder="Price" required />
              <textarea placeholder="Description" rows="4" required></textarea>
            </div>
          </div>
          <div className="category-select">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a Category
              </option>
              <option value="Cultural Events">Cultural Events</option>
              <option value="Fundraising Events">Fundraising Events</option>
              <option value="Educational Events">Educational Events</option>
              <option value="Recreational Events">Recreational Events</option>
              <option value="Seasonal Events">Seasonal Events</option>
            </select>
          </div>
          <div className="button-container">
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateEvent;