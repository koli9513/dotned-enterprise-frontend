import {StyledNavbarLink} from "../styles/StyledNavbarLink";
import {StyledNavbar} from "../styles/StyledNavbar";
import SearchField from "../search/SearchField";

const Navbar = () => {

    return (
        <>
        <StyledNavbar>
                <StyledNavbarLink to="/">Home</StyledNavbarLink>
                <StyledNavbarLink to="/favorites">Favorites</StyledNavbarLink>
                <StyledNavbarLink to="/login">Login</StyledNavbarLink>
                <StyledNavbarLink to="/register">Register</StyledNavbarLink>
                <StyledNavbarLink to="/events/add">Add event</StyledNavbarLink>
        </StyledNavbar>

            <div className="search-box">

            </div>
        </StyledNavbar>
        <SearchField/>
        </>
    );
};

export default Navbar;
