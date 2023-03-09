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

const WorkPlaceEquality = () => {
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
                  textStyle={"text_xl_regular"}
                  textAlign="center"
                  color={useColorModeValue("gray.600", "whiteAlpha.900")}
                  w={{ base: "100%", md: "75%" }}
                >
                  BURN is an equal opportunity employer that is committed to
                  creating the best workplace in the world.
                </Text>
              </VStack>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default WorkPlaceEquality;
