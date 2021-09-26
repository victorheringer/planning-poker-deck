import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 68px);
`;

export const Header = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.lineColor};

  @media only screen and (max-width: 600px) {
    margin-top: -7px;
  }
`;

export const HeaderPlayers = styled.div`
  flex-grow: 1;
`;

export const HeaderAction = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  flex-grow: 1;
`;

export const Footer = styled.div`
  padding: 0;
`;

export const StatusContainer = styled.div`
  padding: 0 6px;
`;

export const Status = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  text-transform: uppercase;
  padding: 4px 6px;
  font-size: 11px;
  font-weight: bold;
  border-radius: 4px;
  color: ${(props) => props.theme.secondaryFontColor};
`;
