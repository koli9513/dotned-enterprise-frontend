import {useEffect, useState} from "react";
import {createAPIEndpoint, ENDPOINTS} from "../api";
import {Link, useParams} from "react-router-dom";
import {StyledCardContainer} from "./styles/StyledCardContainer";
import EventCard from "./elements/EventCard";
import {StyledFavoriteButton} from "./styles/StyledFavoriteButton";

const DetailedEvent = () => {
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

    return (
        <div>
            <img src={event.image} alt="small card img"/>
            <div className="date-info">
                <span className="year">{event.year} </span>
                <span className="month">{event.month}</span><br/>
                <span className="day">{event.day}</span>
            </div>
            <div className="time-info">
                <em className="hour">{event.hour}</em>
                <em className="minute">{event.minute}</em>
            </div>
            <h1 className="name">{event.name}</h1>
            <div dangerouslySetInnerHTML={{__html :event.description}} />
            <a href={event.eventUrl}>Click for event details</a>
            <div dangerouslySetInnerHTML={{__html :event.location}} />
            <div className="tags">{event.category}, <span>{event.city}</span></div>
        </div>
    );
};

export default DetailedEvent;