import { memo } from "react";

import {
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@definitions/exports";

import ButtonTransparent from "@components/button/button-transparent";
import Highlight from "@components/highlight";
import NextLink from "next/link";

const FeaturesSection: React.FC<{
  link?: string;
  linktext?: string;
  color?: string;
  image?: string;
  bg?: string;
}> = memo(({ link, linktext, color, image, bg }) => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      bg={useColorModeValue(bg ? bg : "gray.50", "transparent")}
      // pl={{ base: "0px", md: "120px" }}
      py={16}
      // maxW="container.md"
      align={"center"}
      justify={"center"}
    >
      <Flex direction={"column"} w={"full"} justify={"center"} align={"center"}>
        <Text
          // fontSize={[38, 48, 48]}
          textAlign="center"
          // fontWeight={400}
          fontFamily={"Ubuntu"}
          textStyle={"display_xs_bold"}
          mt={0}
          color={useColorModeValue("gray.600", "whiteAlpha.900")}
        >
          Our stoves have impacted{" "}
          <Highlight strokeColor={"brand.300"}>over 15M+</Highlight> lives
        </Text>

        <Text
          color={useColorModeValue("gray.700", "gray.800")}
          textStyle={{ base: "text_md_regular", md: "text_lg_regular" }}
          mt="10px"
          textAlign="center"
        >
          with presence in 8 countries and counting
        </Text>

        {link && (
          <Link
            href={link}
            passHref
            as={NextLink}
            style={{ textDecoration: "none" }}
          >
            <ButtonTransparent
              bgColor={"transparent"}
              variant={"outline"}
              paddingX={4}
              borderRadius={"md"}
              rounded={"full"}
              mt="10px"
              _hover={{
                color: "brand.500",
                borderColor: "brand.500",
              }}
            >
              <Text
                textStyle={"text_md_bold"}
                color={"gray.500"}
                _hover={{
                  color: "brand.500",
                }}
              >
                {linktext}
              </Text>
            </ButtonTransparent>
          </Link>
        )}
      </Flex>
    </Stack>
  );
});

export default FeaturesSection;
