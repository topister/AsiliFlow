import { useContext } from "react";
import { Container, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">
          Your cart is empty. <Link to="/shop">Shop now</Link>
        </p>
      ) : (
        <ListGroup>
          {cart.map((item, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{item.name}</strong> - {item.price}
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default Cart;
