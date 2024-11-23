// EventDisplayView

// What this does:
// This component is responsible for displaying a list of events fetched from the backend side of things, 
// and it allows the user to navigate through the list of events using pagination which is important when we're
// dealing with a very long list of events. 

// You can choose to show or hide certain information about the event, but by default everything is shown.

import PropTypes from "prop-types";
import EventDisplay from "./EventDisplay";
import { useState, useEffect } from "react";

const EventDisplayView = ({ 
    apiLink = "http://localhost:5000/events", 
    entriesPerPage = 10, 
    showEventDate = true, 
    showEventLocation = true, 
    showEventPostcode = true, 
    showEventPrice = true, 
    showEventContent = true }) => {
    const [events, setEvents] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(""); 
    const [page, setPage] = useState(1); 

    useEffect(() => {
        // Fetch event details from the backend
        fetch(`${apiLink}?page=${page}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Events not found");
                }
                return response.json();
            })
            .then((data) => {
                setEvents(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching events:", err);
                setError("Failed to load events.");
                setLoading(false);
            });
    }, [apiLink, page, entriesPerPage]);

    if (loading) return <p>Loading events...</p>;
    if (error) return <p>{error}</p>;

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const totalPages = Math.ceil(events.length / entriesPerPage);

    return (
        <div className="event-display-view">
            <div className="event-list">
                {events.slice(
                    (page - 1) * entriesPerPage,
                    page * entriesPerPage
                ).map((event) => (
                    <EventDisplay 
                    key={event.event_id}
                    eventTitle={event.event_title} 
                    eventType={event.event_type} 
                    eventDate={showEventDate ? event.event_date : null} 
                    eventLocation={showEventLocation ? event.event_location : null} 
                    eventPostcode={showEventPostcode ? event.event_postcode : null}
                    eventPrice={showEventPrice ? event.event_price : null} 
                    eventContent={showEventContent ? event.event_content : null} />
                ))}
            </div>
            <br />
            <br />
            <div className="pagination">
                {Array.from({ length: totalPages }).map((_, idx) => (
                    <>
                        <button
                            key={idx + 1}
                            onClick={() => handlePageChange(idx + 1)}
                            className={idx + 1 === page ? "active" : ""}
                        >
                            {idx + 1}
                        </button>
                    &nbsp;&nbsp;
                    </>
                ))}
            </div>
        </div>
    );
};

EventDisplayView.propTypes = {
    apiLink: PropTypes.string, 
    entriesPerPage: PropTypes.number,
    showEventDate: PropTypes.bool,
    showEventLocation: PropTypes.bool,
    showEventPostcode: PropTypes.bool,
    showEventPrice: PropTypes.bool,
    showEventContent: PropTypes.bool,
};

export default EventDisplayView;

