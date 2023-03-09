import { memo } from "react";

import { IconProps } from "@definitions/exports";

import LogoIcon from "@assets/svg/Logo.svg";
import Image from "next/image";

const Logo: React.FC<IconProps> = (): JSX.Element => {
  return (
    <Image
      src={LogoIcon as string}
      alt="Burn Manufacturing"
      width={150}
      // height={"75px"}
    />
  );
};

export default memo(Logo);
