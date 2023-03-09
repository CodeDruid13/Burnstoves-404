import {
  Box,
  Container,
  Flex,
  Link,
  Text,
  useColorModeValue,
  VStack,
  BoxProps,
  chakra,
} from "@definitions/exports";

import Highlight from "@components/highlight";
import parse, { attributesToProps, domToReact } from "html-react-parser";
import NextLink from "next/link";

type Props = {
  source: string;
} & BoxProps;

const ChakraIframe = chakra("iframe");

const AboutSection = ({ aboutdata }: { aboutdata?: any }) => {
  const options = {
    replace: (domNode: any) => {
      if (domNode.attribs && domNode.name === "h1") {
        return <Text as="h1">{domToReact(domNode.children, options)}</Text>;
      }
    },
  };

  return (
    <Box py={{ base: "15px", md: "25px" }} width="full" pos="relative">
      <Container maxW="container.lg">
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
            align={["start", "center", "end"]}
          >
            <VStack spacing={6}>
              <Text
                w={"full"}
                textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
                mt={0}
                color={useColorModeValue("gray.600", "whiteAlpha.900")}
              >
                Our <Highlight strokeColor={"brand.300"}>Story</Highlight>{" "}
              </Text>

              {parse(
                aboutdata?.about?.data?.attributes?.about_description?.toString(),
                options,
              )}

              <Flex align="center" w="full" direction={"row"}>
                <Text
                  color={useColorModeValue("gray.700", "whiteAlpha.800")}
                  textStyle={{
                    base: "text_md_regular",
                    md: "text_lg_regular",
                  }}
                >
                  Learn more about BURN's impact{" "}
                  <Link
                    href={"/impact/impact"}
                    passHref
                    as={NextLink}
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      as="span"
                      color={useColorModeValue("brand.500", "whiteAlpha.800")}
                      textStyle={{
                        base: "text_md_regular",
                        md: "text_lg_regular",
                      }}
                      h="full"
                    >
                      here.
                    </Text>
                  </Link>
                </Text>
              </Flex>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutSection;
