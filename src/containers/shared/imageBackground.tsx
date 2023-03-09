import ButtonTransparent from "@components/button/button-transparent";
import {
  Box,
  Container,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@definitions/exports";

import NextImageFull from "@components/image-lazyload/nextImageFull";
import PageTitle from "@components/page-title";
import NextLink from "next/link";
import { memo } from "react";
import Image from "next/image";

const ImageBackgroundSection: React.FC<{
  image?: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  link?: string;
  linktext?: string;
}> = memo(({ alt, title, subtitle, image, link, linktext }) => {
  const spacingL3 = [5, 10, 20];
  return (
    // <PageTitle
    //   textAlign="start"
    //   align="start"
    //   // pt={[24, 100, 250]}
    //   pb={[5, 10, 10]}
    //   title={
    //     <Container maxW="container.xl">
    //       <Flex
    //         p={12}
    //         // flex={1}
    //         align={"start"}
    //         justify={"start"}
    //         w={{ base: "100%", md: "35%" }}
    //       >
    //         <Stack spacing={6} w={"full"} maxW={"lg"}>
    //           <Text
    //             textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
    //             color={useColorModeValue("white", "whiteAlpha.900")}
    //             textAlign={"start"}
    //             w={"full"}
    //           >
    //             {title}
    //           </Text>
    //           <Text
    //             textStyle={{ base: "text_md_regular", md: "text_lg_regular" }}
    //             color={"white"}
    //           >
    //             {subtitle}
    //           </Text>

    //           <Link
    //             as={NextLink}
    //             href={link}
    //             passHref
    //             style={{ textDecoration: "none" }}
    //           >
    //             <ButtonTransparent
    //               bgColor={"brand.500"}
    //               paddingX={4}
    //               borderRadius={"full"}
    //               w={"fit-content"}
    //               height={"50px"}
    //               _hover={{
    //                 backgroundColor: "brand.600",
    //               }}
    //               color={"white"}
    //             >
    //               <Text color={"white"}>{linktext}</Text>
    //             </ButtonTransparent>
    //           </Link>
    //         </Stack>
    //       </Flex>
    //     </Container>
    //   }
    //   header={
    //     <Box
    //       pos="absolute"
    //       zIndex={0}
    //       flex={1}
    //       top={0}
    //       left={0}
    //       width="full"
    //       height="full"
    //       userSelect="none"
    //       _after={{
    //         content: "''",
    //         pos: "absolute",
    //         zIndex: 0,
    //         flex: 1,
    //         top: 0,
    //         left: 0,
    //         w: "full",
    //         h: "full",
    //         bg: useColorModeValue("whiteAlpha.300", "blackAlpha.800"),
    //         bgGradient: "linear(to top, rgba(0,0,0,.5) 0%,rgba(0,0,0,.1) 100%)",
    //       }}
    //     >
    //       <NextImageFull src={image} alt={title} />
    //     </Box>
    //   }
    // />

    <Box
      position={"relative"}
      height={{ base: "50vh", md: "75vh" }}
      width={"100%"}
      clipPath={"inset(0 0 0 0)"}
    >
      <Box
        position="absolute"
        height="100%"
        width="100%"
        left="0"
        top="0"
        _after={{
          content: "''",
          pos: "absolute",
          zIndex: 0,
          flex: 1,
          top: 0,
          left: 0,
          w: "full",
          h: "full",
          bg: useColorModeValue("whiteAlpha.300", "blackAlpha.800"),
          // bgGradient: "linear(to top, rgba(0,0,0,.3) 0%,rgba(0,0,0,.1) 100%)",
        }}
      >
        <Image
          fill
          objectFit="cover"
          objectPosition="85% 50%"
          sizes="100vw"
          src={image}
          alt={title}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACCAIIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAgEABAP/xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A9mVHB2GjSqVQUWoqsrKKsVIojIqVAaNOhVBo0qIIysDtSklQCjTo1Qai1BWWIsUVUiojNVQBo06FAKhUaojKwO5KSVFChXpQoDRKooixlgKqRQZlQQaNOjQCiVSiiysDvGklQCjToUAqFRUZYiwQoqRQZlQEoU6NAKJ0QRmYHeNIayDQp0KA0SoqMsRYqFFSLAVmZAaNKjQGiVEGZmUdqVUrnWaNClRq1aNFai0rLBWFChQYsKhIzFKlGlRpSjRKiUrMjFK7UrJXOs1KFKhVpUorUKtZYKxaHFgxUqEyMUqUaVGlKNEqNKlZkYpXYlVKwyNGlQqqNRagrLEWKpRRhCKjMiJRpUaA0SoqMzMg7ErMiDQrMKNRmVUKMwLCZgZmYRKNZhBoswIzMD//2Q=="
        />
      </Box>

      <Container maxW="container.xl" h="full">
        <Flex
          align={["center", "center", "center"]}
          direction={"column"}
          h="full"
          justify={{ base: "center", md: "center" }}
          position={"relative"}
        >
          <Flex
            w={{ base: "100%", md: "100%" }}
            justify="space-between"
            align={"center"}
          >
            <Stack align={["start"]} direction={"column"} spacing={4}>
              <Stack spacing={4} w={"full"}>
                <Flex
                  // p={12}
                  // flex={1}
                  align={"start"}
                  justify={"start"}
                  w={{ base: "100%", md: "100%" }}
                >
                  <Stack spacing={6} w={"full"} maxW={"lg"}>
                    <Text
                      textStyle={{
                        base: "display_xs_bold",
                        md: "display_sm_bold",
                      }}
                      color={useColorModeValue("white", "whiteAlpha.900")}
                      textAlign={"start"}
                      w={"full"}
                    >
                      {title}
                    </Text>
                    <Text
                      textStyle={{
                        base: "text_md_regular",
                        md: "text_lg_regular",
                      }}
                      color={"white"}
                    >
                      {subtitle}
                    </Text>

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
                        <Text color={"white"}>{linktext}</Text>
                      </ButtonTransparent>
                    </Link>
                  </Stack>
                </Flex>
              </Stack>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
});

export default ImageBackgroundSection;
