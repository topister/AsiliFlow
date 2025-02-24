import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQ.css";

const faqs = [
  {
    question: "Are the sanitary pads organic?",
    answer:
      "Yes, our sanitary pads are made with a GOTS-certified 100% organic top sheet, ensuring a safe and comfortable experience.",
  },
  {
    question: "How long can I wear one pad?",
    answer:
      "It depends on your flow, but we recommend changing your pad every 4 to 6 hours for hygiene and comfort.",
  },
  {
    question: "Are these pads suitable for sensitive skin?",
    answer:
      "Absolutely! Our pads are hypoallergenic, free from fragrances and harsh chemicals, making them perfect for sensitive skin.",
  },
  {
    question: "Do you offer subscription services?",
    answer:
      "Yes! You can subscribe to receive your favorite pads regularly at a discounted price. Check our website for more details.",
  },
  {
    question: "Where can I buy your sanitary products?",
    answer:
      "You can purchase our products directly from our website or at select retail stores near you.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <Container>
        <h2 className="section-title">FAQs</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${openIndex === index ? "open" : ""}`}
                >
                  <div
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h5>{faq.question}</h5>
                    {openIndex === index ? (
                      <FaMinus className="faq-icon" />
                    ) : (
                      <FaPlus className="faq-icon" />
                    )}
                  </div>
                  {openIndex === index && (
                    <p className="faq-answer">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;
