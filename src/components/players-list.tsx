import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 10px;
  box-sizing: border-box;
  max-width: 100%;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
`;

const AvatarContainer = styled.div`
  position: relative;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.lineColor};
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: 10px;
  display: flex;
`;

const AvatarLetter = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  margin: 0;
  color: ${(props) => props.theme.mainFontColor};
`;

const Indicator = styled.div<{ played: boolean }>`
  width: 8px;
  height: 8px;
  background-color: ${(props) =>
    props.played ? props.theme.successColor : "orange"};
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 17px;
`;

type PlayersListProps = { players: GameClientState[] };

function PlayersList({ players }: PlayersListProps) {
  console.log("PLAYERS", players);
  return (
    <Wrapper>
      <Container>
        {players.map((player) => (
          <AvatarContainer key={player.id}>
            <Avatar>
              <AvatarLetter>
                {player.playerName && player.playerName.substr(0, 3)}
              </AvatarLetter>
              <Indicator played={!!player.card} />
            </Avatar>
          </AvatarContainer>
        ))}
      </Container>
    </Wrapper>
  );
}

export default PlayersList;
