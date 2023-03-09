import NextLink from "next/link";

import {
  Box,
  Container,
  Link,
  LinkBox,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  SimpleGrid,
} from "@definitions/exports";

import ButtonOrangeUnderline from "@components/button/button-orange-underline";
import ButtonTransparent from "@components/button/button-transparent";
import Highlight from "@components/highlight";
import Image from "next/image";

const spacingL3 = [5, 10, 20];

let items = [
  {
    href: "/products/charcoal-stoves/jikokoa-classic",
    title: "Jikokoa Classic",
    image:
      "https://res.cloudinary.com/dhhkxded1/image/upload/v1676549855/jikokoa_classic_by_burn_manufacturing_7b61c8c1f6.png",
    producttype: "Wood & Briquette Stove",
    productdescription: "East Africa's best-selling charcoal cookstove!",
  },
  {
    href: "/products/charcoal-stoves/jikokoa-xtra",
    title: "Jikokoa Xtra",
    image:
      "https://res.cloudinary.com/dhhkxded1/image/upload/v1676887689/jikokoa_xtra_by_burn_manufacturing_7bdad95dd1.png",
    producttype: "Charcoal Stove",
    productdescription:
      "Biggest & most durable household charcoal appliance in Africa​.",
  },
  {
    href: "/products/charcoal-stoves/jikokoa-pro",
    title: "Jikokoa Pro",
    image:
      "https://res.cloudinary.com/dhhkxded1/image/upload/v1676550135/jikokoa_pro_by_burn_manufacturing_065d36f035.png?updated_at=2023-02-16T12:22:16.006Z",
    producttype: "Charcoal Stove",
    productdescription:
      "The most efficient commercial charcoal​ cookstove in Africa.",
  },
  {
    href: "/products/wood-stoves/kuniokoa",
    title: "Ecoa Wood",
    image:
      "https://res.cloudinary.com/dhhkxded1/image/upload/v1677138295/ecoa_wood_stainless_burn_manufacturing_9b60257623.png?updated_at=2023-02-23T07:45:05.872Z",
    producttype: "Wood Stove",
    productdescription:
      "World’s most fuel-efficient rocket stove for household use.",
  },
];

const ProductsBlock = ({ productsdata }: { productsdata?: any }) => {
  return (
    <Box width="full" mt={14}>
      <Container maxW="container.xl">
        <VStack align={["center"]} mb={2}>
          <Text
            textAlign="center"
            textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
            mt={0}
            color={useColorModeValue("gray.600", "whiteAlpha.900")}
          >
            BURN's{" "}
            <Highlight strokeColor={"brand.300"}>Revolutionary</Highlight>{" "}
            Cooking Appliances
          </Text>

          <Text
            textStyle={"text_xl_regular"}
            color={useColorModeValue("gray.500", "whiteAlpha.900")}
            w={{ base: "full", md: "50%" }}
            textAlign={"center"}
          >
            Super fuel-efficient cooking appliances, designed and manufactured
            in Kenya and used around the world.
          </Text>
        </VStack>

        {productsdata ? (
          productsdata?.products?.data?.length ? (
            <SimpleGrid
              width="full"
              columns={[1, 1, 2, 4]}
              spacing={[5, 10, 10]}
            >
              {productsdata?.products?.data?.slice(0, 4)?.map((item: any) => (
                <Link
                  key={item?.id}
                  href={item?.attributes?.product_link}
                  passHref
                  as={NextLink}
                  style={{ textDecoration: "none" }}
                >
                  <LinkBox
                    role="group"
                    key={item.title}
                    as="article"
                    borderRadius={"md"}
                    pb="25px"
                    h={"full"}
                    _hover={{
                      boxShadow: "2xl",
                      transition: "all 400ms ease-in-out",
                    }}
                  >
                    <VStack align="center" spacing={5} h={"full"}>
                      <Box width="250px" p={7}>
                        <Image
                          src={
                            item?.attributes?.product_image?.data?.attributes
                              ?.url
                          }
                          alt={
                            item?.attributes?.product_image?.data?.attributes
                              ?.alternativeText
                          }
                          width={250}
                          height={250}
                          objectFit={"contain"}
                        />
                      </Box>
                      {/* <Spacer /> */}
                      <VStack align="center" spacing={4} h={"full"}>
                        <VStack align="center" spacing={4} h={"full"}>
                          <Text
                            textStyle={"display_xs_bold"}
                            color={"gray.600"}
                          >
                            {item?.attributes?.product_title}
                          </Text>
                          <Text textAlign={"center"} as="i">
                            {item?.attributes?.product_type}
                          </Text>
                          <Text textAlign={"center"} w={"70%"}>
                            {item?.attributes?.product_subtitle}
                          </Text>
                        </VStack>

                        <Link
                          href={item?.attributes?.product_link}
                          passHref
                          as={NextLink}
                          style={{ textDecoration: "none" }}
                        >
                          <ButtonOrangeUnderline
                            bgColor={"transparent"}
                            color={"brand.500"}
                            paddingX={4}
                            borderRadius={"md"}
                            aria-label="View Product"
                          >
                            View Product
                          </ButtonOrangeUnderline>
                        </Link>
                      </VStack>
                    </VStack>
                  </LinkBox>
                </Link>
              ))}
            </SimpleGrid>
          ) : null
        ) : (
          <SimpleGrid
            width="full"
            columns={[1, 1, 2, 4]}
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

        <Stack
          direction={["column", "row"]}
          spacing={6}
          justifyContent="center"
          mt={6}
          mb={12}
          w={"full"}
        >
          <Link
            href={"#"}
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
                backgroundColor: "brand.1000",
              }}
              color={"white"}
              aria-label="Watch Product Video"
              minW={"20px"}
              w={{ base: "full", md: "fit-content" }}
            >
              Watch Product Video
            </ButtonTransparent>
          </Link>

          <Link
            href={
              "https://burnstoves.com/content/resources/burnproductcatalogue2022.pdf"
            }
            target={"_blank"}
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
                backgroundColor: "brand.1000",
              }}
              color={"white"}
              aria-label="View Product Catalogue"
              minW={"200px"}
              w={{ base: "full", md: "fit-content" }}
            >
              View Product Catalogue
            </ButtonTransparent>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default ProductsBlock;
