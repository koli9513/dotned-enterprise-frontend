import React, { useState } from "react";
import { createAPIEndpoint, ENDPOINTS } from "../api";
import { useHistory } from "react-router-dom";

const AddEvent = () => {
  let history = useHistory();
  const [event, setEvent] = useState({
    name: "",
    isFavorite: false,
    description: "",
    image: "",
    location: "",
    city: "",
    eventUrl: "",
    userId: 1,
    date: "2021-10-12T19:30",
    //eventCategory: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    saveEvent();
  };

  const saveEvent = () => {
    createAPIEndpoint(ENDPOINTS.EVENT)
      .create(JSON.stringify(event))
      .then(() => {
        console.log("Event saved successfully");
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
    <form onSubmit={handleSubmit}>
      <h1>Add an event</h1>

      <label>
        Name:
        <input
          name="name"
          type="text"
          value={event.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Description:
        <textarea
          name="description"
          type="text"
          value={event.description}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Location:
        <input
          name="location"
          value={event.location}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        City:
        <input
          name="city"
          value={event.city}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Event URL:
        <input
          name="eventUrl"
          type="text"
          value={event.eventUrl}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Category:
        <select
          name="eventCategory"
          value={event.eventCategory}
          onChange={handleChange}
          required
        >
          <option key=""></option>

          <option>Category 1</option>
          <option>Category 2</option>
          <option>Category 3</option>
        </select>
      </label>

      <label>
        Date:
        <input
          name="date"
          type="datetime-local"
          value={event.date}
          onChange={handleChange}
          required
        />
      </label>

      <button>Submit</button>
    </form>
  );
};

export default AddEvent;
