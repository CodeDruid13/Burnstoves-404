import {
  Box,
  Container,
  Flex,
  Skeleton,
  Spacer,
  Text,
  useColorModeValue,
  VStack,
  SimpleGrid,
} from "@definitions/exports";

import ButtonOrangeUnderline from "@components/button/button-orange-underline";
import Highlight from "@components/highlight";
import NextImage from "@components/image-lazyload/nextImage";
import Link from "next/link";
import { useRouter } from "next/router";

const spacingL3 = [5, 10, 10];

const AwardsSection = ({ awardsdata }: { awardsdata?: any }) => {
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

  const router = useRouter();

  return (
    <Box
      py={[5, 5, 10]}
      width="full"
      pos="relative"
      bg={useColorModeValue("gray.50", "transparent")}
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
              <Text
                textStyle={{ base: "display_xs_bold", md: "display_md_bold" }}
                color={useColorModeValue("gray.600", "whiteAlpha.900")}
              >
                BURN's <Highlight strokeColor={"brand.300"}> Awards</Highlight>{" "}
                & <Highlight strokeColor={"brand.300"}> Recognition</Highlight>
              </Text>

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
                        key={item.title}
                        bg={"white"}
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
                          <Spacer />

                          <Link
                            href={{
                              pathname: "/awards/awards",
                              query: {
                                description:
                                  item?.attributes?.award_description,
                                award_title: item?.attributes?.award_title,
                                award_date: item?.attributes?.award_date,
                                id: 1,
                              },
                            }}
                            as={{
                              pathname: `/awards/awards`,
                              query: {
                                name: item?.attributes?.award_title,
                              },
                            }}
                            aria-label={"Read More"}
                            passHref
                          >
                            <ButtonOrangeUnderline
                              bgColor={"transparent"}
                              color={"brand.500"}
                              // paddingX={4}
                              borderRadius={"md"}
                              aria-label="Continue Reading"
                              mb={"10px"}
                            >
                              View Award
                            </ButtonOrangeUnderline>
                          </Link>
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
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default AwardsSection;
