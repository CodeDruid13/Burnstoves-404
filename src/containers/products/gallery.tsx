import Highlight from "@components/highlight";
import ImageLazyloadWithoutAspectRatio from "@components/image-lazyload/without-aspect-ratio";
import {
  Box,
  Container,
  Flex,
  LinkBox,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";
import { memo } from "react";

const spacingL3 = [5, 5, 5];

const GallerySection: React.FC<{
  title?: string;
  color?: string;
  items: {
    title: string;
    href: string;
    image: string;
    alt: string;
  }[];
}> = memo(({ title, items = [], color }) => {
  return (
    <Box
      py={[5, 5, 20]}
      width="full"
      pos="relative"
      bg={color}
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
            <Text
              textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
              color={useColorModeValue("gray.600", "whiteAlpha.900")}
              mb={14}
            >
              <Highlight strokeColor={"brand.500"}>{title}</Highlight>
            </Text>
            <VStack align={["start"]} mb={spacingL3}>
              <SimpleGrid
                spacing={10}
                columns={[2, 5]}
                alignContent={"center"}
                justifyContent={"center"}
                w={"container.xl"}
              >
                {items.map((item: any, idx: any) => (
                  <Box key={idx} w="full">
                    <LinkBox
                      as="article"
                      rounded="sm"
                      transition="all 250ms ease"
                      height="full"
                      w="full"
                      overflow="hidden"
                    >
                      <Box
                        height="full"
                        width="full"
                        rounded="sm"
                        pos="relative"
                      >
                        <ImageLazyloadWithoutAspectRatio
                          h="full"
                          w="full"
                          objectFit="cover"
                          rounded={"sm"}
                          src={item?.image}
                          alt={item?.alt}
                          zIndex="0"
                        />
                        <Flex
                          height="full"
                          width="full"
                          pos="absolute"
                          top={0}
                          left={0}
                          direction="column"
                          rounded={"sm"}
                          color={color}
                          bg={"blackAlpha.200"}
                          p={8}
                          zIndex={2}
                        ></Flex>
                      </Box>
                    </LinkBox>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
});

export default GallerySection;
