import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  padding: 5px 8px 0;
`;

const Container = styled.div`
  padding: 15px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  background-color: #ffeb3b;
  margin-bottom: 15px;
  border-radius: 4px;
  font-family: ${(props) => props.theme.fontFamily};
  position: relative;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
`;

type BannerProps = {
  text: string;
  onClose?: Callback;
};

export default function Banner({ text, onClose }: BannerProps) {
  return (
    <Wrapper onClick={onClose}>
      <Container>
        {text}
        <IconWrapper>
          {onClose && <FontAwesomeIcon aria-label="close" icon="times" />}
        </IconWrapper>
      </Container>
    </Wrapper>
  );
}
