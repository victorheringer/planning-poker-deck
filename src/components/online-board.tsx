import styled from "styled-components";
import { Card } from "components";
import { Sizes } from "enums";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

function shouldRevealBoard(
  revealBoard: boolean,
  clientId: string,
  playerId: string
): boolean {
  return revealBoard || clientId === playerId;
}

type OnlineBoardProps = {
  players: GameClientState[];
  playerId: string;
  revealBoard: boolean;
};

function OnlineBoard({ players, playerId, revealBoard }: OnlineBoardProps) {
  return (
    <Container>
      {players.map(
        (client: GameClientState) =>
          client.card && (
            <Card
              key={`${client.id}/${client.card.id}`}
              size={Sizes.MD}
              card={client.card}
              fixed={true}
              status={client.playerName.substr(0, 7)}
              isFlipped={!shouldRevealBoard(revealBoard, client.id, playerId)}
            />
          )
      )}
    </Container>
  );
}

export default OnlineBoard;
