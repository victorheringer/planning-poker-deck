import { useEffect, useState, useReducer } from "react";
import { findDeck } from "helpers";
import { io } from "socket.io-client";
import { Actions } from "enums";
import produce from "immer";

function reducer(state: GameState, action: ActionTypes.GameActions) {
  switch (action.type) {
    case Actions.CLIENT_JOIN_GAME: {
      return produce(state, (s) => {
        s.clients.push(action.payload.clientState);
      });
    }
    case Actions.UPDATE_GAME_STATE: {
      return action.payload.state;
    }
    case Actions.REMOVE_DISCONNECTED_CLIENT: {
      return produce(state, (s) => {
        s.clients = s.clients.filter(
          (client: GameClientState) =>
            client.socketId !== action.payload.socketId
        );
      });
    }
    case Actions.DISCONNECT_CLIENTS_FROM_HOST: {
      return produce(state, (s) => {
        s.clients = s.clients.map(
          (client: GameClientState): GameClientState => {
            client.online = false;
            return client;
          }
        );
      });
    }
    case Actions.HOST_CONNECTED: {
      return produce(state, (s) => {
        s.reconnect = true;
        s.clients = s.clients.map(
          (client: GameClientState): GameClientState => {
            client.online = true;
            return client;
          }
        );
      });
    }
    case Actions.SET_DECK: {
      return produce(state, (s) => {
        s.deck = action.payload.deck;
      });
    }
    case Actions.PLAY_CARD: {
      return produce(state, (s) => {
        s.clients = s.clients.map(
          (client: GameClientState): GameClientState => {
            if (client.id === action.payload.userId) {
              client.card = action.payload.card;
            }
            return client;
          }
        );
      });
    }
    case Actions.FINISH_TURN: {
      return produce(state, (s) => {
        s.config.finishedTurn = action.payload.finish;
      });
    }
    case Actions.RESET_GAME: {
      return produce(state, (s) => {
        s.config.finishedTurn = false;
        s.clients = s.clients.map(
          (client: GameClientState): GameClientState => {
            client.card = null;
            return client;
          }
        );
      });
    }
    default:
      return state;
  }
}

export default function useOnlineGame(
  init: GameState,
  room: Room,
  id: string,
  decks: Deck[],
  playerName: string
) {
  const [socket] = useState(io(process.env.REACT_APP_HOST));
  const [state, dispatch] = useReducer(reducer, init);

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("JOIN_ROOM", {
        room: room.id,
        owner: room.owner,
        deckId: room.deckId,
        id,
        playerName,
      });
    });

    socket.on("HOST_ACTION", (action: any) => {
      dispatch(action);
    });

    socket.on("CLIENTS_ACTION", (action: any) => {
      dispatch(action);
    });

    socket.on("DISCONNECT_CLIENTS_FROM_HOST", (action: any) => {
      dispatch(action);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (room.owner) {
      socket.emit("CALL_CLIENTS_ACTION", {
        type: Actions.UPDATE_GAME_STATE,
        payload: { state, room: room.id, owner: room.owner },
      });
    }
  }, [state, room]);

  useEffect(() => {
    if (state.reconnect) {
      socket.emit("JOIN_ROOM", {
        room: room.id,
        owner: room.owner,
        id,
        playerName,
      });
    }
  }, [state.reconnect]);

  useEffect(() => {
    const deck = findDeck(decks, room.deckId);

    if (deck) dispatch({ type: Actions.SET_DECK, payload: { deck } });

    //request and download deck from host
  }, [decks, room.deckId]);

  const playCard = (card: Card, userId: string) => {
    if (room.owner) {
      dispatch({ type: Actions.PLAY_CARD, payload: { card, userId } });
    } else {
      socket.emit("CALL_HOST_ACTION", {
        type: Actions.PLAY_CARD,
        payload: { card, userId, room: room.id },
      });
    }
  };

  const finishTurn = () =>
    dispatch({
      type: Actions.FINISH_TURN,
      payload: { finish: true },
    });

  const resetGame = () => {
    dispatch({
      type: Actions.RESET_GAME,
      payload: {},
    });
  };

  return { gameState: state, gameActions: { playCard, finishTurn, resetGame } };
}
