import NextLink from "next/link";

import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

import NextImage from "@components/image-lazyload/nextImage";
import NextWidth from "@components/image-lazyload/nextWidth";

const spacingL3 = [5, 10, 20];

let items = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dhhkxded1/image/upload/v1676887689/jikokoa_xtra_by_burn_manufacturing_7bdad95dd1.png",
    productname: "Burn Jikokoa stove",
    reportlink: "http://susannaberkouwer.com/files/theme/BerkouwerJMP.pdf",
    reportsdata: [
      {
        id: 1,
        reporticon:
          "https://res.cloudinary.com/dhhkxded1/image/upload/v1676361231/savings_burn_manufacturing_2e835c5bbd.svg",
        title: "$119",
        subtitle: "Household savings per year",
      },
      {
        id: 2,
        reporticon:
          "https://res.cloudinary.com/dhhkxded1/image/upload/v1676553971/satisfaction_burn_manufacturing_34dc609f7d.svg",
        title: "98%",
        subtitle: "Customer satisfaction",
      },
      {
        id: 3,
        reporticon:
          "https://res.cloudinary.com/dhhkxded1/image/upload/v1676361231/stoves_burn_manufacturing_0c7adaae23.svg",
        title: "39%",
        subtitle: "Fuel savings in Kenya",
      },
      {
        id: 4,
        reporticon:
          "https://res.cloudinary.com/dhhkxded1/image/upload/v1676554218/reinvest_burn_manufacturing_3a8a8e9ba2.svg",
        title: "296%",
        subtitle: "IRR per year",
      },
      {
        id: 5,
        reporticon:
          "https://res.cloudinary.com/dhhkxded1/image/upload/v1676971043/growth_burn_manufacturing_2c85d0de39.svg",
        title: "$1000",
        subtitle:
          "Total return to society over 3 years with $40 jikokoa investment",
      },
      {
        id: 6,
        reporticon:
          "https://res.cloudinary.com/dhhkxded1/image/upload/v1676554452/health_burn_manufacturing_6528680518.svg",
        title: "Health Benefits",
        subtitle: "0.56 standard deviation improvement in self-reported health",
      },
    ],
  },

  {
    id: 2,
    image:
      "https://res.cloudinary.com/dhhkxded1/image/upload/v1676887719/kuniokoa_wood_stove_by_burn_manufacturing_6cbf331ee8.png",
    productname: "Ecoa Wood Stove",
    reportlink:
      "https://burnstoves.com/content/resources/ysb-impact-survey-summary.pdf",
    reportsdata: [
      {
        id: 1,
        reporticon:
          "https://res.cloudinary.com/dhhkxded1/image/upload/v1676361231/savings_burn_manufacturing_2e835c5bbd.svg",
        title: "$178.6",
        subtitle: "Household savings per year",
      },
      {
        id: 2,
        reporticon:
          "https://res.cloudinary.com/dhhkxded1/image/upload/v1676361231/savings_burn_manufacturing_2e835c5bbd.svg",
        title: "11%",
        subtitle: "Savings generated on annual revenue",
      },
      {
        id: 3,
        reporticon:
          "https://res.cloudinary.com/dhhkxded1/image/upload/v1676553971/satisfaction_burn_manufacturing_34dc609f7d.svg",
        title: "99%",
        subtitle: "Customer satisfaction",
      },
      {
        id: 4,
        reporticon:
          "https://res.cloudinary.com/dhhkxded1/image/upload/v1676554452/health_burn_manufacturing_6528680518.svg",
        title: "90%",
        subtitle: "Improved health",
      },
      {
        id: 5,
        reporticon:
          "https://res.cloudinary.com/dhhkxded1/image/upload/v1676572892/safety_burn_manufacturing_7b9f3f22b1.svg",
        title: "99%",
        subtitle: "Improved safety",
      },
      {
        id: 6,
        reporticon:
          "https://res.cloudinary.com/dhhkxded1/image/upload/v1676361231/stoves_burn_manufacturing_0c7adaae23.svg",
        title: "91%",
        subtitle: "Improved durability",
      },
    ],
  },
];

const AppliancesReport = ({ appliancesdata }: { appliancesdata?: any }) => {
  return (
    <Box width="full" mt={14}>
      <Container maxW="container.xl">
        <VStack align={["center"]} mb={spacingL3}>
          <Text
            textAlign="center"
            textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
            mt={0}
            color={useColorModeValue("gray.600", "whiteAlpha.900")}
          >
            BURN's Cooking Appliances Change lives
            {/* <Highlight strokeColor={"brand.300"}>Change</Highlight> Change */}
          </Text>

          <Text
            textStyle={"text_xl_regular"}
            textAlign="center"
            color={useColorModeValue("gray.600", "whiteAlpha.900")}
            w={{ base: "100%", md: "75%" }}
          >
            Independent studies conducted by UC Berkeley, the University of
            Chicago and Yunus Social Business validate the benefits of BURN’s
            Jikokoa and Kunikoa cookstoves.
          </Text>
        </VStack>

        {appliancesdata ? (
          appliancesdata?.appliancesreports?.data?.length ? (
            <SimpleGrid
              width="full"
              columns={[1, 1, 2, 2]}
              spacing={[5, 10, 10]}
            >
              {appliancesdata?.appliancesreports?.data?.map((item: any) => (
                <Link
                  key={item?.id}
                  href={"#"}
                  passHref
                  as={NextLink}
                  style={{ textDecoration: "none" }}
                >
                  <LinkBox
                    role="group"
                    borderRadius={"md"}
                    pb="25px"
                    h={"full"}
                  >
                    <VStack align="center" spacing={5}>
                      <Box
                        overflow="hidden"
                        pos="relative"
                        width="250px"
                        height="250px"
                        flex="1"
                      >
                        <NextImage
                          src={
                            item?.attributes?.appliance_image?.data?.attributes
                              ?.url
                          }
                          alt={
                            item?.attributes?.appliance_image?.data?.attributes
                              ?.alternativeText
                          }
                        />
                      </Box>

                      <LinkOverlay
                        href="#"
                        w="100%"
                        h="full"
                        minH={{ base: "fit-content", md: "500px" }}
                      >
                        <VStack align="center" spacing={4} h="full">
                          <Text
                            textStyle={"text_sm_regular"}
                            color={"gray.600"}
                          >
                            {item?.item?.appliance_title}
                          </Text>
                          <SimpleGrid
                            mb={[5, 10, 10]}
                            spacing={[5, 5, 5]}
                            columns={{ base: 1, md: 2 }}
                          >
                            {item?.attributes?.reports?.data?.map(
                              (report: any, idx: any) => (
                                <Flex
                                  direction="row"
                                  key={report?.id}
                                  minH={"120px"}
                                  h={"full"}
                                >
                                  <Box width="50px" height="50px">
                                    <NextWidth
                                      height={50}
                                      width={50}
                                      src={
                                        report?.attributes?.report_icon?.data
                                          ?.attributes?.url
                                      }
                                      alt={
                                        report?.attributes?.report_icon?.data
                                          ?.attributes?.alternativeText
                                      }
                                    />
                                  </Box>
                                  <Flex direction="column" ml={"15px"} flex={1}>
                                    <Text
                                      textStyle={"text_lg_bold"}
                                      color={"gray.600"}
                                    >
                                      {report?.attributes?.report_title}
                                    </Text>

                                    <Text
                                      textStyle={"text_md_medium"}
                                      color={"gray.600"}
                                      mt={"10px"}
                                    >
                                      {report?.attributes?.report_subtitle}
                                    </Text>
                                  </Flex>
                                </Flex>
                              ),
                            )}
                          </SimpleGrid>

                          <Stack
                            direction={["column", "row"]}
                            spacing={6}
                            justifyContent="center"
                            my={6}
                            w={"full"}
                            h={"full"}
                          >
                            <Link
                              href={
                                "https://burnstoves.com/content/resources/burnproductcatalogue2022.pdf"
                              }
                              target={"_blank"}
                              passHref
                              as={NextLink}
                              style={{ textDecoration: "none" }}
                            >
                              <Button
                                rounded={"md"}
                                textStyle="button"
                                _hover={{ bg: "brand.700" }}
                                backgroundColor={"brand.500"}
                                color={"white"}
                                w={{ base: "100%", md: "175px" }}
                                py={4}
                                minH={"50px"}
                                fontSize={"md"}
                                fontWeight={"bold"}
                              >
                                Read full report
                              </Button>
                            </Link>

                            <Link
                              href={item?.attributes?.appliance_link}
                              target={"_blank"}
                              passHref
                              as={NextLink}
                              style={{ textDecoration: "none" }}
                            >
                              <Button
                                rounded={"md"}
                                textStyle="button"
                                _hover={{ bg: "brand.700" }}
                                backgroundColor={"brand.500"}
                                color={"white"}
                                w={{ base: "100%", md: "175px" }}
                                py={4}
                                minH={"50px"}
                                fontSize={"md"}
                                fontWeight={"bold"}
                              >
                                Read overview
                              </Button>
                            </Link>
                          </Stack>
                        </VStack>
                      </LinkOverlay>
                    </VStack>
                  </LinkBox>
                </Link>
              ))}
            </SimpleGrid>
          ) : null
        ) : (
          <SimpleGrid
            width="full"
            columns={[1, 1, 2, 2]}
            spacingY={[14]}
            spacingX={[5, 5, 5, 5]}
            justifyContent={"center"}
            alignContent={"center"}
          >
            {items?.map((item) => (
              <Link key={item?.id} href={"#"} passHref as={NextLink}>
                <LinkBox role="group" borderRadius={"md"} pb="25px" h={"full"}>
                  <VStack align="center" spacing={5}>
                    <Box
                      overflow="hidden"
                      pos="relative"
                      width="250px"
                      height="250px"
                      flex="1"
                    >
                      {/* <NextImage src={item?.image} alt={item?.image} />  */}
                      <Skeleton
                        h={{ base: "60px", md: "200px" }}
                        w={{ base: "60px", md: "200px" }}
                        mt={"10px"}
                        rounded={"md"}
                        fadeDuration={4}
                        startColor={"gray.50"}
                        endColor={"gray.200"}
                      />
                    </Box>

                    <LinkOverlay href="#" w="100%" h="full">
                      <VStack align="center" spacing={4} h="full">
                        <Skeleton
                          h={"10px"}
                          w={"100px"}
                          mt={"10px"}
                          rounded={"md"}
                          fadeDuration={4}
                          startColor={"gray.50"}
                          endColor={"gray.200"}
                        />
                        <SimpleGrid
                          mb={[5, 10, 10]}
                          spacing={[5, 10, 10]}
                          columns={{ base: 1, md: 2 }}
                        >
                          {item?.reportsdata?.map((report: any, idx: any) => (
                            <Flex direction="row" w="100%" mt="25px">
                              {report.reporticon && (
                                <Flex
                                  alignSelf="start"
                                  h="50px"
                                  w="50px"
                                  mr="10px"
                                  key={report?.id}
                                >
                                  <Skeleton
                                    h={"50px"}
                                    w={"50px"}
                                    mt={"10px"}
                                    rounded={"md"}
                                    fadeDuration={4}
                                    startColor={"gray.50"}
                                    endColor={"gray.200"}
                                  />
                                </Flex>
                              )}
                              <Flex direction="column">
                                <Skeleton
                                  h={"10px"}
                                  w={"50px"}
                                  mt={"10px"}
                                  rounded={"md"}
                                  fadeDuration={4}
                                  startColor={"gray.50"}
                                  endColor={"gray.200"}
                                />
                                <Skeleton
                                  h={"10px"}
                                  w={"100px"}
                                  mt={"10px"}
                                  rounded={"md"}
                                  fadeDuration={4}
                                  startColor={"gray.50"}
                                  endColor={"gray.200"}
                                />
                              </Flex>
                            </Flex>
                          ))}
                        </SimpleGrid>

                        <Stack
                          direction={["column", "row"]}
                          spacing={6}
                          justifyContent="center"
                          align={"center"}
                          my={6}
                          w={"full"}
                          h={"full"}
                        >
                          <Box
                            overflow="hidden"
                            pos="relative"
                            width="250px"
                            height="250px"
                            flex="1"
                          >
                            <Skeleton
                              rounded={"md"}
                              textStyle="button"
                              _hover={{ bg: "brand.700" }}
                              backgroundColor={"brand.500"}
                              color={"white"}
                              w={{ base: "100%", md: "175px" }}
                              py={4}
                              minH={"50px"}
                              fontSize={"sm"}
                              fadeDuration={4}
                              startColor={"gray.50"}
                              endColor={"gray.200"}
                            />
                          </Box>

                          <Box
                            overflow="hidden"
                            pos="relative"
                            width="250px"
                            height="250px"
                            flex="1"
                          >
                            <Skeleton
                              rounded={"md"}
                              textStyle="button"
                              _hover={{ bg: "brand.700" }}
                              backgroundColor={"brand.500"}
                              color={"white"}
                              w={{ base: "100%", md: "175px" }}
                              py={4}
                              minH={"50px"}
                              fontSize={"sm"}
                              fadeDuration={4}
                              startColor={"gray.50"}
                              endColor={"gray.200"}
                            />
                          </Box>
                        </Stack>
                      </VStack>
                    </LinkOverlay>
                  </VStack>
                </LinkBox>
              </Link>
            ))}
          </SimpleGrid>
        )}
      </Container>
    </Box>
  );
};

export default AppliancesReport;
