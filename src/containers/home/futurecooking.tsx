import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

import dynamic from "next/dynamic";
import Carousel from "nuka-carousel";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

const Highlight = dynamic(() => import("@components/highlight"));

const NextImage = dynamic(() => import("@components/image-lazyload/nextImage"));
const spacingL3 = [5, 10, 20];

const FutureCookingSection: React.FC = () => {
  let items = [
    {
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677432211/Presentation_burn_manufacturing_jikokoa_factory_pictures_in_ruiru_kenya_d027ce1062.jpg?updated_at=2023-02-26T17:23:41.170Z",
      description: "Testing New Products at our Factory",
    },
    {
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677432256/Presentation_npdteam_9e173ffc45.jpg?updated_at=2023-02-26T17:24:39.516Z",
      description: "BURN's New Product Development Team",
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
          align={["start", "start"]}
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
                  <Text
                    position={"absolute"}
                    color={"white"}
                    bottom={0}
                    mb={"50px"}
                    textAlign="center"
                    textStyle={"text_xl_regular"}
                    w="100%"
                  >
                    {item?.description}
                  </Text>
                  <Flex>
                    <NextImage src={item.image} alt={item.image} />
                  </Flex>
                </Flex>
              ))}
            </Carousel>
          </Flex>

          <Flex
            pos="relative"
            zIndex={1}
            direction={"column"}
            mb={[5, 5, 0]}
            mr={[0, 0, 10]}
            // maxW={["full", 500, 500]}
            w={{ base: "100%", md: "50%" }}
          >
            <VStack align={["center"]} mb={spacingL3}>
              <Text
                textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
                color={useColorModeValue("gray.600", "whiteAlpha.800")}
              >
                Designing the
                <Highlight strokeColor={"brand.300"}> Future</Highlight>
                of Clean Cooking
              </Text>
              <Text
                textStyle={{ base: "text_md_regular", md: "text_lg_regular" }}
                whiteSpace={"pre-line"}
              >
                BURN's 25-person New Product Development team - all of whom are
                based in Kenya - are committed to creating the next generation
                of biomass cookstoves as well as a new range of electric, hybrid
                and gas stoves for Sub-Saharan Africa and beyond.
              </Text>

              <Text
                textStyle={{ base: "text_md_regular", md: "text_lg_regular" }}
                whiteSpace={"pre-line"}
              >
                Over the next three years, BURN will enter 6 new countries and
                launch 5 new products. These stoves are poised to impact 23
                million people by 2023.
              </Text>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default FutureCookingSection;
