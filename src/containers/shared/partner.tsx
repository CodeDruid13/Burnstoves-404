import ButtonTransparent from "@components/button/button-transparent";
import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";
import NextLink from "next/link";

const spacingL3 = [5, 10, 20];

const PartnerSection = () => {
  return (
    <Container maxW="container.xl" py={{ base: "15px", md: "50px" }}>
      <Flex
        direction={["column", "column", "row"]}
        justify={{ base: "center", md: "space-between" }}
      >
        <Flex
          direction={"column"}
          mb={[5, 5, 0]}
          // mr={[0, 0, 10]}
          w={{ base: "100%", md: "50%" }}
          justify={{ base: "center", md: "space-between" }}
        >
          <VStack
            align={["center"]}
            mb={spacingL3}
            justify={{ base: "center", md: "space-between" }}
            h={"150px"}
          >
            <Flex direction={"column"} align={"center"}>
              <Text
                textStyle={{ base: "display_xs_bold", md: "display_xs_bold" }}
                color={useColorModeValue("gray.700", "whiteAlpha.800")}
                textAlign={"center"}
              >
                Partner with us as an Investor
              </Text>
              <Text
                color={useColorModeValue("gray.900", "whiteAlpha.800")}
                fontSize={{ base: "16px", md: "18px" }}
                whiteSpace={"pre-line"}
                textAlign={"center"}
                mt={4}
                px={{ base: 0, md: "75px" }}
              >
                Work with us to create a world where clean cookstoves help save
                lives & forests.
              </Text>
            </Flex>

            <Link
              as={NextLink}
              href={"/support/contact"}
              passHref
              style={{ textDecoration: "none" }}
            >
              <ButtonTransparent
                bgColor={"transparent"}
                paddingX={4}
                borderRadius={"md"}
              >
                <Text color={"brand.500"} as="u" textStyle={"text_md_bold"}>
                  Contact Us
                </Text>
              </ButtonTransparent>
            </Link>
          </VStack>
        </Flex>

        <Flex
          w={{ base: "0%", md: "5%" }}
          // align={"center"}
          justify={"center"}
        >
          <Center height={{ base: 0, md: "150px" }} bg={"gray.200"}>
            <Divider orientation="vertical" />
          </Center>
        </Flex>

        <Flex
          direction={"column"}
          mb={[5, 5, 0]}
          w={{ base: "100%", md: "50%" }}
        >
          <VStack
            align={["center"]}
            mb={spacingL3}
            justify={{ base: "center", md: "space-between" }}
            h={"150px"}
          >
            <Text
              textStyle={{ base: "display_xs_bold", md: "display_xs_bold" }}
              color={useColorModeValue("gray.700", "whiteAlpha.800")}
              textAlign={"center"}
            >
              Partner with us as a distributor
            </Text>
            <Text
              color={useColorModeValue("gray.900", "whiteAlpha.800")}
              fontSize={{ base: "16px", md: "18px" }}
              whiteSpace={"pre-line"}
              textAlign={"center"}
              mt={4}
              px={{ base: 0, md: "100px" }}
            >
              Join our robust team of distributors across Africa.
            </Text>
            <Link
              as={NextLink}
              href={"/support/distributors"}
              passHref
              style={{ textDecoration: "none" }}
            >
              <ButtonTransparent
                bgColor={"transparent"}
                paddingX={4}
                borderRadius={"md"}
              >
                <Text color={"brand.500"} as="u" textStyle={"text_md_bold"}>
                  Join our distribution team
                </Text>
              </ButtonTransparent>
            </Link>
          </VStack>
        </Flex>
      </Flex>
    </Container>
  );
};

export default PartnerSection;
