import styled from "styled-components";

type OutlineButtonProps = {
  block: boolean;
  flat: boolean;
  responsiveGrow?: boolean;
};

const OutlineButton = styled.button<OutlineButtonProps>`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.borderInputColor};
  text-align: center;
  padding: 10px 15px;
  ${(props) => !props.flat && "border-radius: 4px;"}
  ${(props) => props.block && "width: 100%;"}
  outline: none;
  cursor: pointer;
  color: ${(props) => props.theme.mainFontColor};
  white-space: nowrap;
  &:hover {
    opacity: 0.6;
  }

  @media only screen and (max-width: 600px) {
    ${(props) => props.responsiveGrow && "width: 100%"}
  }
`;

export default OutlineButton;
