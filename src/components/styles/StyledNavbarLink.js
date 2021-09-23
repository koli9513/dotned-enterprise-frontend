import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export const StyledNavbarLink = styled(Link)`
  position: relative;
  left: 37%;
  font-family: 'PT Serif',Georgia,serif;
  background: #f1f1f1;
  color: #bc3926;
  float: left;
  height: 34px;
  line-height: 40px;
  text-align: center;
  font-size: 1.4em;
  margin-top: 18px;
  padding: 0 25px;
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  margin-left: auto;
  margin-right: auto;

  ${props => props && css`
    transition: 0.2s;

    &:hover {
      background: #bc3926;
      color: #fff;
    }
  `}
`;