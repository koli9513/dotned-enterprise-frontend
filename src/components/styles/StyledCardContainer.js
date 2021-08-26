import styled from "styled-components";

export const StyledCardContainer = styled.div
    .attrs({className: 'cards'})`
  padding: 60px 50px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  min-height: 537px;
`;