import { memo, useEffect, useState } from "react";

import {
  Box,
  ChakraProps,
  Container,
  useColorMode,
  useColorModeValue,
} from "@definitions/exports";

import Navbar from "@components/navbar/desktop-navbar";

import { IHeader } from "./header";

const Header: React.FC<IHeader.IProps> = ({
  isDark = false,
  isSticky = true,
}) => {
  const color = useColorModeValue(
    "linear-gradient(to top, #dfe6e9 0%, white 100%)",
    "transparent",
  );
  const filter = useColorModeValue("blur(25px) contrast(200%)", "transparent");
  const sticky: ChakraProps = isSticky
    ? {
        zIndex: "sticky",
        w: "100%",
        pos: "fixed",
        bg: "transparent",
      }
    : {};

  const [headerColor, setHeaderColor] = useState("transparent");
  const { colorMode, toggleColorMode } = useColorMode();

  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setHeaderColor("white")
      : setHeaderColor("transparent");
  };
  useEffect(() => {
    if (colorMode === "light") {
      window.addEventListener("scroll", listenLightScrollEvent);
      return;
    } else {
      window.addEventListener("scroll", listenDarkScrollEvent);
      return;
    }
  });

  const listenLightScrollEvent = () => {
    window.scrollY > 1
      ? // ? setHeaderColor("linear-gradient(to top, #dfe6e9 0%, white 100%)")
        setHeaderColor("white")
      : setHeaderColor("transparent");
  };

  const listenDarkScrollEvent = () => {
    window.scrollY > 1
      ? setHeaderColor("#1B1B1B")
      : setHeaderColor("transparent");
  };

  return (
    <Box {...sticky}>
      <Container
        data-testid="container"
        maxW="100%"
        // backdropFilter={filter}
        bg={headerColor}
        // boxShadow="md"
      >
        <Navbar isDark={isDark} />
      </Container>
    </Box>
  );
};

export default Header;
