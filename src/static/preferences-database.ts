import { Languages, Themes, Screens } from "enums";

const preferences: Preferences = {
  version: "1.0.0",
  language: Languages.EN,
  line: 3,
  theme: Themes.TECH,
  screen: Screens.HOME,
  name: `${Math.floor(Math.random() * 100)} Player`,
  wakeLock: "enable",
};

export default preferences;
