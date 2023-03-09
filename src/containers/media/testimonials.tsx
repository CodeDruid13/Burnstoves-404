import {
  Box,
  chakra,
  Flex,
  Heading,
  Link,
  Skeleton,
  Text,
  Stack,
  SimpleGrid,
} from "@definitions/exports";

import ButtonTransparent from "@components/button/button-transparent";
import NextWidth from "@components/image-lazyload/nextWidth";
import ShareButtons from "@components/share-button";
import NextLink from "next/link";

import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const TestimonialsSection = ({
  testimonialsdata,
}: {
  testimonialsdata?: any;
}) => {
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
    <Flex w={"full"} align={"center"} justify={"center"}>
      <Flex align={"center"} w={"container.xl"} justify={"center"}>
        {testimonialsdata ? (
          testimonialsdata?.testimonials?.data?.length ? (
            <SimpleGrid
              spacing={5}
              columns={[1, 1, 1, 1]}
              alignContent={"center"}
              justifyContent={"center"}
              w={"full"}
            >
              {testimonialsdata?.testimonials?.data?.map((item: any) => (
                <Stack
                  direction={{ base: "column", md: "row" }}
                  rounded={{ base: "lg" }}
                  // display={{ md: "flex" }}
                  mx={"auto"}
                  w={{ base: "90%", md: "container.xl" }}
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
                  mr={{ base: 0, md: "50px" }}
                >
                  <Flex
                    // justifyItems={"center"}
                    ml={{ base: "none", md: 2 }}
                    mt={{ base: 2, md: "none" }}
                    mb={{ base: "none", md: 2 }}
                  >
                    <Image
                      src={
                        item?.attributes?.testimonial_user_image?.data
                          ?.attributes?.url
                      }
                      alt={
                        item?.attributes?.testimonial_user_image?.data
                          ?.attributes?.alternativeText
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

                  <Stack flex={1} p={4} spacing={{ base: 2, md: 2 }}>
                    <Text textStyle={"display_xs_bold"} color={"brand.500"}>
                      <Text>{item?.attributes?.testimonial_product_title}</Text>
                    </Text>
                    <Text
                      textStyle={{
                        base: "text_lg_regular",
                        md: "text_xl_regular",
                      }}
                      color={"gray.600"}
                    >
                      {item?.attributes?.testimonial_description}
                    </Text>
                    <Stack w={"full"} maxW={"lg"} flex={1}>
                      <Text textStyle={"text_lg_bold"} color={"blueGray.800"}>
                        {item?.attributes?.testimonial_user_name}
                      </Text>
                      <Text textStyle={"text_sm_regular"} color={"grey"}>
                        {item?.attributes?.testimonial_user_location}
                      </Text>
                    </Stack>
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

export default TestimonialsSection;
