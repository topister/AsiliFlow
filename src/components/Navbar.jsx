// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="bg-green-600 text-white py-4">
//       <div className="container mx-auto flex justify-between items-center px-6">
//         <Link to="/" className="text-2xl font-bold">
//           AsiliFlow
//         </Link>
//         <div className="space-x-6">
//           <Link to="/shop" className="hover:underline">
//             Shop
//           </Link>
//           <Link to="/about" className="hover:underline">
//             About Us
//           </Link>
//           <Link to="/contact" className="hover:underline">
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logos/svg/logo-no-background.svg";
import "./Navbar.css";

const MyNavbar = () => {
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
