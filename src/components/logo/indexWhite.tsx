import { memo } from "react";

import { IconProps } from "@definitions/exports";

import LogoIcon from "@assets/svg/LogoWhite.svg";
import Image from "next/image";

const Logo: React.FC<IconProps> = (): JSX.Element => {
  return (
    <Image src={LogoIcon as string} alt="Burn Manufacturing" width={150} />
  );
};
export default memo(Logo);
