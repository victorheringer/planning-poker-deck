import { Themes } from "enums";

const themes: ThemeOptions = {
  [Themes.TECH]: {
    // Background
    backgroundColor: "#ffffff",
    cardBackgroundColor: "#1565c0",

    // Text Color
    mainFontColor: "#616161",
    secondaryFontColor: "#ffffff",
    lightFontColor: "#9E9E9E",
    darkFontColor: "#414141",
    cardFontColor: "#ffffff",
    menuIconsColor: "#212121",

    // Inputs
    lineColor: "#e3e3e3",

    // Misc colors
    primaryColor: "#1565c0",
    secondaryColor: "#A6ABBD",
    successColor: "#66bb6a",
    errorColor: "#F44336",
    disableColor: "#eeeeee",

    // Others
    fontFamily: "Arial, sans-serif",
    borderInputColor: "#757575",
  },
  [Themes.DRACULA]: {
    backgroundColor: "#282a36",
    lineColor: "#424242",
    mainFontColor: "#ffffff",
    secondaryFontColor: "#ffffff",
    primaryColor: "#bd93f9",
    lightFontColor: "#cccccc",
    darkFontColor: "#414141",
    secondaryColor: "#8be9fd",
    errorColor: "#FF1744",
    successColor: "#50fa7b",
    cardBackgroundColor: "#44475a",
    cardFontColor: "#ffffff",
    disableColor: "#e0e0e0",
    menuIconsColor: "#f8f8f2",
    fontFamily: "Arial, sans-serif",
    borderInputColor: "#757575",
  },
  [Themes.ELETRIC]: {
    backgroundColor: "#fff",
    lineColor: "",
    mainFontColor: "",
    secondaryFontColor: "#ffffff",
    primaryColor: "#ec407a",
    secondaryColor: "#8be9fd",
    lightFontColor: "#cccccc",
    darkFontColor: "#414141",
    successColor: "#50fa7b",
    errorColor: "#FF1744",
    cardBackgroundColor: "#6272a4",
    cardFontColor: "",
    disableColor: "#e0e0e0",
    menuIconsColor: "",
    fontFamily: "Arial, sans-serif",
    borderInputColor: "#212121",
  },
  [Themes.DARK_FOREST]: {
    backgroundColor: "#0f1c14",
    lineColor: "#1b3324",
    mainFontColor: "#f3f7eb",
    secondaryFontColor: "#f3f7eb",
    primaryColor: "#1e461b",
    secondaryColor: "#3b3200",
    lightFontColor: "#cccccc",
    darkFontColor: "#414141",
    successColor: "#9E9D24",
    errorColor: "#FF1744",
    cardBackgroundColor: "#1e461b",
    cardFontColor: "#f3f7eb",
    disableColor: "#e0e0e0",
    menuIconsColor: "#f8f8f2",
    fontFamily: "Arial, sans-serif",
    borderInputColor: "#212121",
  },
};

export default themes;
