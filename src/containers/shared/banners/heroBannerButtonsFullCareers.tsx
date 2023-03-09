import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

import Image from "next/image";
import NextLink from "next/link";
import ButtonTransparent from "@components/button/button-transparent";

const heroBannerButtonsFullCareers = ({
  bannerdata,
  page,
}: {
  bannerdata?: any;
  page?: any;
}) => {
  return (
    <Box
      position={"relative"}
      height={{ base: "50vh", md: "90vh" }}
      width={"100%"}
      clipPath={"inset(0 0 0 0)"}
    >
      <Box
        position="absolute"
        height="100%"
        width="100%"
        left="0"
        // top={{ base: "40px", md: "80px" }}
        _after={{
          content: "''",
          pos: "absolute",
          zIndex: 0,
          flex: 1,
          top: 0,
          left: 0,
          w: "full",
          h: "full",
          bg: useColorModeValue("whiteAlpha.300", "blackAlpha.800"),
          bgGradient: "linear(to top, rgba(0,0,0,.3) 0%,rgba(0,0,0,.2) 100%)",
        }}
      >
        <Image
          src={
            bannerdata?.pageBanners?.data?.[0]?.attributes?.page_banner[0]
              ?.page_image?.data?.attributes?.url
          }
          fill
          objectFit="cover"
          objectPosition="50% 50%"
          sizes="100vw"
          className="saturate_effect"
          alt={
            bannerdata?.pageBanners?.data?.[0]?.attributes?.page_banner[0]
              ?.page_title
          }
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,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"
        />
      </Box>

      <HStack
        spacing={[0, 0, 10, 10]}
        display={["none", "none", "flex"]}
        justify={"space-between"}
        px={"150px"}
        py={"50px"}
        pt={"9%"}
        position={"relative"}
      >
        <VStack w={"full"} spacing={0}>
          <HStack
            spacing={[0, 0, 10, 10]}
            display={["none", "none", "flex"]}
            justify={"space-between"}
            w={"full"}
          >
            <Link
              href={"/careers"}
              passHref
              as={NextLink}
              p={2}
              fontSize={"16px"}
              fontWeight={"bold"}
              fontFamily={"Ubuntu"}
              color={"white"}
              style={{ textDecoration: "none" }}
            >
              Careers
            </Link>

            <HStack
              spacing={[0, 0, 10, 10]}
              display={["none", "none", "flex"]}
              justify={"space-between"}
            >
              <VStack align={"center"} justify={"center"}>
                <Link
                  href={"/careers/jobs"}
                  passHref
                  as={NextLink}
                  p={2}
                  fontSize={"16px"}
                  fontWeight={page === "jobs" ? "bold" : "normal"}
                  fontFamily={"Ubuntu"}
                  color={"white"}
                  _hover={{
                    textDecoration: "none",
                    color: "brand.500",
                  }}
                >
                  Jobs
                </Link>
                <Box h={"4px"} bg={page === "jobs" && "brand.500"} w="full" />
              </VStack>

              <VStack align={"center"} justify={"center"}>
                <Link
                  href={"/careers/life-at-burn"}
                  passHref
                  as={NextLink}
                  p={2}
                  fontSize={"16px"}
                  fontWeight={page === "life" ? "bold" : "normal"}
                  fontFamily={"Ubuntu"}
                  color={"white"}
                  _hover={{
                    textDecoration: "none",
                    color: "brand.500",
                  }}
                >
                  Life at BURN
                </Link>
                <Box h={"4px"} bg={page === "life" && "brand.500"} w="full" />
              </VStack>

              <VStack align={"center"} justify={"center"}>
                <Link
                  href={"/careers/life-in-kenya"}
                  passHref
                  as={NextLink}
                  p={2}
                  fontSize={"16px"}
                  fontWeight={page === "kenya" ? "bold" : "normal"}
                  fontFamily={"Ubuntu"}
                  color={"white"}
                  _hover={{
                    textDecoration: "none",
                    color: "brand.500",
                  }}
                >
                  Life in Kenya
                </Link>
                <Box h={"4px"} bg={page === "kenya" && "brand.500"} w="full" />
              </VStack>
            </HStack>
          </HStack>

          <Box h={"0.5px"} bg={"white"} w="full" />
        </VStack>
      </HStack>

      <Flex
        align={["center", "center", "start"]}
        direction={"column"}
        h="full"
        justify={{ base: "center", md: "start" }}
        position={"relative"}
        px={{ base: "20px", md: "125px" }}
        pt={{ base: "75px", md: "150px" }}
      >
        <Flex
          w={{ base: "100%", md: "100%" }}
          // justify="space-between"
          align={"end"}
        >
          <Stack align={["start"]} direction={"column"} spacing={4}>
            <Stack maxW="container.md" spacing={4}>
              <Text
                textStyle={{
                  base: "text_md_bold",
                  md: "display_sm_bold",
                }}
                color={useColorModeValue("whiteAlpha.900", "whiteAlpha.800")}
                w={"65%"}
              >
                {
                  bannerdata?.pageBanners?.data?.[0]?.attributes?.page_banner[0]
                    ?.page_title
                }
              </Text>

              <Text
                textStyle={{
                  base: "text_md_medium",
                  md: "text_md_medium",
                }}
                opacity={0.95}
                color={"white"}
                w={{ base: "full", md: "50%" }}
              >
                {
                  bannerdata?.pageBanners?.data?.[0]?.attributes?.page_banner[0]
                    ?.page_subtitle
                }
              </Text>
            </Stack>
            <Stack maxW="container.md" spacing={4}>
              <Stack
                direction={["column", "column", "row"]}
                mb={2}
                w={"65%"}
                display={{ base: "none", md: "flex" }}
              >
                <Link
                  as={NextLink}
                  href={"/careers/jobs"}
                  passHref
                  style={{ textDecoration: "none" }}
                >
                  <ButtonTransparent
                    bgColor={"brand.500"}
                    paddingX={4}
                    borderRadius={"md"}
                    height={"50px"}
                    _hover={{
                      backgroundColor: "brand.700",
                    }}
                    color={"white"}
                  >
                    <Text color={"white"}>Find Open Jobs</Text>
                  </ButtonTransparent>
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
  // });
};

export default heroBannerButtonsFullCareers;
