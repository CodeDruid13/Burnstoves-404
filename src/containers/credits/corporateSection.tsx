import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  Skeleton,
  Text,
  useColorModeValue,
  VStack,
  SimpleGrid,
} from "@definitions/exports";

import Highlight from "@components/highlight";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import AnimatedNumber from "react-animated-number";

const ButtonTransparent = dynamic(
  () => import("@components/button/button-transparent"),
);

const NextImage = dynamic(() => import("@components/image-lazyload/nextImage"));

const ImpactNumbers = ({
  impactsdata,
  title,
  subtitle,
}: {
  impactsdata?: any;
  title?: any;
  subtitle?: any;
}) => {
  const board = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1676361231/stoves_burn_manufacturing_0c7adaae23.svg?updated_at=2023-02-14T10:56:07.266Z",
      alt: "https://res.cloudinary.com/dhhkxded1/image/upload/v1676361231/stoves_burn_manufacturing_0c7adaae23.svg?updated_at=2023-02-14T10:56:07.266Z",
      numbers: 2812807,
      suffix: "",
      numberstitle: "stoves sold",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1676361232/co2_burn_manufacturing_beda07417d.svg?updated_at=2023-02-14T10:54:48.520Z",
      alt: "https://res.cloudinary.com/dhhkxded1/image/upload/v1676361232/co2_burn_manufacturing_beda07417d.svg?updated_at=2023-02-14T10:54:48.520Z",
      numbers: 12336267,
      suffix: "",
      numberstitle: "tons of CO₂ reduced",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1676361231/savings_burn_manufacturing_2e835c5bbd.svg?updated_at=2023-02-14T10:55:51.554Z",
      alt: "https://res.cloudinary.com/dhhkxded1/image/upload/v1676361231/savings_burn_manufacturing_2e835c5bbd.svg?updated_at=2023-02-14T10:55:51.554Z",
      numbers: 520616229,
      suffix: "$",
      numberstitle: "household savings",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1676361231/wood_burn_manufacturing_c3daf09a86.svg?updated_at=2023-02-14T10:55:34.153Z",
      alt: "https://res.cloudinary.com/dhhkxded1/image/upload/v1676361231/wood_burn_manufacturing_c3daf09a86.svg?updated_at=2023-02-14T10:55:34.153Z",
      numbers: 6969642,
      suffix: "",
      numberstitle: "tons of wood saved",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1676361232/lives_burn_manufacturing_0ead4b9976.svg?updated_at=2023-02-14T10:55:17.588Z",
      alt: "https://res.cloudinary.com/dhhkxded1/image/upload/v1676361232/lives_burn_manufacturing_0ead4b9976.svg?updated_at=2023-02-14T10:55:17.588Z",
      numbers: 15470439,
      suffix: "",
      numberstitle: "lives impacted",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1676361232/jobs_burn_manufacturing_fc65176b27.svg?updated_at=2023-02-14T10:54:29.579Z",
      alt: "https://res.cloudinary.com/dhhkxded1/image/upload/v1676361232/jobs_burn_manufacturing_fc65176b27.svg?updated_at=2023-02-14T10:54:29.579Z",
      numbers: 1000,
      suffix: "",
      numberstitle: "jobs created since 2013",
    },
  ];

  return (
    <Box
      py={{ base: "15px", md: "35px" }}
      bg={useColorModeValue("white", "transparent")}
      width="full"
      pos="relative"
      borderTop={"1px solid #E2E8F0"}
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
              <VStack align={["center"]} spacing={8}>
                {title ? (
                  <Text
                    textAlign="center"
                    textStyle={{
                      base: "display_xs_bold",
                      md: "display_md_bold",
                    }}
                    mt={0}
                    color={useColorModeValue("gray.600", "whiteAlpha.900")}
                  >
                    {title}
                  </Text>
                ) : (
                  <Text
                    textAlign="center"
                    textStyle={{
                      base: "display_xs_bold",
                      md: "display_md_bold",
                    }}
                    mt={0}
                    color={useColorModeValue("gray.600", "whiteAlpha.900")}
                  >
                    BURN's{" "}
                    <Highlight strokeColor={"brand.300"}>Impact</Highlight>{" "}
                  </Text>
                )}

                {subtitle && (
                  <Text
                    textStyle={{
                      base: "text_md_regular",
                      md: "text_xl_regular",
                    }}
                    w={{ base: "full", md: "60%" }}
                    color={useColorModeValue("gray.700", "whiteAlpha.900")}
                    whiteSpace={"pre-line"}
                    textAlign={"center"}
                  >
                    {subtitle}
                  </Text>
                )}
              </VStack>

              {impactsdata ? (
                impactsdata?.impacts?.data?.length ? (
                  <SimpleGrid
                    width="full"
                    columns={[2, 2, 2, 6]}
                    spacingY={[14]}
                    spacingX={[5, 5, 5, 5]}
                    justifyContent={"center"}
                    alignContent={"center"}
                  >
                    {impactsdata?.impacts?.data?.map((item: any) => (
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
                            src={
                              item?.attributes?.impact_image?.data?.attributes
                                ?.url
                            }
                            alt={
                              item?.attributes?.impact_image?.data?.attributes
                                ?.alternativeText
                            }
                          />
                        </Box>

                        <HStack justify={"center"}>
                          <Text
                            textStyle={"text_md_bold"}
                            textAlign={"center"}
                            color={"#5f6062"}
                          >
                            {item?.attributes?.impact_suffix}
                          </Text>

                          <AnimatedNumber
                            value={item?.attributes?.impact_title}
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              color: "#5f6062",
                            }}
                            duration={3000}
                            formatValue={(n: any) => n.toLocaleString()}
                            frameStyle={(percentage: any) =>
                              percentage > 20 && percentage < 80
                                ? { opacity: 0.5 }
                                : {}
                            }
                          />
                        </HStack>

                        <Text
                          textStyle={"text_md_bold"}
                          textAlign={"center"}
                          color={"brand.500"}
                        >
                          {item?.attributes?.impact_subtitle}
                        </Text>
                      </Box>
                    ))}
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

export default ImpactNumbers;
