import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logos/svg/logo-no-background.svg";
import "./Navbar.css";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

const MyNavbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="AsiliFlow Logo"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Link to="/cart" className="text-dark text-decoration-none">
              <BsCart3 size={24} /> {/* Cart Icon */}
              <span className="ms-1">({cart.length})</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
