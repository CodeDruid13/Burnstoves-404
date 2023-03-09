import { memo } from "react";

import NextLink from "next/link";

import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

import ButtonTransparent from "@components/button/button-transparent";

const HeroBannerSection: React.FC<{
  title?: string;
  image?: string;
  color?: string;
  font?: string;
  status?: string;
}> = memo(({ title, image, color, font, status }) => {
  return (
    <Box
      // py={[5, 5, 15]}
      //   py={{ base: "15px", md: "75px" }}
      width="full"
      pos="relative"
      // bg={useColorModeValue("transparent", "transparent")}
      backgroundImage={
        "linear-gradient(to left, rgba(255,0,0,0) 0%,rgba(0,0,0,.5) 100%), url(" +
        image +
        ")"
      }
      // bgGradient="linear-gradient(to left, rgba(255,0,0,0) 0%,rgba(0,0,0,0.65) 100%)"
      // background=linear-gradient(to bottom, rgba(255,0,0,0) 0%,rgba(255,0,0,0.65) 100%)
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      h={{ base: "50vh", md: "80vh" }}
      _before={{
        content: "''",
        pos: "absolute",
        // top: [5, 5, 20],
        bottom: 0,
        display: "block",
        width: ["full", "full", "full", "95%"],
        // height: ["full", "full", "full", 350],
        bg: useColorModeValue("gray.100", "gray.900"),
        zIndex: 0,
      }}
    >
      <Container maxW="container.xl" h="full">
        <Flex
          align={["center", "center", "center"]}
          // direction={["column", "column", "row"]}
          direction={["column-reverse", "column-reverse", "row"]}
          h="full"
          justify={{ base: "center", md: "start" }}
        >
          <Flex w={{ base: "100%", md: "50%" }} justify="center">
            <VStack align={["start"]} spacing={4}>
              <Text
                textStyle={{ base: "text_lg_bold", md: "display_md_bold" }}
                color={useColorModeValue("whiteAlpha.900", "whiteAlpha.800")}
              >
                Impacting lives and the environment through efficient cooking
                appliances
              </Text>

              <HStack direction={["column", "column", "row"]} mb={2}>
                <Link
                  as={NextLink}
                  href={"/support/buy"}
                  passHref
                  style={{ textDecoration: "none" }}
                >
                  <ButtonTransparent
                    bgColor={"brand.500"}
                    paddingX={14}
                    borderRadius={"md"}
                    height={"50px"}
                    _hover={{
                      backgroundColor: "brand.700",
                    }}
                    color={"white"}
                  >
                    <Text color={"white"}>Where to buy</Text>
                  </ButtonTransparent>
                </Link>
              </HStack>
            </VStack>
          </Flex>
        </Flex>
      </Container>

      <Flex
        w={{ base: "100%", md: "100%" }}
        h="75px"
        bg="brand.500"
        position={"absolute"}
        bottom={0}
        // px={{ base: "10px", md: "0px" }}
      >
        <SimpleGrid
          columns={4}
          justifyContent={"center"}
          alignContent={"center"}
          mx={{ base: "auto", md: "125px" }}
          spacingX={2}
        >
          <Link
            as={NextLink}
            href={"/products/charcoal-stoves"}
            passHref
            style={{ textDecoration: "none" }}
          >
            <Center
              bg={status === "charcoal" ? color : "transparent"}
              width={{ base: "full", md: "20vw" }}
              h="75px"
              color="white"
              textStyle={
                status === "charcoal"
                  ? { base: "text_xs_bold", md: "text_md_bold" }
                  : { base: "text_xs_regular", md: "text_md_regular" }
              }
              px={{ base: 4, md: 0 }}
            >
              Charcoal Appliances
            </Center>
          </Link>

          <Link
            as={NextLink}
            href={"/products/wood-stoves"}
            passHref
            style={{ textDecoration: "none" }}
          >
            <Center
              bg={status === "wood" ? color : "transparent"}
              h="75px"
              color="white"
              textStyle={
                status === "wood"
                  ? { base: "text_xs_bold", md: "text_md_bold" }
                  : { base: "text_xs_regular", md: "text_md_regular" }
              }
              px={{ base: 4, md: 0 }}
            >
              Wood & Briquette Appliances
            </Center>
          </Link>

          <Link
            as={NextLink}
            href={"/products/lpg-appliances"}
            passHref
            style={{ textDecoration: "none" }}
          >
            <Center
              bg={status === "lpg" ? color : "transparent"}
              h="75px"
              color="white"
              textStyle={
                status === "lpg"
                  ? { base: "text_xs_bold", md: "text_md_bold" }
                  : { base: "text_xs_regular", md: "text_md_regular" }
              }
              px={{ base: 4, md: 0 }}
            >
              LPG Appliances
            </Center>
          </Link>

          <Link
            as={NextLink}
            href={"/products/electric-pressure-cooker"}
            passHref
            style={{ textDecoration: "none" }}
          >
            <Center
              bg={status === "electric" ? color : "transparent"}
              h="75px"
              color="white"
              textStyle={
                status === "electric"
                  ? { base: "text_xs_bold", md: "text_md_bold" }
                  : { base: "text_xs_regular", md: "text_md_regular" }
              }
              px={{ base: 4, md: 0 }}
            >
              Electric Pressure Cooker
            </Center>
          </Link>
        </SimpleGrid>
      </Flex>
    </Box>
  );
});

export default HeroBannerSection;
