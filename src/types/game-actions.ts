import { Actions } from "enums";

export interface ClientJoinGame {
  type: Actions.CLIENT_JOIN_GAME;
  payload: { clientState: GameClientState };
}

export interface UpdateGameState {
  type: Actions.UPDATE_GAME_STATE;
  payload: { state: GameState };
}

export interface UpdateGameState {
  type: Actions.UPDATE_GAME_STATE;
  payload: { state: GameState };
}

export interface RemoveDisconnectedClient {
  type: Actions.REMOVE_DISCONNECTED_CLIENT;
  payload: { socketId: string };
}

export interface DisconnectClientsFromHost {
  type: Actions.DISCONNECT_CLIENTS_FROM_HOST;
  payload: any;
}

export interface HostConnected {
  type: Actions.HOST_CONNECTED;
  payload: any;
}

export interface SetDeck {
  type: Actions.SET_DECK;
  payload: { deck: Deck };
}

export interface PlayCard {
  type: Actions.PLAY_CARD;
  payload: { card: Card; userId: string };
}

export interface FinishTurn {
  type: Actions.FINISH_TURN;
  payload: { finish: boolean };
}

export interface ResetGame {
  type: Actions.RESET_GAME;
  payload: any;
}

export type GameActionsTypes =
  | ClientJoinGame
  | UpdateGameState
  | RemoveDisconnectedClient
  | DisconnectClientsFromHost
  | HostConnected
  | SetDeck
  | PlayCard
  | FinishTurn
  | ResetGame;
