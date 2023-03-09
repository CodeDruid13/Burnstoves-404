import { isValidElement, memo } from "react";

import {
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@definitions/exports";

import { IPagetitle } from "./pagetitle";

const PageTitle: React.FC<IPagetitle.IProps> = ({
  title,
  body,
  textAlign = ["start", "start", "center"],
  align = ["center", "center", "center"],
  children,
  header,
  footer,
  ...rest
}): JSX.Element => {
  return (
    <Flex
      pos="relative"
      bg={useColorModeValue("blackAlpha.500", "gray.700")}
      pt={[24, 24, 180]}
      // pb={[5, 10, 20]}
      {...rest}
    >
      {header}
      <Flex w="full" align={"center"}>
        <VStack
          textAlign={textAlign}
          align={align}
          justify={"center"}
          w={"full"}
        >
          {isValidElement(title) ? (
            title
          ) : (
            <Heading
              data-testid="PageTitle--title"
              size="xl"
              fontFamily={"Ubuntu"}
            >
              {title}
            </Heading>
          )}
          {body && (
            <Text
              as="div"
              data-testid="PageTitle--body"
              color={useColorModeValue("gray.600", "gray.300")}
              fontSize="md"
              // maxWidth="450px"
              maxWidth={{ base: "full", lg: "30rem" }}
              align={{ base: "left", lg: "center" }}
            >
              {body}
            </Text>
          )}
          {children}
        </VStack>
      </Flex>
      {footer}
    </Flex>
  );
};

export default memo(PageTitle);
