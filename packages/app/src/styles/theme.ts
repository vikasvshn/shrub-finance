import { extendTheme, ThemeConfig, useColorModeValue } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

const config: ThemeConfig = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
});

const components = {
  Modal: {
    baseStyle: (props: any) => ({
      dialog: {
        color: mode("dark.100", "white")(props),
        bg: mode("white", "dark.100")(props),
        boxShadow: "rgb(33 35 74 / 80%) 0px 22px 48px -9px",
      },
    }),
  },
  Tabs: {
    baseStyle: {
      userSelect: "none",
    },
    tablist: {
      userSelect: "none",
    },
  },
  Alert: {
    variants: {
      shrubYellow: {
        container: {
          bg: "yellow.100",
          color: "black",
        },
      },
    },
  },
};

const fonts = {
  heading: "Montserrat",
  body: "Montserrat",
};

const styles = {
  global: (props: any) => ({
    body: {
      fontFamily: "body",
      bg: mode("gray.50", "dark.200")(props),
    },
  }),
};

const colors = {
  dark: {
    100: "rgb(31, 31, 65)",
    200: "rgb(18, 18, 38)", // base
    300: "rgb(21, 21, 38)",
  },
  // derived from #64A66A
  bud: {
    "50": "#EFF6EF",
    "100": "#D2E5D3",
    "200": "#B4D4B7",
    "300": "#97C39B",
    "400": "#7AB37F",
    "500": "#5DA263",
    "600": "#4A824F",
    "700": "#38613C",
    "800": "#254128",
    "900": "#132014",
  },
  // derived from #7ed166
  sprout: {
    "50": "#EEF9EB",
    "100": "#D1EEC8",
    "200": "#B3E4A5",
    "300": "#95D982",
    "400": "#77CF5E",
    "500": "#5AC43B",
    "600": "#489D2F",
    "700": "#367623",
    "800": "#244E18",
    "900": "#12270C",
  },
  seed: {
    "50": "#FBFDE8",
    "100": "#F5F9BE",
    "200": "#EEF594",
    "300": "#E7F16A",
    "400": "#E1ED40",
    "500": "#DAE916",
    "600": "#AEBA12",
    "700": "#838C0D",
    "800": "#575D09",
    "900": "#2C2F04",
  },
};

const textStyles = {
  reading: {
    color: "gray.600",
    ".chakra-ui-dark &": { color: "gray.300" },
    fontWeight: "medium",
    textAlign: "left",
  },
};

const layerStyles = {
  shrubBg: {
    bg: "white",
    ".chakra-ui-dark &": { bg: "dark.100" },
  },
};

const theme = extendTheme({
  config,
  components,
  styles,
  fonts,
  colors,
  textStyles,
  layerStyles,
});
export default theme;
