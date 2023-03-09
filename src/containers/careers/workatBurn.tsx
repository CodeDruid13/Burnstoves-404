import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

import dynamic from "next/dynamic";
import Image from "next/image";

const ButtonTransparent = dynamic(
  () => import("@components/button/button-transparent"),
);

const NextImage = dynamic(() => import("@components/image-lazyload/nextImage"));

const WorkatBurnSection = () => {
  return (
    <Box
      pt={{ base: "15px", md: "35px" }}
      bg={useColorModeValue("white", "transparent")}
      width="full"
      pos="relative"
    >
      <Container maxW="container.xl">
        <Flex
          align={["center", "center", "center"]}
          direction={["column", "column", "column"]}
          justify="center"
        >
          <VStack align={["center"]} spacing={8}>
            <Text
              // fontSize={[38, 48, 48]}
              textAlign="center"
              textStyle={{ base: "display_xs_bold", md: "display_md_bold" }}
              mt={0}
              color={useColorModeValue("gray.600", "whiteAlpha.900")}
            >
              Why Work at BURN?
            </Text>

            <Text
              textStyle={"text_xl_regular"}
              textAlign="center"
              color={useColorModeValue("gray.600", "whiteAlpha.900")}
              w={{ base: "100%", md: "75%" }}
            >
              At BURN, you’ll be part of a team that’s disrupting the energy
              industry by helping thousands of families to access clean cooking.
              We’re passionate about what we do and we’re dedicated to creating
              impact in people’s lives.
            </Text>
          </VStack>
          <Flex
            pos="relative"
            direction={"column"}
            mb={[5, 5, 0]}
            mr={[0, 0, 10]}
            w={{ base: "100%", md: "100%" }}
            align={"center"}
            mt={8}
          >
            <VStack align={"center"} spacing={6} w="full">
              <Stack
                direction={["column", "column", "row"]}
                w={"full"}
                h={{ base: "200px", md: "550px" }}
              >
                <Image
                  src={
                    "https://res.cloudinary.com/dhhkxded1/image/upload/v1677400207/gallery_burn_manufacturing_033ed2e5cf.jpg"
                  }
                  alt={"gallery-burn-manufacturing"}
                  fill
                />
              </Stack>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default WorkatBurnSection;
