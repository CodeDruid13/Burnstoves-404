import { memo, useCallback, useContext, useEffect } from "react";

import NextLink from "next/link";
import { useRouter } from "next/router";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@definitions/exports";

import {
  MobileMenuActions,
  MobileMenuCtx,
} from "@definitions/context/mobile.menu";
import { more } from "@definitions/navigation/main";

import MenuItemTag from "./menu-item-tag";
import { INavbar } from "./navbar";

const MobileNavbar: React.FC = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(MobileMenuCtx);
  const toggleMoreHandler = useCallback(() => {
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
    return () => {
      router.events.off("routeChangeStart", closeHandler);
    };
  }, [router]);

  return (
    <Drawer isOpen={state.isOpen} onClose={toggleMoreHandler} placement="right">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />

        <DrawerBody>
          <Stack mt={10} w="full" spacing={2}>
            {more.map((link, index) => (
              <MobileNavItem key={index} {...link} />
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const MobileNavItem: React.FC<INavbar.IItem> = memo(
  ({ title, subitems, href }) => {
    return (
      <>
        {subitems ? (
          <MobileNavSubitems href={href} title={title} subitems={subitems} />
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
        <Flex as="p" w="full" justify="space-between" align="center">
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
                title={item.title}
                href={item.href}
                subitems={item.subitems}
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
  ({ title, href }) => {
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
                <Flex as="span" align="center">
                  <Text mr="auto" as="span">
                    {title}
                  </Text>
                  <MenuItemTag title={title} />
                </Flex>
              </Link>
            ) : (
              <Flex w="full" py={2} px={4}>
                <Text mr="auto" as="span">
                  {title}
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
