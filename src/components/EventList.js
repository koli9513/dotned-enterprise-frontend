import { useState, useEffect } from "react";
import { createAPIEndpoint, ENDPOINTS } from "../api";
import SmallEventCard from "./elements/SmallEventCard";

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
    <>
      {events.map((event, index) => (
          <SmallEventCard
              key={index}
              image={event.image}
              city={event.city}
              name={event.name}
              date={event.date}
              id={event.id}
          />
      ))}
    </>
  );
};

export default EventList;
