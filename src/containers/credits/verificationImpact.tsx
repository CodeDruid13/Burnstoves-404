import { useState } from "react";

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
import ImageLazyloadWithoutAspectRatio from "@components/image-lazyload/without-aspect-ratio";

const VerificationImpact: React.FC = () => {
  const features = [
    {
      id: 1,
      image:
        "https://burnstoves.com/content/resources/giving-green-w300pxh100px.png",
      alt: "https://burnstoves.com/content/resources/giving-green-w300pxh100px.png",
      title: "Design",
      subtitle:
        "Giving Green exclusively recommends BURN clean cooking carbon projects.",
    },
    {
      id: 2,
      image: "https://burnstoves.com/content/resources/yunus-w300pxh100px.jpg",
      alt: "https://burnstoves.com/content/resources/yunus-w300pxh100px.jpg",
      title: "Manufacturing",
      subtitle:
        "Independent studies by UC Berkeley & the University of Chicago and YSB validated the efficiency and savings of BURN’s products.",
    },
    {
      id: 3,
      image: "https://burnstoves.com/content/resources/gold-w300pxh100px.jpg",
      alt: "https://burnstoves.com/content/resources/gold-w300pxh100px.jpg",
      title: "Distribution",
      subtitle: "Our carbon projects are validated by Gold Standard.",
    },
  ];

  const [mainStory, setMainStory] = useState(
    "hello mr musk. have you ever seen the movie looks completely diffrent from its add?. this is so weird.",
  );

  const getContent = () => {
    return mainStory.replaceAll(". ", ".\n");
  };

  return (
    <Box
      py={{ base: "15px", md: "25px" }}
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
              <VStack align={["center"]} spacing={8}>
                <Text
                  // fontSize={[38, 48, 48]}
                  textAlign="center"
                  textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
                  mt={0}
                  color={useColorModeValue("gray.600", "whiteAlpha.900")}
                >
                  Independently{" "}
                  <Highlight strokeColor={"brand.300"}>Verified</Highlight>{" "}
                  Impact
                </Text>
              </VStack>

              <SimpleGrid
                width="full"
                columns={[2, 2, 2, 3]}
                spacingY={[14]}
                spacingX={[5, 5, 5, 5]}
                mt={8}
              >
                {features.map((feature, idx) => (
                  <VStack
                    align={"start"}
                    pos="relative"
                    key={idx}
                    // borderBottomWidth="1px"
                    rounded="xl"
                    boxShadow={"xs"}
                    border={"1px"}
                    borderColor={"#f9f9f9"}
                    bg={"white"}
                    _hover={{
                      borderColor: "#fef8f4",
                      borderWidth: "2px",
                      boxShadow: `12px 12px 0px #fef8f4`,
                      transition: "all 250ms ease-in-out",
                      transform: ["none", "none", "translateY(-20px)"],
                    }}
                    h={"full"}
                  >
                    <HStack key={idx} align={"center"} p={4} w={"full"}>
                      <ImageLazyloadWithoutAspectRatio
                        w="full"
                        h="full"
                        objectFit="cover"
                        src={feature?.image}
                        alt={feature?.alt}
                      />
                    </HStack>

                    <Text p={6}>{feature.subtitle}</Text>
                  </VStack>
                ))}
              </SimpleGrid>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default VerificationImpact;
