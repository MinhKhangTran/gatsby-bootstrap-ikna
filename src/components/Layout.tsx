import React from "react";
import "../styles/main.scss";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <main data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="0" class="scrollspy-example" tabindex="0">{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
