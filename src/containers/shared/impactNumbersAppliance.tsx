import {
  Box,
  Container,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  VStack,
  SimpleGrid,
} from "@definitions/exports";

import Highlight from "@components/highlight";
import ImageLazyload from "@components/image-lazyload";

const ImpactNumbersAppliance: React.FC = () => {
  const board = [
    {
      id: 1,
      image: "https://burnstoves.com/content/resources/like.svg",
      alt: "https://burnstoves.com/content/resources/like.svg",
      numberstitle: "98%",
      numberssubtitle: "customer satisfaction",
    },
    {
      id: 2,
      image: "https://burnstoves.com/content/resources/expasset-74x.png",
      alt: "https://burnstoves.com/content/resources/expasset-74x.png",
      numberstitle: "ISO/IWA Tier 4 ",
      numberssubtitle: "for PM and thermal efficiency ",
    },
    {
      id: 3,
      image: "https://burnstoves.com/content/resources/expasset-34x.png",
      alt: "https://burnstoves.com/content/resources/expasset-34x.png",
      numberstitle: "296%",
      numberssubtitle: "household Return on Investment ",
    },
    {
      id: 4,
      image: "https://burnstoves.com/content/resources/expasset-64x.png",
      alt: "https://burnstoves.com/content/resources/expasset-64x.png",
      numberstitle: "2 year",
      numberssubtitle: "warranty  ",
    },
  ];

  return (
    <Box
      py={{ base: "15px", md: "75px" }}
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
              <VStack align={["center"]}>
                <Text
                  // fontSize={[38, 48, 48]}
                  textAlign="center"
                  textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
                  mt={0}
                  color={useColorModeValue("gray.600", "whiteAlpha.900")}
                >
                  Jikokoa{" "}
                  <Highlight strokeColor={"brand.300"}>Classic</Highlight>{" "}
                </Text>

                {/* <Text
                  textStyle={"text_xl_regular"}
                  color={useColorModeValue("gray.700", "whiteAlpha.900")}
                  whiteSpace={"pre-line"}
                  textAlign={"center"}
                >
                  Our appliances have helped 8 Million+ people reduce their fuel
                  expenditures, while also {"\n"} reducing deforestation and
                  greenhouse gas emissions. {"\n\n"} As a social enterprise, we
                  reinvest all of our profits to achieve sustainability, grow
                  our reach and ensure the fulfillment of our mission.
                </Text> */}
              </VStack>

              <SimpleGrid
                width="full"
                columns={[2, 2, 2, 4]}
                spacingY={[14]}
                spacingX={[5, 5, 5, 5]}
              >
                {board.map((item, idx) => (
                  <Box
                    pos="relative"
                    p={6}
                    key={idx}
                    // borderBottomWidth="1px"
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
                      <ImageLazyload
                        flex="1"
                        ratio={1 / 1}
                        width="50px"
                        height="50px"
                        src={item?.image}
                        alt={item?.alt}
                      />
                    </Box>
                    {/* <Text
                      textStyle={"text_lg_bold"}
                      textAlign={"center"}
                      color={"brand.500"}
                    >
                      {item?.numbers}
                    </Text> */}

                    <HStack justify={"center"}>
                      <Text
                        textStyle={"text_md_bold"}
                        textAlign={"center"}
                        color={"brand.500"}
                      >
                        {item.numberstitle}
                      </Text>
                    </HStack>

                    <Text textStyle={"text_md_medium"} textAlign={"center"}>
                      {item.numberssubtitle}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default ImpactNumbersAppliance;
