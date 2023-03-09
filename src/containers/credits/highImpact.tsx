import { useState } from "react";

import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

import Highlight from "@components/highlight";
import Image from "next/image";

const HighImpactSection: React.FC = () => {
  return (
    <Box
      py={{ base: "15px", md: "25px" }}
      bg={useColorModeValue("gray.50", "transparent")}
      width="full"
      pos="relative"
    >
      <Container maxW="container.xl">
        <Flex
          align={["start", "center", "end"]}
          // direction={["column", "column", "row"]}
          direction={["column-reverse", "column-reverse", "row"]}
          justify="center"
        >
          <Flex
            pos="relative"
            direction={"column"}
            mb={[5, 5, 0]}
            mr={[0, 0, 10]}
            w={{ base: "100%", md: "100%" }}
            align={["start", "center", "center"]}
          >
            <VStack align={"center"} spacing={6} w="full">
              <VStack align={["center"]} spacing={8}>
                <Text
                  // fontSize={[38, 48, 48]}
                  textAlign="center"
                  textStyle={{ base: "display_xs_bold", md: "display_sm_bold" }}
                  mt={0}
                  color={useColorModeValue("gray.600", "whiteAlpha.900")}
                >
                  Our High{" "}
                  <Highlight strokeColor={"brand.300"}>Impact</Highlight> Carbon
                  Projects
                </Text>
              </VStack>
            </VStack>
          </Flex>
        </Flex>
      </Container>

      <Stack
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("gray.50", "transparent")}
        justify={"center"}
        align={"center"}
        mt={12}
      >
        <Flex flex={1} justify={"center"} align={"center"}>
          <Image
            src={
              "https://res.cloudinary.com/dhhkxded1/image/upload/v1677446818/africa_map_burn_manufacturing_5c89e84529.svg?updated_at=2023-02-26T21:28:16.944Z"
            }
            alt={"BURN high impact carbon projects"}
            objectFit="cover"
            objectPosition="85% 50%"
            // sizes="100vw"
            height={400}
            width={450}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACCAIIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAgEABAP/xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A9mVHB2GjSqVQUWoqsrKKsVIojIqVAaNOhVBo0qIIysDtSklQCjTo1Qai1BWWIsUVUiojNVQBo06FAKhUaojKwO5KSVFChXpQoDRKooixlgKqRQZlQQaNOjQCiVSiiysDvGklQCjToUAqFRUZYiwQoqRQZlQEoU6NAKJ0QRmYHeNIayDQp0KA0SoqMsRYqFFSLAVmZAaNKjQGiVEGZmUdqVUrnWaNClRq1aNFai0rLBWFChQYsKhIzFKlGlRpSjRKiUrMjFK7UrJXOs1KFKhVpUorUKtZYKxaHFgxUqEyMUqUaVGlKNEqNKlZkYpXYlVKwyNGlQqqNRagrLEWKpRRhCKjMiJRpUaA0SoqMzMg7ErMiDQrMKNRmVUKMwLCZgZmYRKNZhBoswIzMD//2Q=="
          />
        </Flex>
      </Stack>
    </Box>
  );
};

export default HighImpactSection;
