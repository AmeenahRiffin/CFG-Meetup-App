import React, { useState } from "react";
import EventForm from "../../../components/EventForm/EventForm";
import Navbar from "../../../components/Navbar/Navbar";
import "./CreateEvent.css";

const CreateEvent = () => {
  const [eventData, setEventData] = useState({}); // Example state management

  return (
    <div className="create-event">
      <Navbar />

      <h1>Create an Event</h1>
      <EventForm />
    </div>
  );
};

export default CreateEvent;
