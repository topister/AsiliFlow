import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import pad from "../assets/SanitaryPacks/1.png";
import tampon from "../assets/SanitaryPacks/2.png";

const products = [
  {
    id: 1,
    name: "Eco-Friendly Pads",
    price: "$12.99",
    images: [pad, tampon, pad],
    description:
      "High-quality, eco-friendly pads designed for comfort and sustainability.",
  },
  {
    id: 2,
    name: "Organic Tampons",
    price: "$14.99",
    images: [pad, tampon, pad],
    description:
      "Made with 100% organic cotton, providing superior absorbency and protection.",
  },
  {
    id: 3,
    name: "Menstrual Cup",
    price: "$19.99",
    images: [pad, tampon, pad],
    description:
      "A reusable menstrual cup made from medical-grade silicone for long-lasting comfort.",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  if (!product) {
    return <h2 className="text-center">Product Not Found</h2>;
  }

  return (
    <Container className="py-5">
      <Row>
        <Col md={6} className="text-center">
          <Card className="p-3 shadow-sm">
            <Card.Img
              src={selectedImage}
              alt={product.name}
              className="img-fluid"
            />
          </Card>
          <Row className="mt-3">
            {product.images.map((img, index) => (
              <Col key={index} xs={4}>
                <img
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className="img-thumbnail"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedImage(img)}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <h4 className="text-primary">{product.price}</h4>
          <p>{product.description}</p>
          <Button variant="primary">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
