import React, { memo, useContext } from "react";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@definitions/exports";

import { ThemeColorContext } from "@definitions/context/theme";

import dynamic from "next/dynamic";

const Layout = dynamic(() => import("@layouts/default"));
const ButtonTransparent = dynamic(
  () => import("@components/button/button-transparent"),
);
const NextImage = dynamic(() => import("@components/image-lazyload/nextImage"));
const Header = dynamic(() => import("@components/whiteheader"));

const Error404Page = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  const mainHeight = useBreakpointValue({
    base: "calc(100vh - 98px)",
    md: "calc(100vh - 64px)",
  });
  const bodyColor = useColorModeValue("gray.600", "gray.400");
  return (
    <>
      <NextSeo title="Error 404" description="Burn Error 404 Example Page" />
      <chakra.main
        sx={{
          "*::selection": {
            color: useColorModeValue(`${color}.600`, `${color}.400`),
            background: useColorModeValue(`${color}.200`, `${color}.700`),
          },
          mark: {
            color: useColorModeValue(`${color}.600`, `${color}.400`),
            background: useColorModeValue(`${color}.100`, `${color}.800`),
          },
        }}
      >
        <Container maxW="container.lg">
          <Stack
            direction={["column", "column", "column", "column"]}
            justifyContent="center"
            alignItems="center"
            minHeight={mainHeight}
            spacing={5}
            mt={"25px"}
          >
            <Flex justify="center" minHeight="250px" h="250px" w="250px">
              <NextImage
                src={
                  "https://res.cloudinary.com/dhhkxded1/image/upload/v1677433326/Presentation_Burn_Impact_3668b98a0a.svg?updated_at=2023-02-26T17:42:19.045Z"
                }
                alt="Burn Manufacturing"
              />
              {/* <Image src={BurnImpact as string} alt="Burn Manufacturing" /> */}
            </Flex>
            <Stack
              justify="center"
              align="center"
              w="full"
              direction={"column"}
              spacing={4}
            >
              <Box maxWidth={["full", "full", "630px"]} textAlign={["center"]}>
                <Heading mb={4} fontFamily="Ubuntu" color={bodyColor}>
                  Error 404
                </Heading>
                <Text fontSize={["md", "md", "lg"]} color={bodyColor}>
                  We are sorry, <br />
                  the requested URL was not found on this server{" "}
                  <Link
                    as={NextLink}
                    href={"/support/contact"}
                    passHref
                    style={{ textDecoration: "none" }}
                  >
                    <Link
                      fontWeight="600"
                      color={useColorModeValue("brand.500", `${color}.300`)}
                    >
                      contact us
                    </Link>
                  </Link>{" "}
                  to report the issue.
                </Text>
              </Box>

              <Link
                as={NextLink}
                href={"/"}
                passHref
                style={{ textDecoration: "none" }}
              >
                <ButtonTransparent
                  bgColor={"brand.500"}
                  paddingX={14}
                  borderRadius={"md"}
                  height={"50px"}
                  w={"full"}
                  _hover={{
                    backgroundColor: "brand.700",
                  }}
                  color={"white"}
                >
                  <Text color={"white"}>Go to Home</Text>
                </ButtonTransparent>
              </Link>
            </Stack>
          </Stack>
        </Container>
      </chakra.main>
    </>
  );
};

/* Custom Page Layout */
Error404Page.PageLayout = memo(
  ({ children }: { children: React.ReactNode }) => {
    return (
      <Layout
        header={
          <>
            <Header />
          </>
        }
      >
        {children}
      </Layout>
    );
  },
);

export default Error404Page;
