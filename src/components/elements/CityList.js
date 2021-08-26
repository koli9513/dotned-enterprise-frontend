import { useState, useEffect } from "react";
import { createAPIEndpoint, ENDPOINTS } from "../../api";
import EventCard from "./EventCard";
import { StyledCardContainer } from "../styles/StyledCardContainer";
import {useParams} from "react-router-dom";

const CityList = () => {
    const [events, setEvents] = useState([]);
    const [requestData, setRequestData] = useState({});
    const { city } = useParams();

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.CITY)
            .fetchByCity(city)
            .then((res) => {
                setEvents(res.data);
                console.log(res.data)
            })
            .catch((err) => console.log(err));
    }, [requestData]);

    return (
        <StyledCardContainer>
            {events.map((event) => (
                <EventCard
                    key={event.id}
                    event={event}
                    year={event.formattedDate[0]}
                    month={event.formattedDate[1]}
                    day={event.formattedDate[2]}
                    hour={event.formattedDate[3]}
                    minute={event.formattedDate[4]}
                    setRequestData={setRequestData}
                />
            ))}
        </StyledCardContainer>
    );
};

export default CityList;