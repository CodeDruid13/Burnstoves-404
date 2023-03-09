import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import colors from "./foundations/colors";
import fontSizes from "./foundations/fontSizes";
import styles from "./styles";

/**
 * This file is generated for providing a custom theme to Chakra UI
 *
 * To learn more about custom themes
 * please visit https://chakra-ui.com/docs/getting-started#add-custom-theme-optional
 */

// Color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const overrides = {
  ...config,
  ...styles,
  colors,
  fontSizes,
  textStyles: {
    text_xs_regular: {
      fontSize: "12px",
      fontWeight: "regular",
      color: "red",
      //lineHeight: "18",
    },
    text_xs_medium: {
      fontSize: "12px",
      fontWeight: "medium",
      //lineHeight: "18",
    },
    text_xs_bold: {
      fontSize: "12px",
      fontWeight: "bold",
      //lineHeight: "18",
    },
    text_sm_regular: {
      fontSize: "14px",
      fontWeight: "regular",
      //lineHeight: "20",
    },
    text_sm_medium: {
      fontSize: "14px",
      fontWeight: "medium",
      //lineHeight: "20",
    },
    text_sm_bold: {
      fontSize: "14px",
      fontWeight: "bold",
      //lineHeight: "20",
    },
    text_md_regular: {
      fontSize: "16px",
      fontWeight: "regular",
      //lineHeight: "24",
    },
    text_md_medium: {
      fontSize: "16px",
      fontWeight: "medium",
      //lineHeight: "24",
    },
    text_md_bold: {
      fontSize: "16px",
      fontWeight: "bold",
      //lineHeight: "24",
    },
    text_lg_regular: {
      fontSize: "18px",
      fontWeight: "regular",
      //lineHeight: "28",
    },
    text_lg_medium: {
      fontSize: "18px",
      fontWeight: "medium",
      //lineHeight: "28",
    },
    text_lg_bold: {
      fontSize: "18px",
      fontWeight: "bold",
      //lineHeight: "28",
    },
    text_xl_regular: {
      fontSize: "20px",
      fontWeight: "regular",
      //lineHeight: "30",
    },
    text_xl_medium: {
      fontSize: "20px",
      fontWeight: "medium",
      //lineHeight: "30",
    },
    text_xl_bold: {
      fontSize: "20px",
      fontWeight: "bold",
      //lineHeight: "30",
    },
    display_xs_regular: {
      fontSize: "24px",
      fontWeight: "regular",
      //lineHeight: "32",
    },
    display_xs_medium: {
      fontSize: "24px",
      fontWeight: "medium",
      //lineHeight: "32",
    },
    display_xs_bold: {
      fontSize: "24px",
      fontWeight: "bold",
      //lineHeight: "32",
    },
    display_sm_regular: {
      fontSize: "30px",
      fontWeight: "regular",
      //lineHeight: "38",
    },
    display_sm_medium: {
      fontSize: "30px",
      fontWeight: "medium",
      //lineHeight: "38",
    },
    display_sm_bold: {
      fontSize: "30px",
      fontWeight: "bold",
      //lineHeight: "38",
    },
    display_md_regular: {
      fontSize: "36px",
      fontWeight: "regular",
      //lineHeight: "44",
    },
    display_md_medium: {
      fontSize: "30px",
      fontWeight: "medium",
      //lineHeight: "44",
    },
    display_md_bold: {
      fontSize: "36px",
      fontWeight: "bold",
      //lineHeight: "44",
    },
    display_lg_regular: {
      fontSize: "48px",
      fontWeight: "regular",
      //lineHeight: "60",
    },
    display_lg_medium: {
      fontSize: "48px",
      fontWeight: "medium",
      //lineHeight: "60",
    },
    display_lg_bold: {
      fontSize: "48px",
      fontWeight: "bold",
      //lineHeight: "60",
    },
    display_xl_regular: {
      fontSize: "60px",
      fontWeight: "regular",
      //lineHeight: "72",
    },
    display_xl_medium: {
      fontSize: "60px",
      fontWeight: "medium",
      //lineHeight: "72",
    },
    display_xl_bold: {
      fontSize: "60px",
      fontWeight: "bold",
      //lineHeight: "72",
    },
    display_2xl_regular: {
      fontSize: "72px",
      fontWeight: "regular",
      //lineHeight: "90",
    },
    display_2xl_medium: {
      fontSize: "72px",
      fontWeight: "medium",
      //lineHeight: "90",
    },
    display_2xl_bold: {
      fontSize: "90px",
      fontWeight: "bold",
      //lineHeight: "90",
    },

    // Sort this part
    display_32_bold: {
      fontSize: "32px",
      fontWeight: "bold",
      lineHeight: "40px",
    },

    display_22_bold: {
      fontSize: "22px",
      fontWeight: "bold",
      lineHeight: "27.5px",
    },
  },
};

const theme = extendTheme(overrides);

export default theme;
