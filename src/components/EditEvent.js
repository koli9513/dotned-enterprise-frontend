import React, {useEffect, useState} from "react";
import {createAPIEndpoint, ENDPOINTS} from "../api";
import {useHistory, useParams} from "react-router-dom";
import EventForm from "./elements/EventForm";

const EditEvent = () => {
    let history = useHistory();

    const [event, setEvent] = useState([]);
    const { eventId } = useParams();

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.EVENT)
            .fetchById(eventId)
            .then((res) => {
                setEvent(res.data);
            })
            .catch((err) => console.log(err));
    }, [eventId]);


    const handleSubmit = (event) => {
        event.preventDefault();
        saveEvent();
    };

    const saveEvent = () => {
        createAPIEndpoint(ENDPOINTS.EVENT)
            .update(eventId, JSON.stringify(event))
            .then(() => {
                console.log("Event updated successfully");
                history.push("/events");
            })
            .catch((err) => console.log(event));
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

export default EditEvent;