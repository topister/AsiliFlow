import { Container, Row, Col, Button } from "react-bootstrap";
import "./OurOffer.css";

const OurOffer = () => {
  return (
    <section className="next-section">
      <Container fluid>
        <Row className="align-items-center">
          {/* Right: Text Content */}
          <Col lg={6} className="right-section">
            <h2 className="section-heading">
              You deserve the softest, comfiest, period ally.
            </h2>
            <p className="section-description">
              Say hello to peaceful nights and uninterrupted sleep with our
              overnight super absorbent pad! Crafted with a GOTS certified 100%
              organic top sheet, this pad ensures a comfortable period
              experience.
            </p>
            <Button href="/shop" className="shop-now-btn">
              Shop Now
            </Button>
          </Col>
          {/* Left: Background Image */}
          <Col lg={6} className="left-section"></Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurOffer;
