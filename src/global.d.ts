import { Languages, Themes, Screens, Actions } from "enums";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Action } from "react-redux";
import type { StorageActionsTypes, GameActionsTypes } from "types";

declare global {
  export type Callback = () => void;

  export type GameClientState = {
    id: string;
    card: Card | null;
    online: boolean;
    socketId: null | string;
    playerName: string;
  };

  export type GameConfig = {
    finishedTurn: boolean;
  };

  export type GameState = {
    clients: GameClientState[];
    config: GameConfig;
    reconnect: Boolean;
    deck?: Deck;
  };

  export type Room = {
    id: string;
    name: string;
    owner: boolean;
    deckId: string;
  };

  export type Theme = {
    backgroundColor: string;
    lineColor: string;
    mainFontColor: string;
    secondaryFontColor: string;
    primaryColor: string;
    secondaryColor: string;
    lightFontColor: string;
    darkFontColor: string;
    successColor: string;
    errorColor: string;
    cardBackgroundColor: string;
    cardFontColor: string;
    disableColor: string;
    menuIconsColor: string;
    fontFamily: string;
    borderInputColor: string;
  };

  export type ThemeOptions = {
    [Themes.DRACULA]: Theme;
    [Themes.TECH]: Theme;
    [Themes.ELETRIC]: Theme;
    [Themes.DARK_FOREST]: Theme;
  };

  export type Card = {
    id: number;
    color: string;
    value: string;
    isIcon: boolean;
    icon?: IconProp;
  };

  export type Deck = {
    id: string;
    name: string;
    description: string;
    favorite: boolean;
    custom: boolean;
    cards: Card[];
  };

  export type Preferences = {
    version: string;
    language: Languages;
    line: number;
    theme: Themes;
    screen: Screens;
    name: string;
    wakeLock: string;
  };

  export type LocalStorage = {
    id: string;
    preferences: Preferences;
    decks: Deck[];
    online: { rooms: Room[] | Array };
  };

  declare module I18n {
    export type Modules = {
      [Languages.PT_BT]: Screens;
      [Languages.EN]: Screens;
    };

    export type HomeScreen = {
      backBtn: string;
    };

    export type SettingsScreen = {
      version: string;
      language: string;
      cards: string;
      theme: string;
      screen: string;
      settingsListTitle: string;
      weakLock: string;
      enableWakeLock: string;
      disableWakeLock: string;
      name: string;
      namePlaceholder: string;
    };

    export type DecksScreen = {
      decksListTitle: string;
    };

    export type LobbyScreen = {
      joinRoomBtn: string;
      shareRoomBtn: string;
      deleteRoomBtn: string;
      createRoomBtn: string;
      joinCopiedLink: string;
      createRoomPlaceholder: string;
    };

    export type OnlineScreen = {
      revealBtn: string;
      resetBtn: string;
      statusWaiting: string;
      statusAllPlayed: string;
      room: string;
    };

    export type SharedScreen = {
      offline: string;
    };

    export type Screens = {
      [Screens.HOME]: HomeScreen;
      [Screens.SETTINGS]: SettingsScreen;
      [Screens.LOBBY]: LobbyScreen;
      [Screens.ONLINE]: OnlineScreen;
      [Screens.DECKS]: DecksScreen;
      [Screens.SHARED]: SharedScreen;
    };
  }

  declare module ActionTypes {
    export type StorageActions = StorageActionsTypes;
    export type GameActions = GameActionsTypes;
  }
}
