import { memo } from "react";

import NextLink from "next/link";
import Image from "next/image";

import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  // Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

import NextImage from "@components/image-lazyload/nextImage";

const spacingL1 = [10, 50, 100];
const spacingL2 = [10, 20, 40];
const spacingL3 = [5, 10, 20];
const spacingL4 = [2, 4, 6, 10];

const ImpactSection: React.FC<{
  image: string;
  alt?: string;
  title: string;
  subtitle: string;
  items: {
    image: string;
    title: string;
    subtitle: string;
  }[];
}> = memo(({ alt, title, subtitle, image, items = [] }) => {
  return (
    <Box
      py={[5, 5, 10]}
      width="full"
      pos="relative"
      bg={useColorModeValue("gray.50", "transparent")}
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
              {subtitle && (
                <Text
                  style={{ whiteSpace: "pre-line" }}
                  w={{ base: "100%", md: "75%" }}
                  color={useColorModeValue("gray.600", "gray.200")}
                  textStyle={{ base: "text_xl_regular", md: "text_xl_regular" }}
                  textAlign={"center"}
                  // fontSize={{ base: "16px", md: "18px" }}
                >
                  {subtitle.split(".").join("\n")}
                </Text>
              )}

              <SimpleGrid
                mb={[5, 10, 10]}
                spacing={[5, 10, 10]}
                columns={{ base: 1, md: 4 }}
                w="100%"
              >
                {items?.map((report: any) => (
                  <Flex
                    direction="row"
                    w="100%"
                    mt="25px"
                    bg={useColorModeValue("white", "gray.800")}
                    py="14px"
                    px="14px"
                    borderRadius={"md"}
                  >
                    <Flex direction="column" align={"center"} w="full">
                      {report.image && (
                        <Flex
                          h="75px"
                          w="75px"
                          direction={"column"}
                          align={"center"}
                        >
                          <NextImage
                            src={report.image}
                            // objectFit="contain"
                            alt="Burn Manufacturing"
                          />
                        </Flex>
                      )}
                      <Text
                        textStyle={"display_sm_bold"}
                        align={"center"}
                        color={useColorModeValue(
                          "blueGray.700",
                          "whiteAlpha.800",
                        )}
                      >
                        {report?.title}
                      </Text>
                      <Text
                        textStyle={"text_lg_bold"}
                        mt={4}
                        color={useColorModeValue("brand.500", "whiteAlpha.800")}
                      >
                        {report?.subtitle}
                      </Text>
                    </Flex>
                  </Flex>
                ))}
              </SimpleGrid>
            </VStack>

            <Link href={"#"} passHref as={NextLink}>
              <Button
                rounded={"md"}
                textStyle="button"
                _hover={{ bg: "brand.700" }}
                backgroundColor={"brand.500"}
                color={"white"}
                w={{ base: "100%", md: "175px" }}
                py={4}
                minH={"50px"}
                fontSize={"sm"}
              >
                See our Impact
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
});

export default ImpactSection;
