import {
  Box,
  Container,
  Flex,
  Link,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  SimpleGrid,
} from "@definitions/exports";

import ButtonTransparent from "@components/button/button-transparent";
import NextImage from "@components/image-lazyload/nextImage";
import NextLink from "next/link";

const spacingL3 = [5, 10, 10];

const WorkAwards = ({ awardsdata }: { awardsdata?: any }) => {
  let items = [
    {
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1676364277/global_leap_burn_manufacturing_c939a44730.png",
      title: "Global LEAP Awards 2020",
      href: "/impact/awards",
    },
    {
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1676361657/bloomberg_award_to_burn_jikokoa_burn_manufacturing_d51b2bdc26.jpg",
      title: "Bloomberg New Energy Finance Award",
      href: "/impact/awards",
    },
    {
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1676361657/swissecs_award_to_burn_manufacturing_65a9e21769.jpg",
      title: "SWISSECS Award",
      href: "/impact/awards",
    },
  ];

  return (
    <Box
      py={[5, 5, 5]}
      width="full"
      pos="relative"
      bg={useColorModeValue("white", "transparent")}
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
      <Container maxW="container.xl">
        <Flex
          align={["start", "center", "end"]}
          // direction={["column", "column", "row"]}
          direction={["column-reverse", "column-reverse", "row"]}
        >
          <Flex
            pos="relative"
            zIndex={1}
            direction={"column"}
            mb={[5, 5, 0]}
            mr={[0, 0, 10]}
            // maxW={["full", 500, 500]}
            w={{ base: "100%", md: "100%" }}
            align={"center"}
          >
            <VStack align={["center"]} mb={spacingL3}>
              <VStack align={["center"]} spacing={8}>
                <Text
                  textAlign="center"
                  textStyle={{ base: "display_xs_bold", md: "display_md_bold" }}
                  mt={0}
                  color={useColorModeValue("gray.600", "whiteAlpha.900")}
                >
                  Be Part of an Award-winning Workplace
                </Text>

                <Text
                  textStyle={"text_xl_regular"}
                  textAlign="center"
                  color={useColorModeValue("gray.600", "whiteAlpha.900")}
                  w={{ base: "100%", md: "75%" }}
                >
                  BURN has received recognition for its cutting-edge innovation
                  and environmental & social impact from among others Bloomberg
                  New Energy Finance Award, Global Leap Awards, and Ashden
                  International.
                </Text>
              </VStack>

              {awardsdata ? (
                awardsdata?.awards?.data?.length ? (
                  <SimpleGrid
                    width="full"
                    columns={[1, 1, 2, 3]}
                    spacing={[5, 10, 10]}
                  >
                    {awardsdata?.awards?.data?.slice(0, 3)?.map((item: any) => (
                      <Flex
                        direction="row"
                        w="100%"
                        h={"full"}
                        mt="25px"
                        color={useColorModeValue("white", "transparent")}
                        pt="14px"
                        px="14px"
                        borderRadius={"md"}
                        key={item?.id}
                        bg={"white"}
                        border={"1px solid"}
                        borderColor="gray.100"
                        _hover={{
                          boxShadow: "2xl",
                          transition: "all 400ms ease-in-out",
                        }}
                      >
                        <Flex direction="column">
                          <Box
                            overflow="hidden"
                            pos="relative"
                            width="full"
                            height="200px"
                          >
                            <NextImage
                              src={
                                item?.attributes?.award_image?.data?.attributes
                                  ?.url
                              }
                              alt={
                                item?.attributes?.award_image?.data?.attributes
                                  ?.alternativeText
                              }
                            />
                          </Box>
                          <Text
                            textStyle={"text_xl_bold"}
                            mt="10px"
                            ml="10px"
                            color={useColorModeValue(
                              "blueGray.700",
                              "whiteAlpha.800",
                            )}
                          >
                            {item?.attributes?.award_title}
                          </Text>
                        </Flex>
                      </Flex>
                    ))}
                  </SimpleGrid>
                ) : null
              ) : (
                <SimpleGrid
                  width="full"
                  columns={[1, 1, 2, 3]}
                  spacingY={[14]}
                  spacingX={[5, 5, 5, 5]}
                  justifyContent={"center"}
                  alignContent={"center"}
                >
                  {items?.map((item, idx) => (
                    <Flex
                      direction="row"
                      w="100%"
                      mt="25px"
                      color={useColorModeValue("white", "transparent")}
                      py="14px"
                      px="14px"
                      borderRadius={"md"}
                      key={item.title}
                      bg={"white"}
                    >
                      <Flex direction="column" w="full" h="full">
                        <Box
                          overflow="hidden"
                          pos="relative"
                          width="250px"
                          height="200px"
                          flex="1"
                        >
                          <Skeleton
                            h="200px"
                            w={{ base: "full", md: "full" }}
                            mt={"10px"}
                            rounded={"md"}
                            fadeDuration={4}
                            startColor={"gray.50"}
                            endColor={"gray.200"}
                          />
                        </Box>

                        <Skeleton
                          h="10px"
                          mt={"10px"}
                          rounded={"full"}
                          fadeDuration={4}
                          startColor={"gray.50"}
                          endColor={"gray.200"}
                        />
                      </Flex>
                    </Flex>
                  ))}
                </SimpleGrid>
              )}
            </VStack>

            <Stack
              direction={["column", "row"]}
              spacing={6}
              justifyContent="center"
              mt={6}
              mb={12}
              w={"full"}
            >
              <Link
                href={"/awards/awards"}
                passHref
                as={NextLink}
                style={{ textDecoration: "none" }}
              >
                <ButtonTransparent
                  bgColor={"brand.500"}
                  paddingX={4}
                  borderRadius={"md"}
                  height={"50px"}
                  _hover={{
                    backgroundColor: "brand.1000",
                  }}
                  color={"white"}
                  aria-label="Watch Product Video"
                >
                  View all awards
                </ButtonTransparent>
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default WorkAwards;
