import {
  Box,
  Container,
  Flex,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
  SimpleGrid,
  HStack,
  Circle,
} from "@definitions/exports";

import dynamic from "next/dynamic";
import Image from "next/image";
import Carousel from "nuka-carousel";

const Testimonials = ({ testimonialsdata }: { testimonialsdata?: any }) => {
  const items = [
    {
      product: "Ecoa Wood",
      comment:
        "Since I bought an Ecoa Wood for my grandmother, she no longer coughs due to smoke. Initially, she used a three stone fireplace, and everyone would notice the smoke in her house. Now, my grandy’s home is a no-smoke zone!.",
      username: "Lucy Muthoni Mbui",
      location: "Ecoa Wood User, Kiambu, Kenya.",
      image: "",
    },
  ];

  //   defaultControlsConfig={{
  //   nextButtonText: 'Custom Next',
  //   prevButtonText: 'Custom Prev',
  //   pagingDotsStyle: {
  //     fill: 'red'
  //   }
  // }}

  return (
    <Box
      bg={useColorModeValue("gray.50", "transparent")}
      px={{ base: "0px", md: "50px" }}
      py="50px"
    >
      <Box width="full">
        <Carousel
          wrapAround={true}
          renderCenterLeftControls={({ previousDisabled, previousSlide }) =>
            null
          }
          renderCenterRightControls={({ previousDisabled, nextSlide }) => null}
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
            <HStack position={"absolute"} marginTop={4}>
              {testimonialsdata?.testimonials?.data?.map(
                (item: any, idx: any) =>
                  currentSlide === idx ? (
                    <Circle
                      bg={"brand.500"}
                      size={"6px"}
                      onClick={nextSlide}
                      cursor="pointer"
                    />
                  ) : (
                    <Circle
                      bg={"brand.200"}
                      size={"6px"}
                      onClick={previousSlide}
                      cursor="pointer"
                    />
                  ),
              )}
            </HStack>
          )}
          autoplay
          slidesToShow={1}
          defaultControlsConfig={{
            pagingDotsStyle: {
              fill: "#F58426",
            },
            pagingDotsClassName: "my-paging-dots-class",
          }}
        >
          {testimonialsdata ? (
            testimonialsdata?.testimonials?.data?.length ? (
              testimonialsdata?.testimonials?.data?.map((item: any) => (
                <Stack
                  direction={{ base: "column", md: "row" }}
                  bg={useColorModeValue("transparent", "transparent")}
                  align={"center"}
                  justify={"center"}
                >
                  <Container maxW={"container.xl"} mt={12}>
                    <Stack
                      direction={{ base: "column", md: "row" }}
                      align={"start"}
                      justify={"center"}
                    >
                      <Stack
                        pos="relative"
                        direction={{ base: "column", md: "row" }}
                        rounded="xl"
                        // bg={"white"}
                        w={{ base: "calc(90vw)", md: "calc(40vw)" }}
                        h={{ base: "calc(30vh)", md: "calc(50vh)" }}
                      >
                        <Image
                          placeholder="blur"
                          blurDataURL={
                            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACCAIIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAgEABAP/xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A9mVHB2GjSqVQUWoqsrKKsVIojIqVAaNOhVBo0qIIysDtSklQCjTo1Qai1BWWIsUVUiojNVQBo06FAKhUaojKwO5KSVFChXpQoDRKooixlgKqRQZlQQaNOjQCiVSiiysDvGklQCjToUAqFRUZYiwQoqRQZlQEoU6NAKJ0QRmYHeNIayDQp0KA0SoqMsRYqFFSLAVmZAaNKjQGiVEGZmUdqVUrnWaNClRq1aNFai0rLBWFChQYsKhIzFKlGlRpSjRKiUrMjFK7UrJXOs1KFKhVpUorUKtZYKxaHFgxUqEyMUqUaVGlKNEqNKlZkYpXYlVKwyNGlQqqNRagrLEWKpRRhCKjMiJRpUaA0SoqMzMg7ErMiDQrMKNRmVUKMwLCZgZmYRKNZhBoswIzMD//2Q=="
                          }
                          objectFit={"contain"}
                          src={
                            item?.attributes?.testimonial_user_image?.data
                              ?.attributes?.url
                          }
                          alt={
                            item?.attributes?.testimonial_user_image?.data
                              ?.attributes?.alternativeText
                          }
                          fill
                        />
                      </Stack>

                      <Flex
                        align={"start"}
                        justify={"start"}
                        w={{ base: "100%", md: "50%" }}
                        pl={{ base: 0, md: "50px" }}
                        h={"full"}
                      >
                        <Stack spacing={6} w={"full"} flex={1}>
                          <Text
                            textStyle={"display_xs_bold"}
                            color={"brand.500"}
                          >
                            <Text>
                              {item?.attributes?.testimonial_product_title}
                            </Text>
                          </Text>
                          <Text
                            textStyle={{
                              base: "text_lg_regular",
                              md: "text_xl_regular",
                            }}
                            color={useColorModeValue(
                              "gray.600",
                              "whiteAlpha.800",
                            )}
                          >
                            {item?.attributes?.testimonial_description}
                          </Text>
                          <Stack w={"full"} maxW={"lg"} flex={1}>
                            <Text
                              textStyle={"text_lg_bold"}
                              color={useColorModeValue(
                                "blueGray.800",
                                "whiteAlpha.800",
                              )}
                            >
                              {item?.attributes?.testimonial_user_name}
                            </Text>
                            <Text
                              textStyle={"text_sm_regular"}
                              color={useColorModeValue(
                                "grey",
                                "whiteAlpha.800",
                              )}
                            >
                              {item?.attributes?.testimonial_user_location}
                            </Text>
                          </Stack>
                        </Stack>
                      </Flex>
                    </Stack>
                  </Container>
                </Stack>
              ))
            ) : null
          ) : (
            <SimpleGrid
              width="full"
              columns={1}
              spacingY={[14]}
              spacingX={[5, 5, 5, 5]}
              justifyContent={"center"}
              alignContent={"center"}
            >
              {items?.map((item, idx) => (
                <Stack
                  direction={{ base: "column", md: "row" }}
                  w="full"
                  h="250px"
                >
                  <Skeleton
                    h="full"
                    w="full"
                    mt={"10px"}
                    rounded={"md"}
                    fadeDuration={4}
                    startColor={"gray.50"}
                    endColor={"gray.200"}
                  />
                  <Stack
                    direction={"column"}
                    pos="relative"
                    p={6}
                    // borderBottomWidth="1px"
                    rounded="xl"
                    h="full"
                    w={"full"}
                  >
                    <Skeleton
                      h="10px"
                      mt={"10px"}
                      w="full"
                      rounded={"full"}
                      fadeDuration={4}
                      startColor={"gray.50"}
                      endColor={"gray.200"}
                    />

                    <Skeleton
                      h="10px"
                      mt={"10px"}
                      w="full"
                      rounded={"full"}
                      fadeDuration={4}
                      startColor={"gray.50"}
                      endColor={"gray.200"}
                    />

                    <Skeleton
                      h="10px"
                      mt={"10px"}
                      w="full"
                      rounded={"full"}
                      fadeDuration={4}
                      startColor={"gray.50"}
                      endColor={"gray.200"}
                    />

                    <Skeleton
                      h="10px"
                      mt={"10px"}
                      w="150px"
                      rounded={"full"}
                      fadeDuration={4}
                      startColor={"gray.50"}
                      endColor={"gray.200"}
                    />

                    <Skeleton
                      h="10px"
                      mt={"10px"}
                      w="75px"
                      rounded={"full"}
                      fadeDuration={4}
                      startColor={"gray.50"}
                      endColor={"gray.200"}
                    />
                  </Stack>
                </Stack>
              ))}
            </SimpleGrid>
          )}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Testimonials;
