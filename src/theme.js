import { extendTheme } from "@mui/joy/styles";

// Create a theme instance.
const theme = extendTheme({
  fontFamily: {
    body: "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, var(--joy-fontFamily-fallback)",
  },
  defaultMode: "system",
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#eff9f9", // lightest #,#
          100: "#d1dadc",
          200: "#b4bcc0",
          300: "#989fa4",
          400: "#7d8289",
          500: "#63676f",
          600: "#4a4d57",
          700: "#32343f",
          800: "#1c1d28",
          900: "#000014", // darkest
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: "#eff9f9", // lightest #,#
          100: "#d1dadc",
          200: "#b4bcc0",
          300: "#989fa4",
          400: "#7d8289",
          500: "#63676f",
          600: "#4a4d57",
          700: "#32343f",
          800: "#1c1d28",
          900: "#000014", // darkest
        },
      },
    },
  },
});

export default theme;
