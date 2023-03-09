// import { memo } from "react";

// import NextLink from "next/link";
// import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
// import {
//   Box,
//   Center,
//   Container,
//   Flex,
//   HStack,
//   SimpleGrid,
//   Text,
//   useColorModeValue,
//   VStack,
//   Stack,
// } from "@definitions/exports";

// import ButtonTransparent from "@components/button/button-transparent";

// import ImageLazyloadWithoutAspectRatio from "@components/image-lazyload/without-aspect-ratio";
// import ShareButtons from "@components/share-button";
// import PageTitle from "@components/page-title";

// const shareButtonItems = [
//   {
//     icon: FaWhatsapp,
//     href: "https://www.whatsapp.com",
//     color: "whatsapp",
//     title: "WhatsApp",
//   },
//   {
//     icon: FaLinkedin,
//     href: "https://www.linkedin.com",
//     color: "telegram",
//     title: "Telegram",
//   },
//   {
//     icon: FaFacebook,
//     href: "https://www.facebook.com",
//     color: "facebook",
//     title: "Facebook",
//   },
//   {
//     icon: FaTwitter,
//     href: "https://www.twitter.com",
//     color: "twitter",
//     title: "Twitter",
//   },
// ];

// const ProductsBannerSection: React.FC<{
//   title?: string;
//   image?: string;
//   color?: string;
//   font?: string;
//   status?: string;
// }> = memo(({ title, image, color, font, status }) => {
//   return (
//     <Box
//       pos="relative"
//       zIndex={1}
//       width="full"
//       mb={16}
//       h={{ base: "50vh", md: "80vh" }}
//     >
//       <Box
//         pos="absolute"
//         zIndex={0}
//         flex={1}
//         top={0}
//         left={0}
//         width="full"
//         height="full"
//         userSelect="none"
//         _after={{
//           content: "''",
//           pos: "absolute",
//           zIndex: 0,
//           flex: 1,
//           top: 0,
//           left: 0,
//           w: "full",
//           h: "full",
//           bg: useColorModeValue("whiteAlpha.300", "blackAlpha.800"),
//           bgGradient: "linear(to top, rgba(0,0,0,.3) 0%,rgba(0,0,0,.3) 100%)",
//         }}
//       >
//         <ImageLazyloadWithoutAspectRatio
//           w="full"
//           h="full"
//           objectFit="cover"
//           src={image}
//         />
//       </Box>

//       <Container maxW="container.xl" h="full">
//         <Flex
//           pos="relative"
//           zIndex={1}
//           width="full"
//           h="full"
//           align={"center"}
//           justifyContent={"center"}
//           // align="center"
//           maxW={"container.xl"}
//           justify="space-between"
//           direction={["column", "column", "row"]}
//         >
//           <Stack w="full" spacing={4}>
//             <VStack align={["start"]} spacing={4}>
//               <Flex
//                 pos="relative"
//                 zIndex={1}
//                 width="full"
//                 align="center"
//                 justify="space-between"
//                 direction={["column", "column", "row"]}
//               >
//                 <Stack maxW="container.md" spacing={4}>
//                   <Text
//                     textStyle={{
//                       base: "text_md_bold",
//                       md: "display_md_bold",
//                     }}
//                     color={useColorModeValue(
//                       "whiteAlpha.900",
//                       "whiteAlpha.800",
//                     )}
//                     w={"65%"}
//                   >
//                     {title}
//                   </Text>
//                   <Text
//                     fontWeight={400}
//                     fontSize="md"
//                     opacity={0.95}
//                     color={"white"}
//                   >
//                     Everyone wants to save money! With Jikokoa, you save money
//                     every time you cook! Our Jikos are healthy for your family
//                     and good for the environment- feel good AND be smart.
//                   </Text>

//                   <HStack direction={["column", "column", "row"]} mb={2}>
//                     <NextLink href={"/products"} passHref
//   style={{ textDecoration: "none" }}
// >
//                       <ButtonTransparent
//                         bgColor={"brand.500"}
//                         paddingX={4}
//                         borderRadius={"md"}
//                         height={"50px"}
//                         _hover={{
//                           backgroundColor: "brand.700",
//                         }}
//                         color={"white"}
//                       >
//                         <Text color={"white"}>Explore Products</Text>
//                       </ButtonTransparent>
//                     </NextLink>

//                     <NextLink href={"/support/buy"} passHref
//   style={{ textDecoration: "none" }}
// >
//                       <ButtonTransparent
//                         bgColor={"gray.500"}
//                         paddingX={4}
//                         borderRadius={"md"}
//                         borderColor={"white"}
//                         border={"1px solid"}
//                         height={"50px"}
//                         _hover={{
//                           backgroundColor: "gray.700",
//                         }}
//                         color={"white"}
//                       >
//                         <Text color={"white"}>Purchase Products</Text>
//                       </ButtonTransparent>
//                     </NextLink>
//                   </HStack>
//                 </Stack>
//                 <ShareButtons
//                   text={null}
//                   color={useColorModeValue("blackAlpha.700", "whiteAlpha.700")}
//                   bg={useColorModeValue("whiteAlpha.800", "blackAlpha.300")}
//                   items={shareButtonItems}
//                 />
//               </Flex>
//             </VStack>
//           </Stack>
//         </Flex>
//       </Container>

//       <Flex
//         w={{ base: "100%", md: "100%" }}
//         h="75px"
//         bg="brand.500"
//         position={"absolute"}
//         bottom={0}
//         // px={{ base: "10px", md: "0px" }}
//       >
//         <SimpleGrid
//           columns={3}
//           justifyContent={"center"}
//           alignContent={"center"}
//           mx={{ base: "auto", md: "125px" }}
//           spacingX={2}
//         >
//           <NextLink href={"/products/jikokoa-classic"} passHref
//   style={{ textDecoration: "none" }}
// >
//             <Center
//               bg={status === "classic" ? color : "transparent"}
//               width={{ base: "full", md: "20vw" }}
//               h="75px"
//               color="white"
//               textStyle={
//                 status === "classic"
//                   ? { base: "text_xs_bold", md: "text_md_bold" }
//                   : { base: "text_xs_regular", md: "text_md_regular" }
//               }
//               px={{ base: 4, md: 0 }}
//             >
//               Jikokoa Classic
//             </Center>
//           </NextLink>

//           <NextLink href={"/products/jikokoa-xtra"} passHref
//   style={{ textDecoration: "none" }}
// >
//             <Center
//               bg={status === "xtra" ? color : "transparent"}
//               h="75px"
//               color="white"
//               textStyle={
//                 status === "xtra"
//                   ? { base: "text_xs_bold", md: "text_md_bold" }
//                   : { base: "text_xs_regular", md: "text_md_regular" }
//               }
//               px={{ base: 4, md: 0 }}
//             >
//               Jikokoa Xtra
//             </Center>
//           </NextLink>

//           <NextLink href={"/products/jikokoa-pro"} passHref
//   style={{ textDecoration: "none" }}
// >
//             <Center
//               bg={status === "pro" ? color : "transparent"}
//               h="75px"
//               color="white"
//               textStyle={
//                 status === "pro"
//                   ? { base: "text_xs_bold", md: "text_md_bold" }
//                   : { base: "text_xs_regular", md: "text_md_regular" }
//               }
//               px={{ base: 4, md: 0 }}
//             >
//               Jikokoa Pro
//             </Center>
//           </NextLink>
//         </SimpleGrid>
//       </Flex>
//     </Box>
//   );
// });

// export default ProductsBannerSection;

import { memo } from "react";

import NextLink from "next/link";

import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

import ButtonTransparent from "@components/button/button-transparent";
import ShareButtons from "@components/share-button";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const shareButtonItems = [
  {
    icon: FaWhatsapp,
    href: "https://www.whatsapp.com",
    color: "whatsapp",
    title: "WhatsApp",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com",
    color: "telegram",
    title: "Telegram",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com",
    color: "facebook",
    title: "Facebook",
  },
  {
    icon: FaTwitter,
    href: "https://www.twitter.com",
    color: "twitter",
    title: "Twitter",
  },
];

const HeroBannerSection: React.FC<{
  title?: string;
  image?: string;
  color?: string;
  font?: string;
  status?: string;
}> = memo(({ title, image, color, font, status }) => {
  return (
    <Box
      // py={[5, 5, 15]}
      //   py={{ base: "15px", md: "75px" }}
      width="full"
      pos="relative"
      // bg={useColorModeValue("transparent", "transparent")}
      backgroundImage={
        "linear-gradient(to left, rgba(255,0,0,0) 0%,rgba(0,0,0,.5) 100%), url(" +
        image +
        ")"
      }
      // bgGradient="linear-gradient(to left, rgba(255,0,0,0) 0%,rgba(0,0,0,0.65) 100%)"
      // background=linear-gradient(to bottom, rgba(255,0,0,0) 0%,rgba(255,0,0,0.65) 100%)
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      h={{ base: "50vh", md: "80vh" }}
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
      <Container maxW="container.xl" h="full">
        <Flex
          align={["center", "center", "center"]}
          // direction={["column", "column", "row"]}
          direction={["column-reverse", "column-reverse", "row"]}
          h="full"
          justify={{ base: "center", md: "space-between" }}
        >
          <Flex
            w={{ base: "100%", md: "100%" }}
            justify="space-between"
            align={"center"}
          >
            <Stack align={["start"]} direction={"row"} spacing={4}>
              <Stack maxW="container.md" spacing={4}>
                <Text
                  textStyle={{
                    base: "text_md_bold",
                    md: "display_md_bold",
                  }}
                  color={useColorModeValue("whiteAlpha.900", "whiteAlpha.800")}
                  w={"65%"}
                >
                  {title}
                </Text>
                <Text
                  fontWeight={400}
                  fontSize="md"
                  opacity={0.95}
                  color={"white"}
                >
                  Everyone wants to save money! With Jikokoa, you save money
                  every time you cook! Our Jikos are healthy for your family and
                  good for the environment- feel good AND be smart.
                </Text>

                <HStack direction={["column", "column", "row"]} mb={2}>
                  <Link href={"/products"} passHref as={NextLink}>
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
                  </Link>

                  <Link href={"/support/buy"} passHref as={NextLink}>
                    <ButtonTransparent
                      bgColor={"gray.700"}
                      paddingX={4}
                      borderRadius={"md"}
                      borderColor={"white"}
                      border={"1px solid"}
                      height={"50px"}
                      _hover={{
                        backgroundColor: "gray.900",
                      }}
                      color={"white"}
                    >
                      <Text color={"white"}>Purchase Products</Text>
                    </ButtonTransparent>
                  </Link>
                </HStack>
              </Stack>
            </Stack>

            <ShareButtons
              text={null}
              color={useColorModeValue("blackAlpha.700", "whiteAlpha.700")}
              bg={useColorModeValue("whiteAlpha.800", "blackAlpha.300")}
              items={shareButtonItems}
            />
          </Flex>
        </Flex>
      </Container>

      <Flex
        w={{ base: "100%", md: "100%" }}
        h="75px"
        bg="brand.500"
        position={"absolute"}
        bottom={0}
        // px={{ base: "10px", md: "0px" }}
      >
        <SimpleGrid
          columns={3}
          justifyContent={"center"}
          alignContent={"center"}
          mx={{ base: "auto", md: "125px" }}
          spacingX={2}
        >
          <Link
            href={"/products/charcoal-stoves/jikokoa-classic"}
            passHref
            as={NextLink}
          >
            <Center
              bg={status === "classic" ? color : "transparent"}
              width={{ base: "full", md: "20vw" }}
              h="75px"
              color="white"
              textStyle={
                status === "classic"
                  ? { base: "text_xs_bold", md: "text_md_bold" }
                  : { base: "text_xs_regular", md: "text_md_regular" }
              }
              px={{ base: 4, md: 0 }}
            >
              Jikokoa Classic
            </Center>
          </Link>

          <Link
            href={"/products/charcoal-stoves/jikokoa-xtra"}
            passHref
            as={NextLink}
          >
            <Center
              bg={status === "xtra" ? color : "transparent"}
              h="75px"
              color="white"
              textStyle={
                status === "xtra"
                  ? { base: "text_xs_bold", md: "text_md_bold" }
                  : { base: "text_xs_regular", md: "text_md_regular" }
              }
              px={{ base: 4, md: 0 }}
            >
              Jikokoa Xtra
            </Center>
          </Link>

          <Link
            href={"/products/charcoal-stoves/jikokoa-pro"}
            passHref
            as={NextLink}
          >
            <Center
              bg={status === "pro" ? color : "transparent"}
              h="75px"
              color="white"
              textStyle={
                status === "pro"
                  ? { base: "text_xs_bold", md: "text_md_bold" }
                  : { base: "text_xs_regular", md: "text_md_regular" }
              }
              px={{ base: 4, md: 0 }}
            >
              Jikokoa Pro
            </Center>
          </Link>
        </SimpleGrid>
      </Flex>
    </Box>
  );
});

export default HeroBannerSection;
