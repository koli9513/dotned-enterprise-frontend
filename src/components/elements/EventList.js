import { useState, useEffect } from "react";
import { createAPIEndpoint, ENDPOINTS } from "../../api";
import EventCard from "./EventCard";
import { StyledCardContainer } from "../styles/StyledCardContainer";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [requestData, setRequestData] = useState({});

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.EVENT)
      .fetchAll()
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => console.log(err));
  }, [requestData]);

  return (
      <StyledCardContainer>
      {events.length === 0 ?
          <div style={{
        fontSize: "31px",
        fontStyle: "italic"
          }}>
            No available events.
          </div>
          :
            <>
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
            </>
      }
      </StyledCardContainer>
  );

};

export default EventList;
