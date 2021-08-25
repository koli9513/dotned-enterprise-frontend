import { useState, useEffect } from "react";
import { createAPIEndpoint, ENDPOINTS } from "../../api";
import EventCard from "./EventCard";
import { StyledCardContainer } from "../styles/StyledCardContainer";

const FavoriteList = () => {
  const [events, setEvents] = useState([]);
  const [requestData, setRequestData] = useState({});

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.FAVORITE)
      .fetchAll()
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => console.log(err));
  }, [requestData]);

  return (
    <StyledCardContainer>
      {events.map((event, index) => (
        <EventCard
          key={index}
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

export default FavoriteList;
