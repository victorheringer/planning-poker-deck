import styled from "styled-components";

const ListTitle = styled.h2`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 11px;
  color: ${(props) => props.theme.mainFontColor};
  border-bottom: 1px solid ${(props) => props.theme.lineColor};
  padding: 0px 7px 5px;
  margin: 0px;
  font-weight: normal;
`;

export default ListTitle;
