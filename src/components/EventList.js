import { useState, useEffect } from "react";
import { createAPIEndpoint, ENDPOINTS } from "../api";

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
        <div key={index}>{event.name}</div>
      ))}
    </>
  );
};

export default EventList;
