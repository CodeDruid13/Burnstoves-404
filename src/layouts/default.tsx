import React, { memo } from "react";

import dynamic from "next/dynamic";

import { ChakraProps, Spinner } from "@definitions/exports";

import Footer from "@components/footer/footer";
import Header from "@components/header";

import { ILayout } from "./layouts";

const FooterDefault = dynamic<ChakraProps>(
  () => import("@components/footer/footer"),
  {
    loading: () => <Spinner />,
  },
);

const DefaultLayout: React.FC<ILayout.IProps> = ({
  header,
  stickyHeader = true,
  darkHeader = false,
  footer,
  children,
}): JSX.Element => {
  return (
    <>
      {header ? header : <Header isDark={darkHeader} isSticky={stickyHeader} />}
      {children}
      {footer ? footer : <Footer />}
    </>
  );
};

export default memo(DefaultLayout);
