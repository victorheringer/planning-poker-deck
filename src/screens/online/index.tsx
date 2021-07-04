import { useEffect } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import { useStorage, useCreateOnlineGameData } from "hooks";
import { useOnlineGame } from "hooks";
import { Sizes, Screens } from "enums";
import { alreadyJoined, isOnline, allPlayed, cardAlreadyPlayed } from "helpers";

import * as Components from "components";
import * as Styled from "./styled";

function defaultInitClient(userId: string, userName: string) {
  return [
    {
      card: null,
      id: userId,
      online: true,
      socketId: null,
      playerName: userName,
    },
  ];
}

export default function Online() {
  const { storage, actions, i18n } = useStorage(Screens.ONLINE);
  const game = useCreateOnlineGameData();
  const text = i18n as I18n.OnlineScreen;

  const initClient = game.owner
    ? defaultInitClient(storage.id, storage.preferences.name)
    : [];

  const { gameState, gameActions } = useOnlineGame(
    {
      clients: initClient,
      config: { finishedTurn: false },
      reconnect: false,
    },
    game,
    storage.id,
    storage.decks,
    storage.preferences.name
  );

  useEffect(() => {
    if (!alreadyJoined(storage.online.rooms, game.id)) {
      actions.addRoom(game);
    }
  }, []);

  function handleFinishTurn() {
    gameActions.finishTurn();
  }

  function handleResetGame() {
    gameActions.resetGame();
  }

  function handleSelectCard(card: Card) {
    if (
      cardAlreadyPlayed(gameState.clients, storage.id, card) ||
      gameState.config.finishedTurn
    ) {
      return;
    }

    gameActions.playCard(card, storage.id);
  }

  function getGameStatus(clients: GameClientState[]) {
    return allPlayed(clients) ? text.statusAllPlayed : text.statusWaiting;
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <ScrollContainer>
          <Components.PlayersList players={gameState.clients} />
        </ScrollContainer>
        {game.owner && (
          <Styled.HeaderAction>
            <Components.OutlineButton
              onClick={handleFinishTurn}
              flat
              block={false}
            >
              {text.revealBtn}
            </Components.OutlineButton>
            <Components.OutlineButton
              onClick={handleResetGame}
              flat
              block={false}
            >
              {text.resetBtn}
            </Components.OutlineButton>
          </Styled.HeaderAction>
        )}
      </Styled.Header>
      <Styled.Body>
        <Components.OnlineBoard
          revealBoard={gameState.config.finishedTurn}
          playerId={storage.id}
          players={gameState.clients}
        />
      </Styled.Body>
      <Styled.Footer>
        <Styled.StatusContainer>
          <Styled.Status>{getGameStatus(gameState.clients)}</Styled.Status>
        </Styled.StatusContainer>
        <ScrollContainer>
          {gameState.deck && (
            <Components.CardList
              handleSelect={handleSelectCard}
              deck={gameState.deck}
              grid={1}
              inline={true}
              cardSize={Sizes.MD}
            />
          )}
        </ScrollContainer>
      </Styled.Footer>
      <Components.WaitScreen
        show={!isOnline(gameState.clients)}
        text="Waiting for host..."
      />
    </Styled.Container>
  );
}
