import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export const StyledSearchButton = styled.button
    .attrs({className: 'xx'})`
  position : absolute;
  transform : translate(-50%,-50%);
  background : #bc3926;
  height : 40px;
  border-radius : 40px;
  padding : 2px;
  left: 80%;
  top: 3%;
  
  > .search-box
  {
    position : absolute;
    transform : translate(-50%,-50%);
    background : #bc3926;
    height : 40px;
    border-radius : 40px;
    padding : 2px;
    left: 80%;
    top: 3%;
  }

   > .search-box.search-btn
      {
        color : #ffffff;
        float : right;
        width : 40px;
        height : 40px;
        border-radius: 50%;
        display:flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        transition:0.4s;
        background: #ffffff url("search-icon.jpg") no-repeat;
      }
  
   > .search-box.search-txt
      {
        border:none;
        background:none;
        outline:none;
        float:left;
        padding:0;
        color: #fff;
        font-size:16px;
        transition : 0.4s;
        line-height: 40px;
        width : 0;
      }


      ${props => props && css`
        transition: 0.1s;

        form:hover > .search-box.search-txt {
          width: 240px;
          padding: 0 6px;
        }

        .search-box:hover > .search-box.search-btn {
          background: #ffffff url("search-icon.jpg") no-repeat;
        }
      `}
`;