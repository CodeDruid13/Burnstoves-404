import React, { ReactNode, memo } from "react";

import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaDribbble,
  FaLinkedin,
  FaGit,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";

import {
  Box,
  ChakraProps,
  Container,
  Flex,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@definitions/exports";

import {
  Company,
  Products,
  Impact,
  Support,
  Media,
  More,
  CopyrightText,
  Social,
} from "@definitions/navigation/footer";
import version from "@definitions/utils/version";

import { SocialIconButton } from "@components/button";

const Footer: React.FC<ChakraProps> = (props) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("gray.700", "gray.400")}
      {...props}
    >
      <Container as={Stack} maxW={"container.xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 3, md: 6 }} spacing={8}>
          {[Company, Products, Impact, Support, Media, More].map((i, index) => {
            return (
              <Stack key={index} align={"flex-start"}>
                <ListHeader>{i.title}</ListHeader>
                {i.items.map((link, idx) => (
                  <Link key={idx} href={link.href} color={"gray"}>
                    {link.title}
                  </Link>
                ))}
              </Stack>
            );
          })}
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"container.xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center" }}
        >
          <Flex
            direction={["column", "column", "row", "row"]}
            alignItems="center"
          >
            <Text
              ml={2}
              textAlign={{ base: "center", md: "left" }}
              fontSize="xs"
            >
              {CopyrightText}
            </Text>
          </Flex>
          <Wrap
            justify={{ base: "center", md: "start" }}
            direction={"row"}
            spacing={[2, 2, 6, 6]}
          >
            {Social.items.map((link, idx) => {
              const title = link.title.toLowerCase();
              const SocialIconComponent = SocialIcons[title];
              return (
                <WrapItem key={idx}>
                  <SocialIconButton label={link.title} href={link.href}>
                    <Icon as={SocialIconComponent} />
                  </SocialIconButton>
                </WrapItem>
              );
            })}
          </Wrap>
        </Container>
      </Box>
    </Box>
  );
};

const SocialIcons: { [key: string]: IconType } = {
  instagram: FaInstagram,
  twitter: FaTwitter,
  youtube: FaYoutube,
  dribbble: FaDribbble,
  linkedin: FaLinkedin,
};

const ListHeader = memo(({ children }: { children: ReactNode }) => {
  return (
    <Text
      color={useColorModeValue("gray.700", "gray.200")}
      fontWeight={"bold"}
      fontSize={"xl"}
      mb={2}
    >
      {children}
    </Text>
  );
});

const VersionBadge = () => {
  return (
    <Tag colorScheme="gray" borderRadius="full" variant="subtle" size="sm">
      <TagLeftIcon boxSize="12px" as={FaGit} />
      <TagLabel fontWeight="bold">{version()}</TagLabel>
    </Tag>
  );
};

export default memo(Footer);
