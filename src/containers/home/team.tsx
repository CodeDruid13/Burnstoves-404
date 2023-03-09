import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

import NextLink from "next/link";
import dynamic from "next/dynamic";

const Highlight = dynamic(() => import("@components/highlight"));
const NextImage = dynamic(() => import("@components/image-lazyload/nextImage"));
import Carousel from "nuka-carousel";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

const spacingL3 = [5, 10, 20];

const TeamSection: React.FC = () => {
  let subtitle =
    "BURN employs over 1,000 people, more than 50% of whom are women. BURN cookstoves are designed and produced in Kenya and then distributed across the globe.";

  let items = [
    {
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677432815/Presentation_Presentation_jikokoa_team_1d4e0951d6.jpg?updated_at=2023-02-26T17:33:45.690Z",
      description:
        "Our 18-person quality team drives our 99.95% ‘right first-time’ production.",
    },
    {
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677432870/Presentation_Presentation_jikokoa_team_2_0605f25533.jpg?updated_at=2023-02-26T17:34:39.075Z",
      description: "50% of our staff are women.",
    },
  ];
  return (
    <Box
      py={[5, 5, 10]}
      width="full"
      pos="relative"
      bg={useColorModeValue("transparent", "transparent")}
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
          align={["start", "center", "start"]}
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
            w={{ base: "100%", md: "50%" }}
          >
            <VStack align={["start"]} mb={spacingL3}>
              <Text
                textStyle={{ base: "display_xs_bold", md: "display_md_bold" }}
                color={useColorModeValue("gray.700", "whiteAlpha.800")}
              >
                Our <Highlight strokeColor={"brand.300"}> team</Highlight>
              </Text>
              <Text
                fontSize={{ base: "16px", md: "18px" }}
                whiteSpace={"pre-line"}
              >
                {subtitle.replace(".", ". \n\n")}
              </Text>

              <Link
                href={"/about"}
                passHref
                as={NextLink}
                style={{ textDecoration: "none" }}
              >
                <Text
                  fontSize={{ base: "16px", md: "18px" }}
                  mt={4}
                  color="brand.500"
                >
                  View Team
                </Text>
              </Link>
            </VStack>
          </Flex>

          <Flex
            pos="relative"
            zIndex={1}
            direction={"column"}
            mb={[5, 5, 0]}
            ml={[0, 0, 10]}
            // maxW={["full", 500, 500]}
            w={{ base: "100%", md: "50%" }}
          >
            <Carousel
              wrapAround={true}
              renderCenterLeftControls={({
                previousDisabled,
                previousSlide,
              }) => (
                <Box
                  marginLeft="10px"
                  width={"40px"}
                  height={"40px"}
                  p={0}
                  // pos="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  transition="all 250ms ease-in-out"
                  zIndex="docked"
                  onClick={previousSlide}
                  rounded="full"
                  color={useColorModeValue(`gray.400`, `gray..100`)}
                  _hover={{
                    bg: useColorModeValue(`gray.200`, `gray.400`),
                    color: useColorModeValue(`gray.500`, `gray.200`),
                    transform: "scale(1.2)",
                    transformOrigin: "center",
                  }}
                >
                  <RiArrowDropLeftLine
                    size="75px"
                    width={"32px"}
                    height={"32px"}
                  />
                </Box>
              )}
              renderCenterRightControls={({
                previousDisabled,
                previousSlide,
              }) => (
                <Box
                  marginRight="10px"
                  width={"40px"}
                  height={"40px"}
                  p={0}
                  // pos="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  transition="all 250ms ease-in-out"
                  zIndex="docked"
                  onClick={previousSlide}
                  rounded="full"
                  color={useColorModeValue(`gray.400`, `gray..100`)}
                  _hover={{
                    bg: useColorModeValue(`gray.200`, `gray.400`),
                    color: useColorModeValue(`gray.500`, `gray.200`),
                    transform: "scale(1.2)",
                    transformOrigin: "center",
                  }}
                >
                  <RiArrowDropRightLine
                    size="75px"
                    width={"32px"}
                    height={"32px"}
                  />
                </Box>
              )}
              renderBottomCenterControls={({
                currentSlide,
                slideCount,
                nextSlide,
                previousSlide,
              }: {
                currentSlide: any;
                slideCount: any;
                nextSlide: any;
                previousSlide: any;
              }) => (
                <HStack marginBottom={5}>
                  {items?.map((item: any, idx: any) =>
                    currentSlide === idx ? (
                      <Center
                        bg={"white"}
                        onClick={nextSlide}
                        cursor="pointer"
                        width={"25px"}
                        height={"3px"}
                      />
                    ) : (
                      <Center
                        bg={"gray.200"}
                        onClick={previousSlide}
                        cursor="pointer"
                        width={"25px"}
                        height={"3px"}
                      />
                    ),
                  )}
                </HStack>
              )}
              autoplay
              slidesToShow={1}
              animation={"fade"}
              cellAlign={"center"}
            >
              {items.map((item, idx) => (
                <Flex flex={1} align={"top"} justify={"center"} key={idx}>
                  <Flex>
                    <NextImage src={item.image} alt={item.image} />
                  </Flex>
                  <Text
                    color={useColorModeValue("white", "whiteAlpha.800")}
                    position={"absolute"}
                    bottom={0}
                    mb={"70px"}
                    textAlign="center"
                    textStyle={"text_lg_regular"}
                    w="8%"
                    maxW={"300px"}
                  >
                    {item?.description}
                  </Text>
                </Flex>
              ))}
            </Carousel>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default TeamSection;
