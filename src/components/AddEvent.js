import React, { useState } from "react";

const AddEvent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [eventUrl, setEventUrl] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [date, setDate] = useState("2021-10-12T19:30");

  const handleSubmit = (event) => {
    console.log(`
        id: 1
        name: ${name}
        isFavorite: false
        description: ${description}
        imagUrl: none
        location: ${location}
        city: ${location}
        eventUrl: ${eventUrl}
        userId: userId
        date: ${date}
        eventcategory: ${eventCategory}
      `);

    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add an event</h1>

      <label>
        Name:
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Description:
        <input
          name="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>

      <label>
        Location:
        <select
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        >
          <option key=""></option>

          <option>Budapest</option>
          <option>Szeged</option>
          <option>Győr</option>
        </select>
      </label>

      <label>
        Event URL:
        <input
          name="eventUrl"
          type="text"
          value={eventUrl}
          onChange={(e) => setEventUrl(e.target.value)}
          required
        />
      </label>

      <label>
        Category:
        <select
          name="eventCategory"
          value={eventCategory}
          onChange={(e) => setEventCategory(e.target.value)}
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
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>

      <button>Submit</button>
    </form>
  );
};

export default AddEvent;
