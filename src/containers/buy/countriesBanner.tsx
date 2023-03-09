import NextLink from "next/link";

import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Link,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

import Image from "next/image";
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

const countriesBannerSection = ({
  bannerdata,
  color,
  font,
  image,
  status,
  page,
}: {
  bannerdata?: any;
  color?: string;
  font?: string;
  status?: string;
  image?: string;
  page?: string;
}) => {
  return (
    <Box
      position={"relative"}
      height={{ base: "75vh", md: "95vh" }}
      width={"100%"}
      clipPath={"inset(0 0 0 0)"}
    >
      <Box position="absolute" height="100%" width="100%" left="0" top="0">
        <Image
          src={
            bannerdata?.pageBanners?.data?.[0]?.attributes?.page_banner[0]
              ?.page_image?.data?.attributes?.url
          }
          layout="fill"
          objectFit="cover"
          sizes="100vw"
          alt={
            bannerdata?.pageBanners?.data?.[0]?.attributes?.page_banner[0]
              ?.page_title
          }
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACCAIIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAgEABAP/xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A9mVHB2GjSqVQUWoqsrKKsVIojIqVAaNOhVBo0qIIysDtSklQCjTo1Qai1BWWIsUVUiojNVQBo06FAKhUaojKwO5KSVFChXpQoDRKooixlgKqRQZlQQaNOjQCiVSiiysDvGklQCjToUAqFRUZYiwQoqRQZlQEoU6NAKJ0QRmYHeNIayDQp0KA0SoqMsRYqFFSLAVmZAaNKjQGiVEGZmUdqVUrnWaNClRq1aNFai0rLBWFChQYsKhIzFKlGlRpSjRKiUrMjFK7UrJXOs1KFKhVpUorUKtZYKxaHFgxUqEyMUqUaVGlKNEqNKlZkYpXYlVKwyNGlQqqNRagrLEWKpRRhCKjMiJRpUaA0SoqMzMg7ErMiDQrMKNRmVUKMwLCZgZmYRKNZhBoswIzMD//2Q=="
        />
      </Box>

      <HStack
        spacing={[0, 0, 10, 10]}
        display={["none", "none", "flex"]}
        justify={"space-between"}
        px={"150px"}
        py={"50px"}
        pt={"130px"}
        position={"relative"}
      >
        <VStack w={"full"} spacing={0}>
          <HStack
            spacing={[0, 0, 10, 10]}
            display={["none", "none", "flex"]}
            justify={"space-between"}
            w={"full"}
          >
            <Spacer />
            <HStack
              spacing={[0, 0, 10, 10]}
              display={["none", "none", "flex"]}
              justify={"space-between"}
            >
              <VStack align={"center"} justify={"center"}>
                <Link
                  href={"/support/contact"}
                  passHref
                  as={NextLink}
                  p={2}
                  fontSize={"16px"}
                  fontWeight={"normal"}
                  fontFamily={"Ubuntu"}
                  color={"white"}
                  _hover={{
                    textDecoration: "none",
                    color: "brand.500",
                  }}
                >
                  Contact Us
                </Link>
                <Box
                  h={"4px"}
                  bg={page === "contact" && "brand.500"}
                  w="full"
                />
              </VStack>

              <VStack align={"center"} justify={"center"}>
                <Link
                  href={"/support/distributors"}
                  passHref
                  as={NextLink}
                  p={2}
                  fontSize={"16px"}
                  fontWeight={"normal"}
                  fontFamily={"Ubuntu"}
                  color={"white"}
                  _hover={{
                    textDecoration: "none",
                    color: "brand.500",
                  }}
                >
                  Be a Distributor
                </Link>
                <Box
                  h={"4px"}
                  bg={page === "distributors" && "brand.500"}
                  w="full"
                />
              </VStack>

              <VStack align={"center"} justify={"center"}>
                <Link
                  href={"/support/buy/kenya"}
                  passHref
                  as={NextLink}
                  p={2}
                  fontSize={"16px"}
                  fontWeight={"normal"}
                  fontFamily={"Ubuntu"}
                  color={"white"}
                  _hover={{
                    textDecoration: "none",
                    color: "brand.500",
                  }}
                >
                  Where to Buy
                </Link>
                <Box h={"4px"} bg={page === "buy" && "brand.500"} w="full" />
              </VStack>

              <VStack align={"center"} justify={"center"}>
                <Link
                  href={"/support/warranty"}
                  passHref
                  as={NextLink}
                  p={2}
                  fontSize={"16px"}
                  fontWeight={"normal"}
                  fontFamily={"Ubuntu"}
                  color={"white"}
                  _hover={{
                    textDecoration: "none",
                    color: "brand.500",
                  }}
                >
                  Warranty
                </Link>
                <Box
                  h={"4px"}
                  bg={page === "warranty" && "brand.500"}
                  w="full"
                />
              </VStack>

              <VStack align={"center"} justify={"center"}>
                <Link
                  href={"/support/help"}
                  passHref
                  as={NextLink}
                  p={2}
                  fontSize={"16px"}
                  fontWeight={"normal"}
                  fontFamily={"Ubuntu"}
                  color={"white"}
                  _hover={{
                    textDecoration: "none",
                    color: "brand.500",
                  }}
                >
                  Help & FAQs
                </Link>
                <Box h={"4px"} bg={page === "help" && "brand.500"} w="full" />
              </VStack>
            </HStack>
          </HStack>
        </VStack>
      </HStack>

      <Flex
        align={["center", "center", "start"]}
        direction={["column-reverse", "column-reverse", "row"]}
        h="full"
        justify={{ base: "center", md: "start" }}
        position={"relative"}
        py={{ base: 0, md: "100px" }}
        px={{ base: "20px", md: "125px" }}
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
                {
                  bannerdata?.pageBanners?.data?.[0]?.attributes?.page_banner[0]
                    ?.page_title
                }
              </Text>
            </Stack>
          </Stack>
        </Flex>
      </Flex>

      <HStack
        spacing={4}
        overflowX="auto"
        w={{ base: "100%", md: "100%" }}
        px={{ base: "auto", md: "125px" }}
        h="75px"
        bg="brand.500"
        position={"absolute"}
        bottom={0}
      >
        <Link
          href={"/support/buy/kenya"}
          passHref
          as={NextLink}
          style={{ textDecoration: "none" }}
        >
          <Center
            bg={status === "kenya" ? color : "transparent"}
            h="75px"
            color="white"
            textStyle={
              status === "kenya"
                ? { base: "text_xs_bold", md: "text_lg_bold" }
                : { base: "text_xs_regular", md: "text_md_regular" }
            }
            px={{ base: 4, md: 4 }}
          >
            Kenya
          </Center>
        </Link>

        <Link
          href={"/support/buy/somali-region"}
          passHref
          as={NextLink}
          style={{ textDecoration: "none" }}
        >
          <Center
            bg={status === "somali" ? color : "transparent"}
            h="75px"
            color="white"
            textStyle={
              status === "somali"
                ? { base: "text_xs_bold", md: "text_md_bold" }
                : { base: "text_xs_regular", md: "text_md_regular" }
            }
            px={{ base: 4, md: 4 }}
          >
            Somali Region
          </Center>
        </Link>

        <Link
          href={"/support/buy/nigeria"}
          passHref
          as={NextLink}
          style={{ textDecoration: "none" }}
        >
          <Center
            bg={status === "nigeria" ? color : "transparent"}
            h="75px"
            color="white"
            textStyle={
              status === "nigeria"
                ? { base: "text_xs_bold", md: "text_md_bold" }
                : { base: "text_xs_regular", md: "text_md_regular" }
            }
            px={{ base: 4, md: 4 }}
          >
            Nigeria
          </Center>
        </Link>

        <Link
          href={"/support/buy/ghana"}
          passHref
          as={NextLink}
          style={{ textDecoration: "none" }}
        >
          <Center
            bg={status === "ghana" ? color : "transparent"}
            h="75px"
            color="white"
            textStyle={
              status === "ghana"
                ? { base: "text_xs_bold", md: "text_md_bold" }
                : { base: "text_xs_regular", md: "text_md_regular" }
            }
            px={{ base: 4, md: 4 }}
          >
            Ghana
          </Center>
        </Link>

        <Link
          href={"/support/buy/drc"}
          passHref
          as={NextLink}
          style={{ textDecoration: "none" }}
        >
          <Center
            bg={status === "drc" ? color : "transparent"}
            h="75px"
            color="white"
            textStyle={
              status === "drc"
                ? { base: "text_xs_bold", md: "text_md_bold" }
                : { base: "text_xs_regular", md: "text_md_regular" }
            }
            px={{ base: 4, md: 4 }}
          >
            DR Congo
          </Center>
        </Link>

        <Link
          href={"/support/buy/mozambique"}
          passHref
          as={NextLink}
          style={{ textDecoration: "none" }}
        >
          <Center
            bg={status === "mozambique" ? color : "transparent"}
            h="75px"
            color="white"
            textStyle={
              status === "mozambique"
                ? { base: "text_xs_bold", md: "text_md_bold" }
                : { base: "text_xs_regular", md: "text_md_regular" }
            }
            px={{ base: 4, md: 4 }}
          >
            Mozambique
          </Center>
        </Link>

        <Link
          href={"/support/buy/senegal"}
          passHref
          as={NextLink}
          style={{ textDecoration: "none" }}
        >
          <Center
            bg={status === "senegal" ? color : "transparent"}
            h="75px"
            color="white"
            textStyle={
              status === "senegal"
                ? { base: "text_xs_bold", md: "text_md_bold" }
                : { base: "text_xs_regular", md: "text_md_regular" }
            }
            px={{ base: 4, md: 4 }}
          >
            Senegal
          </Center>
        </Link>

        <Link
          href={"/support/buy/ivory-coast"}
          passHref
          as={NextLink}
          style={{ textDecoration: "none" }}
        >
          <Center
            bg={status === "ivory" ? color : "transparent"}
            h="75px"
            color="white"
            textStyle={
              status === "ivory"
                ? { base: "text_xs_bold", md: "text_md_bold" }
                : { base: "text_xs_regular", md: "text_md_regular" }
            }
            px={{ base: 4, md: 4 }}
          >
            Ivory Coast
          </Center>
        </Link>

        <Link
          href={"/support/buy/other-markets"}
          passHref
          as={NextLink}
          style={{ textDecoration: "none" }}
        >
          <Center
            bg={status === "other" ? color : "transparent"}
            h="75px"
            color="white"
            textStyle={
              status === "other"
                ? { base: "text_xs_bold", md: "text_md_bold" }
                : { base: "text_xs_regular", md: "text_md_regular" }
            }
            px={{ base: 4, md: 4 }}
          >
            Other Markets
          </Center>
        </Link>
      </HStack>
    </Box>
  );
};

export default countriesBannerSection;
