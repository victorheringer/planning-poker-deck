import { useStorage } from "hooks";
import {
  Select,
  List,
  ListItem,
  ListTitle,
  Float,
  DebounceInputText,
} from "components";
import { Languages, Screens, Themes } from "enums";

export default function Preferences() {
  const { storage, actions, i18n } = useStorage(Screens.SETTINGS);
  const text: I18n.SettingsScreen = i18n as I18n.SettingsScreen;

  const settingsOptions = {
    languages: [
      { value: Languages.EN, label: "En" },
      { value: Languages.PT_BT, label: "Pt-br" },
    ],
    themes: [
      { value: Themes.DRACULA, label: "Dracula" },
      { value: Themes.TECH, label: "Tech" },
      { value: Themes.DARK_FOREST, label: "Dark Forest" },
      { value: Themes.ELETRIC, label: "Eletric" },
    ],
    screens: [
      { value: Screens.HOME, label: "Home" },
      { value: Screens.SETTINGS, label: "Settings" },
      { value: Screens.LOBBY, label: "Lobby" },
      { value: Screens.ONLINE, label: "Online" },
      { value: Screens.DECKS, label: "Decks" },
    ],
    cards: [
      { value: 3, label: "3" },
      { value: 4, label: "4" },
    ],
    wakeLock: [
      { value: "enable", label: text.enableWakeLock },
      { value: "disable", label: text.disableWakeLock },
    ],
  };

  return (
    <>
      <ListTitle>{text.settingsListTitle}</ListTitle>
      <List>
        <ListItem>
          <label>
            {text.version}
            <span style={{ float: "right" }}>
              {storage.preferences.version}
            </span>
          </label>
        </ListItem>
        <ListItem>
          <label>{text.language}</label>
          <Float>
            <Select
              options={settingsOptions.languages}
              value={storage.preferences.language}
              onChange={actions.updateLanguage}
            />
          </Float>
        </ListItem>
        <ListItem>
          <label>{text.cards}</label>
          <Float>
            <Select
              options={settingsOptions.cards}
              value={storage.preferences.line}
              onChange={actions.updateCardsPerLine}
            />
          </Float>
        </ListItem>
        <ListItem>
          <label>{text.theme}</label>
          <Float>
            <Select
              options={settingsOptions.themes}
              value={storage.preferences.theme}
              onChange={actions.updateTheme}
            />
          </Float>
        </ListItem>
        <ListItem>
          <label>{text.screen}</label>
          <Float>
            <Select
              options={settingsOptions.screens}
              value={storage.preferences.screen}
              onChange={actions.updateInitialScreen}
            />
          </Float>
        </ListItem>
        <ListItem>
          <label>{text.weakLock}</label>
          <Float>
            <Select
              options={settingsOptions.wakeLock}
              value={storage.preferences.wakeLock}
              onChange={actions.updateWakeLock}
            />
          </Float>
        </ListItem>
        <ListItem>
          <label>{text.name}</label>
          <Float>
            <DebounceInputText
              value={storage.preferences.name}
              onChange={actions.updateName}
              placeholder={text.namePlaceholder}
            />
          </Float>
        </ListItem>
      </List>
    </>
  );
}
