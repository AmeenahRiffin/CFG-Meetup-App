import React, { useState } from 'react';
import { events } from '../../Data/eventData';
import Navbar from '../../components/Navbar/Navbar';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter events based on selected category
  const filteredEvents = selectedCategory
    ? events.filter((event) => event.category === selectedCategory)
    : events;

  return (
    <div className="upcoming-events-wrapper">
      {/* Navbar */}
      <Navbar />

      <header className="upcoming-events-header">
        <div className="header-content">
          <h1 className="upcoming-events-title">Upcoming Events</h1>
          <div className="header-controls">
            {" "}
            <select
              className="dropdown-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Search events by category</option>
              <option value="Cultural Events">Cultural Events</option>
              <option value="Fundraising Events">Fundraising Events</option>
              <option value="Educational Events">Educational Events</option>
              <option value="Recreational Events">Recreational Events</option>
              <option value="Seasonal Events">Seasonal Events</option>
            </select>
          </div>
        </div>
      </header>

      <main className="upcoming-events-content">
        <div className="event-cards-wrapper">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="eventCard"
              data-category={event.category}
            >
              <div className="eventDetails">
                <div className="dateTime">
                  <span>📅 {event.date}</span>
                </div>
                <div className="locationPriceNumber">
                  <h2>➡️{event.title}</h2>
                  <p>➡️{event.description}</p>
                  <p>📍 {event.location}</p>
                  <p>📮 {event.postcode}</p>
                  <p>⏰Start time: {event.startTime} </p>
                  <p>⏰End time: {event.endTime} </p>
                  <p>🏷️Price: {event.price}</p>
                  {event.number && <p>📞 Contact: {event.number}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default UpcomingEvents;