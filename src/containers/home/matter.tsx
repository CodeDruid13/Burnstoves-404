import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

const spacingL3 = [5, 10, 10];

const MatterSection = () => {
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
            w={{ base: "100%", md: "50%" }}
          >
            <VStack align={["center"]} mb={spacingL3}>
              <Text
                textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
                color={useColorModeValue("gray.600", "whiteAlpha.900")}
              >
                Why Biomass Stoves Matter - Now More Than Ever
              </Text>
              <Text
                textStyle={{ base: "text_md_regular", md: "text_lg_regular" }}
              >
                Biomass currently provides ~85% of all household cooking energy
                in Sub-Saharan Africa.
              </Text>

              <Text
                textStyle={{ base: "text_md_regular", md: "text_lg_regular" }}
              >
                Due to population growth alone, an additional{" "}
                <strong>75,000 people</strong> on the continent rely on biomass
                each day.
              </Text>

              <Text
                textStyle={{ base: "text_md_regular", md: "text_lg_regular" }}
              >
                Although BURN now offers a line of electric, hybrid and liquid
                fuel stoves, we believe it is imperative to provide super
                fuel-efficient solutions to households that only have access to
                biomass fuels. Watch the video to learn more about our approach.
              </Text>
            </VStack>
          </Flex>

          <Flex
            pos="relative"
            zIndex={1}
            direction={"column"}
            mb={[5, 5, 0]}
            mr={[0, 0, 10]}
            // maxW={["full", 500, 500]}
            w={{ base: "100%", md: "50%" }}
          >
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.youtube.com/embed/nZCqqzLKDqQ&autoplay=1"
                srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/nZCqqzLKDqQ?autoplay=1><img src=https://img.youtube.com/vi/nZCqqzLKDqQ/hqdefault.jpg alt='Why Biomass Stoves Matter - Now More Than Ever'><span>▶</span></a>"
                // frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Why Biomass Stoves Matter - Now More Than Ever"
                loading="lazy"
              ></iframe>
            </AspectRatio>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default MatterSection;
