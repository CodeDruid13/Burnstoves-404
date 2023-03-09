import {
  Container,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

import ButtonTransparent from "@components/button/button-transparent";
import ImageLazyload from "@components/image-lazyload";

const HeroBannerSection: React.FC = () => {
  const image =
    "https://burnstoves.com/content/resources/burn-manufacturing-saving-lives-and-forests-across-africa-through-innovative-clean-cooking-solutions.jpg";
  return (
    <Flex
      align="center"
      // justify="center"
      // h={{ base: "50vh", md: "75vh" }}
      h={"full"}
      width="full"
      pos="relative"
      bg={"black"}
      _after={{
        content: "''",
        pos: "absolute",
        zIndex: 0,
        flex: 1,
        top: 0,
        left: 0,
        w: "full",
        h: "full",
        bg: useColorModeValue("whiteAlpha.100", "blackAlpha.800"),
        bgGradient: "linear(to top, rgba(0,0,0,.3) 0%,rgba(0,0,0,.3) 100%)",
      }}
    >
      {image && (
        <ImageLazyload
          ratio={[1.33, 1.75, 2, 2.333]}
          flex="1"
          width="full"
          height={"full"}
          objectFit="cover"
          src={image}
          alt={"BURN Manufacturing stoves"}
        />
      )}
      <Container
        zIndex={1}
        mt={16}
        pos={["absolute"]}
        maxW="container.md"
        pl={{ base: "10px", md: "50px" }}
      >
        <VStack spacing={[2, 4, 8]}>
          <VStack align={["start"]} spacing={4}>
            <Text
              textStyle={{ base: "display_xs_bold", md: "display_md_bold" }}
              color={useColorModeValue("whiteAlpha.900", "whiteAlpha.800")}
            >
              Impacting lives and the environment through efficient cooking
              appliances
            </Text>

            <HStack direction={["column", "column", "row"]} mb={2}>
              <ButtonTransparent
                bgColor={"brand.500"}
                paddingX={4}
                borderRadius={"md"}
                height={"50px"}
                _hover={{
                  backgroundColor: "brand.700",
                }}
                color={"white"}
              >
                <Text color={"white"}>Explore Products</Text>
              </ButtonTransparent>

              <ButtonTransparent
                bgColor={"gray.500"}
                paddingX={4}
                borderRadius={"md"}
                borderColor={"white"}
                border={"1px solid"}
                height={"50px"}
                _hover={{
                  backgroundColor: "gray.700",
                }}
                color={"white"}
              >
                <Text color={"white"}>Purchase Products</Text>
              </ButtonTransparent>
            </HStack>
          </VStack>
        </VStack>
      </Container>

      {/* <Container maxW="container.xl" h="full">
        <Flex
          align={["center", "center", "center"]}
          direction={["column-reverse", "column-reverse", "row"]}
          h="full"
        >
          <Flex w={{ base: "100%", md: "50%" }} justify="center">
            <VStack align={["start"]} spacing={4}>
              <Text
                textStyle={{ base: "display_xs_bold", md: "display_md_bold" }}
                color={useColorModeValue("whiteAlpha.900", "whiteAlpha.800")}
              >
                Impacting lives and the environment through efficient cooking
                appliances
              </Text>

              <HStack direction={["column", "column", "row"]} mb={2}>
                <ButtonTransparent
                  bgColor={"brand.500"}
                  paddingX={4}
                  borderRadius={"md"}
                  height={"50px"}
                  _hover={{
                    backgroundColor: "brand.700",
                  }}
                  color={"white"}
                >
                  <Text color={"white"}>Explore Products</Text>
                </ButtonTransparent>

                <ButtonTransparent
                  bgColor={"gray.500"}
                  paddingX={4}
                  borderRadius={"md"}
                  borderColor={"white"}
                  border={"1px solid"}
                  height={"50px"}
                  _hover={{
                    backgroundColor: "gray.700",
                  }}
                  color={"white"}
                >
                  <Text color={"white"}>Purchase Products</Text>
                </ButtonTransparent>
              </HStack>
            </VStack>
          </Flex>
        </Flex>
      </Container> */}
    </Flex>
  );
};

export default HeroBannerSection;
