// import Button from "./ui/Button";
// import Card from "./ui/Card";

// export default function Shop() {
//   return (
//     <div className="py-16 px-10">
//       <h2 className="text-3xl font-bold text-center text-green-700">
//         Our Products
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
//         {[
//           { name: "AsiliFlow Light Pack", price: "KES 150 (10 pads)" },
//           { name: "AsiliFlow Heavy Pack", price: "KES 250 (10 pads)" },
//           { name: "AsiliFlow Night Pack", price: "KES 400 (10 pads)" },
//         ].map((product, index) => (
//           <Card key={index} className="p-6 bg-white shadow-md text-center">
//             <h3 className="text-xl font-semibold">{product.name}</h3>
//             <p className="text-gray-600">{product.price}</p>
//             <Button className="mt-4 bg-green-600 text-white">
//               Add to Cart
//             </Button>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Shop.css";
const Shop = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Our Products</h2>
      <div className="row">
        <div className="col-md-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Product 1</Card.Title>
              <Card.Text>Awesome product details.</Card.Text>
              <Button variant="primary" className="btn btn-primary">
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Product 2</Card.Title>
              <Card.Text>Another great product.</Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Product 3</Card.Title>
              <Card.Text>Awesome product details.</Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Product 4</Card.Title>
              <Card.Text>Another great product.</Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Shop;
