import {
  Box,
  Flex,
  Heading,
  Skeleton,
  Stack,
  Text,
  SimpleGrid,
} from "@definitions/exports";

import ButtonTransparent from "@components/button/button-transparent";
import ShareButtons from "@components/share-button";
import dayjs from "dayjs";
import NextLink from "next/link";

import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const NewsroomSection = ({ newsroomdata }: { newsroomdata?: any }) => {
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
        {newsroomdata ? (
          newsroomdata?.newsrooms?.data?.length ? (
            <SimpleGrid
              spacing={5}
              columns={[1, 1, 1, 1]}
              alignContent={"center"}
              justifyContent={"center"}
              w={"full"}
            >
              {newsroomdata?.newsrooms?.data?.map((item: any) => (
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
                  // justify={"center"}
                  spacing={{ base: 2, md: 8 }}
                >
                  <Flex
                    // justifyItems={"center"}
                    ml={{ base: "none", md: 2 }}
                    mt={{ base: 2, md: "none" }}
                    mb={{ base: "none", md: 2 }}
                  >
                    <Image
                      src={
                        item?.attributes?.newsroom_image?.data?.attributes?.url
                      }
                      alt={
                        item?.attributes?.newsroom_image?.data?.attributes
                          ?.alternativeText
                      }
                      objectFit="cover"
                      objectPosition="85% 50%"
                      // sizes="100vw"
                      height={200}
                      width={300}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACCAIIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAgEABAP/xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A9mVHB2GjSqVQUWoqsrKKsVIojIqVAaNOhVBo0qIIysDtSklQCjTo1Qai1BWWIsUVUiojNVQBo06FAKhUaojKwO5KSVFChXpQoDRKooixlgKqRQZlQQaNOjQCiVSiiysDvGklQCjToUAqFRUZYiwQoqRQZlQEoU6NAKJ0QRmYHeNIayDQp0KA0SoqMsRYqFFSLAVmZAaNKjQGiVEGZmUdqVUrnWaNClRq1aNFai0rLBWFChQYsKhIzFKlGlRpSjRKiUrMjFK7UrJXOs1KFKhVpUorUKtZYKxaHFgxUqEyMUqUaVGlKNEqNKlZkYpXYlVKwyNGlQqqNRagrLEWKpRRhCKjMiJRpUaA0SoqMzMg7ErMiDQrMKNRmVUKMwLCZgZmYRKNZhBoswIzMD//2Q=="
                    />
                  </Flex>

                  <Stack direction={"column"} spacing={2} flex={1} p={4}>
                    <Heading
                      fontWeight="bold"
                      color={"gray.600"}
                      noOfLines={[0, 0, 2, 2]}
                      fontSize={["lg", "xl", "xl"]}
                      fontFamily={"Ubuntu"}
                    >
                      {item?.attributes?.newsroom_title}
                    </Heading>

                    <Text color={"gray.500"} textStyle={"text_md_medium"}>
                      {dayjs(item?.attributes?.newsroom_date).format(
                        "DD MMMM YY",
                      )}
                    </Text>

                    <Text
                      noOfLines={4}
                      color={"gray.600"}
                      textStyle={"text_lg_regular"}
                    >
                      {item?.attributes?.newsroom_excerpt}
                    </Text>

                    <Flex justifyContent="space-between" alignItems="center">
                      <Flex justify={["center", "center", "start"]}>
                        <Link
                          href={{
                            pathname: "/post/post",
                            query: {
                              description:
                                item?.attributes?.newsroom_description,
                              newsroom_title: item?.attributes?.newsroom_title,
                              newsroom_date: item?.attributes?.newsroom_date,
                              url: item?.attributes?.newsroom_image?.data
                                ?.attributes?.url,
                              id: 1,
                            },
                          }}
                          as={{
                            pathname: `/post/post`,
                            query: {
                              name: item?.attributes?.newsroom_title,
                            },
                          }}
                          aria-label={"Read More"}
                          passHref
                        >
                          <ButtonTransparent
                            bgColor={"transparent"}
                            borderRadius={"md"}
                          >
                            <Text
                              color={"brand.500"}
                              textStyle={"text_md_bold"}
                            >
                              Read On
                            </Text>
                          </ButtonTransparent>
                        </Link>
                      </Flex>
                      <ShareButtons
                        text={null}
                        color={"blackAlpha.700"}
                        bg={"whiteAlpha.800"}
                        items={shareButtonItems}
                      />
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

export default NewsroomSection;
