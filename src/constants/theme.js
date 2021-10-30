export const COLORS = {
  primary: "#37A372", // Green
  secondary: "#2C2C2C", // Gray

  lightPurple: "#7B789F",
  purple: "#595683",
  yellow: "#F1CD7C",
  lightYellow: "#FFD88A",
  white: "#fff",
  white1: "#F1E6D8",
  lightGreen: "#7EBDA2",
  lightGreen2: "#BED2BB",
  red: "#D84035",
  red2: "#FF7363",
  black: "#000000",
  gray: "#6E6E6E",
  gray1: "#363636",
  gray2: "#4B4B4B",
  gray3: "#4D4D4D",
  lightGray: "#3B3B3B",
  lightGray2: "#707070",
  lightGray3: "#f0f0f0",

  pink: "#D993B4",
  lightPink: "#F3DEE8",

  transparentWhite: "rgba(255, 255, 255, 0.2)",
  transparentBlack: "rgba(0, 0, 0, 0.4)",
  transparent: "transparent",
};

export const darkTheme = {
  name: "dark",
  backgroundColor: COLORS.secondary,
  textColor: COLORS.white,
  tabBackgroundColor: COLORS.lightGray,
  cardBackgroundColor: COLORS.gray3,
  bottomTabBarBackgroundColor: COLORS.gray3,
  headerColor: COLORS.yellow,
};

export const lightTheme = {
  name: "light",
  backgroundColor: COLORS.lightGray3,
  textColor: COLORS.black,
  tabBackgroundColor: COLORS.yellow,
  cardBackgroundColor: COLORS.lightYellow,
  bottomTabBarBackgroundColor: COLORS.lightYellow,
  headerColor: COLORS.red,
};

export const selectedTheme = lightTheme;

const appTheme = { COLORS, darkTheme, lightTheme };

export default appTheme;
