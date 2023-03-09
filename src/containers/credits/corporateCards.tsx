import {
  Box,
  Container,
  Flex,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

import Image from "next/image";

const CorporateCards: React.FC = () => {
  const board = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677434693/presence_map_burn_manufacturing_9474891e76.jpg",
      alt: "https://res.cloudinary.com/dhhkxded1/image/upload/v1677434693/presence_map_burn_manufacturing_9474891e76.jpg",
      title: "Africa’s Largest Cookstove Company",
      subtitle:
        "2.8M+ cookstoves distributed, with the capacity to place 5M+ stoves over the next 2 years",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677434756/cooks_burn_manufacturing_a2db344fb2.jpg?updated_at=2023-02-26T18:06:03.589Z",
      alt: "https://res.cloudinary.com/dhhkxded1/image/upload/v1677434756/cooks_burn_manufacturing_a2db344fb2.jpg?updated_at=2023-02-26T18:06:03.589Z",
      title: "The World’s Most Fuel-efficient Biomass Stoves",
      subtitle:
        "Our biomass stoves have the highest lifetime and performance &ndash; at an 18% average lower price point &ndash; as compared to our competitors' stoves",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677434815/manufacture_burn_manufacturing_83291e9c87.jpg?updated_at=2023-02-26T18:07:04.570Z",
      alt: "https://res.cloudinary.com/dhhkxded1/image/upload/v1677434815/manufacture_burn_manufacturing_83291e9c87.jpg?updated_at=2023-02-26T18:07:04.570Z",
      title: "Africa’s Only Modern Cookstove Manufacturer",
      subtitle:
        "The largest distributional footprint of all cookstove companies in Africa, spanning 20+ countries",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dhhkxded1/image/upload/v1677434896/verification_burn_manufacturing_9383911c50.jpg?updated_at=2023-02-26T18:08:27.624Z",
      alt: "https://res.cloudinary.com/dhhkxded1/image/upload/v1677434896/verification_burn_manufacturing_9383911c50.jpg?updated_at=2023-02-26T18:08:27.624Z",
      title: "Independent Third-party Verification",
      subtitle:
        "Independent market and academic research have validated BURN's products as the most fuel-efficient natural-draft biomass stoves in the world",
    },
  ];

  return (
    <Box
      py={{ base: "15px", md: "35px" }}
      bg={useColorModeValue("white", "transparent")}
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
              <SimpleGrid
                width="full"
                columns={[2, 2, 2, 4]}
                spacingY={[14]}
                spacingX={[5, 5, 5, 5]}
              >
                {board.map((item, idx) => (
                  <Box className="flip-card">
                    <Box className="flip-card-inner">
                      <Box className="flip-card-front">
                        <LinkBox
                          as="article"
                          transition="all 250ms ease"
                          _hover={{ transform: "translateY(-5px)" }}
                          w="full"
                          h={"300px"}
                          overflow="hidden"
                          rounded={"sm"}
                          key={idx}
                        >
                          <VStack
                            height="full"
                            width="full"
                            pos="relative"
                            bg={"brand.500"}
                          >
                            <Flex flex={1} justify={"center"} align={"center"}>
                              <Image
                                src={item?.image}
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

                            <Flex
                              color="whiteAlpha.900"
                              // p={8}
                              px={4}
                              pb={2}
                              height="full"
                              width="full"
                              top={0}
                              left={0}
                              zIndex={2}
                              direction="column"
                            >
                              <LinkOverlay mt="10px" href={"#"}>
                                <Text textStyle={"text_xl_medium"}>
                                  {item?.title}
                                </Text>
                              </LinkOverlay>
                            </Flex>
                          </VStack>
                        </LinkBox>
                      </Box>
                      <Box className="flip-card-back">
                        <Text
                          textStyle={"text_lg_regular"}
                          h={"full"}
                          textAlign={"center"}
                          mt={"50px"}
                        >
                          {item?.subtitle}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default CorporateCards;
