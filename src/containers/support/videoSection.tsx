import { useContext } from "react";

import {
  AspectRatio,
  Box,
  chakra,
  Container,
  Flex,
  useColorModeValue,
} from "@definitions/exports";

import { ThemeColorContext } from "@definitions/context/theme";

const VideoSection = ({ bg }: { bg?: any }) => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  return (
    <>
      <chakra.main
        sx={{
          "*::selection": {
            color: useColorModeValue(`${color}.600`, `${color}.400`),
            background: useColorModeValue(`${color}.200`, `${color}.700`),
          },
          mark: {
            color: useColorModeValue(`${color}.600`, `${color}.400`),
            background: useColorModeValue(`${color}.100`, `${color}.800`),
          },
        }}
      >
        <Flex
          direction={["column-reverse", "column-reverse", "column"]}
          bg={bg}
        >
          <Container maxW="container.md">
            <Box rounded="xl" p={[5, 5, 10, 10]}>
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.youtube.com/embed/ZdBJ9G40GEs&autoplay=1"
                  srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/ZdBJ9G40GEs?autoplay=1><img src=https://img.youtube.com/vi/ZdBJ9G40GEs/hqdefault.jpg alt='Saving Lives & Forests by Revolutionizing the Cookstove Sector - BURN Manufacturing'><span>▶</span></a>"
                  // frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Saving Lives & Forests by Revolutionizing the Cookstove Sector - BURN Manufacturing"
                  loading="lazy"
                ></iframe>
              </AspectRatio>
            </Box>
          </Container>
        </Flex>
      </chakra.main>
    </>
  );
};

export default VideoSection;
