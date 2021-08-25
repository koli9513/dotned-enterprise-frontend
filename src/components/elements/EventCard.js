import {StyledSmallCard} from "../styles/StyledSmallCard";
import {Link, useHistory} from "react-router-dom";
import {StyledFavoriteButton} from "../styles/StyledFavoriteButton";
import {createAPIEndpoint, ENDPOINTS} from "../../api";

const EventCard = (props) => {
    const detailedViewUrl = `/event/${props.id}`;
    let history = useHistory();

    const deleteEvent = () => {
        createAPIEndpoint(ENDPOINTS.EVENT)
            .delete(JSON.stringify(props.id))
            .then(() => {
                console.log("Event deleted successfully");
                // history.push("/events");
                window.location.reload(false);
            })
            .catch((err) => console.log(err));
    }

    return (
        <StyledSmallCard>
            <img src={props.image} alt="small card img"/>
            <div className="date-info">
                <span className="year">{props.year} </span>
                <span className="month">{props.month}</span><br/>
                <span className="day">{props.day}</span>
            </div>
            <div className="time-info">
                <em className="hour">{props.hour}</em>
                <em className="minute">{props.minute}</em>
                <StyledFavoriteButton/>
            </div>
            <Link to={detailedViewUrl} className="name">{props.name}</Link>
            <br/>
            <span className="subtitle">{props.subtitle}</span>

            <button className="delete" onClick={deleteEvent}>🗑</button>

            <div className="tags">{props.category}, <span>{props.city}</span></div>
        </StyledSmallCard>
    );
};

export default EventCard;
