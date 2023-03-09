import ButtonTransparent from "@components/button/button-transparent";
import {
  Flex,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@definitions/exports";

import { memo } from "react";
import NextLink from "next/link";
import NextImageFull from "@components/image-lazyload/nextImageFull";

const ImagesSection: React.FC<{
  image: string;
  alt?: string;
  title: string;
  subtitle: string;
  link?: string;
}> = memo(({ alt, title, subtitle, image, link }) => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      bg={useColorModeValue("gray.50", "transparent")}
      pl={{ base: "0px", md: "120px" }}
    >
      <Flex
        p={12}
        align={"start"}
        justify={"start"}
        w={{ base: "100%", md: "35%" }}
      >
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Text
            textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
            color={useColorModeValue("gray.600", "whiteAlpha.900")}
            textAlign={"start"}
            w={"full"}
          >
            {title}
          </Text>
          <Text textStyle={{ base: "text_md_regular", md: "text_lg_regular" }}>
            {subtitle}
          </Text>

          {link && (
            <Link
              as={NextLink}
              href={link}
              passHref
              style={{ textDecoration: "none" }}
            >
              <ButtonTransparent
                bgColor={"brand.500"}
                paddingX={4}
                borderRadius={"full"}
                w={"fit-content"}
                height={"50px"}
                _hover={{
                  backgroundColor: "brand.600",
                }}
                color={"white"}
              >
                <Text color={"white"}>Explore Appliances</Text>
              </ButtonTransparent>
            </Link>
          )}
        </Stack>
      </Flex>
      <Flex flex={1}>
        {/* <Image
          alt={"Login Image"}
          objectFit={"cover"}
          objectPosition="100% 50%"
          src={image}
          h={{ base: "50vh", md: "75vh" }}
          w={"full"}
        />  */}
        <div className={"image-container"}>
          <NextImageFull src={image} alt={"BURN Manufacturing"} />
        </div>
      </Flex>
    </Stack>
  );
});

export default ImagesSection;
