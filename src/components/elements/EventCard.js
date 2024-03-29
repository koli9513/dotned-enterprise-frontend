import React, { useState, useEffect, useRef } from "react";
import { createAPIEndpoint, ENDPOINTS } from "../../api";
import { StyledSmallCard } from "../styles/StyledSmallCard";
import { Link } from "react-router-dom";
import { StyledFavoriteButton } from "../styles/StyledFavoriteButton";

const EventCard = (props) => {
  const [event, setEvent] = useState(props.event);
  const detailedViewUrl = `/event/${event.id}`;
  const editUrl = `/events/edit/${event.id}`;
  const categoryFilterUrl = `/filter/category/${event.category}`;
  const cityFilterUrl = `/filter/city/${event.city}`;
  const isInitialMount = useRef(true);

  const deleteEvent = () => {
    createAPIEndpoint(ENDPOINTS.EVENT)
      .delete(JSON.stringify(event.id))
      .then(() => {
        props.setRequestData({});
        console.log("Event deleted successfully");
      })
      .catch((err) => console.log(err));
  };

  const updateFavoriteStatus = () => {
    setEvent((prevState) => ({
      ...prevState,
      isFavorite: !prevState.isFavorite,
    }));
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      createAPIEndpoint(ENDPOINTS.EVENT)
        .update(event.id, JSON.stringify(event))
        .then(() => {
          props.setRequestData({});
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
            onClick={updateFavoriteStatus}
          />
        ) : (
          <StyledFavoriteButton
            addedToFavorite={event.isFavorite}
            onClick={updateFavoriteStatus}
          />
        )}
      </div>
      <Link to={detailedViewUrl} className="name">
        {event.name}
      </Link>
      <br />
      <span className="subtitle">{event.subtitle}</span>
      <Link to={editUrl} className="edit">
        🖊
      </Link>
      <button className="delete" onClick={deleteEvent}>
        🗑
      </button>

      <div className="tags">
        <Link className="tag-link" to={categoryFilterUrl}>
          {event.category}
        </Link>
        ,
        <Link className="tag-link" to={cityFilterUrl}>
          {event.city}
        </Link>
      </div>
    </StyledSmallCard>
  );
};

export default EventCard;
