import { Container, Button } from "react-bootstrap";
import "./Hero.css";
import "./Shop.css";
import { Row, Col, Carousel } from "react-bootstrap";
import heroImage1 from "../assets/SanitaryPacks/1.png";
import heroImage2 from "../assets/SanitaryPacks/2.png";
import heroImage3 from "../assets/SanitaryPacks/3.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <Container fluid>
        <Row className="align-items-center">
          {/* Left Side - Image Slider */}
          <Col md={6} className="hero-slider">
            <Carousel fade>
              <Carousel.Item>
                <img src={heroImage1} alt="Slide 1" className="img-fluid" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={heroImage2} alt="Slide 2" className="img-fluid" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={heroImage3} alt="Slide 3" className="img-fluid" />
              </Carousel.Item>
            </Carousel>
          </Col>

          {/* Right Side - Text & Buttons */}
          <Col md={6} className="hero-content">
            <h1 className="hero-title">Unlock the Power of AsiliFlow</h1>
            <p className="hero-subtitle">
              Revolutionizing the way you work with seamless automation and
              intelligent solutions.
            </p>
            <div className="hero-buttons">
              <Button variant="primary" className="me-3">
                Get Started
              </Button>
              <Button variant="outline-light">Learn More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
