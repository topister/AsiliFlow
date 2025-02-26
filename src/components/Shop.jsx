import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";

import pad from "../assets/SanitaryPacks/1.png";
import tampon from "../assets/SanitaryPacks/2.png";

const products = [
  {
    id: 1,
    name: "Eco-Friendly Pads",
    price: "ksh.50.00",
    images: [pad, tampon],
  },
  {
    id: 2,
    name: "Organic Tampons",
    price: "ksh.65.00",
    images: [pad, tampon],
  },
  { id: 3, name: "Menstrual Cup", price: "ksh.75.00", images: [pad, tampon] },
];

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold">Shop Our Products</h2>
      <Row className="mt-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} className="mb-4">
            <Card className="p-3 shadow-sm text-center">
              <Link to={`/product/${product.id}`}>
                <Card.Img
                  variant="top"
                  src={product.images[0]}
                  alt={product.name}
                  className="img-fluid"
                  style={{ cursor: "pointer" }}
                />
              </Link>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Shop;
