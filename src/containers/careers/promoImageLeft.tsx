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

const PromoImageLeft: React.FC<{
  image?: string;
  alt?: string;
  title?: string;
  subtitle?: string;
}> = memo(({ alt, title, subtitle, image }) => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      bg={useColorModeValue("gray.50", "transparent")}
      align={"center"}
      justify={"center"}
      my={4}
    >
      <Container maxW={"container.xl"} mt={12}>
        <Stack
          direction={{ base: "column", md: "row" }}
          align={"start"}
          justify={"center"}
        >
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

          <Flex
            align={"start"}
            justify={"start"}
            w={{ base: "100%", md: "50%" }}
            pl={{ base: 0, md: 8 }}
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
                Kenya’s capital Nairobi is a favorite among expatriate’s world
                over. Nairobi has been ranked top in Africa and 12th globally in
                the Expat City Ranking 2021 by InterNations, the world’s largest
                online expatriate community. ​ ​
              </Text>

              <Text
                textStyle={{ base: "text_md_regular", md: "text_lg_regular" }}
              >
                This ranking is not only because of the city’s vibrant social
                life or ease of finding affordable housing but also, Nairobi
                boasts of being the only city in the world with a national park
                and having some of the most hospitable people in the continent.
                ​
              </Text>

              <Text
                textStyle={{ base: "text_md_regular", md: "text_lg_regular" }}
              >
                To the expat, Nairobi is where the global community congregates,
                giving you an opportunity to interact with different cultures,
                and explore local and international cuisines. ​
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </Stack>
  );
});

export default PromoImageLeft;
