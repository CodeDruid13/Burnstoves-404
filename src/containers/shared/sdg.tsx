import Highlight from "@components/highlight";
import NextWidth from "@components/image-lazyload/nextWidth";
import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

const SdgSection = ({ sdgdata }: { sdgdata?: any }) => {
  const items = [
    {
      id: 1,
      body: "The use of Jikokoa contributes to significant savings of time and money (on average $96/year per family) that can be utilized for other needs like education, healthcare, and income-generating activities.",
      colorScheme: "red",
      lightColor: "#fef6f7",
      icon: "https://burnstoves.com/content/resources/sustainable-development-goals-1-burn-manufacturing-jikokoa.png",
    },
    {
      id: 2,
      body: "Time savings can be used for other income-generating activities or for growing foods (like maize, potatoes, beans, etc). ",
      colorScheme: "amber",
      lightColor: "#fdf9f2",
      icon: "https://burnstoves.com/content/resources/sustainable-development-goals-2-burn-manufacturing-jikokoa.png",
    },
    {
      id: 3,
      body: "Jikokoa contributes to the reduction of indoor air pollution (smoke, particulate matter, and carbon monoxide), resulting in a decrease in respiratory diseases, headaches, and itchy eyes.",
      colorScheme: "green",
      lightColor: "#f2faf0",
      icon: "https://burnstoves.com/content/resources/sustainable-development-goals-3-burn-manufacturing-jikokoa.png",
    },
    {
      id: 4,
      body: "Jikokoa cooks faster than traditional stoves and uses less fuel, enabling children, particularly girls, to dedicate more time to education/school, instead of cooking. ",
      colorScheme: "red",
      lightColor: "#fdf3f4",
      icon: "https://burnstoves.com/content/resources/sustainable-development-goals-4-burn-manufacturing-jikokoa.png",
    },
    {
      id: 5,
      body: "Women are mostly responsible for cooking and procuring fuel. Using a more efficient cookstove allows them to spend their time on more productive tasks as well as education. ",
      colorScheme: "red",
      lightColor: "#fff9f9",
      icon: "https://burnstoves.com/content/resources/sustainable-development-goals-5-burn-manufacturing-jikokoa.png",
    },
    {
      id: 6,
      body: "More than 800,000+ households benefit from BURN’s super fuel-efficient biomass appliances in East Africa. ",
      colorScheme: "red",
      lightColor: "#fff7e0",
      icon: "https://burnstoves.com/content/resources/sustainable-development-goals-7-burn-manufacturing-jikokoa.png",
    },
    {
      id: 7,
      body: "BURN’s local manufacturing facility in Ruiru, Kenya employs more than 400 people. In addition, its operations have created 200+ jobs for sales, marketing, distribution, and monitoring staff.",
      colorScheme: "red",
      lightColor: "#fef7f9",
      icon: "https://burnstoves.com/content/resources/sustainable-development-goals-8-burn-manufacturing-jikokoa.png",
    },
    {
      id: 8,
      body: "Jikokoa allows for efficient, clean and smokeless cooking, contributing to improved kitchen and living conditions in cities and communities. ",
      colorScheme: "red",
      lightColor: "#fff4e6",
      icon: "https://burnstoves.com/content/resources/sustainable-development-goals-11-burn-manufacturing-jikokoa.png",
    },
    {
      id: 9,
      body: "One Jikokoa reduces greenhouse gas emissions by up to 4.46 tons of CO2 per annum and therefore helps to combat climate change. ",
      colorScheme: "red",
      lightColor: "#edf6ee",
      icon: "https://burnstoves.com/content/resources/sustainable-development-goals-13-burn-manufacturing-jikokoa.png",
    },
    {
      id: 10,
      body: "One Jikokoa saves about 0.56 kg charcoal/day, translating into 204 kg charcoal savings per year. Charcoal production is a major driver of deforestation. Hence, Jikokoa helps to preserve forests and biodiversity.",
      colorScheme: "red",
      lightColor: "#f2fbef",
      icon: "https://burnstoves.com/content/resources/sustainable-development-goals-15-burn-manufacturing-jikokoa.png",
    },
  ];

  const spacingL3 = [5, 10, 10];

  return (
    <Stack spacing={[10, 10, 10, 10]} bg={"gray.50"}>
      <Box
        height="full"
        minHeight={["unset", "unset", 850]}
        py={10}
        overflow="hidden"
      >
        <Container maxW="container.xl">
          <VStack align={["center"]} mb={spacingL3} spacing={4}>
            <Text
              textAlign="center"
              textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
              mt={0}
              color={useColorModeValue("gray.600", "whiteAlpha.900")}
            >
              Sustainable
              <Highlight strokeColor={"brand.300"}>Development</Highlight> Goals
            </Text>

            <Text
              textStyle={"text_xl_regular"}
              textAlign="center"
              color={useColorModeValue("gray.500", "whiteAlpha.900")}
              w={{ base: "full", md: "75%" }}
            >
              Clean Cooking is a key driver of the UN Sustainable Development
              Goals (SDG) success. The use of open fires and solid fuels for
              cooking is one of the world’s most pressing health and
              environmental problems, directly impacting close to half the
              world’s population and causing nearly 4 million premature deaths
              each year. ​
            </Text>
          </VStack>

          {/* <SimpleGrid
            width="full"
            columns={[1, 2, 2, 4]}
            spacingY={{ base: "25px", md: "100px" }}
            spacingX={[5, 5, 10, 10]}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  ease: "easeOut",
                  duration: 0.85,
                  staggerChildren: 0.125,
                },
              },
              hidden: { opacity: 0, y: 10 },
            }}
            childVariants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
                  duration: 0.45,
                },
              },
            }}
          >
            {items.map((item, idx) => (
              <Box
                pos="relative"
                key={idx}
                bg={useColorModeValue(
                  `${item.lightColor}`,
                  `${item.colorScheme}.900`,
                )}
                p={6}
                rounded="xl"
                h={"full"}
                _hover={{
                  //   borderBottomColor: `${item.colorScheme}`,
                  //   borderWidth: "2px",
                  //   borderRight: "none",
                  //   borderLeft: "none",
                  //   borderTop: "none",
                  boxShadow: `12px 12px 0px #f8fafc`,
                  transition: "all 250ms ease-in-out",
                  transform: ["none", "none", "translateY(-20px)"],
                }}
              >
                <Circle
                  mt={-16}
                  mb={6}
                  bg={useColorModeValue(
                    `${item.colorScheme}.300`,
                    `${item.colorScheme}.600`,
                  )}
                  size={20}
                >
                  <Image
                    src={item?.icon}
                    objectFit="contain"
                    alt="Burn Manufacturing"
                    rounded="sm"
                  />
                </Circle>
                <Text>{item.body}</Text>
              </Box>
            ))}
          </SimpleGrid> */}

          <Flex align={"center"} w={"full"} justify={"center"}>
            {sdgdata ? (
              sdgdata?.sustainableDevelopmentGoals?.data?.length ? (
                <SimpleGrid
                  spacing={5}
                  columns={[1, 1, 2, 2]}
                  alignContent={"center"}
                  justifyContent={"center"}
                  w={"full"}
                >
                  {sdgdata?.sustainableDevelopmentGoals?.data?.map(
                    (item: any) => (
                      <Stack
                        pos="relative"
                        p={6}
                        direction={{ base: "column", md: "row" }}
                        key={item?.id}
                        rounded="xl"
                        boxShadow={"xs"}
                        spacing={4}
                        bg={"white"}
                        w={"full"}
                        _hover={{
                          boxShadow: "xl",
                          transition: "all 250ms ease-in-out",
                          transform: ["none", "none", "translateY(-2px)"],
                        }}
                        h="full"
                      >
                        <NextWidth
                          width={80}
                          height={80}
                          src={
                            item?.attributes?.sdg_image?.data?.attributes?.url
                          }
                          alt={
                            item?.attributes?.sdg_image?.data?.attributes
                              ?.alternativeText
                          }
                        />

                        <Text fontSize={"sm"}>
                          {item?.attributes?.sdg_subtitle}
                        </Text>
                      </Stack>
                    ),
                  )}
                </SimpleGrid>
              ) : null
            ) : (
              <SimpleGrid
                width="full"
                columns={[1, 1, 2, 4]}
                spacingY={[14]}
                spacingX={[5, 5, 5, 5]}
                justifyContent={"center"}
                alignContent={"center"}
              >
                {items?.map((item, idx) => (
                  <Box
                    pos="relative"
                    p={6}
                    key={idx}
                    // borderBottomWidth="1px"
                    rounded="xl"
                    boxShadow={"xs"}
                    border={"1px"}
                    borderColor={"#f9f9f9"}
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
          </Flex>
        </Container>
      </Box>
    </Stack>
  );
};

export default SdgSection;
