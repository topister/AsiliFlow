import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "./Footer";
const Contact = () => {
  return (
    <>
      <div className="bg-light text-dark">
        {/* Hero Section */}
        <div className="text-dark text-center py-5">
          <h1 className="display-4">Contact Us</h1>
          <p className="lead">
            We’d love to hear from you! Get in touch with us.
          </p>
        </div>

        {/* Contact Form */}
        <Container className="py-5">
          <Row>
            <Col md={6} className="mb-4">
              <h2 className="fw-bold text-center">Send Us a Message</h2>
              <Card className="p-4 shadow-sm">
                <Form>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Type your message here"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Send Message
                  </Button>
                </Form>
              </Card>
            </Col>

            {/* Contact Details */}
            <Col md={6} className="mb-4">
              <h2 className="fw-bold text-center">Contact Information</h2>
              <Card className="p-4 shadow-sm text-center">
                <p>
                  <FaPhone className="text-primary" /> +(254) 740-298-531
                </p>
                <p>
                  <FaEnvelope className="text-danger" /> asiliflow@gmail.com
                </p>
                <p>
                  <FaMapMarkerAlt className="text-success" /> 123 Main Street
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
