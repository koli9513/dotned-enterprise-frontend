import {StyledSmallCard} from "../styles/StyledSmallCard";
import {Link} from "react-router-dom";

const SmallEventCard = (props) => {
    const detailedViewUrl = `/events/${props.id}`;

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
            </div>
            <Link to={detailedViewUrl} className="name">{props.name}</Link>
            <div className="tags">{props.category}, <span>{props.city}</span></div>
        </StyledSmallCard>
    );
};

export default SmallEventCard;
