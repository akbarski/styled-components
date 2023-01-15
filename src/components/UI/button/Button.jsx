import "./Button.css";

const Button = ({ title, onClick, width, ...rest }) => {
  const btnStyle = {
    width: width,
  };
  return (
    <button style={btnStyle} onClick={onClick} {...rest}>
      {title}
    </button>
  );
};
export default Button;
