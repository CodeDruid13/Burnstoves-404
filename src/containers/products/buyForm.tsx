import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";
import ImageLazyloadWithoutAspectRatio from "@components/image-lazyload/without-aspect-ratio";
import { memo } from "react";
import SalesFormSection from "./salesForm";

const spacingL3 = [5, 10, 20];

const BuyFormSection: React.FC<{
  title?: string;
  image?: string;
  subtitle?: string;
  btnText?: string;
}> = memo(({ title, image, subtitle, btnText }) => {
  // const image =
  //   "https://burnstoves.com/content/resources/burn-manufacturing-factory-jikokoa.jpg";
  // const alt = "World Class Manufacturing, Made in Kenya";
  // const title = "World Class Manufacturing, Made in Kenya";
  // const subtitle =
  //   "In November 2014, BURN launched Sub-Saharan Africa's first and only modern cookstove facility in Kenya.BURN produces a stove every 13 seconds in our 50,000 ft2 facility.In 2019, our factory achieved 99.95 'right-first-time' production.";
  return (
    <Box
      pos="relative"
      zIndex={1}
      width="full"
      mb={16}
      h={{ base: "fit-content", md: "fit-content" }}
    >
      <Box
        pos="absolute"
        zIndex={0}
        flex={1}
        top={0}
        left={0}
        width="full"
        height="full"
        userSelect="none"
        _after={{
          content: "''",
          pos: "absolute",
          zIndex: 0,
          flex: 1,
          top: 0,
          left: 0,
          w: "full",
          h: "full",
          bg: useColorModeValue("whiteAlpha.300", "blackAlpha.800"),
          bgGradient: "linear(to top, rgba(0,0,0,.3) 0%,rgba(0,0,0,.3) 100%)",
        }}
      >
        <ImageLazyloadWithoutAspectRatio
          w="full"
          h="full"
          objectFit="cover"
          src={image}
        />
      </Box>

      <Container maxW="container.xl" h="full">
        <Flex
          pos="relative"
          zIndex={1}
          width="full"
          h="full"
          align={"center"}
          justifyContent={"center"}
          // align="center"
          maxW={"container.xl"}
          justify="space-between"
          direction={["column", "column", "row"]}
        >
          <Stack w="full" spacing={4}>
            <VStack align={["start"]} spacing={4}>
              <Flex
                pos="relative"
                zIndex={1}
                width="full"
                align="start"
                justify="space-between"
                direction={["column", "column", "row"]}
              >
                <Stack maxW="container.sm" spacing={4} bg={"white"}>
                  {/* <Text
                    textStyle={{
                      base: "text_md_bold",
                      md: "display_md_bold",
                    }}
                    color={useColorModeValue(
                      "whiteAlpha.900",
                      "whiteAlpha.800",
                    )}
                    w={"50%"}
                  >
                    Our Sales agents will get in touch with you
                  </Text>
                  <Text
                    fontWeight={400}
                    fontSize="md"
                    opacity={0.95}
                    color={"white"}
                  >
                    Everyone wants to save money! With Jikokoa, you save money
                    every time you cook! Our Jikos are healthy for your family
                    and good for the environment- feel good AND be smart.
                  </Text> */}
                  <SalesFormSection />
                </Stack>
              </Flex>
            </VStack>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
});

export default BuyFormSection;
