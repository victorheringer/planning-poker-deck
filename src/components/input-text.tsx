import styled from "styled-components";

const InputText = styled.input`
  padding: 10px 15px;
  border-radius: 0px;
  border: 1px solid ${(props) => props.theme.borderInputColor};
  width: 100%;
  box-sizing: border-box;
`;

export default InputText;
