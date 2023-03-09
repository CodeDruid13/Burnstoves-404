import {
  Box,
  chakra,
  Flex,
  Heading,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@definitions/exports";

import ButtonTransparent from "@components/button/button-transparent";
import ShareButtons from "@components/share-button";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const AwardsSection = ({ awardsdata }: { awardsdata?: any }) => {
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
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1676358544/yunus_social_business_burn_manufacturing_2219a74a05.jpg",
      alt: "https://res.cloudinary.com/dhhkxded1/image/upload/v1676358544/yunus_social_business_burn_manufacturing_2219a74a05.jpg",
    },
  ];

  return (
    <Flex
      w={"full"}
      align={"center"}
      justify={"center"}
      mt={35}
      px={{ base: "20px", md: "125px" }}
    >
      <Flex align={"center"} justify={"center"}>
        {awardsdata ? (
          awardsdata?.awards?.data?.length ? (
            <SimpleGrid spacing={5} columns={[1, 1, 1, 1]} w={"full"}>
              {awardsdata?.awards?.data?.map((item: any) => (
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
                  spacing={{ base: 2, md: 8 }}
                >
                  <Flex
                    justifyItems={"center"}
                    ml={{ base: "none", md: 2 }}
                    mt={{ base: 2, md: "none" }}
                  >
                    <Image
                      src={item?.attributes?.award_image?.data?.attributes?.url}
                      alt={
                        item?.attributes?.award_image?.data?.attributes
                          ?.alternativeText
                      }
                      objectFit="cover"
                      objectPosition="85% 50%"
                      // sizes="100vw"
                      height={200}
                      width={250}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACCAIIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAgEABAP/xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A9mVHB2GjSqVQUWoqsrKKsVIojIqVAaNOhVBo0qIIysDtSklQCjTo1Qai1BWWIsUVUiojNVQBo06FAKhUaojKwO5KSVFChXpQoDRKooixlgKqRQZlQQaNOjQCiVSiiysDvGklQCjToUAqFRUZYiwQoqRQZlQEoU6NAKJ0QRmYHeNIayDQp0KA0SoqMsRYqFFSLAVmZAaNKjQGiVEGZmUdqVUrnWaNClRq1aNFai0rLBWFChQYsKhIzFKlGlRpSjRKiUrMjFK7UrJXOs1KFKhVpUorUKtZYKxaHFgxUqEyMUqUaVGlKNEqNKlZkYpXYlVKwyNGlQqqNRagrLEWKpRRhCKjMiJRpUaA0SoqMzMg7ErMiDQrMKNRmVUKMwLCZgZmYRKNZhBoswIzMD//2Q=="
                    />
                  </Flex>

                  <Stack
                    w={{ md: "100%" }}
                    direction={{ base: "column", md: "column" }}
                    spacing={2}
                  >
                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      mt={4}
                      textAlign={{ base: "center", md: "start" }}
                    >
                      <chakra.span
                        fontSize="sm"
                        color={"gray.600"}
                        w={{ base: "full", md: "fit-content" }}
                        textAlign={{ base: "center", md: "start" }}
                      >
                        {item?.attributes?.award_date}
                      </chakra.span>

                      <ShareButtons
                        display={["none", "none", "flex"]}
                        text={null}
                        color={"blackAlpha.700"}
                        bg={"whiteAlpha.800"}
                        items={shareButtonItems}
                        mr={4}
                      />
                    </Flex>
                    <Heading
                      fontWeight="bold"
                      color={"gray.800"}
                      noOfLines={[0, 0, 2, 2]}
                      fontSize={["2xl", "2xl", "2xl"]}
                      fontFamily={"Ubuntu"}
                      mt={1}
                      mx={4}
                      textAlign={{ base: "center", md: "start" }}
                    >
                      {item?.attributes?.award_title}
                    </Heading>

                    <Text
                      noOfLines={4}
                      color={"gray.600"}
                      mt={1}
                      mx={4}
                      textAlign={{ base: "center", md: "start" }}
                    >
                      {item?.attributes?.award_subtitle}
                    </Text>
                    <Flex justify={["center", "center", "start"]} mt={1} mx={4}>
                      <Link
                        href={{
                          pathname: "/awards/awards",
                          query: {
                            description: item?.attributes?.award_description,
                            award_title: item?.attributes?.award_title,
                            award_date: item?.attributes?.award_date,
                            id: 1,
                          },
                        }}
                        as={{
                          pathname: `/awards/awards`,
                          query: {
                            name: item?.attributes?.award_title,
                          },
                        }}
                        aria-label={"Read More"}
                        passHref
                      >
                        <ButtonTransparent
                          bgColor={"transparent"}
                          // paddingX={4}
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
            width="full"
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

export default AwardsSection;
