import { memo } from "react";

import {
  chakra,
  Flex,
  Link,
  useColorModeValue,
  useToken,
} from "@definitions/exports";

import NextLink from "next/link";

const LinkButton: React.FC<{
  children?: any;
  color?: any;
  bgColor?: any;
  paddingX?: any;
  paddingY?: any;
  border?: any;
  borderRadius?: any;
  borderColor?: any;
  href?: any;
  _hover?: any;
}> = memo(
  ({
    children,
    color,
    bgColor,
    paddingX,
    paddingY,
    border,
    borderRadius,
    borderColor,
    href,
    _hover,
    // ...rest
  }) => {
    const fill = color
      ? useToken("colors", color as string)
      : useColorModeValue("#F58426", "#FFF");
    return (
      <Link
        href={href}
        passHref
        as={NextLink}
        bg={bgColor}
        borderRadius={borderRadius}
        paddingY={paddingY}
        borderColor={borderColor}
        role="group"
        variant="unstyled"
        // {...rest}
      >
        <Flex alignItems="center" px={paddingX}>
          <chakra.span
            fontSize={"sm"}
            lineHeight={1}
            mr="3"
            transition="all 300ms ease"
            // _groupHover={{
            //   ml: 3,
            // }}
          >
            {children}
          </chakra.span>

          <chakra.span
            sx={{
              width: "0px",
              height: "0px",
              background: fill,
              display: "inline-block",
              margin: "0",
              transition: "width 300ms ease",
              transform: "translateY(-0.5px)",
            }}
            _groupHover={{
              width: "20px",
              height: "1px",
            }}
          />
          <chakra.span
            sx={{
              width: 0,
              height: 0,
              display: "inline-block",
              marginLeft: 0,
              marginRight: "auto",
              borderStyle: "solid",
              // borderWidth: "4px 0 4px 4px",
              borderColor: `transparent transparent transparent ${fill}`,
              opacity: 1,
            }}
            _groupHover={{
              borderWidth: "4px 0 4px 4px",
            }}
          />
        </Flex>
      </Link>
    );
  },
);

export default memo(LinkButton);
