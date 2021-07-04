export enum Sizes {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export enum Actions {
  SET_FAVORITE_DECK = "SET_FAVORITE_DECK",
  SET_LANGUAGE = "SET_LANGUAGE",
  SET_CARDS_PER_LINE = "SET_CARDS_PER_LINE",
  SET_THEME = "SET_THEME",
  SET_INITIAL_SCREEN = "SET_INITIAL_SCREEN",
  SET_NAME = "SET_NAME",
  ADD_ROOM = "ADD_ROOM",
  DELETE_ROOM = "DELETE_ROOM",
  CLIENT_JOIN_GAME = "CLIENT_JOIN_GAME",
  UPDATE_GAME_STATE = "UPDATE_GAME_STATE",
  REMOVE_DISCONNECTED_CLIENT = "REMOVE_DISCONNECTED_CLIENT",
  REMOVE_ROOM = "REMOVE_ROOM",
  DISCONNECT_CLIENTS_FROM_HOST = "DISCONNECT_CLIENTS_FROM_HOST",
  HOST_CONNECTED = "HOST_CONNECTED",
  SET_DECK = "SET_DECK",
  PLAY_CARD = "PLAY_CARD",
  FINISH_TURN = "FINISH_TURN",
  RESET_GAME = "RESET_GAME",
  SET_WAKE_LOCK = "SET_WAKE_LOCK",
}

export enum Languages {
  PT_BT = "pt_br",
  EN = "en",
}

export enum Screens {
  HOME = "home",
  SETTINGS = "settings",
  LOBBY = "lobby",
  ONLINE = "online",
  DECKS = "decks",
  SHARED = "shared",
}

export enum Themes {
  TECH = "tech",
  DRACULA = "dracula",
  ELETRIC = "eletric",
  DARK_FOREST = "dark_forest",
}

export enum IdScopes {
  USER = "user",
  ROOM = "room",
}
