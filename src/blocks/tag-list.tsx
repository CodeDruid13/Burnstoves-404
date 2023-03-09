import { memo } from "react";

import NextLink from "next/link";

import {
  Button,
  ButtonProps,
  ChakraProps,
  ThemingProps,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@definitions/exports";

interface ITagListBlock extends ChakraProps, ThemingProps {
  items: { title: string; href: string }[];
}

const TagListBlock: React.FC<ITagListBlock> = ({ items = [], colorScheme }) => {
  const tagButton: ButtonProps = {
    transition: "all ease 150ms",
    _hover: colorScheme
      ? {
          color: useColorModeValue(`whiteAlpha.900`, `whiteAlpha.800`),
          bg: useColorModeValue(`${colorScheme}.400`, `${colorScheme}.600`),
        }
      : undefined,
    as: "a",
    borderRadius: "full",
  };
  return (
    <Wrap>
      {items.map((t, idx) => (
        <WrapItem key={idx}>
          <NextLink href={`${t.href}`} passHref>
            <Button {...tagButton}>{t.title}</Button>
          </NextLink>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default memo(TagListBlock);
