import React from "react";
import "./EventForm.css";

const EventForm = () => {
  return (
    <main className="content">
      <h1>Create an Event</h1>
      <form className="event-form" action="upcoming_events.html" method="GET">
        <input type="text" placeholder="Enter event name" required />
        <input type="number" placeholder="Enter phone number" required />
        <input type="email" placeholder="Enter email address" required />
        <div className="input-container">
          <input type="date" id="event-date" required />
          <label htmlFor="event-date" className="placeholder">
            Select date
          </label>
        </div>
        <div className="input-container">
          <input type="time" id="start-time" required />
          <label htmlFor="start-time" className="placeholder">
            Enter start time
          </label>
        </div>
        <div className="input-container">
          <input type="time" id="end-time" required />
          <label htmlFor="end-time" className="placeholder">
            Enter end time
          </label>
        </div>
        <input type="text" placeholder="Enter location" required />
        <input type="text" placeholder="Enter postcode" required />
        <input
          type="number"
          placeholder="Enter price"
          min={0}
          max={100}
          required
        />
        <textarea
          placeholder="Enter description of the event"
          required
          defaultValue={""}
        />
        <select required>
          <option value="" disabled selected>
            Choose category of event
          </option>
          <option value="Cultural Events">Cultural Events</option>
          <option value="Fundraising Events">Fundraising Events</option>
          <option value="Educational Events">Educational Events</option>
          <option value="Recreational Events">Recreational Events</option>
          <option value="Seasonal Events">Seasonal Events</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </main>
  );
};

export default EventForm;
