import styled from "styled-components";

const Page = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  max-width: 575.98px;
  margin: 0 auto;
  font-family: ${(props) => props.theme.fontFamily};
  padding-top: 57px;
  min-height: calc(100vh - 57px);

  @media only screen and (max-width: 600px) {
    padding-top: 7px;
    padding-bottom: 64px;
    min-height: calc(100vh - 71px);
  }
`;

export default Page;
