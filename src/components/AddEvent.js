import React, { useState } from "react";
import { createAPIEndpoint, ENDPOINTS } from "../api";
import { useHistory } from "react-router-dom";
import EventForm from "./elements/EventForm";

class formmm extends React.Component {
    render() {
        return <form onSubmit={this.props.onSubmit}>
            <h1>Add an event</h1>

            <label>
                Name:
                <input
                    name="name"
                    type="text"
                    value={this.props.event.name}
                    onChange={this.props.onChange}
                    required
                />
            </label>

            <label>
                Subtitle:
                <input
                    name="subtitle"
                    type="text"
                    value={this.props.event.subtitle}
                    onChange={this.props.onChange}
                    required
                />
            </label>

            <label>
                Description:
                <textarea
                    name="description"
                    value={this.props.event.description}
                    onChange={this.props.onChange}
                    required
                />
            </label>

            <label>
                Location:
                <input
                    name="location"
                    type="text"
                    value={this.props.event.location}
                    onChange={this.props.onChange}
                    required
                />
            </label>

            <label>
                City:
                <input
                    name="city"
                    type="text"
                    value={this.props.event.city}
                    onChange={this.props.onChange}
                    required
                />
            </label>

            <label>
                Event URL:
                <input
                    name="eventUrl"
                    type="text"
                    value={this.props.event.eventUrl}
                    onChange={this.props.onChange}
                    required
                />
            </label>

            <label>
                Category:
                <select
                    name="category"
                    value={this.props.event.category}
                    onChange={this.props.onChange}
                    required
                >
                    <option key=""/>

                    <option>THEATER</option>
                    <option>CONCERT</option>
                    <option>FESTIVAL</option>
                </select>
            </label>

            <label>
                Date:
                <input
                    name="date"
                    type="datetime-local"
                    value={this.props.event.date}
                    onChange={this.props.onChange}
                    required
                />
            </label>

            <button>Submit</button>
        </form>;
    }
}

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
    date: "2021-08-27T9:32",
    category: "",
    subtitle: ""
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
      <EventForm onSubmit={handleSubmit} event={event} onChange={handleChange}/>
  );
};

export default AddEvent;
