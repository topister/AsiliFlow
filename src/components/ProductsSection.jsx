import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import sanitaryPadsImg from "../assets/SanitaryPacks/5.png";
import otherProductImg from "../assets/SanitaryPacks/6.png";
import { ArrowRight } from "react-bootstrap-icons";
import "./ProductsSection.css";

const ProductsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="products-section">
      <Container>
        <Row
          className="justify-content-center card-row"
          style={{ margin: "80px 0px 80px 0px" }}
        >
          {/* Heading and description */}
          <div className="text-center mb-5 md-5">
            <h2 className="section-title">
              Empowering women with Comfort and Care
            </h2>
            <p className="section-text md-5">
              Our high-quality sanitary pads, liners and menstrual cups provide
              comfort and reliability, ensuring every woman has access to safe
              and sustainable period care.
            </p>
          </div>
          {/* Left Card - Sanitary Pads */}
          <Col md={5} className="mb-4">
            <Card className="product-card text-white">
              <Card.Img
                src={sanitaryPadsImg}
                alt="Sanitary Pads"
                className="card-bg-img"
              />
              <Card.Body className="d-flex flex-column justify-content-end align-items-center">
                <Button
                  variant="light"
                  className="product-btn"
                  onClick={() => navigate("/sanitary-pads")}
                >
                  SANITARY PADS <ArrowRight />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Card - Placeholder for Future Product */}
          <Col md={5} className="mb-4">
            <Card className="product-card text-white">
              <Card.Img
                src={otherProductImg}
                alt="Other Product"
                className="card-bg-img"
              />
              <Card.Body className="d-flex flex-column justify-content-end align-items-center">
                <Button variant="light" className="product-btn">
                  LINERS <ArrowRight />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductsSection;
