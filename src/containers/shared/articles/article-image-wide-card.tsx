import { memo } from "react";

import {
  Box,
  chakra,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@definitions/exports";

import ImageLazyloadWithoutRatio from "@components/image-lazyload/without-aspect-ratio";

import ShareButtons from "@components/share-button";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IArticle } from "./article";

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

const ArticleImageWideCard: React.FC<IArticle.IWithImage> = ({
  body,
  // href,
  title,
  image,
  footer,
  meta,
  ...rest
}): JSX.Element => {
  const headingColor = useColorModeValue("gray.800", "whiteAlpha.800");
  const bodyColor = useColorModeValue("gray.600", "gray.400");
  return (
    <chakra.article
      // maxW={{ lg: "4xl" }}
      // shadow={{ sm: "lg" }}
      rounded={{ base: "lg" }}
      display={{ md: "flex" }}
      bg={useColorModeValue("white", "gray.900")}
      w={{ base: "full", md: "full" }}
      mx={{ base: "10px", md: 0 }}
      border={"1px solid"}
      borderColor="gray.100"
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
      <Box w={{ base: "100%", md: "40%" }}>
        <ImageLazyloadWithoutRatio
          // rounded={["none", "none", "lg", "lg"]}
          h="full"
          // w={"200px"}
          src={image}
          roundedTopLeft="lg"
          roundedBottomLeft="lg"
          // objectPosition="10% 5%"
          objectFit="contain"
          // roundedBottom={["none", "none", "lg", "lg"]}
        />
      </Box>

      <Box p={[6, 8, 10]} w={{ md: "100%" }}>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
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
        {title && (
          <Heading
            fontWeight="bold"
            color={headingColor}
            noOfLines={[0, 0, 2, 2]}
            fontSize={["2xl", "2xl", "2xl"]}
            fontFamily={"Ubuntu"}
          >
            {title}
          </Heading>
        )}
        {body && (
          <Text mt={4} noOfLines={4} color={bodyColor}>
            {body}
          </Text>
        )}

        {footer && <Box mt={8}>{footer}</Box>}
      </Box>
    </chakra.article>
  );
};

ArticleImageWideCard.displayName = "ArticleImageWideCard";
export default memo(ArticleImageWideCard);
