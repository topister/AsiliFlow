import { useContext } from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";
import CartContext from "../context/CartContext";

const CartModal = () => {
  const { cart, removeFromCart, showCart, toggleCart } =
    useContext(CartContext);

  return (
    <Modal show={showCart} onHide={toggleCart} centered>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleCart}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
