import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

import ButtonTransparent from "@components/button/button-transparent";
import NextLink from "next/link";

const spacingL3 = [5, 10, 20];

const CreditsSection = () => {
  return (
    <Box
      py={{ base: "15px", md: "5px" }}
      width="full"
      pos="relative"
      mt={"50px"}
    >
      <Container maxW="container.xl">
        <Flex
          //   align={["start", "center", "end"]}
          // direction={["column", "column", "row"]}
          direction={["column-reverse", "column-reverse", "row"]}
          justify={{ base: "center", md: "space-between" }}
        >
          <Flex
            pos="relative"
            // zIndex={1}
            direction={"column"}
            mb={[5, 5, 0]}
            mr={[0, 0, 10]}
            w={{ base: "100%", md: "50%" }}
          >
            <VStack align={["center"]} mb={spacingL3}>
              <Text
                textStyle={{ base: "display_xs_bold", md: "display_xs_bold" }}
                color={useColorModeValue("gray.700", "whiteAlpha.800")}
              >
                Corporate
              </Text>

              <Link
                href={"/carbon-credits/corporate"}
                passHref
                as={NextLink}
                style={{ textDecoration: "none" }}
              >
                <ButtonTransparent
                  bgColor={"transparent"}
                  paddingX={4}
                  borderRadius={"md"}
                >
                  <Text color={"brand.500"} as="u" textStyle={"text_md_bold"}>
                    Explore for Corporate
                  </Text>
                </ButtonTransparent>
              </Link>
            </VStack>
          </Flex>

          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>

          <Flex
            pos="relative"
            zIndex={1}
            direction={"column"}
            mb={[5, 5, 0]}
            mr={[0, 0, 10]}
            w={{ base: "100%", md: "50%" }}
          >
            <VStack align={["center"]} mb={spacingL3}>
              <Text
                textStyle={{ base: "display_xs_bold", md: "display_xs_bold" }}
                color={useColorModeValue("gray.700", "whiteAlpha.800")}
              >
                Individuals
              </Text>

              <Link
                href={"/carbon-credits/individual"}
                passHref
                as={NextLink}
                style={{ textDecoration: "none" }}
              >
                <ButtonTransparent
                  bgColor={"transparent"}
                  paddingX={4}
                  borderRadius={"md"}
                >
                  <Text color={"brand.500"} as="u" textStyle={"text_md_bold"}>
                    Explore for Individuals
                  </Text>
                </ButtonTransparent>
              </Link>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default CreditsSection;
