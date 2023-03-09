import {
  Box,
  ChakraProps,
  Container,
  useColorModeValue,
} from "@definitions/exports";

import Navbar from "@components/navbar/desktop-white";

import { IHeader } from "./header";

const Header: React.FC<IHeader.IProps> = ({
  isDark = false,
  isSticky = true,
  shadow = false,
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

  return (
    <Box {...sticky}>
      <Container
        data-testid="container"
        maxW="100%"
        // backdropFilter={filter}
        bg={"#fff"}
        // boxShadow="md"
      >
        <Navbar isDark={isDark} />
      </Container>
    </Box>
  );
};

export default Header;
