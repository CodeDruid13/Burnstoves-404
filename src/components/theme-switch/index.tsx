import React, { memo } from "react";

import { IoMoon, IoSunny } from "react-icons/io5";

import { Button, ChakraProps, useColorMode } from "@definitions/exports";

const ThemeSwitch: React.FC<ChakraProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      flexShrink={0}
      variant="ghost"
      size="md"
      onClick={toggleColorMode}
      {...props}
    >
      {colorMode === "light" ? <IoMoon size="12px" /> : <IoSunny size="12px" />}
    </Button>
  );
};

export default memo(ThemeSwitch);
