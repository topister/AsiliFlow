import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logos/svg/logo-no-background.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-top">
          {/* Company Logo */}
          <Col md={3} className="footer-logo">
            <img src={logo} alt="AsiliFlow Logo" />
          </Col>

          {/* Product Links */}
          <Col md={3} className="footer-links">
            <h5>Products</h5>
            <ul>
              <li>
                <Link to="/overnight-pads">Overnight Pads</Link>
              </li>
              <li>
                <Link to="/regular-pads">Regular Pads</Link>
              </li>
              <li>
                <Link to="/plush-liners">Plush Liners</Link>
              </li>

              <li>
                <Link to="/heavy-pads">Heavy Pads</Link>
              </li>
            </ul>
          </Col>

          {/* Company Info Links */}
          <Col md={3} className="footer-links">
            <h5>Company</h5>
            <ul>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </Col>

          {/* Policy Links */}
          <Col md={3} className="footer-links">
            <h5>Legal</h5>
            <ul>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/shipping-refund">Shipping & Refund</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Email Subscription */}
        <Row className="footer-subscribe">
          <Col md={8} className="subscribe-text">
            <p>
              Subscribe to stay updated with our latest products and offers.
            </p>
          </Col>
          <Col md={4}>
            <Form className="subscribe-form">
              <Form.Control type="email" placeholder="Your Email" />
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="footer-bottom">
          <Col>
            <p>Copyright &copy; 2025 AsiliFlow</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
