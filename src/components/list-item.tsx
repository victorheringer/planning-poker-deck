import styled from "styled-components";

const Item = styled.li`
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: bold;
  font-size: 14px;
  color: ${(props) => props.theme.mainFontColor};
  padding: 25px 20px;
  border-bottom: 1px solid ${(props) => props.theme.lineColor};
  cursor: pointer;
`;

export default Item;
