import NextLink from "next/link";

import {
  Box,
  Container,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
  VStack,
  SimpleGrid,
} from "@definitions/exports";

import ButtonOrangeUnderline from "@components/button/button-orange-underline";
import NextImage from "@components/image-lazyload/nextImage";

const spacingL3 = [5, 10, 20];

let items = [
  {
    href: "https://bit.ly/jikokoa-jumia-classic-black",
    title: "Jikokoa Classic (Black)",
    image:
      "https://res.cloudinary.com/dhhkxded1/image/upload/v1676362760/Jikokoa_Classic_Black_burn_manufacturing_dda80837cf.jpg?updated_at=2023-02-14T11:19:21.039Z",
    producttype: "Wood & Briquette Stove",
    productdescription:
      "Order your Jikokoa today and use 39 to 80% less charcoal than your ordinary Jiko",
  },
  {
    href: "https://bit.ly/jikokoa-jumia-classic-red",
    title: "Jikokoa Classic (Red)",
    image:
      "https://res.cloudinary.com/dhhkxded1/image/upload/v1676362760/Jikokoa_Classic_Red_burn_manufacturing_9d84b6facb.jpg?updated_at=2023-02-14T11:19:21.301Z",
    producttype: "Charcoal Stove",
    productdescription:
      "Order your Jikokoa today and use 39 to 80% less charcoal than your ordinary Jiko",
  },
  {
    href: "https://bit.ly/jikokoa-jumia-xtra-black",
    title: "Jikokoa Xtra (Black)",
    image:
      "https://res.cloudinary.com/dhhkxded1/image/upload/v1676362391/Jikokoa_Xtra_Black_burn_manufacturing_24adf9e84c.jpg?updated_at=2023-02-14T11:14:23.068Z",
    producttype: "Charcoal Stove",
    productdescription:
      "Jikokoa Xtra is the perfect cooking companion. It is neat and cooks very fast!",
  },
];

const ProductsBlock: React.FC = () => {
  return (
    <Box width="full" mt={14}>
      <Container maxW="container.xl">
        <VStack align={["center"]}>
          <Text
            textAlign="center"
            textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
            mt={0}
            maxW="container.md"
            color={useColorModeValue("gray.600", "whiteAlpha.900")}
          >
            Buy East Africa's best-selling cookstoves from Jumia at discounted
            prices
          </Text>
        </VStack>

        <SimpleGrid
          width="full"
          columns={[1, 1, 2, 3]}
          spacing={[5, 10, 10]}
          my={4}
        >
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
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
                _hover={{
                  boxShadow: "2xl",
                  transition: "all 400ms ease-in-out",
                }}
                style={{ textDecoration: "none" }}
              >
                <VStack align="center" spacing={5}>
                  <Box width="250px" flex="1" p={5}>
                    <NextImage src={item?.image} alt={item?.title} />
                  </Box>
                  <LinkOverlay href={item?.href}>
                    <VStack align="center" spacing={4}>
                      <Text textStyle={"display_xs_bold"} color={"gray.600"}>
                        {item.title}
                      </Text>
                      <Text textAlign={"center"}>
                        {item.productdescription}
                      </Text>

                      <Link
                        href={item?.href}
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
                  </LinkOverlay>
                </VStack>
              </LinkBox>
            </Link>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ProductsBlock;
