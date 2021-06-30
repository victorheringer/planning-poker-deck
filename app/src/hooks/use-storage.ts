import { useReducer, useEffect, useContext } from "react";
import { StorageService } from "services";
import { Actions, Languages, Screens, Themes } from "enums";
import { setFavorite } from "helpers";
import { themes, i18n } from "static";
import { StorageContext } from "contexts";
import produce from "immer";

export function reducer(
  state: LocalStorage,
  action: ActionTypes.StorageActions
): LocalStorage {
  switch (action.type) {
    case Actions.SET_FAVORITE_DECK: {
      return produce(state, (s) => {
        s.decks = setFavorite(action.payload.deck.id, state.decks);
      });
    }
    case Actions.SET_INITIAL_SCREEN: {
      return produce(state, (s) => {
        s.preferences.screen = action.payload.screen;
      });
    }
    case Actions.SET_LANGUAGE: {
      return produce(state, (s) => {
        s.preferences.language = action.payload.language;
      });
    }
    case Actions.SET_THEME: {
      return produce(state, (s) => {
        s.preferences.theme = action.payload.theme;
      });
    }
    case Actions.SET_CARDS_PER_LINE: {
      return produce(state, (s) => {
        s.preferences.line = action.payload.quantity;
      });
    }
    case Actions.ADD_ROOM: {
      return produce(state, (s) => {
        s.online.rooms.push(action.payload.room);
      });
    }
    case Actions.DELETE_ROOM: {
      return produce(state, (s) => {
        s.online.rooms = state.online.rooms.filter(
          (room: Room) => room.id !== action.payload.id
        );
      });
    }
    case Actions.SET_NAME: {
      return produce(state, (s) => {
        s.preferences.name = action.payload.name;
      });
    }
    case Actions.SET_WAKE_LOCK: {
      return produce(state, (s) => {
        s.preferences.wakeLock = action.payload.wakeLock;
      });
    }
    default:
      return state;
  }
}

export default function useStorage(target: Screens) {
  const { storage, setStorage } = useContext(StorageContext);
  const [local, dispatch] = useReducer(reducer, storage);

  useEffect(() => {
    StorageService.put(storage);
    setStorage(local);
  }, [local, setStorage, storage]);

  const updateFavorite = (deck: Deck) =>
    dispatch({ type: Actions.SET_FAVORITE_DECK, payload: { deck } });

  const updateInitialScreen = (screen: Screens) =>
    dispatch({ type: Actions.SET_INITIAL_SCREEN, payload: { screen } });

  const updateLanguage = (language: Languages) =>
    dispatch({ type: Actions.SET_LANGUAGE, payload: { language } });

  const updateTheme = (theme: Themes) =>
    dispatch({ type: Actions.SET_THEME, payload: { theme } });

  const updateCardsPerLine = (quantity: number) =>
    dispatch({ type: Actions.SET_CARDS_PER_LINE, payload: { quantity } });

  const addRoom = (room: Room) =>
    dispatch({ type: Actions.ADD_ROOM, payload: { room } });

  const deleteRoom = (id: string) =>
    dispatch({ type: Actions.DELETE_ROOM, payload: { id } });

  const updateName = (name: string) =>
    dispatch({ type: Actions.SET_NAME, payload: { name } });

  const updateWakeLock = (wakeLock: string) =>
    dispatch({ type: Actions.SET_WAKE_LOCK, payload: { wakeLock } });

  return {
    theme: themes[local.preferences.theme],
    i18n: i18n[local.preferences.language][target],
    storage: local,
    actions: {
      updateFavorite,
      updateInitialScreen,
      updateLanguage,
      updateTheme,
      updateCardsPerLine,
      addRoom,
      deleteRoom,
      updateName,
      updateWakeLock,
    },
  };
}
