import {
  Box,
  Container,
  Text,
  useColorModeValue,
  VStack,
  SimpleGrid,
} from "@definitions/exports";

import Image from "next/image";

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

const ShopSection = ({ shopdata }: { shopdata?: any }) => {
  var aquaticCreatures =
    shopdata?.buyLocations?.data[0]?.attributes?.shops.filter(function (
      creature: any,
    ) {
      return creature?.Type == "Shop_Online";
    });

  return (
    <Box width="full" py={14} bg={"#FEF9F4"}>
      <Container maxW="container.xl">
        <VStack align={["center"]} mb={12}>
          <Text
            textAlign="center"
            textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
            mt={0}
            maxW="container.md"
            color={useColorModeValue("gray.600", "whiteAlpha.900")}
          >
            Shop Online
          </Text>
        </VStack>

        <SimpleGrid
          width="full"
          columns={[1, 1, 2, 3]}
          spacing={[5, 10, 10]}
          my={4}
        >
          {aquaticCreatures?.map((item: any) => (
            <VStack
              key={item?.id}
              align="center"
              spacing={5}
              _hover={{
                boxShadow: "2xl",
                transition: "all 400ms ease-in-out",
              }}
              bg={"white"}
              h={"150px"}
              rounded={"md"}
              justify={"center"}
            >
              <Image
                src={item?.purchase_image?.data?.attributes?.url}
                alt={item?.purchase_image?.data?.attributes?.alternativeText}
                height={125}
                width={125}
              />
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ShopSection;
