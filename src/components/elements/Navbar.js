import {StyledNavbarLink} from "../styles/StyledNavbarLink";
import {StyledNavbar} from "../styles/StyledNavbar";
import "../styles/search.css";

const Navbar = () => {

    return (
        <>
        <StyledNavbar>
                <StyledNavbarLink to="/">Home</StyledNavbarLink>
                <StyledNavbarLink to="/favorites">Favorites</StyledNavbarLink>
                <StyledNavbarLink to="/login">Login</StyledNavbarLink>
                <StyledNavbarLink to="/register">Register</StyledNavbarLink>
        </StyledNavbar>
            <div className="search-box">
                <input className="search-txt" type="text" name="" placeholder="search events..."/>
                    <a className="search-btn" href="#"/>
            </div>
        </>
    );
};

export default Navbar;
