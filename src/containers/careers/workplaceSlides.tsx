import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";
import dynamic from "next/dynamic";

import Carousel from "nuka-carousel";
const NextImage = dynamic(() => import("@components/image-lazyload/nextImage"));

const WorkPlaceSlides = () => {
  let items = [
    {
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677578242/workspace1_burn_manufacturing_b7c14ba389.jpg?updated_at=2023-02-28T09:57:23.116Z",
    },
    {
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677578303/workspace2_burn_manufacturing_f35be620c2.jpg?updated_at=2023-02-28T09:58:24.404Z",
    },
    {
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677578320/workspace3_burn_manufacturing_65761da881.jpg?updated_at=2023-02-28T09:58:40.945Z",
    },
  ];

  return (
    <Box
      py={{ base: "15px", md: "35px" }}
      bg={useColorModeValue("white", "transparent")}
      width="full"
      pos="relative"
    >
      <Container maxW="container.xl">
        <Flex
          align={["center", "center", "center"]}
          direction={["column", "column", "row"]}
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
                <Text
                  textAlign="center"
                  textStyle={{ base: "display_xs_bold", md: "display_md_bold" }}
                  mt={0}
                  color={useColorModeValue("gray.600", "whiteAlpha.900")}
                  w={"75%"}
                >
                  Explore Our Workspace That Inspires Innovation
                </Text>
              </VStack>

              <Stack
                pos="relative"
                direction={{ base: "column", md: "row" }}
                rounded="xl"
              >
                <Carousel
                  wrapAround={true}
                  animation={"fade"}
                  // vertical={true}
                  className={"slider"}
                  renderCenterLeftControls={({
                    previousDisabled,
                    previousSlide,
                  }) => null}
                  renderCenterRightControls={({
                    previousDisabled,
                    nextSlide,
                  }) => null}
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
                >
                  {items?.map((item, idx) => (
                    <Flex align={"center"} justify={"center"} key={idx}>
                      <Flex align={"center"} justify={"center"} bg={"red"}>
                        <NextImage src={item.image} alt={item.image} />
                      </Flex>
                    </Flex>
                  ))}
                </Carousel>
              </Stack>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default WorkPlaceSlides;
