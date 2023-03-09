import NextImage from "@components/image-lazyload/nextImage";
import NextImageFull from "@components/image-lazyload/nextImageFull";
import NextWidth from "@components/image-lazyload/nextWidth";
import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from "@definitions/exports";
import Image from "next/image";

import { memo } from "react";

const PromoImage: React.FC<{
  image?: string;
  alt?: string;
  title?: string;
  subtitle?: string;
}> = memo(({ alt, title, subtitle, image }) => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      bg={useColorModeValue("white", "transparent")}
      align={"center"}
      justify={"center"}
    >
      <Container maxW={"container.xl"} mt={12}>
        <Stack
          direction={{ base: "column-reverse", md: "row" }}
          align={"start"}
          justify={"center"}
        >
          <Flex
            align={"start"}
            justify={"start"}
            w={{ base: "100%", md: "50%" }}
          >
            <Stack spacing={4} w={"full"} maxW={"lg"}>
              <Text
                textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
                color={useColorModeValue("gray.600", "whiteAlpha.900")}
                textAlign={"start"}
                w={"full"}
              >
                {title}
              </Text>
              <Text
                textStyle={{ base: "text_md_regular", md: "text_lg_regular" }}
              >
                In recent years, Kenya has emerged as one of the fastest growing
                economies in the world, ranked 6th in Africa. Its strategic
                location in the horn of the continent makes it a key economic
                and commercial hub of East Africa especially for investors
                looking to launch into the African market. ​
              </Text>

              <Text
                textStyle={{ base: "text_md_regular", md: "text_lg_regular" }}
              >
                Known as Africa’s Silicon Valley or “Silicon Savannah”, Kenya is
                embracing the ICT sector as a key enabler for future economic
                growth with the country having one of the best internet
                penetrations in the continent mainly due to Kenya being the
                birthplace of M-Pesa (mobile money banking). ​
              </Text>

              <Text
                textStyle={{ base: "text_md_regular", md: "text_lg_regular" }}
              >
                Other economic drivers for Kenya are Manufacturing, Agriculture
                and Tourism.
              </Text>
            </Stack>
          </Flex>

          <Stack
            pos="relative"
            direction={{ base: "column", md: "row" }}
            rounded="xl"
            // bg={"white"}
            w={{ base: "calc(90vw)", md: "calc(40vw)" }}
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

export default PromoImage;
