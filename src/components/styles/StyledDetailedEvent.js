import styled from "styled-components";

export const StyledDetailedEvent = styled.div
    .attrs({className: 'card'})`
  margin: 100px 20px;
  background: #f1f1f1;
  border-radius: 2px;
  display: inline-block;
  color: #54514d;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);

  > img {
    position: absolute;
    width: 800px;
    height: 550px;
    border: 5px solid #54514d;
  }

  > .details {
    min-width: 100%;

    > .box-left {
      background-color: #f1f1f1;
      display: block;
      color: #4e5154;
      font-size: 1em;
      font-weight: 400;
      line-height: 1.5em;
      width: 64%;
      min-height: 260px;
      font-family: 'PT Serif', Georgia, serif;
    }

    > .box-right {
      font-size: 1.4em;
      font-weight: 400;
      display: block;
      position: fixed;
      z-index: 100;
      width: 27%;
      top: 105px;
      height: 190px;
      right: 20px;
      color: #4e5154;
      background-color: #e2e1e0;
      border: 1px solid #e2e2e2;
      border-left: 7px solid #bc9137;
      margin: 3em 0 1em 1.5em;
      padding: 2%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(.25, .8, .25, 1);


      > .location {
        color: #84878c;
        font-size: 20px;
      }

      > .link {
        color: #bc9137;
        text-decoration: none;
        cursor: pointer;
        font-weight: 800;
        text-align: center;

        -webkit-text-size-adjust: 100%;
        font-size: 1.4em;
      }

      > .date-info {
        width: 280px;
        display: table-cell;
        padding: 0 1% 0 2.25%;
        vertical-align: middle;
        text-align: left;
        color: #4e5154;

        > span.year {
          font-size: 1.4em;
          font-weight: 300;
          margin-bottom: .35em;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: subpixel-antialiased;
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
        text-align: center;
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: 0 0;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: subpixel-antialiased;

        > span.hour {
          border-bottom: 1px solid #eee4ca;
          font-size: 45px;
          display: table-cell;
          font-style: normal;
          font-weight: 300;
          color: #bc9137;
          line-height: 1.3em;
        }

        > span.minute {
          border: none;
          font-size: 45px;
          display: table-cell;
          font-style: normal;
          font-weight: 300;
          color: #bc9137;
          line-height: 1.3em;
          padding-left: 12px;
        }
      }
    }
  }

  .name {
    border-bottom: 1px solid #bc9137;
    vertical-align: baseline;
    font-size: 2.6em;
    font-weight: 800;
    color: #1b394e;
    background-color: #bdbcbc;

    > .subtitle {
      font-size: 20px;
      color: #4d6a7e;
      font-style: italic;
    }
  }
`;