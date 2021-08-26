import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {createAPIEndpoint, ENDPOINTS} from "../../api";
import {StyledCardContainer} from "../styles/StyledCardContainer";
import EventCard from "../elements/EventCard";


const SearchList = () => {
    const [searchedEvents, setSearchedEvents] = useState([]);
    const {searchTerm} = useParams();

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.NAME)
            .fetchByName(searchTerm)
            .then((res) => {
                setSearchedEvents(res.data);
            })
            .catch((err) => console.log(err));
    }, [searchTerm])

    return (
        <StyledCardContainer>
            {searchedEvents.map((event, index) => (
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
                />
            ))}
        </StyledCardContainer>
    );
};



export default SearchList;