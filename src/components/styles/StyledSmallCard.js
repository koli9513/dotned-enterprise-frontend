import styled, {css} from "styled-components";

export const StyledSmallCard = styled.div
    .attrs({className: 'card'})`
  position: relative;
  background: #f7f7f7;
  border-radius: 2px;
  display: inline-block;
  width: 310px;
  height: 350px;
  margin: 1rem;
  color: #54514d;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);

  > img {
    width: 300px;
    height: 200px;
    border: 5px solid #d3cfcc;
  }

  > .tags {
    position: absolute;
    bottom: 0;
  }
  
  > .delete {
    position: absolute;
    bottom: 0;
    right: 0;
    border: 0;
    background-color: inherit;
    display: block;
    cursor: pointer;
    color: #bc3926;
    float: left;
    height: 34px;
    line-height: 34px;
    text-align: center;
    font-size: 2em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0 10px;

    ${props => props && css`
    transition: 0.1s;

    &:hover {
      background: #bc3926;
      color: #fff;
    }
  `};
  }

  > .date-info {
    width: 205px;
    display: table-cell;
    padding: 0 1% 0 2.25%;
    vertical-align: middle;
    text-align: left;
    color: #4e5154;

    > span.year {
      font-size: 1.4em;
      font-weight: 300;
      margin-bottom: .35em;
    }

    > span.month {
      font-size: 1.1em;
      font-weight: 800;
      margin-bottom: .4em;
    }

    > span.day {
      font-size: 1.26666667em;
      color: #73777c;
    }
  }

  > .time-info {
    display: table-cell;
    position: relative;
    //width: 40px;
    text-align: center;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;

    > em.hour {
      border-bottom: 1px solid #eee4ca;
      font-size: 22px;
      display: block;
      font-style: normal;
      font-weight: 300;
      color: #bc9137;
      line-height: 1.3em;
    }

    > em.minute {
      border: none;
      font-size: 22px;
      display: block;
      font-style: normal;
      font-weight: 300;
      color: #bc9137;
      line-height: 1.3em;
    }
  }

  .name {
    color: #bc9137;
    //height: 30px;
    text-decoration: none;
    cursor: pointer;
    font-weight: 800;
    text-align: center;
    font-size: 1.4em;

  }


  ${props => props && css`
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      background-color: #ffff;
      color: black;
    }
  `}
`;