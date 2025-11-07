import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <Navbar expand="lg" className={`navbar ${isScrolled ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="align-items-center">
              <Nav.Link as={Link} to="/">HOME</Nav.Link>
              <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
              <Nav.Link as={Link} to="/menu">OUR MENU</Nav.Link>
              <Nav.Link as={Link} to="/shop">SHOP</Nav.Link>
              <Nav.Link as={Link} to="/blog">BLOG</Nav.Link>
              <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
              <Nav.Link as={Link} to="/cart" className="cart-link">
                <div className="cart-icon-wrapper">
                  <i className="bi bi-cart-fill"></i>
                  <span className="cart-badge">2</span>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
