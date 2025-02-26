import { useContext } from "react";
import { Container, Button, ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
  } = useContext(CartContext);

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">
          Your cart is empty. <Link to="/shop">Shop now</Link>
        </p>
      ) : (
        <>
          <ListGroup>
            {cart.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                <Link to={`/product/${item.id}`}>
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    className="img-thumbnail"
                    style={{ width: "80px" }}
                  />
                </Link>
                <div>
                  <strong>{item.name}</strong> - {item.price}
                </div>
                <div className="d-flex align-items-center">
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </Button>
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
          <h4 className="text-end mt-3">Total: ${getTotalPrice()}</h4>
        </>
      )}
    </Container>
  );
};

export default Cart;
