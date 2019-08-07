import merge from "lodash.merge";
import color from "color";
import { DeepPartial } from "types";

export interface Theme {
  palette: {
    primary: string;
    primaryText: string;
    secondary: string;
    secondaryText: string;
    link: string;
    body: string;
    bodyText: string;
  };
}

const baseTheme: Theme = {
  palette: {
    primary: "lightblue",
    primaryText: "black",
    secondary: "gray",
    secondaryText: "white",
    link: "blue",
    body: "white",
    bodyText: "black"
  }
};

const createTheme = (partial: DeepPartial<Theme>): Theme =>
  merge({}, baseTheme, partial);

function createPalette(
  colors: [string, string, string, string]
): Theme["palette"] {
  return {
    primary: colors[2],
    primaryText: color(colors[2])
      .negate()
      .string(),
    secondary: colors[1],
    secondaryText: color(colors[1])
      .negate()
      .string(),
    link: colors[2],
    body: colors[0],
    bodyText: colors[3]
  };
}

export const darkTheme = createTheme({
  palette: createPalette(["#283149", "#404b69", "#00818a", "#dbedf3"])
});

export const lightTheme = createTheme({
  palette: createPalette(["#f2f6f5", "#c8dad3", "#93b5b3", "#63707e"])
});
