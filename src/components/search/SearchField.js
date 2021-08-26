import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import "../styles/search.css";

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
                <input className="search-txt" placeholder="search events..." onChange={getSearchTerm} type="text" name=""/>
                <button type="submit" className="search-btn"/>
            </form>
        </div>
    );
};

export default SearchField;