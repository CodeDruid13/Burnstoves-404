import { memo } from "react";

import {
  Box,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@definitions/exports";

import ButtonTransparent from "@components/button/button-transparent";
import NextLink from "next/link";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";

const ContactSection: React.FC<{
  link?: string;
  linktext?: string;
  color?: string;
  image?: string;

  country?: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
  messenger?: string;
}> = memo(
  ({
    link,
    linktext,
    color,
    image,
    country,
    email,
    phone,
    whatsapp,
    messenger,
  }) => {
    return (
      <Stack
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("gray.50", "transparent")}
        // pl={{ base: "0px", md: "120px" }}
        py={16}
        align={"center"}
        justify={"center"}
      >
        <Flex
          direction={"column"}
          w={"full"}
          justify={"center"}
          align={"center"}
        >
          <Text
            color={useColorModeValue("gray.700", "gray.800")}
            textStyle={{ base: "text_md_regular", md: "text_lg_regular" }}
            mt="10px"
            textAlign="center"
            w={{ base: "full", md: "50%" }}
          >
            To find the closest BURN appliances outlet in {country} via{" "}
            <span
              style={{
                color: "brand.500",
              }}
            >
              <Link
                href={`mailto:${email}`}
                passHref
                as={NextLink}
                style={{ textDecoration: "none", color: "orange" }}
              >
                {email}
              </Link>
            </span>{" "}
            or use the contact options below:
          </Text>

          <HStack spacing={2} mt={4}>
            <Link
              href={`tel: ${phone}`}
              passHref
              as={NextLink}
              style={{ textDecoration: "none" }}
            >
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
                <Text color={"white"}>{phone}</Text>
              </ButtonTransparent>
            </Link>

            <Link
              href={`${whatsapp}`}
              passHref
              as={NextLink}
              style={{ textDecoration: "none" }}
            >
              <Flex
                bgColor={"gray.200"}
                paddingX={4}
                borderRadius={"md"}
                height={"50px"}
                w={"100px"}
                align={"center"}
                justify={"center"}
              >
                <BsWhatsapp color={"green"} />
              </Flex>
            </Link>

            <Link
              href={`${messenger}`}
              passHref
              as={NextLink}
              style={{ textDecoration: "none" }}
            >
              <Flex
                bgColor={"gray.200"}
                paddingX={4}
                borderRadius={"md"}
                height={"50px"}
                w={"100px"}
                align={"center"}
                justify={"center"}
              >
                <BsMessenger color={"#0A7CFF"} />
              </Flex>
            </Link>
          </HStack>
        </Flex>
      </Stack>
    );
  },
);

export default ContactSection;
