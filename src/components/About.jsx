import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "./Footer";
import {
  FaUsers,
  FaRocket,
  FaLightbulb,
  FaLeaf,
  FaHandHoldingWater,
  FaRecycle,
} from "react-icons/fa";

const About = () => {
  return (
    <>
      <div
        className="bg-light text-dark"
        style={{ overflowX: "hidden", width: "100%" }}
      >
        {/* Hero Section */}
        <div className="text-dark text-center py-5">
          <h1 className="display-4">About Us</h1>
          <p className="lead">
            Committed to Comfort, Absorbency, and Sustainability.
          </p>
        </div>

        {/* Mission Section */}
        <Container className="text-center py-5">
          <h2 className="fw-bold">Our Mission</h2>
          <p className="mt-3 text-muted">
            We prioritize comfort, absorbency, sustainability, and affordability
            while maintaining a biodegradable nature. Our goal is to provide
            safe and eco-friendly sanitary products that support both you and
            the environment.
          </p>
        </Container>

        {/* Vision Section */}
        <div className="bg-light py-5">
          <Container className="text-center">
            <h2 className="fw-bold">Our Vision</h2>
            <p className="mt-3 text-muted">
              To revolutionize menstrual hygiene with eco-friendly solutions
              that empower women and protect the planet.
            </p>
          </Container>
        </div>
        {/* Core Values */}
        <div className="bg-white py-5">
          <Container>
            <h2 className="text-center fw-bold">Our Core Values</h2>
            <Row className="mt-4">
              <Col md={4} className="mb-4">
                <Card className="p-4 shadow-sm text-center">
                  <FaLeaf className="display-4 text-success mx-auto" />
                  <h5 className="mt-3 fw-bold">Sustainability</h5>
                  <p className="text-muted">
                    Our products are biodegradable and eco-friendly.
                  </p>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="p-4 shadow-sm text-center">
                  <FaHandHoldingWater className="display-4 text-info mx-auto" />
                  <h5 className="mt-3 fw-bold">Comfort & Absorbency</h5>
                  <p className="text-muted">
                    Designed for maximum comfort and protection.
                  </p>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="p-4 shadow-sm text-center">
                  <FaRecycle className="display-4 text-warning mx-auto" />
                  <h5 className="mt-3 fw-bold">Affordability</h5>
                  <p className="text-muted">
                    High-quality products at an affordable price.
                  </p>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Team Section */}
        <div className="bg-white py-5">
          <Container>
            <h2 className="text-center fw-bold">Meet Our Team</h2>
            <Row className="mt-4">
              {teamData.map((member, index) => (
                <Col md={4} key={index} className="mb-4">
                  <Card className="shadow-sm text-center">
                    <Card.Img
                      variant="top"
                      src={member.image}
                      className="rounded-circle mx-auto mt-3"
                      style={{ width: "100px", height: "100px" }}
                    />
                    <Card.Body>
                      <Card.Title className="fw-bold">{member.name}</Card.Title>
                      <Card.Text className="text-muted">
                        {member.role}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        {/* Fun Facts */}
        <div className="bg-white py-5">
          <Container className="text-center">
            <h2 className="fw-bold">Fun Facts</h2>
            <Row className="justify-content-center mt-4">
              <Col xs={12} sm={6} md={4} className="mb-3">
                <Card className="p-4 shadow-sm text-center">
                  <FaUsers className="display-4 text-primary mx-auto" />
                  <p className="mt-2">100+ Happy Clients</p>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={4} className="mb-3">
                <Card className="p-4 shadow-sm text-center">
                  <FaRocket className="display-4 text-danger mx-auto" />
                  <p className="mt-2">50+ Successful Projects</p>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={4} className="mb-3">
                <Card className="p-4 shadow-sm text-center">
                  <FaLightbulb className="display-4 text-warning mx-auto" />
                  <p className="mt-2">Infinite Creativity</p>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Sample team data
const teamData = [
  {
    name: "Alice Johnson",
    role: "CEO & Founder",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Mark Spencer",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Creative Director",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

export default About;
