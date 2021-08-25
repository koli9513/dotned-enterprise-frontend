import React, { useState, useEffect, useRef } from "react";
import { createAPIEndpoint, ENDPOINTS } from "../../api";
import { StyledSmallCard } from "../styles/StyledSmallCard";
import { Link } from "react-router-dom";
import { StyledFavoriteButton } from "../styles/StyledFavoriteButton";

const EventCard = (props) => {
  const [event, setEvent] = useState(props.event);
  const detailedViewUrl = `/event/${event.id}`;

  const isInitialMount = useRef(true);

  const removeFromFavorites = () => {
    setEvent((prevState) => ({
      ...prevState,
      isFavorite: false,
    }));
  };

  const addToFavorites = () => {
    setEvent((prevState) => ({
      ...prevState,
      isFavorite: true,
    }));
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      createAPIEndpoint(ENDPOINTS.EVENT)
        .update(event.id, JSON.stringify(event))
        .then(() => {
          console.log("Event updated successfully");
        })
        .catch((err) => console.log(err));
    }
  }, [event]);

  return (
    <StyledSmallCard>
      <img src={event.image} alt="small card img" />
      <div className="date-info">
        <span className="year">{props.year} </span>
        <span className="month">{props.month}</span>
        <br />
        <span className="day">{props.day}</span>
      </div>
      <div className="time-info">
        <em className="hour">{props.hour}</em>
        <em className="minute">{props.minute}</em>
        {event.isFavorite ? (
          <StyledFavoriteButton
            addedToFavorite={event.isFavorite}
            onClick={removeFromFavorites}
          />
        ) : (
          <StyledFavoriteButton
            addedToFavorite={event.isFavorite}
            onClick={addToFavorites}
          />
        )}
      </div>
      <Link to={detailedViewUrl} className="name">
        {event.name}
      </Link>
      <div className="tags">
        {event.category}, <span>{event.city}</span>
      </div>
    </StyledSmallCard>
  );
};

export default EventCard;
