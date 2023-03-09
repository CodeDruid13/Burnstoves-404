import { memo } from "react";

import {
  Button,
  ButtonProps,
  chakra,
  Flex,
  useToken,
  useColorModeValue,
} from "@definitions/exports";

const ButtonLongArrow: React.FC<ButtonProps> = ({
  children,
  color,
  bgColor,
  paddingX,
  paddingY,
  border,
  borderRadius,
  ...rest
}): JSX.Element => {
  const fill = color
    ? useToken("colors", color as string)
    : useColorModeValue("#fff", "#FFF");
  return (
    <Button
      role="group"
      variant="unstyled"
      {...rest}
      bg={bgColor}
      borderRadius={borderRadius}
      paddingY={paddingY}
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
          // px={paddingX}
        >
          {children}
        </chakra.span>

        <chakra.span
          sx={{
            width: "20px",
            height: "1px",
            background: fill,
            display: "inline-block",
            margin: "0",
            transition: "width 300ms ease",
            transform: "translateY(-0.5px)",
          }}
          _groupHover={{
            width: "40px",
          }}
          // px={paddingX}
        />
        <chakra.span
          sx={{
            width: 0,
            height: 0,
            display: "inline-block",
            marginLeft: 0,
            marginRight: "auto",
            borderStyle: "solid",
            borderWidth: "4px 0 4px 4px",
            borderColor: `transparent transparent transparent ${fill}`,
            opacity: 1,
          }}
          // px={paddingX}
        />
      </Flex>
    </Button>
  );
};

export default memo(ButtonLongArrow);
