import React, { useState } from "react";
import { createAPIEndpoint, ENDPOINTS } from "../api";
import { useHistory } from "react-router-dom";
import EventForm from "./elements/EventForm";

const AddEvent = () => {
  let history = useHistory();
  const [event, setEvent] = useState({
    name: "",
    isFavorite: false,
    description: "",
    image: "https://www.smartdatajob.com/images/joomlart/demo/default.jpg",
    location: "",
    city: "",
    eventUrl: "",
    userId: 1,
    date: "2021-10-12T19:30",
    category: "THEATER",
    subtitle: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    saveEvent();
  };

  const saveEvent = () => {
    createAPIEndpoint(ENDPOINTS.EVENT)
      .create(JSON.stringify(event))
      .then(() => {
        history.push("/events");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <EventForm onSubmit={handleSubmit} event={event} onChange={handleChange} />
  );
};

export default AddEvent;
