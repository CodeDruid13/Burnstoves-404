import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  SimpleGrid,
} from "@definitions/exports";

import dynamic from "next/dynamic";

const WorkplacePotential = () => {
  const items = [
    {
      id: 1,
      title: "Grow your career",
    },
    {
      id: 2,
      title: "Work in a multi-cultural setting",
    },
    {
      id: 3,
      title: "Enrich your skills",
    },
    {
      id: 4,
      title: "Freedom to innovate",
    },
    {
      id: 5,
      title: "Make an impact",
    },
    {
      id: 6,
      title: "Gender parity",
    },
  ];

  return (
    <Box
      py={{ base: "15px", md: "35px" }}
      bg={useColorModeValue("gray.50", "transparent")}
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
                >
                  Perfect Workplace to Realize Your Potential
                </Text>

                <Text
                  textStyle={"text_xl_regular"}
                  textAlign="center"
                  color={useColorModeValue("gray.600", "whiteAlpha.900")}
                  w={{ base: "100%", md: "75%" }}
                >
                  Whether you are starting your career or looking to move to the
                  next level, BURN is a perfect place to realize your potential.
                </Text>
              </VStack>

              <SimpleGrid
                width="full"
                columns={{ base: 1, md: 3 }}
                spacingY={[14]}
                spacingX={[5, 5, 5, 5]}
                justifyContent={"center"}
                alignContent={"center"}
              >
                {items?.map((item: any) => (
                  <Stack
                    direction={"row"}
                    key={item?.id}
                    h={"full"}
                    bg={"white"}
                    rounded={"md"}
                    align={"center"}
                    justify={{ base: "center", md: "start" }}
                    _hover={{
                      boxShadow: "xl",
                      transition: "all 250ms ease-in-out",
                    }}
                    pl={{ base: 0, md: 4 }}
                    pt={{ base: 4, md: 0 }}
                  >
                    <Flex
                      justify={"center"}
                      align={"center"}
                      direction={{ base: "column", md: "row" }}
                    >
                      <Flex
                        position={"relative"}
                        h="60px"
                        w="60px"
                        bg={"brand.50"}
                        rounded={"full"}
                        align={"center"}
                        justify={"center"}
                      >
                        <CheckIcon color={"brand.500"} fontSize={"25px"} />
                      </Flex>

                      <Stack spacing={6} p={8}>
                        <Text textStyle={"text_lg_regular"} color={"gray.600"}>
                          {item?.title}
                        </Text>
                      </Stack>
                    </Flex>
                  </Stack>
                ))}
              </SimpleGrid>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default WorkplacePotential;
