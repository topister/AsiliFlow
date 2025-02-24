import PropTypes from "prop-types";

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-md p-6 rounded-lg ${className}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired, // Ensures content inside the card is required
  className: PropTypes.string, // Allows optional className
};

Card.defaultProps = {
  className: "", // Default class if none is provided
};

export default Card;
