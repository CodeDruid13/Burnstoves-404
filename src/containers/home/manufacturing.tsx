import NextImageFull from "@components/image-lazyload/nextImageFull";
import PageTitle from "@components/page-title";
import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

const spacingL3 = [5, 10, 20];

const ManufacturingSection: React.FC = () => {
  const image =
    "https://res.cloudinary.com/dhhkxded1/image/upload/v1677432351/Presentation_burn_manufacturing_factory_jikokoa_cc945525e9.jpg?updated_at=2023-02-26T17:26:03.218Z";
  const alt = "World Class Manufacturing, Made in Kenya";
  const title = "World Class Manufacturing, Made in Kenya";
  const title2 = "Made in Kenya";
  const subtitle =
    "In November 2014, BURN launched Sub-Saharan Africa's first and only modern cookstove facility in Kenya.BURN produces a stove every 13 seconds in our 50,000 ft2 facility. In 2019, our factory achieved 99.95 'right-first-time' production.";
  return (
    <PageTitle
      textAlign="start"
      align="start"
      // pt={[24, 100, 250]}
      // pb={[5, 10, 10]}
      title={
        <Container maxW="container.xl">
          <Flex
          // align={["start", "start", "start"]}
          >
            <Flex
              pos="relative"
              direction={"column"}
              // mb={[5, 5, 0]}
              mr={[0, 0, 10]}
              // maxW={["full", 500, 500]}
              w={{ base: "100%", md: "50%" }}
              h={"full"}
            >
              <VStack mb={spacingL3} textAlign={"start"}>
                {title && (
                  <Text
                    textStyle={{
                      base: "display_xs_bold",
                      md: "display_md_bold",
                    }}
                    color={useColorModeValue(
                      "whiteAlpha.900",
                      "whiteAlpha.800",
                    )}
                    whiteSpace={"pre-line"}
                    w={"full"}
                  >
                    {/* {title.replace(",", "\n\n")} */}
                    {"World Class Manufacturing,<br/> Made in Kenya."
                      .split("<br/>")
                      .join("\n")}
                  </Text>
                )}
                {subtitle && (
                  <Text
                    color={useColorModeValue(
                      "whiteAlpha.900",
                      "whiteAlpha.800",
                    )}
                    fontSize={{ base: "16px", md: "18px" }}
                    whiteSpace={"pre-line"}
                  >
                    {subtitle.replace(".", ". \n\n")}
                  </Text>
                )}
              </VStack>
            </Flex>
          </Flex>
        </Container>
      }
      header={
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
            bgGradient: "linear(to top, rgba(0,0,0,.5) 0%,rgba(0,0,0,.1) 100%)",
          }}
        >
          <NextImageFull src={image} alt={title} />
        </Box>
      }
    />
  );
};

export default ManufacturingSection;
