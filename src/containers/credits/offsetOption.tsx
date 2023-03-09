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
import NextImage from "@components/image-lazyload/nextImage";
import NextLink from "next/link";
import { memo } from "react";

const OffsetOptionSection: React.FC<{
  bg?: string;
}> = memo(({ bg }) => {
  return (
    <Box
      py={{ base: "15px", md: "75px" }}
      bg={"brand.500"}
      width="full"
      pos="relative"
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
                  color={useColorModeValue("white", "whiteAlpha.900")}
                >
                  Don’t Know How Much to Offset?
                </Text>

                <Text
                  textStyle={{ base: "text_md_regular", md: "text_xl_regular" }}
                  color={useColorModeValue("white", "whiteAlpha.900")}
                  whiteSpace={"pre-line"}
                  textAlign={"center"}
                  w={"container.md"}
                >
                  Subscribe to a monthly plan. Help fight climate change. Each
                  BURN Carbon Offset equals one ton of CO₂ emissions.
                </Text>
              </VStack>

              <SimpleGrid
                width="full"
                columns={{ base: 1, md: 3 }}
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
                  <HStack justify={"center"} w={"full"}>
                    <Text
                      textStyle={"text_md_bold"}
                      textAlign={"center"}
                      color={"gray.500"}
                    >
                      Small Footprint
                    </Text>
                  </HStack>

                  <Box
                    overflow="hidden"
                    pos="relative"
                    width="170px"
                    height="170px"
                    flex="1"
                    mx={"auto"}
                    p={8}
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
                    Enable the permanent removal of a ton of carbon dioxide from
                    the air per month.
                  </Text>

                  <HStack justify={"center"} w={"full"}>
                    <Text textStyle={"display_sm_bold"} textAlign={"center"}>
                      $30 /
                    </Text>

                    <Text textStyle={"text_xl_medium"} textAlign={"center"}>
                      month
                    </Text>
                  </HStack>

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
                  <HStack justify={"center"} w={"full"}>
                    <Text
                      textStyle={"text_md_bold"}
                      textAlign={"center"}
                      color={"gray.500"}
                    >
                      Medium Footprint
                    </Text>
                  </HStack>

                  <Box
                    overflow="hidden"
                    pos="relative"
                    width="170px"
                    height="170px"
                    flex="1"
                    mx={"auto"}
                    p={4}
                  >
                    <NextImage
                      src={
                        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677588527/medium_footprint_15e605dab5.svg?updated_at=2023-02-28T12:48:49.010Z"
                      }
                      alt={
                        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677588527/medium_footprint_15e605dab5.svg?updated_at=2023-02-28T12:48:49.010Z"
                      }
                    />
                  </Box>

                  <Text textStyle={"text_md_medium"} textAlign={"center"}>
                    Enable the permanent removal of 3 tons of carbon dioxide
                    from the air per month.
                  </Text>

                  <HStack justify={"center"} w={"full"}>
                    <Text textStyle={"display_sm_bold"} textAlign={"center"}>
                      $90 /
                    </Text>

                    <Text textStyle={"text_xl_medium"} textAlign={"center"}>
                      month
                    </Text>
                  </HStack>

                  <Link
                    href={"https://buy.stripe.com/bIY3eaeRpdSneOsaEL"}
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
                  <HStack justify={"center"} w={"full"}>
                    <Text
                      textStyle={"text_md_bold"}
                      textAlign={"center"}
                      color={"gray.500"}
                    >
                      Large Footprint
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
                        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677588527/large_footprint_5f8f1349b1.svg?updated_at=2023-02-28T12:48:48.892Z"
                      }
                      alt={
                        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677588527/large_footprint_5f8f1349b1.svg?updated_at=2023-02-28T12:48:48.892Z"
                      }
                    />
                  </Box>
                  <Text textStyle={"text_md_medium"} textAlign={"center"}>
                    Enable the permanent removal of 5 tons of carbon dioxide
                    from the air per month.
                  </Text>

                  <HStack justify={"center"} w={"full"}>
                    <Text textStyle={"display_sm_bold"} textAlign={"center"}>
                      $150 /
                    </Text>

                    <Text textStyle={"text_xl_medium"} textAlign={"center"}>
                      month
                    </Text>
                  </HStack>

                  <Link
                    href={"https://buy.stripe.com/14k8yubFd8y3dKoeV2"}
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

export default OffsetOptionSection;
