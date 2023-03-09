import { ThemeOverride } from "@chakra-ui/react";
// import { Ubuntu } from "@next/font/google";

type GlobalStyles = Pick<ThemeOverride, "styles">;

export default {
  styles: {
    global: {
      // h1: {
      //   fontWeight: 500,
      //   marginBottom: "0.5em",
      //   fontSize: "100px",
      // },
      // p: {
      //   // marginBottom: "1em",
      // },
      body: {
        fontFamily: "Ubuntu",
      },
      // html: {
      //   fontFamily: "Ubuntu",
      // },
      li: {
        fontFamily: "Ubuntu",
        textDecoration: "none !important",
      },
    },
  },
} as GlobalStyles;
