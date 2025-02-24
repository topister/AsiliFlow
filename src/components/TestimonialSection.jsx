import { Container, Row, Col, Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./TestimonialSection.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// Sample Testimonials Data
const testimonials = [
  {
    name: "Alice Mwangi",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    review:
      "These pads are amazing! So soft and comfortable. Finally, a product that feels natural and safe!",
    rating: 5,
  },
  {
    name: "Jane Otieno",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
      "I love how absorbent these are. No leaks, even on heavy days. Definitely recommend!",
    rating: 4.5,
  },
  {
    name: "Lilian Kamau",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    review:
      "Super comfortable and eco-friendly! I feel good using a product that is both effective and sustainable.",
    rating: 5,
  },
  {
    name: "Ann Wanjiru",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    review:
      "Absolutely love these pads. Soft, breathable, and perfect for overnight use!",
    rating: 4.5,
  },
  {
    name: "Mercy Kilonzo",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    review:
      "Best purchase ever! No irritation, no discomfort. Will be buying again.",
    rating: 5,
  },
  {
    name: "Faith Kimani",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    review: "Highly recommend! Super absorbent and feels really soft.",
    rating: 4,
  },
];

const TestimonialSection = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // Dynamically adjust the number of visible testimonials based on screen width
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1); // Mobile: 1 card
      } else if (window.innerWidth < 992) {
        setItemsPerSlide(2); // Tablet: 2 cards
      } else {
        setItemsPerSlide(3); // Desktop: 3 cards
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Group testimonials dynamically
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += itemsPerSlide) {
    groupedTestimonials.push(testimonials.slice(i, i + itemsPerSlide));
  }

  return (
    <section className="testimonial-section">
      <Container>
        <h2 className="section-title">What Our Customers Say</h2>
        <Carousel indicators={false} interval={5000}>
          {groupedTestimonials.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {group.map((testimonial, idx) => (
                  <Col
                    md={12 / itemsPerSlide} // Adjust column size dynamically
                    key={idx}
                    className="testimonial-col"
                  >
                    <div className="testimonial-card">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="testimonial-img"
                      />
                      <p className="testimonial-text">{testimonial.review}</p>
                      <h5 className="testimonial-name">{testimonial.name}</h5>
                      <div className="testimonial-rating">
                        {Array.from(
                          { length: Math.floor(testimonial.rating) },
                          (_, i) => (
                            <FaStar key={i} className="star-icon" />
                          )
                        )}
                        {testimonial.rating % 1 !== 0 && (
                          <FaStarHalfAlt className="star-icon" />
                        )}
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default TestimonialSection;
