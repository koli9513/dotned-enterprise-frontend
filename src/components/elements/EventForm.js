import React from "react";

const EventForm = (props) => {
    return <form onSubmit={props.onSubmit}>
        <h1>Edit an event</h1>

        <label>
            Name:
            <input
                name="name"
                type="text"
                value={props.event.name}
                onChange={props.onChange}
                required
            />
        </label>
        <label>
            Description:
            <textarea
                name="description"
                type="text"
                value={props.event.description}
                onChange={props.onChange}
                required
            />
        </label>
        <label>
            Location:
            <input
                name="location"
                value={props.event.location}
                onChange={props.onChange}
                required
            />
        </label>
        <label>
            City:
            <input
                name="city"
                value={props.event.city}
                onChange={props.onChange}
                required
            />
        </label>
        <label>
            Event URL:
            <input
                name="eventUrl"
                type="text"
                value={props.event.eventUrl}
                onChange={props.onChange}
                required
            />
        </label>
        <label>
            Category:
            <select
                name="eventCategory"
                value={props.event.category}
                onChange={props.onChange}
                required
            >
                <option key=""/>
                <option value="THEATER">THEATER</option>
                <option>FESTIVAL</option>
                <option>CONCERT</option>
            </select>
        </label>
        <label>
            Date:
            <input
                name="date"
                type="datetime-local"
                value={props.event.date}
                onChange={props.onChange}
                required
            />
        </label>
        <button>Submit</button>
    </form>;
}

export default EventForm;