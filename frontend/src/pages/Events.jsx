import EventDisplayView from '../components/EventDisplayView'

const Events = () => {
    return (
    <>
        <div className="container">
        <h1>Events</h1>

        <button>Create Event</button>

    
        <EventDisplayView entriesPerPage={8}/>
            
        </div>
    </>
    );
};

export default Events;