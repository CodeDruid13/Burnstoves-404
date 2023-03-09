import { memo, useRef } from "react";

import { FiPlayCircle } from "react-icons/fi";

import {
  AspectRatio,
  Box,
  Button,
  ChakraProps,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  ThemingProps,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@definitions/exports";
import useIntersectionObserver from "@react-hook/intersection-observer";
import ReactPlayer from "react-player/lazy";

const HeroVideo = () => {
  const containerRef = useRef();
  const lockRef = useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }

  return (
    <div ref={containerRef}>
      {lockRef.current && (
        <Stack h={{ base: "calc(50vh)", md: "calc(60vh)", xl: "629px" }}>
          <Flex flex={1} position={"absolute"} w={"100vw"}>
            <Box
              position={"absolute"}
              width={"100vw"}
              h={{ base: "calc(50vh)", md: "calc(60vh)", xl: "629px" }}
              overflow={"hidden"}
              top={0}
              bg={"black"}
            >
              <Box
                w={"100vw"}
                h={{ base: "calc(50vh)", md: "calc(60vh)", xl: "629px" }}
                top={0}
                position={"absolute"}
              >
                <ReactPlayer
                  className="react-player"
                  url="https://res.cloudinary.com/dhhkxded1/video/upload/v1676545112/Burn_corporate_video_website_4712754372.mp4"
                  width="100%"
                  height="100%"
                  loop={true}
                  controls={false}
                  muted={false}
                  volume={0}
                  playing={true}
                />
              </Box>

              <HeroBlock
                color={useColorModeValue("whiteAlpha.800", "whiteAlpha.800")}
                title="The Future of Clean Cooking"
                link="Impacting lives and the environment through efficient cooking appliances."
                href="#"
              />
            </Box>
          </Flex>
        </Stack>
      )}
    </div>
  );
};

const HeroBlock: React.FC<
  {
    title: string;
    link: string;
    href: string;
  } & ChakraProps &
    ThemingProps
> = memo(({ title, href, color }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex w={"100%"}>
      <VStack
        // w={"100vw"}
        // h="100vh"
        align="center"
        justify="end"
        px={useBreakpointValue({ base: 4, md: 8 })}
        // bg={useColorModeValue("whiteAlpha.100", "blackAlpha.800")}
        // bgGradient={"linear(to-b, red, transparent)"}
        position={"absolute"}
        left={"50%"}
        top={{ base: "5%", md: "75%" }}
        transform={{
          base: "translateX(-50%) translateY(0%)",
          md: "translateX(-50%) translateY(-50%)",
        }}
        // bg={"blue"}
      >
        <Stack
          align="center"
          spacing={6}
          w={"full"}
          mt={{ base: "150px", md: 0 }}
          mb={{ base: "25px", md: "125px" }}
        >
          {title && (
            <Text
              textStyle={{ base: "text_xl_bold", md: "display_md_bold" }}
              color={"white"}
              // bg={"red"}
              w={"full"}
            >
              {title}
            </Text>
          )}
          <Stack
            direction={["column", "row"]}
            spacing={6}
            justifyContent="center"
            my={6}
            w={"full"}
          >
            <Button
              rightIcon={<FiPlayCircle size={"25px"} />}
              rounded={"md"}
              // textStyle="display_2xl_bold"
              fontWeight={"bold"}
              _hover={{ bg: "brand.700" }}
              backgroundColor={"brand.500"}
              color={"white"}
              w={{ base: "100%", md: "175px" }}
              py={6}
              h={"50px"}
              fontSize={"18px"}
              onClick={onOpen}
            >
              Watch film
            </Button>
          </Stack>
        </Stack>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose} size={"5xl"}>
        <ModalOverlay />
        <ModalContent p={0}>
          {/* <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton /> */}
          <ModalBody p={0}>
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.youtube.com/embed/nZCqqzLKDqQ&autoplay=1"
                srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/nZCqqzLKDqQ?autoplay=1><img src=https://img.youtube.com/vi/nZCqqzLKDqQ/hqdefault.jpg alt='Why Biomass Stoves Matter - Now More Than Ever'><span>▶</span></a>"
                // frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Why Biomass Stoves Matter - Now More Than Ever"
                loading="lazy"
              ></iframe>
            </AspectRatio>
          </ModalBody>

          {/* <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </Flex>
  );
});

export default HeroVideo;
