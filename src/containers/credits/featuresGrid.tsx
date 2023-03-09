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
import dynamic from "next/dynamic";
const NextImage = dynamic(() => import("@components/image-lazyload/nextImage"));

const FeaturesGridSection: React.FC = () => {
  const features = [
    {
      id: 1,
      image: "https://burnstoves.com/content/resources/design.svg",
      alt: "https://burnstoves.com/content/resources/design.svg",
      title: "Design",
      subtitle:
        "50,000 hours invested in market research, design, durability and performance testing since 2011. 30-member new product development team and a budget of $1 million annually for new product design.",
    },
    {
      id: 2,
      image: "https://burnstoves.com/content/resources/manufacturing.svg",
      alt: "https://burnstoves.com/content/resources/manufacturing.svg",
      title: "Manufacturing",
      subtitle:
        "The first and only company to establish a modern cookstove manufacturing facility in Africa at scale. The 50,000 ft2 solar-powered facility can make a stove every 20 seconds.",
    },
    {
      id: 3,
      image: "https://burnstoves.com/content/resources/distribution.svg",
      alt: "https://burnstoves.com/content/resources/distribution.svg",
      title: "Distribution",
      subtitle:
        "Largest cookstove distribution network in Africa with over 1,500 distribution partners. Diversified channels including wholesale, MFI, Corporate, and B2C.",
    },
    {
      id: 4,
      image: "https://burnstoves.com/content/resources/project-creation.svg",
      alt: "https://burnstoves.com/content/resources/project-creation.svg",
      title: "Project Creation",
      subtitle:
        "4 established POAs covering 21 countries with 8 ongoing projects. Carbon projects are overseen by a team with over 75 years of cumulative carbon experience.",
    },
    {
      id: 5,
      image: "https://burnstoves.com/content/resources/monitoring.svg",
      alt: "https://burnstoves.com/content/resources/monitoring.svg",
      title: "Monitoring",
      subtitle:
        "30 member-market research and monitoring team and 20 member-customer service team. Network of over 60 service stations in countries of operations supported by real-time, cloud-based data capture technology.",
    },
    {
      id: 6,
      image: "https://burnstoves.com/content/resources/credit.svg",
      alt: "https://burnstoves.com/content/resources/credit.svg",
      title: "Credit Issuance/Sale",
      subtitle:
        "Proven track record of credit issuance under Gold Standard and CDM and planned pipeline of 15 million carbon credits available annually.",
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
                  Fully{" "}
                  <Highlight strokeColor={"brand.300"}>Integrated</Highlight>{" "}
                  Solutions
                </Text>

                <Text
                  textStyle={{ base: "text_md_regular", md: "text_xl_regular" }}
                  color={useColorModeValue("gray.700", "whiteAlpha.900")}
                  whiteSpace={"pre-line"}
                  textAlign={"center"}
                  w={"75%"}
                >
                  From product conceptualization to credit issuance, BURN is the
                  only fully integrated modern cookstove carbon developer in the
                  world.
                </Text>
              </VStack>

              <SimpleGrid
                width="full"
                columns={[2, 2, 2, 3]}
                spacingY={[14]}
                spacingX={[5, 5, 5, 5]}
              >
                {features.map((feature, idx) => (
                  <HStack key={idx} align={"top"}>
                    <VStack align={"start"}>
                      <HStack key={idx} align={"center"}>
                        <Box
                          overflow="hidden"
                          pos="relative"
                          width="50px"
                          height="50px"
                          flex="1"
                          mx={"auto"}
                        >
                          <NextImage src={feature?.image} alt={feature?.alt} />
                        </Box>
                        <Text fontWeight={600} fontSize={"xl"}>
                          {feature.title}
                        </Text>
                      </HStack>

                      <Text>{feature.subtitle}</Text>
                    </VStack>
                  </HStack>
                ))}
              </SimpleGrid>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default FeaturesGridSection;
