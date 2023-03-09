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

const NextImage = dynamic(() => import("@components/image-lazyload/nextImage"));

const WorkplaceCoreValues = () => {
  const items = [
    {
      id: 1,
      title: "Inclusion",
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677582637/inclusion_burn_manufacturing_90b93d54ee.svg?updated_at=2023-02-28T11:10:39.306Z",
    },
    {
      id: 2,
      title: "Innovation",
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677582652/innovation_burn_manufacturing_2f6df7ecd7.svg?updated_at=2023-02-28T11:10:54.524Z",
    },
    {
      id: 3,
      title: "Impact",
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677582665/impact_burn_manufacturing_173931ea5a.svg?updated_at=2023-02-28T11:11:07.002Z",
    },
  ];

  return (
    <Box
      py={{ base: "15px", md: "35px" }}
      bg={useColorModeValue("white", "transparent")}
      width="full"
      pos="relative"
      borderTop={"1px solid #E2E8F0"}
      mt={8}
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
            <VStack align={"center"} spacing={12} w="full">
              <VStack align={["center"]} spacing={8}>
                <Text
                  textAlign="center"
                  textStyle={{ base: "display_xs_bold", md: "display_md_bold" }}
                  mt={0}
                  color={useColorModeValue("gray.600", "whiteAlpha.900")}
                >
                  Our Core Values Help Ground Us as a Company
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
                    w={"25vw"}
                    bg={"white"}
                    rounded={"md"}
                    _hover={{
                      boxShadow: "xl",
                      transition: "all 250ms ease-in-out",
                    }}
                    p={{ base: 4, md: 4 }}
                    justify={"center"}
                    align={"center"}
                  >
                    <Stack
                      justify={"center"}
                      align={"center"}
                      direction={{ base: "column", md: "column" }}
                      spacing={4}
                    >
                      {item?.image && (
                        <Flex
                          h="75px"
                          w="75px"
                          direction={"column"}
                          align={"center"}
                        >
                          <NextImage
                            src={item?.image}
                            alt="Burn Manufacturing"
                          />
                        </Flex>
                      )}

                      <Stack spacing={6}>
                        <Text textStyle={"text_lg_regular"} color={"gray.600"}>
                          {item?.title}
                        </Text>
                      </Stack>
                    </Stack>
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

export default WorkplaceCoreValues;
