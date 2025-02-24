import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useState } from "react";
import "./FeaturedProducts.css";
import pack2 from "../assets/SanitaryPacks/2.png";
import pack3 from "../assets/SanitaryPacks/3.png";
import pack4 from "../assets/SanitaryPacks/4.png";
import pack5 from "../assets/SanitaryPacks/5.png";
import pack6 from "../assets/SanitaryPacks/6.png";
import pack7 from "../assets/SanitaryPacks/7.png";

const FeaturedProducts = () => {
  const [hovered, setHovered] = useState(null);

  const products = [
    {
      id: 1,
      name: "Heavy Pads",
      price: "Kshs. 18.99",
      image: pack3,
      hoverImage: pack2,
    },
    {
      id: 2,
      name: "Regular Pads",
      price: "Kshs. 18.99",
      image: pack4,
      hoverImage: pack5,
    },
    {
      id: 3,
      name: "Plush Liner",
      price: "Kshs. 18.99",
      image: pack6,
      hoverImage: pack7,
    },
  ];

  return (
    <section className="featured-products">
      <Container>
        <Row className="align-items-center">
          {/* Left Section */}
          <Col lg={4} md={6} sm={12} className="text-section">
            <h2 className="feature-heading">
              Softness, Absorbency, and Comfort
            </h2>
            <Button href="/shop" className="shop-now-btn">
              Shop Now
            </Button>
          </Col>

          {/* Right Section: Product Cards */}
          <Col lg={8} md={6} sm={12}>
            <Row className="justify-content-center">
              {products.map((product) => (
                <Col
                  lg={4}
                  md={6}
                  sm={12}
                  key={product.id}
                  className="product-card-container"
                >
                  <Card
                    className="product-card"
                    onMouseEnter={() => setHovered(product.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <Card.Img
                      variant="top"
                      src={
                        hovered === product.id
                          ? product.hoverImage
                          : product.image
                      }
                      className="product-image"
                    />
                    <Card.Body>
                      <Card.Title className="product-title">
                        {product.name}
                      </Card.Title>
                      <Card.Text className="product-price">
                        {product.price}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
