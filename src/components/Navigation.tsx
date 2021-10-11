import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../images/LOGO.svg";
import { FaChevronCircleUp } from "react-icons/fa";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      window.scrollY === 0 ? setScrolled(false) : setScrolled(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrolled]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <>
      <Navbar
        id="mainNav"
        fixed="top"
        bg="white"
        expand="lg"
        className={`${scrolled && "nav_scrolled"}`}
        collapseOnSelect
      >
        <Container>
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="ikna" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#feature">Features</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
              <Nav.Link href="#team">Team</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="back_to_top">
        <FaChevronCircleUp
          onClick={scrollToTop}
          style={{ display: scrolled ? "inline" : "none" }}
        />
      </div>
    </>
  );
};

export default Navigation;
