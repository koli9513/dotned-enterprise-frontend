import {useEffect, useState} from "react";
import {createAPIEndpoint, ENDPOINTS} from "../api";
import {Link, useParams} from "react-router-dom";
import {StyledCardContainer} from "./styles/StyledCardContainer";
import EventCard from "./elements/EventCard";
import {StyledFavoriteButton} from "./styles/StyledFavoriteButton";
import {StyledDetailedEvent} from "./styles/StyledDetailedEvent";

const DetailedEvent = () => {
    const [event, setEvent] = useState([]);
    const { eventId } = useParams();

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.EVENT)

            .fetchById(eventId)
            .then((res) => {
                const eventFromServer = {
                    name: res.data.name,
                    description: res.data.description,
                    year: res.data.formattedDate[0],
                    month: res.data.formattedDate[1],
                    day: res.data.formattedDate[2],
                    hour: res.data.formattedDate[3],
                    minute: res.data.formattedDate[4],
                    eventUrl: res.data.eventUrl,
                    location: res.data.location,
                    image: res.data.image
                }
                setEvent(eventFromServer);
            })
            .catch((err) => console.log(err));
    }, [eventId]);

    return (
        <StyledDetailedEvent>
            <div className="details">
                <div className="name">{event.name}</div>
                    <div className="box-left" dangerouslySetInnerHTML={{__html :event.description}} />
                    <div className="box-right">
                        <div className="date-info">
                            <span className="year">{event.year} </span>
                            <span className="month">{event.month}</span><br/>
                            <span className="day">{event.day}</span>
                        </div>
                        <div className="time-info">
                            <span className="hour">{event.hour} </span>
                            <span className="minute">{event.minute}</span>
                        </div>
                        <div className="location" dangerouslySetInnerHTML={{__html :event.location}} />
                        <a className="link" href={event.eventUrl}>Click for event details</a>
                    </div>
            </div>
            <img src={event.image} alt="big card img"/>
        </StyledDetailedEvent>
    );
};

export default DetailedEvent;