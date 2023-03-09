import {
  Button,
  Container,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@definitions/exports";
import Image from "next/image";
import NextLink from "next/link";

import { memo } from "react";

const SaveForestsSection: React.FC<{
  image?: string;
  alt?: string;
  title?: string;
  subtitle?: string;
}> = memo(({ alt, title, subtitle, image }) => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      bg={useColorModeValue("brand.500", "transparent")}
      align={"center"}
      justify={"center"}
    >
      <Container maxW={"container.xl"} py={4}>
        <Stack
          direction={{ base: "column", md: "row" }}
          align={"center"}
          justify={"center"}
        >
          <Flex
            align={"start"}
            justify={"start"}
            w={{ base: "100%", md: "50%" }}
          >
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Text
                textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
                color={useColorModeValue("white", "whiteAlpha.900")}
                textAlign={"start"}
                w={"full"}
              >
                {title}
              </Text>

              <Stack spacing={6} direction={{ base: "column", md: "row" }}>
                <Link
                  href={"mailto:carbon@burnmfg.com"}
                  target={"_blank"}
                  passHref
                  as={NextLink}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    rounded={"full"}
                    textStyle="button"
                    _hover={{ bg: "brand.700", color: "white" }}
                    backgroundColor={"white"}
                    color={"gray.500"}
                    w={{ base: "100%", md: "fit-content" }}
                    py={4}
                    minH={"40px"}
                    fontSize={"md"}
                    fontWeight={"bold"}
                  >
                    Contact Our carbon team
                  </Button>
                </Link>

                <Link
                  href={"/carbon-credits/corporate"}
                  passHref
                  as={NextLink}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    rounded={"full"}
                    textStyle="button"
                    _hover={{ bg: "brand.700", color: "white" }}
                    backgroundColor={"white"}
                    color={"gray.500"}
                    w={{ base: "100%", md: "fit-content" }}
                    py={4}
                    minH={"40px"}
                    fontSize={"md"}
                    fontWeight={"bold"}
                  >
                    Buy Carbon Credits
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Flex>

          <Stack
            pos="relative"
            direction={{ base: "column", md: "row" }}
            rounded="xl"
            // bg={"white"}
            w={{ base: "calc(90vw)", md: "calc(30vw)" }}
            h={{ base: "calc(30vh)", md: "calc(50vh)" }}
          >
            <Image
              placeholder="blur"
              blurDataURL={
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACCAIIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAgEABAP/xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A9mVHB2GjSqVQUWoqsrKKsVIojIqVAaNOhVBo0qIIysDtSklQCjTo1Qai1BWWIsUVUiojNVQBo06FAKhUaojKwO5KSVFChXpQoDRKooixlgKqRQZlQQaNOjQCiVSiiysDvGklQCjToUAqFRUZYiwQoqRQZlQEoU6NAKJ0QRmYHeNIayDQp0KA0SoqMsRYqFFSLAVmZAaNKjQGiVEGZmUdqVUrnWaNClRq1aNFai0rLBWFChQYsKhIzFKlGlRpSjRKiUrMjFK7UrJXOs1KFKhVpUorUKtZYKxaHFgxUqEyMUqUaVGlKNEqNKlZkYpXYlVKwyNGlQqqNRagrLEWKpRRhCKjMiJRpUaA0SoqMzMg7ErMiDQrMKNRmVUKMwLCZgZmYRKNZhBoswIzMD//2Q=="
              }
              src={image}
              alt="Picture of the author"
              fill
            />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
});

export default SaveForestsSection;
