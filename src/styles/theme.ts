const theme = {
  colors: {
    black: "#171923",
    white: "#FFFFFF",
    lightGrey: "#F7FAFC",
    accent: {
      light: "#FFE8BF",
      regular: "#FFA600",
      dark: "#DD6B20",
    },
    blue: {
      light: "#A0AEC0",
      medium: "#4A5568",
      dark: "#2D3748",
    },
  },
  fontSizes: {
    extraSmall: "0.8rem",
    small: "1rem",
    medium: "2rem",
    big: "2.5rem",
    large: "3rem",
    extraLarge: "4rem",
  },
  // mobile first
  breakpoints: {
    mobile: "320px",
    tablet: "768px",
    desktop: "1024px",
    highRes: "1440px",
    ultraHighRes: "2560px",
  },
  fonts: {
    primary: "Inter, Helvetica, sans-serif",
    // secondary: "Open Sans, sans-serif",
  },
};

export default theme;
export type ThemeType = typeof theme;
