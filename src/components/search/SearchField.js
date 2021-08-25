import React, {useState} from "react";
import {useHistory} from "react-router-dom";

const SearchField = () => {
    let history = useHistory();

    const [search, setSearch] = useState({
        searchTerm: ""
    })

    const getSearchTerm = (e) => {
        setSearch({ ...search, searchTerm: e.target.value });
        console.log(search.searchTerm)
    };

    return (
        <div className="search-box">
            <form onSubmit={e => {
                e.preventDefault();
                history.push(`/search/${search.searchTerm}`)
            }} >
                <input onChange={getSearchTerm} type="text"/>

                <button type="submit">Search</button>

            </form>
        </div>
    );
};

export default SearchField;