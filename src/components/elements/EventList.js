import { useState, useEffect } from "react";
import { createAPIEndpoint, ENDPOINTS } from "../../api";
import EventCard from "./EventCard";
import { StyledCardContainer } from "../styles/StyledCardContainer";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.EVENT)
      .fetchAll()
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <StyledCardContainer>
      {events.map((event, index) => (
        <EventCard
          key={index}
          image={event.image}
          city={event.city}
          name={event.name}
          year={event.formattedDate[0]}
          month={event.formattedDate[1]}
          day={event.formattedDate[2]}
          hour={event.formattedDate[3]}
          minute={event.formattedDate[4]}
          id={event.id}
          category={event.category}
          isFavorite={event.isFavorite}
        />
      ))}
    </StyledCardContainer>
  );
};

export default EventList;
