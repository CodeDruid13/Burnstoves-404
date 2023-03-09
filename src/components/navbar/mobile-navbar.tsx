import { memo, useCallback, useContext, useEffect } from "react";

import NextLink from "next/link";
import { useRouter } from "next/router";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Text,
  Icon,
  useDisclosure,
  Stack,
  Link,
  useColorModeValue,
  Collapse,
  DrawerHeader,
} from "@definitions/exports";

import {
  MobileMenuActions,
  MobileMenuCtx,
} from "@definitions/context/mobile.menu";
import { mobile } from "@definitions/navigation/main";

import MenuItemTag from "./menu-item-tag";
import { INavbar } from "./navbar";

const MobileNavbar: React.FC = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(MobileMenuCtx);
  const toggleHandler = useCallback(() => {
    dispatch({
      type: MobileMenuActions.TOGGLE,
    });
  }, [dispatch]);

  const closeHandler = useCallback(() => {
    dispatch({
      type: MobileMenuActions.CLOSE,
    });
  }, [dispatch]);

  useEffect(() => {
    router.events.on("routeChangeStart", closeHandler);
    // router.events.on("routeChangeComplete", toggleHandler);
    // router.events.on('routeChangeError', toggleHandler)

    return () => {
      router.events.off("routeChangeStart", closeHandler);
      // router.events.off("routeChangeComplete", toggleHandler);
      // router.events.off('routeChangeError', toggleHandler)
    };
  }, [router]);

  return (
    <Drawer isOpen={state.isOpen} onClose={toggleHandler} placement="right">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader mt="25px">
          <DrawerCloseButton />
        </DrawerHeader>

        <DrawerBody>
          <Stack w="full" spacing={2}>
            {mobile.map((link, index) => (
              <MobileNavItem key={index} {...link} />
            ))}
          </Stack>
          <Link
            href={"/support/buy/kenya"}
            passHref
            as={NextLink}
            style={{ textDecoration: "none" }}
          >
            <Button
              fontSize="sm"
              backgroundColor="brand.500"
              rounded={"full"}
              color="white"
              _hover={{ bg: "brand.700" }}
              mt="10px"
              w="full"
              aria-label="Buy a Jiko/Stove"
            >
              Buy a Jiko/Stove
            </Button>
          </Link>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const MobileNavItem: React.FC<INavbar.IItem> = memo(
  ({ title, subitems, href, subtitle }) => {
    return (
      <>
        {subitems ? (
          <MobileNavSubitems
            href={href}
            title={title}
            subitems={subitems}
            subtitle={title}
          />
        ) : (
          <Link href={href} passHref as={NextLink}>
            <Button justifyContent="start" w={"full"} variant="ghost">
              {title}
            </Button>
          </Link>
        )}
      </>
    );
  },
);

const MobileNavSubitems: React.FC<INavbar.IItem> = ({
  title,
  // href,
  subitems,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack align="start" w="full" spacing={2} onClick={onToggle}>
      <Button w={"full"} isActive={isOpen} variant="ghost">
        <Flex
          as="p"
          w="full"
          justify="space-between"
          align="center"
          direction="row"
        >
          {title}
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        </Flex>
      </Button>
      <Collapse
        in={isOpen}
        animateOpacity
        style={{ width: "100%", marginTop: "0!important" }}
      >
        <Stack
          ml={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.600")}
          align={"start"}
          w="full"
        >
          {isOpen &&
            subitems.map((item, index) => (
              // Mobile Sub Items
              <MobileNavItemSubitem
                key={index}
                title={item?.title}
                subtitle={item?.subtitle}
                href={item?.href}
                subitems={item?.subitems}
              />
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const MobileNavItemDivider = memo(() => {
  return (
    <Box w="full">
      <Divider />
    </Box>
  );
});

const MobileNavItemSubitem: React.FC<INavbar.IItem> = memo(
  ({ title, href, subtitle }) => {
    return (
      <>
        {title == "---" ? (
          <MobileNavItemDivider />
        ) : (
          <>
            {href ? (
              <Link
                href={href}
                passHref
                as={NextLink}
                rounded="lg"
                _hover={{
                  bg: useColorModeValue("gray.100", "whiteAlpha.200"),
                  textDecoration: "none",
                }}
                w="full"
                py={2}
                px={4}
              >
                {/* <Flex as="span" align="center">
                    <Text mr="auto" as="span">
                      {title}
                    </Text>
                    <MenuItemTag title={title} />
                  </Flex> */}
                <Flex direction="column" ml={2}>
                  <Text
                    transition={"all 250ms ease-in-out"}
                    fontWeight={500}
                    mb={0}
                  >
                    {title}
                  </Text>
                  <Text fontSize="sm" color={"blackAlpha.600"}>
                    {subtitle}
                  </Text>
                </Flex>
              </Link>
            ) : (
              <Flex w="full" py={2} px={4}>
                <Text mr="auto" as="span">
                  1 {title}
                </Text>
                <MenuItemTag title={title} />
              </Flex>
            )}
          </>
        )}
      </>
    );
  },
);

export default memo(MobileNavbar);
