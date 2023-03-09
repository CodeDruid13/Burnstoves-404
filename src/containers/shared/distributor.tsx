import { memo } from "react";

import NextLink from "next/link";

import {
  Box,
  Container,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

import ButtonTransparentBrand from "@components/button/button-transparent-brand";
import NextWidth from "@components/image-lazyload/nextWidth";

const spacingL3 = [5, 10, 20];

const DistributionSection: React.FC<{
  image: string;
  alt?: string;
  title: string;
  subtitle: string;
  bg?: string;
  link?: string;
  href?: string;
}> = memo(({ alt, title, subtitle, image, bg, link, href }) => {
  return (
    <Box
      py="10px"
      width="full"
      pos="relative"
      bg={useColorModeValue(bg, "transparent")}
      alignContent={"center"}
      // my={14}
    >
      <Container maxW="container.xl" alignContent={"center"}>
        <Stack
          align={["center", "center"]}
          alignContent="center"
          justify={"center"}
          alignItems="center"
          justifyContent={"center"}
          direction={["column", "column", "row"]}
          spacing={4}
        >
          <Flex direction={"column"} mr={[0, 100]}>
            <NextWidth width={250} height={250} src={image} alt={alt} />
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
                  fontSize={{ base: "16px", md: "18px" }}
                  color={useColorModeValue("gray.500", "whiteAlpha.900")}
                >
                  {subtitle}
                </Text>
              )}

              <Link
                href={href}
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
                  arial-label={link}
                >
                  <Text color={"white"} textStyle={"text_md_bold"}>
                    {link}
                  </Text>
                </ButtonTransparentBrand>
              </Link>
            </VStack>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
});

export default DistributionSection;
