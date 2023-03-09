import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Link,
  Spacer,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";
import NextLink from "next/link";

const spacingL3 = [5, 10, 20];

const LocationSection = () => {
  return (
    <Box py={{ base: "15px", md: "25px" }} width="full" pos="relative">
      <Container maxW="container.xl">
        <Flex
          align={["start", "start", "start"]}
          direction={["column-reverse", "column-reverse", "row"]}
          justify={{ base: "center", md: "space-between" }}
          h="200px"
        >
          <Flex direction={"column"} w={{ base: "100%", md: "50%" }}>
            <VStack align={["center"]} mb={spacingL3} h={"200px"}>
              <VStack>
                <Text
                  textStyle={{ base: "display_xs_bold", md: "display_xs_bold" }}
                  color={useColorModeValue("gray.700", "whiteAlpha.800")}
                >
                  Kenya
                </Text>
                <Text
                  color={useColorModeValue("gray.900", "whiteAlpha.800")}
                  fontSize={{ base: "16px", md: "18px" }}
                  whiteSpace={"pre-line"}
                  textAlign={"center"}
                  mt={4}
                >
                  New Horizons Industrial Park,{"\n"} Ruiru, Kenya {"\n"} +254
                  706 585 629{"\n"}
                  kenya@burnmfg.com
                </Text>
              </VStack>
              <Link
                href="https://goo.gl/maps/UeQoMPnAm3jYdynGA"
                passHref
                as={NextLink}
                target={"_blank"}
                style={{ textDecoration: "none" }}
              >
                <Text
                  fontSize={{ base: "16px", md: "18px" }}
                  mt={4}
                  color="brand.500"
                  textStyle={{ base: "display_xs_bold", md: "display_xs_bold" }}
                  as="u"
                >
                  Location Map
                </Text>
              </Link>
              <Spacer />
            </VStack>
          </Flex>

          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>

          <Flex direction={"column"} w={{ base: "100%", md: "50%" }}>
            <VStack align={["center"]} mb={spacingL3} h={"200px"}>
              <VStack>
                <Text
                  textStyle={{ base: "display_xs_bold", md: "display_xs_bold" }}
                  color={useColorModeValue("gray.700", "whiteAlpha.800")}
                >
                  United States
                </Text>
                <Text
                  color={useColorModeValue("gray.900", "whiteAlpha.800")}
                  fontSize={{ base: "16px", md: "18px" }}
                  whiteSpace={"pre-line"}
                  textAlign={"center"}
                  mt={4}
                >
                  Suite 220, 18850 103rd Avenue,{"\n"} SW Vashon, WA 98070
                </Text>
              </VStack>
              <Link
                href="https://goo.gl/maps/UeQoMPnAm3jYdynGA"
                passHref
                as={NextLink}
                target={"_blank"}
                style={{ textDecoration: "none" }}
              >
                <Text
                  fontSize={{ base: "16px", md: "18px" }}
                  mt={4}
                  color="brand.500"
                  textStyle={{ base: "display_xs_bold", md: "display_xs_bold" }}
                  as="u"
                >
                  Location Map
                </Text>
              </Link>
              <Spacer />
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default LocationSection;
