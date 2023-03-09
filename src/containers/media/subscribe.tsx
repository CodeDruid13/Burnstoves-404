import {
  Box,
  Flex,
  Heading,
  Link,
  Skeleton,
  Stack,
  Text,
  SimpleGrid,
} from "@definitions/exports";

import ButtonTransparent from "@components/button/button-transparent";
import ShareButtons from "@components/share-button";
import NextLink from "next/link";

import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import dayjs from "dayjs";

const SubscribeSection = ({ newslettersdata }: { newslettersdata?: any }) => {
  const shareButtonItems = [
    {
      icon: FaWhatsapp,
      href: "https://api.whatsapp.com/send?text=https://burnstoves.vercel.app/",
      color: "whatsapp",
      title: "WhatsApp",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/shareArticle?mini=true&url=https://burnstoves.vercel.app/",
      color: "telegram",
      title: "Telegram",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/sharer.php?u=https://burnstoves.vercel.app/",
      color: "facebook",
      title: "Facebook",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/intent/tweet?url=https://burnstoves.vercel.app/",
      color: "twitter",
      title: "Twitter",
    },
  ];

  const items = [
    {
      id: 1,
      date: "01 March 2022",
      title:
        "An Independent Impact Survey by Yunus Social Business Validates Kuniokoa Benefits",
      subtitle:
        "The Yunus Social Business has conducted an impact performance study of BURN’s Kuniokoa woodstove. From the 13th to the 28th of July 2021, YSB completed interviews with 280 Kunikoa customers across Kenya.",
      image:
        "https://burnstoves.com/content/resources/1645210768914-w662h350.jpeg",
      alt: "https://burnstoves.com/content/resources/1645210768914-w662h350.jpeg",
    },
  ];

  return (
    <Flex
      w={"full"}
      align={"center"}
      justify={"center"}
      mt={{ base: "100px", md: "25px" }}
    >
      <Flex align={"center"} w={"container.lg"} justify={"center"}>
        {newslettersdata ? (
          newslettersdata?.newsletters?.data?.length ? (
            <SimpleGrid
              spacing={5}
              columns={[1, 1, 1, 1]}
              alignContent={"center"}
              justifyContent={"center"}
              w={"full"}
              flex={1}
            >
              {newslettersdata?.newsletters?.data?.map((item: any) => (
                <Stack
                  direction={{ base: "column", md: "row" }}
                  rounded={{ base: "lg" }}
                  // display={{ md: "flex" }}
                  mx={"auto"}
                  w={{ base: "90%", md: "full" }}
                  border={"1px solid"}
                  key={item?.id}
                  borderColor="gray.100"
                  _hover={{
                    backgroundColor: "#fef9f6",
                    border: "1px solid",
                    borderColor: "brand.100",
                    boxShadow: `2px 2px 0px #fef8f4`,
                    transition: "all 250ms ease-in-out",
                    transform: ["none", "none", "translateY(-2px)"],
                  }}
                  alignItems={"center"}
                  justify={"center"}
                  spacing={{ base: 2, md: 12 }}
                >
                  <Stack w={{ md: "100%" }} p={4} spacing={{ base: 2, md: 2 }}>
                    <Flex justifyContent="space-between" alignItems="center">
                      <Heading
                        fontWeight="bold"
                        color={"gray.600"}
                        noOfLines={[0, 0, 2, 2]}
                        fontSize={["2xl", "2xl", "2xl"]}
                        fontFamily={"Ubuntu"}
                      >
                        {item?.attributes?.newsletter_title}
                      </Heading>

                      <ShareButtons
                        text={null}
                        color={"blackAlpha.700"}
                        bg={"whiteAlpha.800"}
                        items={shareButtonItems}
                      />
                    </Flex>

                    <Text color={"gray.500"} textStyle={"text_md_medium"}>
                      {dayjs(item?.attributes?.newsletter_date).format(
                        "DD MMMM YY",
                      )}
                    </Text>

                    <Text
                      noOfLines={4}
                      color={"gray.600"}
                      textStyle={"text_lg_regular"}
                    >
                      {item?.attributes?.newsletter_excerpt}
                    </Text>

                    <Flex justify={["center", "center", "start"]}>
                      <Link
                        as={NextLink}
                        href={""}
                        passHref
                        style={{ textDecoration: "none" }}
                      >
                        <ButtonTransparent
                          bgColor={"transparent"}
                          borderRadius={"md"}
                        >
                          <Text color={"brand.500"} textStyle={"text_md_bold"}>
                            Read On
                          </Text>
                        </ButtonTransparent>
                      </Link>
                    </Flex>
                  </Stack>
                </Stack>
              ))}
            </SimpleGrid>
          ) : null
        ) : (
          <SimpleGrid
            width="50vw"
            columns={[1, 1, 1, 1]}
            spacingY={[14]}
            spacingX={[5, 5, 5, 5]}
            justifyContent={"center"}
            alignContent={"center"}
          >
            {items?.map((item, idx) => (
              <Box
                pos="relative"
                p={6}
                key={idx}
                // borderBottomWidth="1px"
                rounded="xl"
                boxShadow={"xs"}
                border={"1px"}
                borderColor={"#f9f9f9"}
                h="full"
                w={"full"}
              >
                <Skeleton
                  h="70px"
                  w={{ base: "60px", md: "130px" }}
                  mt={"10px"}
                  rounded={"md"}
                  fadeDuration={4}
                  startColor={"gray.50"}
                  endColor={"gray.200"}
                />

                <Skeleton
                  h="10px"
                  mt={"10px"}
                  rounded={"full"}
                  fadeDuration={4}
                  startColor={"gray.50"}
                  endColor={"gray.200"}
                />

                <Skeleton
                  h="10px"
                  mt={"10px"}
                  rounded={"full"}
                  fadeDuration={4}
                  startColor={"gray.50"}
                  endColor={"gray.200"}
                />
              </Box>
            ))}
          </SimpleGrid>
        )}
      </Flex>
    </Flex>
  );
};

export default SubscribeSection;
