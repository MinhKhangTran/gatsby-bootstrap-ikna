import React from "react";
import "../styles/main.scss";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
