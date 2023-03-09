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
import NextLink from "next/link";

import ButtonTransparent from "@components/button/button-transparent";

const spacingL3 = [5, 10, 20];

const OffsetTypeSection = () => {
  return (
    <Box
      py={{ base: "15px", md: "5px" }}
      width="full"
      pos="relative"
      mt={"50px"}
      bg={"white"}
    >
      <Container maxW="container.xl">
        <Flex
          align={["start", "center", "end"]}
          // direction={["column", "column", "row"]}
          direction={["column-reverse", "column-reverse", "row"]}
          justify="center"
        >
          <Flex
            pos="relative"
            direction={"column"}
            mb={[5, 5, 0]}
            mr={[0, 0, 10]}
            w={{ base: "100%", md: "100%" }}
            align={["start", "center", "center"]}
          >
            <VStack align={"center"} spacing={6} w="full">
              <VStack align={["center"]} spacing={8}>
                <Text
                  // fontSize={[38, 48, 48]}
                  textAlign="center"
                  textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
                  mt={0}
                  color={useColorModeValue("gray.600", "whiteAlpha.900")}
                >
                  Purchase Our Carbon Credits
                </Text>
              </VStack>
            </VStack>
          </Flex>
        </Flex>
      </Container>

      <Container maxW="container.lg">
        <Flex
          direction={["column-reverse", "column-reverse", "row"]}
          justify={{ base: "center", md: "space-between" }}
          mt={4}
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
              <Link
                href={"mailto:carbon@burnmfg.com"}
                passHref
                as={NextLink}
                style={{ textDecoration: "none" }}
              >
                <ButtonTransparent
                  bgColor={"brand.500"}
                  paddingX={4}
                  borderRadius={"md"}
                  w={"fit-content"}
                  height={"50px"}
                  _hover={{
                    backgroundColor: "brand.600",
                  }}
                  color={"white"}
                >
                  <Text color={"white"}>Offset for your company</Text>
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
              <Link
                href={"/carbon-credits/individual#offset"}
                passHref
                as={NextLink}
                style={{ textDecoration: "none" }}
              >
                <ButtonTransparent
                  bgColor={"brand.500"}
                  paddingX={4}
                  borderRadius={"md"}
                  w={"fit-content"}
                  height={"50px"}
                  _hover={{
                    backgroundColor: "brand.600",
                  }}
                  color={"white"}
                >
                  <Text color={"white"}>Offset your own carbon emissions</Text>
                </ButtonTransparent>
              </Link>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default OffsetTypeSection;
