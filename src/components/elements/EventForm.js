import React from "react";
import "../styles/form.css";

const EventForm = (props) => {
    return <form onSubmit={props.onSubmit}>

    <div className="container">
        <div className="inout-container">
            <label className="label">NAME:</label>
                <input className="input auto-width-label"
                    name="name"
                    type="text"
                    value={props.event.name}
                    onChange={props.onChange}
                    required
                />

            <label className="label">SUBTITLE:</label>
            <input className="input auto-width-label"
                   name="subtitle"
                   type="text"
                   value={props.event.subtitle}
                   onChange={props.onChange}
            />


            <label className="label">DESCRIPTION:</label>
                <textarea className="input" id="taller"
                    name="description"
                    type="text"
                    value={props.event.description}
                    onChange={props.onChange}
                />


            <label className="label">LOCATION:</label>
                <input className="input"
                    name="location"
                    value={props.event.location}
                    onChange={props.onChange}
                />

            <label className="label">CITY:</label>
                <input className="input auto-width-label"
                    name="city"
                    value={props.event.city}
                    onChange={props.onChange}
                    required
                />

            <label className="label">URL:</label>
                <input className="input"
                    name="eventUrl"
                    type="text"
                    value={props.event.eventUrl}
                    onChange={props.onChange}
                    required
                />

            <label className="label">IMAGE URL:</label>
            <input className="input"
                   name="image"
                   type="text"
                   value={props.event.image}
                   onChange={props.onChange}
                   required
            />

            <label className="label">CATEGORY:</label>
                <select className="input auto-width-label"
                    name="category"
                    value={props.event.category}
                    onChange={props.onChange}
                    required
                >
                    <option>THEATER</option>
                    <option>FESTIVAL</option>
                    <option>CONCERT</option>
                </select>

            <label className="label">DATE:</label>
                <input className="input auto-width-label"
                    name="date"
                    type="datetime-local"
                    value={props.event.date}
                    onChange={props.onChange}
                    required
                />
            <br/><br/>
            <button id="send-button">Submit</button>
        </div>
    </div>
    </form>;
}

export default EventForm;