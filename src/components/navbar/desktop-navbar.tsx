// @ts-nocheck
import { memo, useCallback, useContext, useEffect, useState } from "react";

import { RiArrowRightFill, RiMenuFill } from "react-icons/ri";

import NextLink from "next/link";
import { useRouter } from "next/router";

import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@definitions/exports";

import {
  MobileMenuActions,
  MobileMenuCtx,
  MobileMenuProvider,
} from "@definitions/context/mobile.menu";
import { main } from "@definitions/navigation/main";
import customScrollbar from "@definitions/utils/scrollbar";

import { LogoWhite } from "@components/logo/logo-white";
import { LogoWithSiteName } from "@components/logo/logo-with-site-name";

import ButtonTransparent from "@components/button/button-transparent";
import Image from "next/image";
import MobileNavbar from "./mobile-navbar";
import { INavbar } from "./navbar";
import ThemeSwitch from "@components/theme-switch";

const NavbarDefault: React.FC<INavbar.IProps> = ({
  isDark,
  justifyContent = "space-between",
  items,
  startItems,
  endItems,
  children,
  colorScheme,
  ...rest
}) => {
  const color = isDark ? "whiteAlpha.900" : "currentColor";

  const { colorMode, toggleColorMode } = useColorMode();
  const [navColor, setnavColor] = useState(
    useColorModeValue("white", "gray.200"),
  );

  const [logoType, setlogoType] = useState(false);

  // const listenDarkScrollEvent = () => {
  //   window.scrollY > 1 ? setnavColor("gray.200") : setnavColor("white");
  // };

  const listenLightScrollEvent = () => {
    window.scrollY > 1 ? setlogoType(true) : setlogoType(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenLightScrollEvent);
  });

  return (
    <MobileMenuProvider>
      <Box
        // bg={useColorModeValue("transparent", "transparent")}
        // rounded={"full"}
        // ref={scrollRef}
        py={6}
        overflowX="auto"
        sx={customScrollbar()}
        {...rest}
        px={{ base: "20px", md: "125px" }}
      >
        <Flex align="center" justify={justifyContent}>
          {logoType ? (
            <LogoWithSiteName color={color} />
          ) : (
            <LogoWhite color={color} />
          )}
          {startItems ? startItems : null}

          <HStack
            as="nav"
            // spacing={[0, 0, 1, 1]}
            display={["none", "none", "flex"]}
          >
            <AllMenu isDark={isDark} items={items ? items : main} />
          </HStack>

          {endItems ? (
            endItems
          ) : (
            <Stack
              flex={{ base: 1, md: 0 }}
              justify="flex-end"
              alignItems="center"
              direction="row"
              spacing={6}
            >
              <Link
                href={"/support/buy/kenya"}
                passHref
                as={NextLink}
                style={{ textDecoration: "none" }}
              >
                <ButtonTransparent
                  bgColor={"brand.500"}
                  paddingX={4}
                  borderRadius={"full"}
                  height={"40px"}
                  _hover={{
                    backgroundColor: "brand.1000",
                  }}
                  color={"white"}
                  aria-label="Buy a Jiko/Stove"
                  display={["none", "none", "flex"]}
                >
                  Buy a Jiko/Stove
                </ButtonTransparent>
              </Link>

              {/* <ThemeSwitch /> */}

              <MobileNavButton />
            </Stack>
          )}
        </Flex>
        {children ? children : <MobileNavbar />}
      </Box>
    </MobileMenuProvider>
  );
};

const AllMenu = memo(
  ({ isDark, items }: { isDark?: boolean; items: INavbar.IItem[] }) => {
    const linkFontSize = "md";
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.900");
    const { asPath, pathname } = useRouter();
    const { colorMode, toggleColorMode } = useColorMode();
    const [navColor, setnavColor] = useState(
      useColorModeValue("white", "gray.200"),
    );

    const [navTextColor, setnavTextColor] = useState(
      useColorModeValue("white", "gray.200"),
    );

    const listenLightScrollEvent = () => {
      window.scrollY > 1
        ? setnavTextColor("gray.600")
        : setnavTextColor("white");
    };

    const listenDarkScrollEvent = () => {
      window.scrollY > 1 ? setnavColor("gray.200") : setnavColor("white");
    };

    useEffect(() => {
      if (colorMode === "light") {
        window.addEventListener("scroll", listenLightScrollEvent);
        return;
      } else {
        window.addEventListener("scroll", listenDarkScrollEvent);
        return;
      }
    });

    //Garbage Code
    const checkitem = (linkio: any) => {
      if (linkio === pathname) {
        return useColorModeValue("brand.500", "gray.100");
      } else if (window.scrollY > 1 && linkio !== pathname) {
        return useColorModeValue("gray.600", "gray.100");
      }
      return useColorModeValue("white", "gray.100");
    };

    return (
      <>
        {items.map((item) => (
          <Flex key={item.title}>
            {item.subitems ? (
              <Popover trigger="hover" placement="bottom">
                <Tooltip aria-label="tooltip" placement="bottom">
                  <Box display="inline-block">
                    <PopoverTrigger>
                      <Text
                        color={navColor}
                        cursor="pointer"
                        textStyle="button"
                        fontWeight={500}
                        fontFamily={"Ubuntu"}
                        _hover={{
                          textDecoration: "none",
                          color: "brand.500",
                        }}
                      >
                        <Link
                          href={item.href}
                          passHref
                          as={NextLink}
                          p={2}
                          fontSize={linkFontSize}
                          fontWeight={500}
                          fontFamily={"Ubuntu"}
                          color={checkitem(item.href)}
                          _hover={{
                            textDecoration: "none",
                            color: "brand.500",
                          }}
                        >
                          {item.title}
                          <ChevronDownIcon h={"1.2em"} w={"1.2em"} ml={2} />
                        </Link>
                      </Text>
                    </PopoverTrigger>
                  </Box>
                </Tooltip>

                {item.subitems && (
                  <PopoverContent
                    border={0}
                    boxShadow={"xl"}
                    bg={popoverContentBgColor}
                    p={0}
                    rounded={"md"}
                    mt="25px"
                    // aria-haspopup={""}
                  >
                    <PopoverArrow />

                    <Box minHeight="fit-content" p="1.2rem">
                      <Box>
                        <Flex w="100%" flexDirection={"column"}>
                          {item.subitems.map((item, idx) => (
                            <DesktopSubNav
                              key={idx}
                              {...item}
                              // colorScheme={colorScheme}
                            />
                          ))}
                        </Flex>
                      </Box>
                    </Box>
                  </PopoverContent>
                )}
              </Popover>
            ) : (
              <Link
                href={item.href}
                passHref
                as={NextLink}
                p={2}
                fontSize={linkFontSize}
                fontWeight={500}
                fontFamily={"Ubuntu"}
                color={checkitem(item.href)}
                _hover={{
                  textDecoration: "none",
                  color: "brand.500",
                }}
                onClick={() => {
                  console.log(item.href);
                }}
              >
                {item.title}
              </Link>
            )}
          </Flex>
        ))}
      </>
    );
  },
);

const DesktopSubNav = ({
  icon,
  title,
  href,
  subtitle,
  colorScheme,
}: INavbar.IItem) => {
  const hoverBG = useColorModeValue(`${colorScheme}.50`, "gray.800");
  const titleColor = useColorModeValue("currentColor", "gray.500");
  const hoverTitleColor = useColorModeValue("brand.500", "gray.400");
  const descriptionColor = useColorModeValue("blackAlpha.600", "gray.600");
  const hoverColorDescription = useColorModeValue("blackAlpha.700", "gray.600");
  return (
    <Link
      role="group"
      rounded="md"
      _hover={{ bg: hoverBG }}
      href={href}
      passHref
      as={NextLink}
    >
      <Flex direction="row" w="100%" mt="25px">
        {icon && (
          <Flex alignSelf="start" mr={2}>
            <Image
              src={icon}
              alt={"BURN Manufacturing"}
              width={30}
              height={30}
            />
          </Flex>
        )}
        <Flex direction="column" ml={2}>
          <Text
            transition={"all 250ms ease-in-out"}
            color={titleColor}
            _groupHover={{ color: hoverTitleColor }}
            fontWeight={500}
            fontFamily={"Ubuntu"}
            mb={0}
          >
            {title}
          </Text>
          <Text
            fontSize="sm"
            color={descriptionColor}
            fontFamily={"Ubuntu"}
            _groupHover={{ color: hoverColorDescription }}
          >
            {subtitle}
          </Text>
        </Flex>
        <Flex
          flex={1}
          align="center"
          justify="flex-end"
          opacity={0}
          transition="all 250ms ease-in-out"
          transform="translateX(-10px)"
          _groupHover={{
            opacity: 1,
            transform: "translateX(0)",
            color: "brand.500",
          }}
        >
          <Icon
            as={RiArrowRightFill}
            color={`${colorScheme}.400`}
            w={5}
            h={5}
          />
        </Flex>
      </Flex>
    </Link>
  );
};
DesktopSubNav.displayName = "DesktopSubNav";

const MobileNavButton = memo(() => {
  const { state, dispatch } = useContext(MobileMenuCtx);
  const toggleHandler = useCallback(() => {
    dispatch({
      type: MobileMenuActions.TOGGLE,
    });
  }, [dispatch]);
  return (
    <IconButton
      size={"md"}
      icon={state.isOpen ? <CloseIcon /> : <HamburgerIcon />}
      aria-label="Open Menu"
      display={{ md: "none" }}
      onClick={toggleHandler}
    />
  );
});

const MoreButton = memo(() => {
  const { state, dispatch } = useContext(MobileMenuCtx);
  const titleColor = useColorModeValue("black", "white");

  const toggleMoreHandler = useCallback(() => {
    dispatch({
      type: MobileMenuActions.TOGGLE,
    });
  }, [dispatch]);
  return (
    <IconButton
      aria-label="Open Menu"
      icon={<RiMenuFill fontSize={"30px"} color={titleColor} />}
      colorScheme="transparent"
      display={["none", "none", "flex"]}
      onClick={toggleMoreHandler}
    />
  );
});

export default memo(NavbarDefault);
