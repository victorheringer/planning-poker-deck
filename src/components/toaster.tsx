import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 575.98px;
  color: ${(props) => props.theme.darkFontColor};
  background-color: ${(props) => props.theme.secondaryColor};
  z-index: 6;
  border-radius: 4px;
`;

const TextContainer = styled.p`
  margin: 0;
  padding: 20px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
`;

type ToasterProps = {
  show: boolean;
  text: string;
};

export default function Toaster({ show, text }: ToasterProps) {
  return show ? (
    <Container>
      <TextContainer>{text}</TextContainer>
    </Container>
  ) : (
    <></>
  );
}
