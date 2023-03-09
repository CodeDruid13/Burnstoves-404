import React, { memo } from "react";

// import Image from "next/image";
import NextLink from "next/link";

import {
  Box,
  chakra,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@definitions/exports";

import ImageLazyload from "@components/image-lazyload";

import ButtonTransparent from "@components/button/button-transparent";
import { IArticle } from "./article";

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

const ArticleCard: React.FC<IArticle.IProps> = ({
  author,
  authorHref,
  avatar,
  body,
  href,
  meta,
  tag,
  tagHref,
  title,
  image,
  colorScheme,
  rounded = "lg",
  ...rest
}): JSX.Element => {
  return (
    <Box
      rounded={rounded}
      shadow="lg"
      bg={useColorModeValue("white", "gray.900")}
      border={"1px solid"}
      borderColor="gray.100"
      maxW="320"
      _hover={{
        backgroundColor: "#fef9f6",
        border: "1px solid",
        borderColor: "brand.100",
        boxShadow: `2px 2px 0px #fef8f4`,
        transition: "all 250ms ease-in-out",
        transform: ["none", "none", "translateY(-2px)"],
      }}
      {...rest}
    >
      {image && <ImageLazyload roundedTop={rounded} src={image} />}
      <Box px={8} py={4}>
        <Flex justifyContent="space-between" alignItems="center">
          {meta && (
            <chakra.span
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {meta}
            </chakra.span>
          )}

          <ShareButtons
            text={null}
            color={useColorModeValue("blackAlpha.700", "whiteAlpha.700")}
            bg={useColorModeValue("whiteAlpha.800", "blackAlpha.300")}
            items={shareButtonItems}
          />
        </Flex>

        <Box mt={2}>
          {title && (
            <Heading
              as="h3"
              fontSize="2xl"
              color={useColorModeValue("gray.700", "white")}
              fontWeight="700"
              noOfLines={3}
              mt={4}
              fontFamily={"Ubuntu"}
            >
              {title}
            </Heading>
          )}
          {body && (
            <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
              {body}
            </chakra.p>
          )}
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          {href && (
            <Link
              as={NextLink}
              href={href}
              passHref
              style={{ textDecoration: "none" }}
            >
              <ButtonTransparent bgColor={"transparent"} borderRadius={"md"}>
                <Text color={"brand.500"} textStyle={"text_md_bold"}>
                  Read More
                </Text>
              </ButtonTransparent>
            </Link>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

ArticleCard.displayName = "ArticleCard";
export default memo(ArticleCard);
