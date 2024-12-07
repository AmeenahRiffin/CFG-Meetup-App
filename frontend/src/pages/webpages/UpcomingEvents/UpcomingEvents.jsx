// import React, { useState } from "react";
// import { events } from "./eventData"; // Ensure this path is correct
// import "./UpcomingEvents.css"; // Import your CSS file
// import Navbar from "./navbar/Navbar";
// import Scroll from "./Scroll/Scroll";

// import React, { useState } from "react";
// import { events } from "../../data/eventData"; // Adjusted path to eventData.js
// import "./UpcomingEvents.css"; // CSS file in the same folder
// import Navbar from "../../components/Navbar/Navbar"; // Correct path to Navbar component
// import Scroll from "../../components/Scroll/Scroll"; // Correct path to Scroll component
// import "./UpcomingEvents.css";

import React, { useState } from "react";
import { events } from "../../../data/eventData"; // Adjusted path based on your folder structure
import "./UpcomingEvents.css"; // CSS file in the same folder
import Navbar from "../../../components/Navbar/Navbar";
import Scroll from "../../../components/Scroll/Scroll";
import "./UpcomingEvents.css";

function UpcomingEvents() {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter events based on selected category
  const filteredEvents = selectedCategory
    ? events.filter((event) => event.category === selectedCategory)
    : events;

  return (
    <div className="container">
      <Navbar /> {/* Using Navbar component */}
      <main className="content">
        <div className="event-header">
          <h1>Upcoming events near you</h1>
          <div className="filter">
            <select
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

        <div class="event-cards-wrapper">
          <div className="eventCards">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="eventCard"
                data-category={event.category}
              >
                <div className="eventDetails">
                  <div className="dateTime">
                    <span>📅 {event.date}</span>
                    <br />
                  </div>
                  <div className="locationPriceNumber">
                    <br />
                    <h2>➡️{event.title}</h2>
                    <p>➡️{event.description}</p>
                    <br />
                    <p>📍 {event.location}</p>
                    <p>📮 {event.postcode}</p>

                    <p>⏰Start time: {event.startTime} </p>
                    <p>⏰End time: {event.endTime} </p>

                    <p>🏷️Price: {event.price}</p>

                    <p>{event.number && <p>📞 Contact: {event.number}</p>}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default UpcomingEvents;
