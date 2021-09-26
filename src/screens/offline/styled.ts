import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
`;

export const CardContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const BackButton = styled.button`
  text-transform: uppercase;
  background-color: initial;
  border: 0px;
  color: ${(props) => props.theme.mainFontColor};
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
`;
