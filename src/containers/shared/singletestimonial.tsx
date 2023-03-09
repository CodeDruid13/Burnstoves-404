import {
  Box,
  Container,
  Flex,
  HStack,
  Skeleton,
  Text,
  useColorModeValue,
  VStack,
  SimpleGrid,
} from "@definitions/exports";

import dynamic from "next/dynamic";

const ButtonTransparent = dynamic(
  () => import("@components/button/button-transparent"),
);

const NextImage = dynamic(() => import("@components/image-lazyload/nextImage"));

const SingleTestimonial = ({ testimonialdata }: { testimonialdata?: any }) => {
  const board = [
    {
      id: 1,
      image: "https://burnstoves.com/content/resources/expasset-94x.png",
      alt: "https://burnstoves.com/content/resources/expasset-94x.png",
      title: "Over 1,400,000",
      subtitle: "sold since 2014 ",
    },
    {
      id: 2,
      image: "https://burnstoves.com/content/resources/expasset-54x.png",
      alt: "https://burnstoves.com/content/resources/expasset-54x.png",
      title: "98%",
      subtitle: "customer satisfaction",
    },
    {
      id: 3,
      image: "https://burnstoves.com/content/resources/expasset-74x.png",
      alt: "https://burnstoves.com/content/resources/expasset-74x.png",
      title: "ISO/IWA Tier 4 ",
      subtitle: "for PM2.5 and thermal efficiency",
    },
    {
      id: 4,
      image: "https://burnstoves.com/content/resources/expasset-44x.png",
      alt: "https://burnstoves.com/content/resources/expasset-44x.png",
      title: "$180",
      subtitle: "savings per year",
    },
    {
      id: 5,
      image: "https://burnstoves.com/content/resources/expasset-34x.png",
      alt: "https://burnstoves.com/content/resources/expasset-34x.png",
      title: "296%",
      subtitle: "household Return on Investment",
    },
    {
      id: 6,
      image: "https://burnstoves.com/content/resources/expasset-64x.png",
      alt: "https://burnstoves.com/content/resources/expasset-64x.png",
      title: "1 year",
      subtitle: "warranty",
    },
    {
      id: 7,
      image: "https://burnstoves.com/content/resources/expasset-104x-1.png",
      alt: "https://burnstoves.com/content/resources/expasset-104x-1.png",
      title: "Super-Efficient",
      subtitle: "54% Thermal Efficiency",
    },
  ];

  return (
    <Box
      py={{ base: "15px", md: "50px" }}
      bg={useColorModeValue("white", "transparent")}
      width="full"
      pos="relative"
    >
      <Container maxW="container.xl">
        <Flex
          align={["center", "center", "center"]}
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
            align={"center"}
          >
            <VStack align={"center"} spacing={6} w="full">
              {testimonialdata ? (
                testimonialdata?.product?.data?.attributes?.product_reports
                  ?.length ? (
                  <SimpleGrid
                    width="full"
                    columns={[2, 2, 2, 6]}
                    spacingY={[14]}
                    spacingX={[5, 5, 5, 5]}
                    justifyContent={"center"}
                    alignContent={"center"}
                  >
                    {testimonialdata?.product?.data?.attributes?.product_reports?.map(
                      (item: any) => (
                        <Box
                          pos="relative"
                          p={6}
                          key={item?.id}
                          rounded="xl"
                          boxShadow={"xs"}
                          border={"1px"}
                          borderColor={"#f9f9f9"}
                          _hover={{
                            borderColor: "#fef8f4",
                            borderWidth: "2px",
                            boxShadow: `12px 12px 0px #fef8f4`,
                            transition: "all 250ms ease-in-out",
                            transform: ["none", "none", "translateY(-20px)"],
                          }}
                          h="full"
                        >
                          <Box
                            overflow="hidden"
                            pos="relative"
                            width="70px"
                            height="70px"
                            flex="1"
                            mx={"auto"}
                          >
                            <NextImage
                              src={item?.report_icon?.data?.attributes?.url}
                              alt={
                                item?.report_icon?.data?.attributes
                                  ?.alternativeText
                              }
                            />
                          </Box>

                          <HStack justify={"center"}>
                            <Text
                              textStyle={"text_md_bold"}
                              textAlign={"center"}
                              color={"brand.500"}
                            >
                              {item?.report_title}
                            </Text>
                          </HStack>

                          <Text
                            textStyle={"text_md_medium"}
                            textAlign={"center"}
                          >
                            {item?.report_subtitle}
                          </Text>
                        </Box>
                      ),
                    )}
                  </SimpleGrid>
                ) : null
              ) : (
                <SimpleGrid
                  width="full"
                  columns={[2, 2, 2, 6]}
                  spacingY={[14]}
                  spacingX={[5, 5, 5, 5]}
                  justifyContent={"center"}
                  alignContent={"center"}
                >
                  {board.map((item, idx) => (
                    <Box
                      pos="relative"
                      p={6}
                      key={idx}
                      rounded="xl"
                      boxShadow={"xs"}
                      border={"1px"}
                      borderColor={"#f9f9f9"}
                      _hover={{
                        borderColor: "#fef8f4",
                        borderWidth: "2px",
                        boxShadow: `12px 12px 0px #fef8f4`,
                        transition: "all 250ms ease-in-out",
                        transform: ["none", "none", "translateY(-20px)"],
                      }}
                      h="full"
                      w={"full"}
                    >
                      <Skeleton
                        h="70px"
                        w={{ base: "60px", md: "130px" }}
                        mt={"10px"}
                        rounded={"md"}
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

export default SingleTestimonial;
