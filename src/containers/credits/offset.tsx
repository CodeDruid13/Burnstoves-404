import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  SimpleGrid,
} from "@definitions/exports";

import ButtonTransparent from "@components/button/button-transparent";
import Highlight from "@components/highlight";
import NextImage from "@components/image-lazyload/nextImage";
import NextLink from "next/link";
import { memo } from "react";

const OffsetSection: React.FC<{
  bg?: string;
}> = memo(({ bg }) => {
  return (
    <Box py={{ base: "15px", md: "75px" }} bg={bg} width="full" pos="relative">
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
                  Offset Your{" "}
                  <Highlight strokeColor={"brand.300"}>Carbon</Highlight>{" "}
                  Footprint
                </Text>

                <Text
                  textStyle={{ base: "text_md_regular", md: "text_xl_regular" }}
                  color={useColorModeValue("gray.700", "whiteAlpha.900")}
                  whiteSpace={"pre-line"}
                  textAlign={"center"}
                >
                  Please contact us directly for discounted pricing on volumes
                  above 500 tons.
                </Text>
              </VStack>

              <SimpleGrid
                width="50vw"
                columns={[2, 2, 2, 2]}
                spacingY={[14]}
                spacingX={[5, 5, 5, 5]}
                mt={"15px"}
              >
                <Stack
                  pos="relative"
                  p={6}
                  rounded="xl"
                  boxShadow={"xs"}
                  border={"1px"}
                  borderColor={"#f9f9f9"}
                  bg={"gray.50"}
                  align={"center"}
                  spacing={4}
                  _hover={{
                    borderColor: "#fef8f4",
                    borderWidth: "2px",
                    boxShadow: `12px 12px 0px #fef8f4`,
                    transition: "all 250ms ease-in-out",
                    transform: ["none", "none", "translateY(-20px)"],
                  }}
                  h="full"
                >
                  <HStack justify={"center"}>
                    <Text
                      textStyle={"text_md_bold"}
                      textAlign={"center"}
                      color={"gray.600"}
                    >
                      One-time Payment
                    </Text>
                  </HStack>

                  <Box
                    overflow="hidden"
                    pos="relative"
                    width="170px"
                    height="170px"
                    flex="1"
                    mx={"auto"}
                  >
                    <NextImage
                      src={
                        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677588527/small_footprint_a47859b6a0.svg?updated_at=2023-02-28T12:48:48.896Z"
                      }
                      alt={
                        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677588527/small_footprint_a47859b6a0.svg?updated_at=2023-02-28T12:48:48.896Z"
                      }
                    />
                  </Box>

                  <Text textStyle={"text_md_medium"} textAlign={"center"}>
                    Make a one-time custom purchase to offset your carbon
                    footprint and remove tons of carbon dioxide from the
                    atmosphere.
                  </Text>

                  <Link
                    href={"https://buy.stripe.com/4gw5midNleWr35K6ot"}
                    passHref
                    target={"_blank"}
                    as={NextLink}
                    style={{ textDecoration: "none" }}
                  >
                    <ButtonTransparent
                      bgColor={"brand.500"}
                      paddingX={14}
                      borderRadius={"md"}
                      w={"fit-content"}
                      height={"50px"}
                      _hover={{
                        backgroundColor: "brand.700",
                      }}
                      color={"white"}
                    >
                      <Text color={"white"}>Buy Now</Text>
                    </ButtonTransparent>
                  </Link>
                </Stack>

                <Stack
                  pos="relative"
                  p={6}
                  rounded="xl"
                  boxShadow={"xs"}
                  border={"1px"}
                  borderColor={"#f9f9f9"}
                  bg={"gray.50"}
                  align={"center"}
                  spacing={4}
                  _hover={{
                    borderColor: "#fef8f4",
                    borderWidth: "2px",
                    boxShadow: `12px 12px 0px #fef8f4`,
                    transition: "all 250ms ease-in-out",
                    transform: ["none", "none", "translateY(-20px)"],
                  }}
                  h="full"
                >
                  <HStack justify={"center"}>
                    <Text
                      textStyle={"text_md_bold"}
                      textAlign={"center"}
                      color={"gray.600"}
                    >
                      Subscribe
                    </Text>
                  </HStack>

                  <Box
                    overflow="hidden"
                    pos="relative"
                    width="170px"
                    height="170px"
                    flex="1"
                    mx={"auto"}
                  >
                    <NextImage
                      src={
                        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677588527/subscribe_footprint_0d9a7c6596.svg?updated_at=2023-02-28T12:48:48.763Z"
                      }
                      alt={
                        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677588527/subscribe_footprint_0d9a7c6596.svg?updated_at=2023-02-28T12:48:48.763Z"
                      }
                    />
                  </Box>

                  <Text textStyle={"text_md_medium"} textAlign={"center"}>
                    Subscribe to a monthly plan. Help fight climate change. Each
                    BURN Carbon Offset equals one ton of CO₂ emissions.
                  </Text>

                  <Link
                    href={"https://buy.stripe.com/28obKG5gP01xeOs006"}
                    passHref
                    target={"_blank"}
                    as={NextLink}
                    style={{ textDecoration: "none" }}
                  >
                    <ButtonTransparent
                      bgColor={"brand.500"}
                      paddingX={14}
                      borderRadius={"md"}
                      w={"fit-content"}
                      height={"50px"}
                      _hover={{
                        backgroundColor: "brand.700",
                      }}
                      color={"white"}
                    >
                      <Text color={"white"}>Subscribe Now</Text>
                    </ButtonTransparent>
                  </Link>
                </Stack>
              </SimpleGrid>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
});

export default OffsetSection;
