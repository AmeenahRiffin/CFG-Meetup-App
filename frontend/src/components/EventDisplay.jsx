// This displays the event data, don't use this directly, this is just for the html/css structure, use
//the EventDisplayView if you want to display a list of events.

import PropTypes from "prop-types";
const EventDisplay = ({ eventTitle, eventType, eventDate, eventLocation, eventPrice, eventContent = "", eventPostcode = "" }) => {
    const avatarUrl = `https://api.dicebear.com/9.x/icons/svg?seed=${eventTitle}`; // this is a placeholder for the icon, since we don't have an image system
    return (
        <div className="event-card">
            <h3>{eventTitle}</h3>
            
            <img src={avatarUrl} alt="Event Image" />
            <br /><br />
            <div className="banner">
                {eventType}
            </div>
            <p><b>Date:</b> {new Date(eventDate).toLocaleDateString()}</p>
            <p><b>Location:</b> {eventLocation}</p>
            <p><b>Postcode:</b> {eventPostcode}</p>
            <p><b>Price:</b> £{eventPrice}</p>
            {eventContent && <p>{eventContent}</p>}
        </div>
    );
};

EventDisplay.propTypes = {
    eventTitle: PropTypes.string, 
    eventType: PropTypes.string,
    eventDate: PropTypes.string,
    eventLocation: PropTypes.string,
    eventPrice: PropTypes.number,
    eventContent: PropTypes.string,
    eventPostcode: PropTypes.string,
};

export default EventDisplay;

