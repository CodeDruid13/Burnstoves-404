import { memo } from "react";

import NextLink from "next/link";

import {
  Box,
  Container,
  Flex,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

import ButtonTransparentBrand from "@components/button/button-transparent-brand";
import NextImage from "@components/image-lazyload/nextImage";

const spacingL3 = [5, 10, 20];

const PromoImageLeft: React.FC<{
  image?: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  hreflink?: string;
  buttonlink?: string;
  bg?: string;
}> = memo(({ alt, title, subtitle, image, bg, hreflink, buttonlink }) => {
  return (
    <Box
      width="full"
      pos="relative"
      bg={useColorModeValue(bg, "transparent")}
      alignContent={"center"}
    >
      <Container maxW="container.xl" alignContent={"center"}>
        <Flex
          align={["start", "center"]}
          alignContent="center"
          justify={"center"}
          alignItems="center"
          justifyContent={"center"}
          direction={["column-reverse", "column-reverse", "row"]}
          pt="25px"
        >
          <Flex
            direction={"column"}
            w={{ base: "100%", md: "20%" }}
            h="250px"
            mr={[0, 100]}
          >
            <NextImage src={image} alt={alt} />
          </Flex>
          <Flex
            pos="relative"
            direction={"column"}
            w={{ base: "100%", md: "50%" }}
          >
            <VStack align={["start"]} mb={spacingL3}>
              {title && (
                <Text
                  textStyle={{ base: "display_xs_bold", md: "display_md_bold" }}
                  color={useColorModeValue("gray.600", "whiteAlpha.900")}
                >
                  {title}
                </Text>
              )}
              {subtitle && (
                <Text
                  // textStyle={{ base: "text_xl_regular", md: "text_sm_regular" }}
                  fontSize={{ base: "16px", md: "18px" }}
                  color={useColorModeValue("gray.500", "whiteAlpha.900")}
                >
                  {subtitle}
                </Text>
              )}

              <Link
                href={hreflink}
                passHref
                as={NextLink}
                style={{ textDecoration: "none" }}
              >
                <ButtonTransparentBrand
                  bgColor={"brand.500"}
                  color={"white"}
                  paddingX={4}
                  borderRadius={"md"}
                  rounded={"full"}
                  height={"40px"}
                  arial-label={"View Product"}
                >
                  <Text color={"white"} textStyle={"text_md_bold"}>
                    {buttonlink}
                  </Text>
                </ButtonTransparentBrand>
              </Link>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
});

export default PromoImageLeft;
