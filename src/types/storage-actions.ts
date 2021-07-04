import { Languages, Themes, Screens, Actions } from "enums";

export interface SetFavoriteDeck {
  type: Actions.SET_FAVORITE_DECK;
  payload: { deck: Deck };
}

export interface SetLanguage {
  type: Actions.SET_LANGUAGE;
  payload: { language: Languages };
}

export interface SetCardsPerLine {
  type: Actions.SET_CARDS_PER_LINE;
  payload: { quantity: number };
}

export interface SetTheme {
  type: Actions.SET_THEME;
  payload: { theme: Themes };
}

export interface SetScreen {
  type: Actions.SET_INITIAL_SCREEN;
  payload: { screen: Screens };
}

export interface AddRoom {
  type: Actions.ADD_ROOM;
  payload: { room: Room };
}

export interface RemoveRoom {
  type: Actions.REMOVE_ROOM;
  payload: { room: Room };
}

export interface DeleteRoom {
  type: Actions.DELETE_ROOM;
  payload: { id: string };
}

export interface SetName {
  type: Actions.SET_NAME;
  payload: { name: string };
}

export interface SetWakeLock {
  type: Actions.SET_WAKE_LOCK;
  payload: { wakeLock: string };
}

export type StorageActionsTypes =
  | SetFavoriteDeck
  | SetLanguage
  | SetCardsPerLine
  | SetTheme
  | SetScreen
  | RemoveRoom
  | AddRoom
  | DeleteRoom
  | SetName
  | SetWakeLock;
