import NextLink from "next/link";

import {
  chakra,
  ChakraProps,
  Flex,
  useColorModeValue,
} from "@definitions/exports";

import Logo from "./indexWhite";
import Link from "next/link";

export const LogoWhite: React.FC<ChakraProps> = (props): JSX.Element => {
  const color = useColorModeValue("gray.800", "white");
  return (
    <Flex color={color} alignItems="center" {...props}>
      <Link href="/" passHref>
        <chakra.a title="Burnstoves" display="flex" alignItems="center">
          <Logo width={"35px"} height={"35px"} />
        </chakra.a>
      </Link>
    </Flex>
  );
};
