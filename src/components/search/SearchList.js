import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {createAPIEndpoint, ENDPOINTS} from "../../api";
import {StyledCardContainer} from "../styles/StyledCardContainer";
import EventCard from "../elements/EventCard";

const SearchList = () => {
    const [searchedEvents, setSearchedEvents] = useState([]);
    const [requestData, setRequestData] = useState({});
    const {searchTerm} = useParams();

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.NAME)
            .fetchByName(searchTerm)
            .then((res) => {
                setSearchedEvents(res.data);
            })
            .catch((err) => console.log(err));
    }, [searchTerm, requestData])

    return (
        <StyledCardContainer>
            {searchedEvents.map((event) => (
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
        </StyledCardContainer>
    );
};



export default SearchList;