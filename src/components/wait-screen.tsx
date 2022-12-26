import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 575.98px;
  position: absolute;
  background-color: #212121;
  opacity: 0.9;
  top: 0;
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  flex-direction: column;
`;

const Text = styled.div`
  color: white;
`;

const IconContainer = styled.div`
  color: white;
  margin-bottom: 15px;
`;

type WaitScreenProps = {
  show: boolean;
  text: string;
};

export default function WaitScreen({ show, text }: WaitScreenProps) {
  return show ? (
    <Wrapper>
      <IconContainer>
        <FontAwesomeIcon icon="spinner" size="2x" spin />
      </IconContainer>
      <Text>{text}</Text>
    </Wrapper>
  ) : (
    <></>
  );
}
