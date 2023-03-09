import {
  Box,
  Container,
  Flex,
  LinkBox,
  SimpleGrid,
  Skeleton,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";
import NextLink from "next/link";

import Highlight from "@components/highlight";
import NextWidth from "@components/image-lazyload/nextWidth";
import Link from "next/link";

const BoardSection = ({ boarddata }: { boarddata?: any }) => {
  const items = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1676363747/peter_scott_burn_manufacturing_a26f6c3f15.jpg?updated_at=2023-02-14T11:35:47.473Z",
      alt: "https://res.cloudinary.com/dhhkxded1/image/upload/v1676363747/peter_scott_burn_manufacturing_a26f6c3f15.jpg?updated_at=2023-02-14T11:35:47.473Z",
      username: "Peter Scott",
      position: "CEO & Board Director",
      about:
        "Peter Scott, a globally recognized leader in the clean cookstove industry, is the CEO & Founder of BURN Manufacturing Co and the Founder of BURN Design Lab.",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1676363746/boston_nyer_chief_innovation_officer_burn_manufacturing_5b7bd43886.jpg?updated_at=2023-02-14T11:35:48.790Z",
      alt: "https://res.cloudinary.com/dhhkxded1/image/upload/v1676363746/boston_nyer_chief_innovation_officer_burn_manufacturing_5b7bd43886.jpg?updated_at=2023-02-14T11:35:48.790Z",
      username: "Boston Nyer",
      position: "Board Director",
      about:
        "Peter Scott, a globally recognized leader in the clean cookstove industry, is the CEO & Founder of BURN Manufacturing Co and the Founder of BURN Design Lab.",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1676363747/jane_ullman_burn_manufacturing_f11af8c9f5.jpg?updated_at=2023-02-14T11:35:47.482Z",
      alt: "https://res.cloudinary.com/dhhkxded1/image/upload/v1676363747/jane_ullman_burn_manufacturing_f11af8c9f5.jpg?updated_at=2023-02-14T11:35:47.482Z",
      username: "Jane Ullman",
      position: "Board member",
      about:
        "Peter Scott, a globally recognized leader in the clean cookstove industry, is the CEO & Founder of BURN Manufacturing Co and the Founder of BURN Design Lab.",
    },
  ];

  return (
    <Box
      py={{ base: "15px", md: "25px" }}
      bg={useColorModeValue("gray.50", "transparent")}
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
            w={{ base: "100%", md: "70%" }}
            align={["start", "center", "center"]}
          >
            <VStack align={"center"} spacing={6} w="full">
              <Text
                textAlign="center"
                textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
                mt={0}
                color={useColorModeValue("gray.600", "whiteAlpha.900")}
              >
                Our <Highlight strokeColor={"brand.300"}>Board</Highlight> of
                Directors
              </Text>

              <Box h="25px" />

              {boarddata ? (
                boarddata?.teams?.data?.length ? (
                  <SimpleGrid
                    mb={[5, 10, 10]}
                    spacing={[5, 10, 10]}
                    columns={[1, 1, 2, 4]}
                    mt="15px"
                    justifyContent={"center"}
                    alignContent={"center"}
                    display={"flex"}
                    flexWrap={"wrap"}
                  >
                    {boarddata?.teams?.data?.map((item: any) => (
                      <Link
                        key={item?.id}
                        href={{
                          pathname: "/about/about",
                          query: {
                            description: item?.attributes?.team_description,
                            team_name: item?.attributes?.team_name,
                            team_position: item?.attributes?.team_position,
                            url: item?.attributes?.team_image?.data?.attributes
                              ?.url,
                            id: 1,
                          },
                        }}
                        arial-label={"Link directing to about user"}
                        as={{
                          pathname: `/about/about`,
                          query: {
                            name: item?.attributes?.team_name,
                          },
                        }}
                        passHref
                        style={{ textDecoration: "none" }}
                      >
                        <LinkBox
                          role="group"
                          key={item.title}
                          as="article"
                          borderRadius={"md"}
                          pb="25px"
                          h={"full"}
                        >
                          <VStack align="center" spacing={2} h={"full"}>
                            <Flex
                              overflow="hidden"
                              pos="relative"
                              width="175px"
                              height="175px"
                              flex="1"
                              rounded={"full"}
                            >
                              <NextWidth
                                width={175}
                                height={175}
                                src={
                                  item?.attributes?.team_image?.data?.attributes
                                    ?.url
                                }
                                alt={
                                  item?.attributes?.team_image?.data?.attributes
                                    ?.alternativeText
                                }
                              />
                            </Flex>
                            <Text
                              textStyle={"text_md_bold"}
                              // mt={2}
                              w={"full"}
                              textAlign={"center"}
                              color={useColorModeValue(
                                "gray.700",
                                "whiteAlpha.800",
                              )}
                            >
                              {item?.attributes?.team_name}
                            </Text>
                            <Text
                              textStyle={"text_sm_medium"}
                              color={useColorModeValue(
                                "gray.500",
                                "whiteAlpha.800",
                              )}
                            >
                              {item?.attributes?.team_position}
                            </Text>
                          </VStack>
                        </LinkBox>
                      </Link>
                    ))}
                  </SimpleGrid>
                ) : null
              ) : (
                <SimpleGrid
                  mb={[5, 10, 10]}
                  spacing={[5, 10, 10]}
                  columns={[1, 1, 2, 4]}
                  mt="15px"
                  justifyContent={"center"}
                  alignContent={"center"}
                  display={"flex"}
                  flexWrap={"wrap"}
                >
                  {items?.map((item, idx) => (
                    <Box pos="relative" p={6} key={idx} rounded="full">
                      <Skeleton
                        h="175px"
                        w={"175px"}
                        mt={"10px"}
                        rounded={"full"}
                        fadeDuration={4}
                        startColor={"gray.50"}
                        endColor={"gray.200"}
                      />

                      <Skeleton
                        h="10px"
                        mt={"10px"}
                        rounded={"full"}
                        fadeDuration={4}
                        startColor={"gray.50"}
                        endColor={"gray.200"}
                      />

                      <Skeleton
                        h="10px"
                        mt={"10px"}
                        rounded={"full"}
                        fadeDuration={4}
                        startColor={"gray.50"}
                        endColor={"gray.200"}
                      />
                    </Box>
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

export default BoardSection;
