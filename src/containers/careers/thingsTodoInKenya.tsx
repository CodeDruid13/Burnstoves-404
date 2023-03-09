import {
  Box,
  Container,
  Flex,
  Text,
  useColorModeValue,
  VStack,
  SimpleGrid,
} from "@definitions/exports";

import NextImage from "@components/image-lazyload/nextImage";

const spacingL3 = [5, 10, 10];

const ThingsTodo = () => {
  let items = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677584515/safari_burn_manufacturing_6e527c57b4.jpg?updated_at=2023-02-28T11:41:56.068Z",
      title: "Magical Safaris",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677584515/hike_burn_manufacturing_f42f316d8d.jpg?updated_at=2023-02-28T11:41:55.841Z",
      title: "White Sandy Beaches",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677584514/beach_burn_manufacturing_06a5892247.jpg?updated_at=2023-02-28T11:41:55.519Z",
      title: "Hikeathons",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677584514/local_dishes_burn_manufacturing_ce60e5dd6d.jpg?updated_at=2023-02-28T11:41:54.865Z",
      title: "Local Delicacies",
    },
  ];

  return (
    <Box
      py={[5, 5, 10]}
      width="full"
      pos="relative"
      bg={useColorModeValue("white", "transparent")}
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
          align={["start", "center", "end"]}
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
            w={{ base: "100%", md: "100%" }}
            align={"center"}
          >
            <VStack align={["center"]} mb={spacingL3}>
              <VStack align={["center"]} spacing={8}>
                <Text
                  textAlign="center"
                  textStyle={{ base: "display_xs_bold", md: "display_md_bold" }}
                  mt={0}
                  color={useColorModeValue("gray.600", "whiteAlpha.900")}
                >
                  Things To Do in Kenya
                </Text>
              </VStack>

              <SimpleGrid
                width="full"
                columns={[1, 2, 3, 4]}
                spacingY={[14]}
                spacingX={[5, 5, 5, 5]}
                justifyContent={"center"}
                alignContent={"center"}
              >
                {items?.map((item, idx) => (
                  <Flex
                    direction="row"
                    w="100%"
                    h={"full"}
                    mt="25px"
                    color={useColorModeValue("white", "transparent")}
                    pt="14px"
                    px="14px"
                    borderRadius={"md"}
                    key={item?.id}
                    bg={"white"}
                    border={"1px solid"}
                    borderColor="gray.100"
                    _hover={{
                      boxShadow: "2xl",
                      transition: "all 400ms ease-in-out",
                    }}
                  >
                    <Flex direction="column">
                      <Box
                        overflow="hidden"
                        pos="relative"
                        width="full"
                        height="200px"
                      >
                        <NextImage src={item?.image} alt={item?.image} />
                      </Box>
                      <Text
                        textStyle={"text_xl_bold"}
                        mt="10px"
                        ml="10px"
                        color={useColorModeValue(
                          "blueGray.700",
                          "whiteAlpha.800",
                        )}
                      >
                        {item?.title}
                      </Text>
                    </Flex>
                  </Flex>
                ))}
              </SimpleGrid>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default ThingsTodo;
