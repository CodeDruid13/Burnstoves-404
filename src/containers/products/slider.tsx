import React, { memo, useContext, useEffect, useState } from "react";

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import {
  Tb3DCubeSphere,
  TbAd2,
  TbApiAppOff,
  TbArrowLeftRight,
  TbArrowsRandom,
} from "react-icons/tb";
import { useInView } from "react-intersection-observer";

import { NextSeo } from "next-seo";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  chakra,
  ChakraProps,
  Circle,
  Container,
  Flex,
  Grid,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@definitions/exports";

import { ThemeColorContext } from "@definitions/context/theme";

import ImageLazyload from "@components/image-lazyload";
import ImageLazyloadNoRatio from "@components/image-lazyload/without-aspect-ratio";

const MotionBox = motion(Box);

const SlidersSection = () => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo title="" description="" />
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
        <Stack spacing={[10, 10, 20, 32]}>
          <Box
            height="full"
            minHeight={["unset", "unset", 850]}
            py={[10, 10, 20, 32]}
            bg="black"
            color="white"
            overflow="hidden"
          >
            <Container maxW="container.xl">
              <Features />
            </Container>
          </Box>
        </Stack>
      </chakra.main>
    </>
  );
};

const Features: React.FC = memo(() => {
  const [active, setActive] = useState(0);

  const items = [
    {
      colorScheme: "orange",
      title: "Over 1,400,000 million sold",
      body: "Emits 64% less smoke",
    },
    {
      colorScheme: "orange",
      title: "98% customer satisfaction",
      body: "Great for big pots",
    },
    {
      colorScheme: "orange",
      title: "296% household return on Investment",
      body: "Lights in 5 minutes",
    },
    {
      colorScheme: "orange",
      title: "54% Thermal Efficiency",
      body: "Most trustedd cookstove brand",
    },
  ];

  const container = {
    initial: { y: 50, scale: 0.8, opacity: 0 },
    animate: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        // duration: 2,
        staggerChildren: 0.125,
      },
    },
    exit: {
      y: -50,
      scale: 1,
      opacity: 0,
      transition: {
        // duration: 1,
        staggerChildren: 0.125,
      },
    },
  };

  const item = {
    initial: { y: 50, scale: 0.8, opacity: 0 },
    animate: { y: 0, scale: 1, opacity: 1 },
    exit: { y: -50, scale: 1, opacity: 0 },
  };

  let Image1 =
    "https://res.cloudinary.com/dhhkxded1/image/upload/v1676625423/wilbroda_with_veronica_burn_manufacturing_1fd4084024.jpg?updated_at=2023-02-17T12:17:03.537Z";
  let Image2 =
    "https://res.cloudinary.com/dhhkxded1/image/upload/v1676625632/burn_manufacturing_saving_lives_and_forests_across_africa_through_innovative_clean_cooking_solutions_49dd59255e.jpg?updated_at=2023-02-17T12:20:33.115Z";
  let Image3 =
    "https://res.cloudinary.com/dhhkxded1/image/upload/v1676625717/nigeria_background_burn_manufacturing_1dc18021d0.jpg?updated_at=2023-02-17T12:21:57.625Z";

  const TemplateOverview = (
    <>
      <MotionBox h="full" w="full" variants={item}>
        <ImageLazyloadNoRatio
          objectFit={"cover"}
          objectPosition="100% 50%"
          h={["full"]}
          // w="full"
          src={Image1}
          alt={"BURN"}
        />
      </MotionBox>
      <MotionBox
        pos="absolute"
        display="flex"
        zIndex={2}
        bottom={4}
        left={[4]}
        // w="full"
        // h="full"
        variants={container}
      >
        <MotionBox
          bg="brand.400"
          rounded="full"
          pl={2}
          pr={4}
          py={2}
          mr={2}
          variants={item}
        >
          <Flex direction="row" align="center">
            <Icon as={TbArrowsRandom} w={6} h={6} mr={2} />
            <Text fontWeight="500">98% Satisfaction</Text>
          </Flex>
        </MotionBox>
        <MotionBox
          bg="brand.500"
          rounded="full"
          pl={2}
          pr={4}
          py={2}
          mr={2}
          variants={item}
        >
          <Flex direction="row" align="center">
            <Icon as={TbArrowsRandom} w={6} h={6} mr={2} />
            <Text fontWeight="500">1 year warranty</Text>
          </Flex>
        </MotionBox>
        <MotionBox
          bg="brand.600"
          rounded="full"
          pl={2}
          pr={4}
          py={2}
          variants={item}
        >
          <Flex direction="row" align="center">
            <Icon as={TbArrowsRandom} w={6} h={6} mr={2} />
            <Text fontWeight="500">296% Return on Investment</Text>
          </Flex>
        </MotionBox>
      </MotionBox>
      {/* <MotionBox
        pos="absolute"
        zIndex={2}
        top={32}
        left={[4, 8, 16]}
        w="full"
        h="full"
        variants={item}
      >
        <ImageLazyload image={Browser} />
      </MotionBox> */}
    </>
  );

  const LandingPages = (
    <>
      <MotionBox w="full" h="full" pos="relative" zIndex={0} variants={item}>
        <ImageLazyload src={Image1} alt={"BURN"} />
      </MotionBox>
      <MotionBox
        pos="absolute"
        zIndex={1}
        top={20}
        left={[2, 4, 8]}
        w="full"
        h="full"
        boxShadow="-8px 12px 10px rgba(0, 0, 0,0.25)"
        variants={item}
      >
        <ImageLazyload src={Image2} alt={"BURN"} />
      </MotionBox>
      <MotionBox
        pos="absolute"
        zIndex={2}
        top={40}
        left={[4, 8, 16]}
        w="full"
        h="full"
        boxShadow="-8px 12px 10px rgba(0, 0, 0,0.25)"
        variants={item}
      >
        <ImageLazyload src={Image3} />
      </MotionBox>
    </>
  );

  const Components = (
    <>
      <MotionBox pos="relative" zIndex={0} variants={item}>
        <Image
          objectFit={"cover"}
          objectPosition="100% 50%"
          h={"90vh"}
          // w="full"
          src={Image1}
        />
      </MotionBox>
      {/* <MotionBox
        pos="absolute"
        zIndex={2}
        top={40}
        // left={[4, 8, 20]}
        w="full"
        h="full"
        variants={item}
      >
        <Image
          objectFit={"cover"}
          objectPosition="100% 50%"
          h={"90vh"}
          // w="full"
          src={Image2}
        /> 
      </MotionBox> */}
      <MotionBox
        pos="absolute"
        zIndex={3}
        left={"18.41%"}
        right={"73.63%"}
        top={"11.09%"}
        bottom={"77.64%"}
        variants={item}
      >
        <Circle size={16} bg="teal.500">
          <Icon as={TbArrowsRandom} w={8} h={8} />
        </Circle>
      </MotionBox>
      <MotionBox
        pos="absolute"
        zIndex={4}
        left={"28.36%"}
        right={"63.68%"}
        top={"51.23%"}
        bottom={"37.5%"}
        variants={item}
      >
        <Circle size={16} bg="green.400">
          <Icon as={TbArrowsRandom} w={8} h={8} />
        </Circle>
      </MotionBox>
      <MotionBox
        pos="absolute"
        zIndex={5}
        left={"75.5%"}
        right={"16.54%"}
        top={"53.52%"}
        bottom={"35.21%"}
        variants={item}
      >
        <Circle size={16} bg="amber.600">
          <Icon as={TbArrowsRandom} w={8} h={8} />
        </Circle>
      </MotionBox>
      <MotionBox
        pos="absolute"
        zIndex={6}
        left={"63.56%"}
        right={"28.48%"}
        top={"19.54%"}
        bottom={"69.19%"}
        variants={item}
      >
        <Circle size={16} bg="deepPurple.700">
          <Icon as={TbArrowsRandom} w={8} h={8} />
        </Circle>
      </MotionBox>
      <MotionBox
        pos="absolute"
        zIndex={6}
        left={"40.92%"}
        right={"51.12%"}
        top={"80.63%"}
        bottom={"8.1%"}
        variants={item}
      >
        <Circle size={16} bg="cyan.600">
          <Icon as={TbArrowsRandom} w={8} h={8} />
        </Circle>
      </MotionBox>
    </>
  );

  const Blocks = (
    <>
      <MotionBox pos="relative" zIndex={0} variants={item}>
        {/* <Image mx="auto" src={BlockMediaBlobSVG as string} /> */}
        <Image
          objectFit={"cover"}
          objectPosition="100% 50%"
          h={"90vh"}
          // w="full"
          src={Image3}
        />
      </MotionBox>
      {/* <MotionBox
        pos="absolute"
        zIndex={1}
        w="full"
        h="full"
        left={"12.69%"}
        right={"12.69%"}
        top={"3.17%"}
        bottom={"3.17%"}
        variants={item}
      >
        <Image
          objectFit={"cover"}
          objectPosition="100% 50%"
          // w="full"
          src={Image2}
        />
      </MotionBox>
      <MotionBox
        pos="absolute"
        zIndex={2}
        w="full"
        h="full"
        left={"14.8%"}
        right={"49.13%"}
        top={"15.67%"}
        bottom={"69.89%"}
        variants={item}
      >
        <Image
          objectFit={"cover"}
          objectPosition="100% 50%"
          // w="full"
          src={Image3}
        />
      </MotionBox> */}
      {/* <MotionBox
        pos="absolute"
        zIndex={3}
        w="full"
        h="full"
        left={"18.53%"}
        right={"45.4%"}
        top={"32.22%"}
        bottom={"53.35%"}
        variants={item}
      >
        <Image
          objectFit={"cover"}
          objectPosition="100% 50%"
          // w="full"
          src={Image1}
        /> 
      </MotionBox> */}
      {/* <MotionBox
        pos="absolute"
        zIndex={3}
        w="full"
        h="full"
        left={"15.55%"}
        right={"48.38%"}
        top={"48.77%"}
        bottom={"14.26%"}
        variants={item}
      >
        <Image
          objectFit={"cover"}
          objectPosition="100% 50%"
          // w="full"
          src={Image1}
        />
      </MotionBox>
      <MotionBox
        pos="absolute"
        display={["none", "inline", "inline"]}
        zIndex={3}
        w="full"
        h="full"
        left={"60.45%"}
        right={"14.68%"}
        top={"18.31%"}
        bottom={"39.44%"}
        variants={item}
      >
        <Image
          objectFit={"cover"}
          objectPosition="100% 50%"
          // w="full"
          src={Image2}
        />
      </MotionBox>
      <MotionBox
        pos="absolute"
        display={["none", "inline", "inline"]}
        zIndex={3}
        w="full"
        h="full"
        left={"55.97%"}
        right={"19.15%"}
        top={"62.68%"}
        bottom={"10.04%"}
        variants={item}
      >
        <Image
          objectFit={"cover"}
          objectPosition="100% 50%"
          // w="full"
          src={Image3}
        />
      </MotionBox> */}
    </>
  );

  const slides = [TemplateOverview, LandingPages, Components, Blocks];

  return (
    <Grid gap={10} templateColumns={["1fr", "1fr", "1fr 2fr"]}>
      <Box>
        <Text fontSize={"3xl"} fontWeight={600} mb={8}>
          Our stoves have impacted 15M+ lives
        </Text>

        <Text
          mb={10}
          color="whiteAlpha.800"
          fontWeight={300}
          fontSize={["md", "lg", "xl"]}
        >
          Biggest, most durable & most powerful household stoves in Africa​
          best.
        </Text>

        <AccordionCarousel items={items} onChange={setActive} />
      </Box>
      <AnimatePresence exitBeforeEnter>
        <MotionBox
          key={`animation-${active}`}
          // bg={`${items[active].colorScheme}.500`}
          variants={container}
          initial="initial"
          animate="animate"
          exit="exit"
          pos="relative"
        >
          {slides[active] ? slides[active] : items[active].title}
        </MotionBox>
      </AnimatePresence>
    </Grid>
  );
});

const AccordionCarousel: React.FC<{
  duration?: number;
  items: { title: string; body: string; colorScheme: string }[];
  onChange: (index: number) => void;
}> = memo(({ duration = 5000, items = [], onChange }) => {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("animate");
    if (!inView) controls.start("stop");
  }, [active, inView]);

  useEffect(() => {
    onChange(active);
  }, [active]);

  const completed = (e: string): void => {
    const nextIndex = (active + 1) % items.length;
    if (e === "animate") setActive(nextIndex);
  };

  const variants = {
    animate: {
      width: "100%",
      transition: { ease: "linear", duration: duration / 1000 },
    },
    stop: { width: "0%" },
    init: { display: "none", width: "0%" },
  };

  // const hoverHandle = (e) => console.log("hover hande", e.type, e.target, e);
  return (
    <Accordion
      ref={ref}
      defaultIndex={0}
      index={active}
      onChange={(index) => setActive(index as number)}
    >
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          borderBottomColor="whiteAlpha.500"
          borderTopColor="whiteAlpha.500"
          // onMouseEnter={hoverHandle}
          // onMouseLeave={hoverHandle}
        >
          {({ isExpanded }) => (
            <>
              {isExpanded && (
                <MotionBox
                  height={0.5}
                  width="0%"
                  bg={`${item.colorScheme}.500`}
                  rounded="full"
                  variants={variants}
                  // animate={idx === active ? "animate" : "init"}
                  animate={controls}
                  initial="stop"
                  onAnimationComplete={completed}
                />
              )}
              <AccordionButton>
                <Box py={2} flex="1" textAlign="left">
                  <Text as="h3" fontSize="lg" fontWeight={400}>
                    {item.title}
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>{item.body}</AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
});

const WhyTraceability: React.FC = memo(() => {
  const items = [
    {
      title: "Management",
      body: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.",
      colorScheme: "pink",
      icon: Tb3DCubeSphere,
    },
    {
      title: "Monitoring",
      body: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.",
      colorScheme: "teal",
      icon: TbAd2,
    },
    {
      title: "Tracking",
      body: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.",
      colorScheme: "yellow",
      icon: TbApiAppOff,
    },
    {
      title: "Recall",
      body: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.",
      colorScheme: "purple",
      icon: TbArrowLeftRight,
    },
  ];
  return (
    <SimpleGrid
      width="full"
      columns={[1, 2, 2, 4]}
      spacingY={[14]}
      spacingX={[5, 5, 10, 10]}
    >
      {items.map((item, idx) => (
        <Box
          pos="relative"
          key={idx}
          bg={useColorModeValue(
            `${item.colorScheme}.50`,
            `${item.colorScheme}.900`,
          )}
          p={6}
          rounded="xl"
        >
          <Circle
            mt={-16}
            mb={6}
            bg={useColorModeValue(
              `${item.colorScheme}.300`,
              `${item.colorScheme}.600`,
            )}
            size={20}
          >
            <Icon
              color={useColorModeValue(
                `${item.colorScheme}.700`,
                `${item.colorScheme}.300`,
              )}
              fontSize="3xl"
              as={item.icon}
            />
          </Circle>

          <Text fontWeight={400} fontSize="2xl" mb={6}>
            A simple Test
          </Text>

          <Text>A simple description</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
});

const DotCircle: React.FC<ChakraProps> = memo((props) => {
  const grayDots =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAY1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIAbxiAAAAIXRSTlMAIiYHGA4QHAYkHwIpGg8SJwEFAwoLFAQZFQ0IERcdJSCXUnc2AAABFUlEQVR4AezWBW7EMABE0XXIzMt8/1P2lysuuJyR9EbKiENe/KWIrsehG3HqJCptLNU1GQSyuB69CxidwT4JS7kmQ4d0n7H0FWuvMGOzocc3Zs7gC05+iSu/xs12lynfZBi+7ukaQ8VlUNiHFdZxn6nQZBhxzhszxYqr2OMh7rEeQ6Zik2H6uqdLGoVrs8K9OWE5bzNlmgwS57wxqs+4efgJlBd/h3bDQqcet2nEYzpjf7laKjUZNPJICIU7sccgtqiu0lKiycCDTKy9Ndv8JJdaDm/JnK/7ds2Huxt260AAAAAAAMj/tREqzN3czd3czd3czd3czd3czd3cNXdzN3dz19zN3dzN3dzN3dzNndFj6dUwAgCNSIECCYU8DAAAAABJRU5ErkJggg==";
  const whiteDots =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAY1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////80LMUcAAAAIXRSTlMAIiYHGA4QHAYkHwIpGg8SJwEFAwoLFAQZFQ0IERcdJSCXUnc2AAABFUlEQVR4AezWBW7EMABE0XXIzMt8/1P2lysuuJyR9EbKiENe/KWIrsehG3HqJCptLNU1GQSyuB69CxidwT4JS7kmQ4d0n7H0FWuvMGOzocc3Zs7gC05+iSu/xs12lynfZBi+7ukaQ8VlUNiHFdZxn6nQZBhxzhszxYqr2OMh7rEeQ6Zik2H6uqdLGoVrs8K9OWE5bzNlmgwS57wxqs+4efgJlBd/h3bDQqcet2nEYzpjf7laKjUZNPJICIU7sccgtqiu0lKiycCDTKy9Ndv8JJdaDm/JnK/7ds2Huxt260AAAAAAAMj/tREqzN3czd3czd3czd3czd3czd3cNXdzN3dz19zN3dzN3dzN3dzNndFj6dUwAgCNSIECCYU8DAAAAABJRU5ErkJggg==";
  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      // width="429"
      // height="429"
      width="full"
      height="full"
      viewBox="0 0 429 429"
      fill="none"
      {...props}
    >
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="429"
        height="429"
      >
        <circle cx="214.5" cy="214.5" r="214.5" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0)">
        <rect
          x="-33.9434"
          y="-49.3792"
          width="624"
          height="624"
          fill="url(#pattern0)"
          fillOpacity="1"
        />
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="0.068"
          height="0.068"
        >
          <use xlinkHref="#image0" transform="scale(0.000677976)" />
        </pattern>
        <image
          id="image0"
          width="100"
          height="100"
          xlinkHref={useColorModeValue(grayDots, whiteDots)}
        />
      </defs>
    </chakra.svg>
  );
});

export default SlidersSection;
