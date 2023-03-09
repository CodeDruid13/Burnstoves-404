import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Skeleton,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

import NextImage from "@components/image-lazyload/nextImage";

const PartnersSection = ({ partnersdata }: { partnersdata?: any }) => {
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
      py={{ base: "15px", md: "25px" }}
      bg={useColorModeValue("white", "transparent")}
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
              <Text
                textAlign="center"
                textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
                mt={0}
                color={useColorModeValue("gray.600", "whiteAlpha.900")}
              >
                Our Partners
              </Text>

              {/* <SimpleGrid
                mb={[5, 10, 10]}
                spacing={[5, 10, 10]}
                columns={4}
                mt="15px"
                justifyContent={"center"}
                alignContent={"center"}
                display={"flex"}
                flexWrap={"wrap"}
              >
                {items.map((item) => (
                  <Flex
                    textAlign={"center"}
                    alignContent={"center"}
                    justifyContent={"center"}
                    direction={"column"}
                    _hover={{
                      cursor: "pointer",
                    }}
                    key={item?.id}
                  >
                    <Box
                      overflow="hidden"
                      pos="relative"
                      width="175px"
                      height="175px"
                      flex="1"
                    >
                      <NextImage src={item.image} alt={item.image} /> 
                    </Box>
                  </Flex>
                ))}
              </SimpleGrid> */}

              {partnersdata ? (
                partnersdata?.partners?.data?.length ? (
                  // <SimpleGrid
                  //   width="full"
                  //   mt={"25px"}
                  //   columns={[1, 1, 2, 6]}
                  //   spacing={[5, 10, 10]}
                  //   alignItems={"center"}
                  //   justifyContent={"center"}
                  //   alignContent={"center"}
                  //   alignSelf={"center"}
                  //   justifyItems={"center"}
                  //   justifySelf={"center"}
                  //   variants={{
                  //     visible: {
                  //       opacity: 1,
                  //       y: 0,
                  //       transition: {
                  //         ease: "easeOut",
                  //         duration: 0.85,
                  //         staggerChildren: 0.125,
                  //       },
                  //     },
                  //     hidden: { opacity: 0, y: 10 },
                  //   }}
                  //   childVariants={{
                  //     hidden: { opacity: 0, y: 30 },
                  //     visible: {
                  //       opacity: 1,
                  //       y: 0,
                  //       transition: {
                  //         ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
                  //         duration: 0.45,
                  //       },
                  //     },
                  //   }}
                  // >
                  //   {partnersdata?.partners?.data?.map((item: any) => (
                  //     <Flex
                  //       key={item?.id}
                  //       direction="row"
                  //       w="100%"
                  //       h={"100px"}
                  //       color={useColorModeValue("white", "transparent")}
                  //       px="14px"
                  //       borderRadius={"md"}
                  //       bg={"white"}
                  //     >
                  //       <Flex direction="column">
                  //         <Box
                  //           overflow="hidden"
                  //           pos="relative"
                  //           width="full"
                  //           height="175px"
                  //         >
                  //           <NextImage
                  //             src={
                  //               item?.attributes?.partner_image?.data
                  //                 ?.attributes?.url
                  //             }
                  //             alt={
                  //               item?.attributes?.partner_image?.data
                  //                 ?.attributes?.alternativeText
                  //             }
                  //           />
                  //         </Box>
                  //       </Flex>
                  //     </Flex>
                  //   ))}
                  // </SimpleGrid>

                  <Flex className="containerGrid">
                    {partnersdata?.partners?.data?.map((item: any) => (
                      <Flex
                        key={item?.id}
                        direction="row"
                        w={{ base: "100px", md: "full" }}
                        h={"100px"}
                        color={useColorModeValue("white", "transparent")}
                        // px="14px"
                        borderRadius={"md"}
                        bg={"white"}
                        flex={{
                          base: "0 0 calc(33.33% - 20px)",
                          md: "0 0 calc(16.66% - 20px)",
                        }}
                        margin={"10px"}
                      >
                        <Flex direction="column">
                          <Box
                            overflow="hidden"
                            pos="relative"
                            width="full"
                            height="175px"
                          >
                            <NextImage
                              src={
                                item?.attributes?.partner_image?.data
                                  ?.attributes?.url
                              }
                              alt={
                                item?.attributes?.partner_image?.data
                                  ?.attributes?.alternativeText
                              }
                            />
                          </Box>
                        </Flex>
                      </Flex>
                    ))}
                  </Flex>
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
                  {items?.slice(0, 3)?.map((item, idx) => (
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
                          width="175px"
                          height="175px"
                          flex="1"
                        >
                          <Skeleton
                            h="175px"
                            w={{ base: "full", md: "full" }}
                            mt={"10px"}
                            rounded={"md"}
                            fadeDuration={4}
                            startColor={"gray.50"}
                            endColor={"gray.200"}
                          />
                        </Box>
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

export default PartnersSection;
