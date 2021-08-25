import {StyledNavbarLink} from "../styles/StyledNavbarLink";
import {StyledNavbar} from "../styles/StyledNavbar";
import {StyledSearchButton} from "../styles/StyledSearchButton";
import SearchField from "../search/SearchField";

const Navbar = () => {

    return (
        <>
        <StyledNavbar>
                <StyledNavbarLink to="/">Home</StyledNavbarLink>
                <StyledNavbarLink to="/favorites">Favorites</StyledNavbarLink>
                <StyledNavbarLink to="/login">Login</StyledNavbarLink>
                <StyledNavbarLink to="/register">Register</StyledNavbarLink>
                <StyledNavbarLink ><SearchField/></StyledNavbarLink>
        </StyledNavbar>
        <StyledSearchButton>o</StyledSearchButton>
        </>
    );
};

export default Navbar;
