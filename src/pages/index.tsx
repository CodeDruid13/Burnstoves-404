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
import ShareButtons from "@components/share-button";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const shareButtonItems = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/burn-co/?originalSubdomain=ke",
    color: "linkedin",
    title: "LinkedIn",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/BURN.Manufacturing/",
    color: "facebook",
    title: "Facebook",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/BurnMfg?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    color: "twitter",
    title: "Twitter",
  },
];

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
                  Technical Hitch
                </Heading>
                <Text fontSize={["md", "md", "lg"]} color={bodyColor}>
                  We are currently experiencing, <br />a technical hitch.{" "}
                  <Link
                    as={NextLink}
                    href={"#"}
                    passHref
                    style={{ textDecoration: "none" }}
                  >
                    <Link
                      fontWeight="600"
                      color={useColorModeValue("brand.500", `${color}.300`)}
                    >
                      Our Support team
                    </Link>
                  </Link>{" "}
                  is fully live and ready to serve.
                </Text>
              </Box>

              <ShareButtons
                display={["none", "none", "flex"]}
                text={null}
                color={"blackAlpha.700"}
                bg={"whiteAlpha.800"}
                items={shareButtonItems}
                mr={4}
              />
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
