import styled from "styled-components";

type RadioProps = { active: boolean };

const Radio = styled.div<RadioProps>`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  position: relative;
  top: 0;
  float: right;
  margin: 30px 20px 0;
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? props.theme.successColor : props.theme.disableColor};
`;

export default Radio;
