import PropTypes from "prop-types";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-green-600 text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children (text or element) is passed
  className: PropTypes.string, // Class names should be a string
};

Button.defaultProps = {
  className: "", // Default to an empty string if no className is provided
};

export default Button;
